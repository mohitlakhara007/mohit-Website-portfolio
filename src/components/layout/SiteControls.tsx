import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';

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
        className="w-12 h-12 rounded-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] text-[var(--color-text-main)] flex items-center justify-center shadow-lg transition-colors hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)]"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] text-[var(--color-text-main)] flex items-center justify-center shadow-lg transition-colors hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)]"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
}
