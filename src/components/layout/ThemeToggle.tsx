import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if body already has dark class (due to another instance)
    if (document.body.classList.contains('dark')) {
        setIsDark(true);
    } else {
        setIsDark(false);
        document.body.classList.remove('dark');
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

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-12 h-12 rounded-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] text-[var(--color-text-main)] flex items-center justify-center shadow-lg transition-colors hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] overflow-hidden ${className}`}
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
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="flex items-center justify-center"
            >
              <Sun size={22} fill="currentColor" strokeWidth={2} />
            </motion.div>
          ) : (
            <Moon size={20} fill="currentColor" strokeWidth={1.5} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
