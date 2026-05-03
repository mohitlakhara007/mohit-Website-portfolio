import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Volume2, VolumeX } from 'lucide-react';

const ReelCard = ({ src, title, instagramUrl }: { src?: string, title: string, instagramUrl?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  if (instagramUrl) {
    // Extract the post ID for embedding. URL might be /reel/ID or /p/ID
    const match = instagramUrl.match(/(?:reel|p)\/([a-zA-Z0-9_-]+)/);
    const id = match ? match[1] : '';
    const embedUrl = `https://www.instagram.com/p/${id}/embed`;

    return (
      <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl bg-[var(--color-bg-main)] border border-[var(--color-text-main)]/10">
        {id ? (
          <iframe 
            src={embedUrl} 
            className="w-full h-full border-none"
            scrolling="no"
            allow="encrypted-media"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[var(--color-text-main)]/50">
            <p>Invalid Instagram Link</p>
          </div>
        )}
      </div>
    );
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl bg-[var(--color-text-muted)]/10 border border-[var(--color-text-main)]/10 group cursor-pointer"
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
      />
      
      {/* Overlay & Controls */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 transition-opacity duration-300`}>
        
        {/* Play Button Overlay (when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <Play className="text-white ml-2" fill="currentColor" size={28} />
            </div>
          </div>
        )}

        <div className="flex justify-between items-end relative z-10">
          <div className="text-white">
            <h3 className="font-semibold text-lg drop-shadow-md leading-tight mb-1">{title}</h3>
            <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Motion Reel</p>
          </div>
          
          <button 
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

      </div>
    </div>
  );
};

export default function MotionGraphicsSection() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col justify-center relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter">
            Motion <span className="font-bold italic">Graphics.</span>
          </h2>
          <p className="text-[var(--color-text-main)] mt-4 md:mt-6 opacity-70 text-sm md:text-base uppercase tracking-[0.2em]">
            Dynamic Stories & Reels
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Reel 1 */}
          <ReelCard 
            instagramUrl="https://www.instagram.com/reel/DX15H5axkck/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            title="Creative Direction" 
          />
          
          {/* Reel 2 */}
          <ReelCard 
            instagramUrl="https://www.instagram.com/reel/DXv8LiLNl8k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            title="Visual Effects" 
          />

          {/* Reel 3 */}
          <ReelCard 
            instagramUrl="https://www.instagram.com/reel/DXb9jEBkU0J/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
            title="Dynamic Typography" 
          />
        </div>
        <p className="text-center text-sm opacity-50 mt-8">(Click on videos to play/pause. Change the video source links as needed.)</p>
      </motion.div>
    </section>
  );
}
