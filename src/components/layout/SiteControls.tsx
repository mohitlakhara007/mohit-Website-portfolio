import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

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

export default function SiteControls() {
  const [isDark, setIsDark] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Check initial theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

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
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Ambient Music Player */}
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

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] text-[var(--color-text-main)] flex items-center justify-center shadow-lg transition-colors hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] overflow-hidden"
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "dark" : "light"}
            initial={{ scale: 0.5, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 10 }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Moon size={20} fill="currentColor" strokeWidth={1.5} />
            ) : (
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="flex items-center justify-center"
              >
                <Sun size={22} fill="currentColor" strokeWidth={2} />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
