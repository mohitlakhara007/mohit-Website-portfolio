import { motion } from 'motion/react';

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1] bg-[var(--color-bg-light)] transition-colors duration-500">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0]
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[#32ADE6] to-[#007AFF] opacity-50 blur-[120px] rounded-full"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0]
        }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-5%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-gradient-to-tr from-[#FF2D55] to-[#5856D6] opacity-40 blur-[150px] rounded-full"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }} 
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#34C759] to-[#32ADE6] opacity-30 blur-[130px] rounded-full mix-blend-overlay"
      />
    </div>
  );
}
