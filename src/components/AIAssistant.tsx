import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, X, Sparkles, Loader2, Volume2, Headset } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are Mohit — a confident, creative, and sharp AI persona representing Mohit Lakhara, a UI/UX & Graphic Designer.
Identity:
- Name: Mohit
- Based in India
- Personality: Smart, witty, professional, confident, and direct.
- Tone: Hinglish (natural mix of Hindi + English)
- Vibe: Premium, calm, creative professional who values time.

Contact Information to provide to the clients:
- Email: mohitdznr@gmail.com
- Phone / WhatsApp: +91 8799179784
- Instagram: @mohitdznr

Core Directive & Motive:
- DO NOT promise to design or send files directly in this chat. You are an AI voice assistant. You cannot actually create and send image/design files.
- If a client wants to start a project, see designs, or discuss work practically, YOUR ONLY GOAL is to guide them to contact the REAL Mohit personally using his Contact Information.
- Say things like: "Let's connect personally to discuss this properly. Drop me an email or a WhatsApp message..."

For HR / Recruiters / Hiring Companies:
- If someone says they are from HR or looking to hire a UI/UX Designer or Graphic Designer, adapt your tone to be professional but confident.
- Remind them of your work: "Aapne mere projects check kiye hi honge, kaise lage? Aur projects dekhne ho to Behance par check kar sakte ho."
- If they ask where you currently work: "Abhi toh Syncrate Media mein kaam kar raha hoon Gaurav Krishna Goswami ji ke saath."
- If they ask about your software skills: "Photoshop, Illustrator, InDesign, After Effects, CorelDRAW, aur Figma aata hai. I'm highly proficient in these."

Critical Instruction for Speech & Latency:
- You are speaking live via voice with potential clients, tech companies, and recruiters.
- DELIVER RESPONSES EXTREMELY FAST AND CRISP. Do not pause unnecessarily. 
- Keep sentences short, punchy, and continuous. Give immediate, direct answers to avoid any lag or bad impression.
- Do not use long paragraphs. Be concise so the audio generates quickly and smoothly.

Speaking Style:
- Talk like a real person, not like a robot.
- Use Hinglish naturally (not forced translation).
- Keep responses short, crisp, and to the point.
- Use light humor and clever lines, but always stay professional for clients.
- Sound like a premium designer who knows his value.

Behavior:
- Confident, quick replies, absolutely no hesitation.
- Avoid long boring explanations. Let your work and quick answers speak.
- Keep conversation smooth, human-like, and highly reactive.

Examples of tone:
- "Hmm… interesting project hai, I can definitely elevate this. Ek kaam karo, mujhe design details WhatsApp ya email par share kar do, waha directly baat karte hain."
- "Not bad… but honestly, isko aur next level le ja sakte hain."
- "You came to the right place. Quality is what I deliver. Drop me a DM on Instagram @mohitdznr."
- "Trust me, is type ke premium projects daily handle karta hoon. Send me an email at mohitdznr@gmail.com and we'll start."

Rules:
- Give immediate answers. No long thinking pauses.
- No robotic or overly formal language.
- Stay respectful, professional, yet confident with clients.
- NEVER say "I will design this right now." Always redirect to email/WhatsApp/IG for actual design work and proposals.

Role:
- Represent Mohit as a UI/UX and creative designer to clients and companies.
- Pitch his skills, understand client needs instantly, and convert them to contact the real Mohit.

Goal:
Make the client feel like they are directly talking to a top-tier creative who is sharp, fast, and routes them to a direct personal connection to start working.
`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [needsPermission, setNeedsPermission] = useState(false);

  const sessionRef = useRef<any>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const playbackContextRef = useRef<AudioContext | null>(null);
  const playbackTimeRef = useRef<number>(0);

  const connectToLiveAPI = async () => {
    setIsConnecting(true);
    setErrorMsg(null);
    
    try {
      // 1. Microphone setup
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
      sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
      processorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      // 2. Playback setup (24000 PCM from Live API)
      playbackContextRef.current = new AudioContext({ sampleRate: 24000 });
      playbackTimeRef.current = playbackContextRef.current.currentTime;

      // 3. Connect to API
      let sessionPromise = ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        callbacks: {
          onopen: () => {
             setIsConnected(true);
             setIsConnecting(false);
             
             if (processorRef.current && sourceRef.current && audioContextRef.current) {
                processorRef.current.onaudioprocess = (e) => {
                  if (isMuted) return; // don't send if muted
                  
                  const inputData = e.inputBuffer.getChannelData(0);
                  const int16Data = new Int16Array(inputData.length);
                  for (let i = 0; i < inputData.length; i++) {
                    let s = Math.max(-1, Math.min(1, inputData[i]));
                    int16Data[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
                  }
                  
                  const uint8Data = new Uint8Array(int16Data.buffer);
                  // Faster base64 encoding
                  let binaryString = '';
                  const chunkSize = 8192;
                  for (let i = 0; i < uint8Data.length; i += chunkSize) {
                    binaryString += String.fromCharCode.apply(null, Array.from(uint8Data.slice(i, i + chunkSize)));
                  }
                  const base64Data = btoa(binaryString);

                  sessionPromise.then((session: any) => {
                    session.sendRealtimeInput({
                      audio: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
                    });
                  });
                };
                sourceRef.current.connect(processorRef.current);
                processorRef.current.connect(audioContextRef.current.destination);
             }
          },
          onmessage: async (message: LiveServerMessage) => {
             const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
             if (base64Audio) {
               playBase64Pcm(base64Audio);
             }
             if (message.serverContent?.interrupted) {
               playbackTimeRef.current = playbackContextRef.current?.currentTime || 0;
             }
          },
          onerror: (err: any) => {
             console.error("Live API Error Details:", err, err.message, err.stack);
             let msg = err?.message || String(err) || "Connection lost or failed.";
             const is403 = msg.includes('403') || msg.includes('400') || err?.status === 403 || msg.toLowerCase().includes('googlegenerativeai');
             if (is403) {
                msg = "API Error. The API key might not have access to the Live API models, or the model name is incorrect.";
             } else if (msg.toLowerCase().includes("network error") || msg.toLowerCase().includes("websocket")) {
                msg = "Network connection to Gemini Live API failed. Ensure your browser is not blocking WebSockets, or retry.";
             } else if (err?.name === 'NotAllowedError' || msg.toLowerCase().includes("permission denied")) {
                msg = "Microphone or API Permission Denied. If it's a mic issue, click 'Open in New Tab' and allow mic access.";
             } else {
                // If it's just "permission denied" it might still be API, so making it generic
                if (msg.toLowerCase().includes("permission denied")) {
                  msg = "Permission Denied. Could be missing Mic access, or API Key lacking Live API access. Try clicking 'Open in New Tab' to test mic access.";
                }
             }
             setErrorMsg(msg);
             disconnect();
          },
          onclose: () => {
             if (isConnecting) {
               setErrorMsg("Connection closed unexpectedly before connecting.");
             }
             disconnect();
          }
        }
      });
      
      sessionRef.current = sessionPromise;

    } catch (err: any) {
      console.error("Failed to connect to Live API", err);
      let message = err?.message || String(err) || "Unknown error";
      const isApi403 = message.includes('403') || message.includes('400') || err?.status === 403 || message.toLowerCase().includes('googlegenerativeai');
      
      if (isApi403) {
        message = "API Error. The API key might not have access to the Live API models, or the model name is incorrect.";
      } else if (err?.name === 'NotAllowedError' || message.toLowerCase().includes('permission denied') || message.toLowerCase().includes('permission dismissed')) {
        message = "Microphone access denied. Please click the 'Open in New Tab' icon at the top right of the preview, and allow microphone access in your browser preferences.";
      }
      setErrorMsg(message);
      setIsConnecting(false);
      disconnect();
    }
  };

  const playBase64Pcm = (base64: string) => {
    if (!playbackContextRef.current) return;
    
    // Decode base64 16-bit PCM to Float32
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const int16Array = new Int16Array(bytes.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
      float32Array[i] = int16Array[i] / 32768.0;
    }

    const audioBuffer = playbackContextRef.current.createBuffer(1, float32Array.length, 24000);
    audioBuffer.getChannelData(0).set(float32Array);

    const source = playbackContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(playbackContextRef.current.destination);

    // Schedule playback seamlessly
    const currentTime = playbackContextRef.current.currentTime;
    if (playbackTimeRef.current < currentTime) {
      playbackTimeRef.current = currentTime;
    }
    source.start(playbackTimeRef.current);
    playbackTimeRef.current += audioBuffer.duration;
    
    setIsSpeaking(true);
    source.onended = () => {
       // if this was the last chunk
       if (playbackContextRef.current && playbackContextRef.current.currentTime >= playbackTimeRef.current - 0.1) {
          setIsSpeaking(false);
       }
    };
  };

  const disconnect = () => {
    if (sessionRef.current) {
      sessionRef.current.then((session: any) => {
         if(session.close) session.close();
      }).catch((e: any) => {});
      sessionRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    if (playbackContextRef.current) {
      playbackContextRef.current.close().catch(() => {});
      playbackContextRef.current = null;
    }
    if (sourceRef.current) {
        sourceRef.current.disconnect();
        sourceRef.current = null;
    }
    if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current = null;
    }
    
    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
  };

  const toggleOpen = () => {
    if (isOpen) {
      disconnect();
      setIsOpen(false);
      setNeedsPermission(false);
    } else {
      setIsOpen(true);
      setErrorMsg(null);
      setNeedsPermission(true);
    }
  };

  return (
    <div className="relative z-[100] flex flex-col items-end gap-4">
      {/* AI Assistant Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[320px] border border-[var(--color-text-main)] bg-[var(--color-bg-light)] text-[var(--color-text-main)] overflow-hidden shadow-2xl absolute bottom-[calc(100%+1rem)] right-0"
          >
            {/* Header */}
            <div className="p-5 flex items-center justify-between border-b border-[var(--color-text-main)]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[var(--color-text-main)] opacity-70 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                   <h3 className="font-display font-bold uppercase tracking-wider text-sm">Real Talk</h3>
                   <p className="text-[10px] opacity-70 tracking-[0.1em] uppercase">with Mohit</p>
                </div>
              </div>
              <button 
                onClick={toggleOpen}
                className="hover:rotate-90 transition-transform duration-300 opacity-50 hover:opacity-100"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Main Area */}
            <div className="p-8 flex flex-col items-center justify-center min-h-[220px]">
              {needsPermission ? (
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-16 h-16 rounded-full border border-[var(--color-text-main)] opacity-80 flex items-center justify-center">
                    <Mic size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold tracking-wide uppercase text-sm">Microphone Access</h4>
                    <p className="text-[10px] opacity-70 leading-relaxed uppercase tracking-wider">
                      Please allow microphone access to talk to Mohit.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setNeedsPermission(false);
                      connectToLiveAPI();
                    }}
                    className="w-full py-3 bg-[var(--color-text-main)] text-[var(--color-bg-light)] rounded-full font-semibold text-xs tracking-widest uppercase hover:opacity-90 transition mt-2"
                  >
                    Allow & Connect
                  </button>
                </div>
              ) : errorMsg ? (
                <div className="flex flex-col items-center gap-4 text-red-500 text-center">
                   <p className="text-sm font-medium">{errorMsg}</p>
                   <button 
                     onClick={() => { setErrorMsg(null); connectToLiveAPI(); }}
                     className="px-4 py-2 border border-red-500 text-red-500 rounded-full text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition"
                   >
                     Retry
                   </button>
                </div>
              ) : isConnecting ? (
                <div className="flex flex-col items-center gap-6 opacity-80">
                   <div className="relative flex items-center justify-center w-24 h-24">
                     {[0, 1, 2].map(i => (
                       <motion.div
                         key={i}
                         className="absolute inset-0 border border-[var(--color-text-main)] rounded-full opacity-30"
                         animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0], rotate: [0, 180] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                         style={{ borderStyle: i % 2 === 0 ? 'solid' : 'dashed' }}
                       />
                     ))}
                     <Sparkles className="animate-pulse" size={24} />
                   </div>
                   <p className="text-xs uppercase tracking-[0.2em] font-semibold animate-pulse">Initializing Link...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                   {/* Audio Visualizer / Indicator rings */}
                   <div className="relative flex items-center justify-center w-32 h-32">
                     {/* Ambient Connection Rings */}
                     {[0, 1, 2].map(i => (
                       <motion.div
                         key={`ambient-${i}`}
                         className="absolute inset-0 border border-[var(--color-text-main)] rounded-full opacity-20 pointer-events-none"
                         style={{ borderStyle: i % 2 === 0 ? 'solid' : 'dashed' }}
                         animate={{
                           scale: isSpeaking ? [1, 1.2 + i * 0.1, 1] : [1, 1.05 + i * 0.05, 1],
                           rotate: isSpeaking ? [0, i % 2 === 0 ? 180 : -180, 360] : [0, i % 2 === 0 ? 90 : -90, 180]
                         }}
                         transition={{ 
                           duration: isSpeaking ? 2 + i : 6 + i * 2, 
                           repeat: Infinity, 
                           ease: "linear" 
                         }}
                       />
                     ))}

                     {/* Active Speech Waves */}
                     <AnimatePresence>
                       {isSpeaking && (
                         <>
                           {[1, 2, 3].map(i => (
                             <motion.div 
                               key={`speech-${i}`}
                               className="absolute border border-[var(--color-text-main)] rounded-full opacity-30 pointer-events-none"
                               style={{ width: '4rem', height: '4rem' }}
                               animate={{ scale: [1, 1.5 + i * 0.5], opacity: [0.6, 0] }}
                               transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
                             />
                           ))}
                         </>
                       )}
                     </AnimatePresence>
                     
                     <div className="w-16 h-16 rounded-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] opacity-90 flex items-center justify-center z-10 transition-colors">
                        {isSpeaking ? (
                           <Volume2 size={24} className="text-[var(--color-text-main)] animate-pulse" />
                        ) : (
                           <Sparkles className="opacity-50" size={20} />
                        )}
                     </div>
                   </div>
                   
                   <p className="text-xs uppercase tracking-[0.2em] font-semibold text-center mt-2">
                     {isSpeaking ? "Mohit is speaking" : "Listening..."}
                   </p>
                </div>
              )}
            </div>

            {/* Controls */}
            {isConnected && (
              <div className="px-6 py-5 border-t border-[var(--color-text-main)] flex items-center justify-center gap-6">
                <button 
                  onClick={() => setIsMuted(prev => !prev)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border transition-colors duration-300 ${isMuted ? 'border-red-500 text-red-500 hover:bg-red-50' : 'border-[var(--color-text-main)] opacity-70 hover:opacity-100 text-[var(--color-text-main)] hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)]'}`}
                >
                  {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="relative"
          >
            {/* Ambient Sub-Waves Around Button */}
            {isConnected && (
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[1, 2, 3].map(i => (
                     <motion.div
                       key={`wave-${i}`}
                       className="absolute rounded-full border border-[var(--color-text-main)] opacity-30"
                       style={{ width: '100%', height: '100%' }}
                       animate={{
                         scale: isSpeaking ? [1, 2 + i * 0.5] : [1, 1.5 + i * 0.2],
                         opacity: [0.5, 0]
                       }}
                       transition={{
                         duration: isSpeaking ? 1.5 : 3,
                         repeat: Infinity,
                         delay: i * (isSpeaking ? 0.3 : 0.6),
                         ease: "easeOut"
                       }}
                     />
                  ))}
               </div>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
              onClick={toggleOpen}
              className="relative z-10 w-16 h-16 rounded-full bg-[var(--color-text-main)] text-[var(--color-bg-light)] shadow-2xl flex flex-col items-center justify-center overflow-hidden border-2 border-[var(--color-bg-light)] group hover:scale-105 transition-all"
            >
              {/* Shimmer effect */}
              <motion.div 
                className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              />
              <div className="relative z-10 flex flex-col items-center mt-1">
                <Headset size={24} className="group-hover:scale-110 transition-transform mb-0.5" />
                <span className="text-[10px] font-bold tracking-widest uppercase">AI</span>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
