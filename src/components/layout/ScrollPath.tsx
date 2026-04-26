import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 bottom-0 left-[4%] md:left-[8%] lg:left-[5%] w-[2px] z-30 pointer-events-none hidden sm:block">
      {/* Background Track (dashed) */}
      <div className="absolute inset-0 border-l-2 border-dashed border-black/10" />
      
      {/* Animated Fill Line */}
      <motion.div 
        className="absolute inset-0 bg-[var(--color-brand)] origin-top shadow-[0_0_10px_rgba(31,61,43,0.3)]"
        style={{ scaleY }}
      />
      
      {/* Location Pin */}
      <motion.div 
        className="absolute left-1/2 -ml-3.5 w-7 h-7 bg-[var(--color-brand)] rounded-full flex items-center justify-center -mt-3.5 shadow-lg group"
        style={{ top: useTransform(scaleY, [0, 1], ['0%', '100%']) }}
      >
        <MapPin size={14} className="text-[var(--color-accent)] relative z-10" />
        <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-full animate-ping opacity-60" />
      </motion.div>
    </div>
  );
}
