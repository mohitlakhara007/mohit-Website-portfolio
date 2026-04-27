import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useRef, useCallback } from 'react';

export default function ScrollPath() {
  const { scrollYProgress } = useScroll();
  const trackRef = useRef<HTMLDivElement>(null);
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleDrag = useCallback((e: React.PointerEvent<HTMLDivElement> | PointerEvent) => {
    if (!trackRef.current) return;
    const { top, height } = trackRef.current.getBoundingClientRect();
    const clientY = 'clientY' in e ? e.clientY : 0;
    
    let progress = (clientY - top) / height;
    progress = Math.max(0, Math.min(1, progress));
    
    // Calculate total scrollable height
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Scroll to the new position
    window.scrollTo({
      top: progress * maxScroll,
      behavior: 'auto'
    });
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleDrag(e);
    
    const pointerMoveHandler = (moveEvent: PointerEvent) => {
      handleDrag(moveEvent);
    };
    
    const pointerUpHandler = (upEvent: PointerEvent) => {
      (upEvent.target as HTMLElement)?.releasePointerCapture(upEvent.pointerId);
      window.removeEventListener('pointermove', pointerMoveHandler);
      window.removeEventListener('pointerup', pointerUpHandler);
    };
    
    window.addEventListener('pointermove', pointerMoveHandler);
    window.addEventListener('pointerup', pointerUpHandler);
  };

  return (
    <div 
      ref={trackRef}
      className="fixed top-0 bottom-0 left-[4%] md:left-[8%] lg:left-[5%] w-[20px] -ml-[9px] z-30 hidden sm:block cursor-ns-resize group"
      onPointerDown={handlePointerDown}
      style={{ touchAction: 'none' }}
    >
      {/* Background Track Wrapper for Visual alignment */}
      <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px]">
        <div className="absolute inset-0 border-l-2 border-dashed border-black/10 transition-colors group-hover:border-black/30" />
        
        {/* Animated Fill Line */}
        <motion.div 
          className="absolute inset-0 bg-[var(--color-brand)] origin-top shadow-[0_0_10px_rgba(31,61,43,0.3)] transition-colors group-hover:bg-[#1a3324]"
          style={{ scaleY }}
        />
        
        {/* Location Pin */}
        <motion.div 
          className="absolute left-1/2 -ml-3.5 w-7 h-7 bg-[var(--color-brand)] rounded-full flex items-center justify-center -mt-3.5 shadow-lg shadow-[var(--color-brand)]/20 transition-transform group-hover:scale-125 group-hover:bg-[#1a3324]"
          style={{ top: useTransform(scaleY, [0, 1], ['0%', '100%']) }}
        >
          <MapPin size={14} className="text-[var(--color-accent)] relative z-10 pointer-events-none" />
          <div className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-full animate-ping opacity-60 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
