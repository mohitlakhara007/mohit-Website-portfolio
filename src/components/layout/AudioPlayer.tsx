import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const EqualizerIcon = ({ isPlaying }: { isPlaying: boolean }) => {
  const heights = [
    ["25%", "60%", "25%"],
    ["40%", "90%", "40%"],
    ["50%", "100%", "50%"],
    ["40%", "90%", "40%"],
    ["25%", "60%", "25%"],
  ];
  
  return (
    <div className="flex items-center justify-center gap-[3px] h-5 w-5">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{ height: isPlaying ? heights[i] : "25%" }}
          transition={{
            repeat: isPlaying ? Infinity : 0,
            duration: 0.6,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          className="w-[2px] bg-current rounded-full"
        />
      ))}
    </div>
  );
};

export default function AudioPlayer({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={className}>
      <audio 
        ref={audioRef}
        loop 
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" 
      />
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] text-[var(--color-text-main)] flex items-center justify-center shadow-lg transition-colors hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] overflow-hidden"
        aria-label="Toggle Music"
      >
        <EqualizerIcon isPlaying={isPlaying} />
      </motion.button>
    </div>
  );
}
