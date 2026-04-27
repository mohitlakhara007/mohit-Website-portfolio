import { motion, animate, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 2.5,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (latest) => setProgress(Math.round(latest)),
      onComplete: () => {
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    });

    return () => animation.stop();
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 bg-[var(--color-text-main)] text-[var(--color-bg-light)] overflow-hidden"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start w-full text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] font-mono">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Loading Experience
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          {progress}%
        </motion.div>
      </div>

      {/* Middle Section: Big Typo */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-center"
        >
          <span className="text-[15vw] md:text-[8vw] font-display font-black leading-none tracking-tighter uppercase block text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
            MOHITDZNR
          </span>
          <motion.span 
            className="text-[15vw] md:text-[8vw] font-display font-black leading-none tracking-tighter uppercase block absolute top-0 left-0 w-full overflow-hidden whitespace-nowrap text-[var(--color-bg-light)]"
            initial={{ clipPath: "polygon(0 0, 0 100%, 0% 100%, 0 0)" }}
            animate={{ clipPath: `polygon(0 0, 0 100%, ${progress}% 100%, ${progress}% 0)` }}
            transition={{ duration: 0.1 }}
          >
            MOHITDZNR
          </motion.span>
        </motion.div>

        {/* Dynamic Changing Text */}
        <div className="absolute bottom-1/4 translate-y-12 h-6 overflow-hidden">
          <motion.div
            animate={{ y: `-${Math.floor(progress / 25) * 24}px` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col text-[11px] font-bold tracking-[0.3em] uppercase opacity-50"
          >
            <span className="h-6 flex items-center justify-center">Initializing...</span>
            <span className="h-6 flex items-center justify-center">Loading Assets...</span>
            <span className="h-6 flex items-center justify-center">Compiling Design...</span>
            <span className="h-6 flex items-center justify-center">Crafting Experience...</span>
            <span className="h-6 flex items-center justify-center">Ready.</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
        <div className="w-1/2 md:w-1/3">
          <div className="h-[2px] w-full bg-white/20 relative rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          MOHIT LAKHARA © {new Date().getFullYear()}
        </motion.div>
      </div>

    </motion.div>
  );
}
