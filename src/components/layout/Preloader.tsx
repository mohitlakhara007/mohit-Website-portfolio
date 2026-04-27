import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void; key?: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-text-main)] text-[var(--color-bg-light)]"
    >
      <div className="overflow-hidden flex items-center gap-4">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter"
        >
          MOHITDZNR
        </motion.h1>
      </div>
      
      <div className="overflow-hidden mt-2">
         <motion.p
           initial={{ y: "100%" }}
           animate={{ y: 0 }}
           transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
           className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-50"
         >
           MOHITDZNR © {new Date().getFullYear()}
         </motion.p>
      </div>
    </motion.div>
  );
}
