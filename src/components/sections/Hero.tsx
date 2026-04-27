import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  // 3D Parallax State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]), { damping: 30, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]), { damping: 30, stiffness: 100 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x / width - 0.5);
    mouseY.set(y / height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-dot-pattern"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg-light)]/50 to-[var(--color-bg-light)] pointer-events-none" />
      
      {/* 3D-like Animated Background Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }} 
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-40 blur-[80px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[radial-gradient(circle,var(--color-brand)_0%,transparent_70%)] opacity-30 blur-[100px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,#F5F2ED_0%,transparent_70%)] opacity-20 blur-[120px] z-0 pointer-events-none mix-blend-overlay"
      />
      
      {/* Abstract floating shapes */}
      <motion.div 
        animate={{ y: [0, -40, 0], rotateX: [0, 180, 360], rotateY: [0, 180, 360], rotateZ: [0, 90, 360] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[10%] w-24 h-24 rounded-3xl bg-gradient-to-tr from-[var(--color-brand)] to-[var(--color-accent)] opacity-20 z-0 hidden md:block shadow-[0_0_30px_rgba(0,0,0,0.1)]"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div 
        animate={{ y: [0, 50, 0], rotateX: [360, 180, 0], rotateY: [360, 180, 0], rotateZ: [0, -90, -360] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full border-4 border-[var(--color-accent)]/30 border-dashed z-0 hidden md:block shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, -30, 0], rotateX: [0, 360], rotateY: [0, -360] }} 
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] left-[80%] w-16 h-16 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl z-0 hidden md:block"
        style={{ transformStyle: "preserve-3d", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
      />
      
      {/* Social Links sidebar (absolute left) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-30">
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaBehance size={20} /></a>
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaInstagram size={20} /></a>
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaLinkedinIn size={20} /></a>
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-12 lg:gap-4 pointer-events-none">
        
        {/* Main Content Area */}
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="pt-10 flex flex-col items-center pointer-events-auto"
        >
          <motion.div 
            style={{ transform: "translateZ(80px)" }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
            className="flex flex-col items-center"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
              <div className="inline-block bg-[var(--color-bg-light)] border border-black/10 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-[var(--color-text-main)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform" style={{ transform: "translateZ(100px)" }}>
                HELLO, I'M MOHIT 👋
              </div>
            </motion.div>
            
            <motion.h1 style={{ transform: "translateZ(120px)" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="font-display text-6xl md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tighter text-[var(--color-text-main)] leading-[0.95] mb-6 relative drop-shadow-xl">
              I Design <br className="hidden md:block" />
              <span className="text-[var(--color-accent)] relative inline-block" style={{ transform: "translateZ(30px)" }}>Visual Stories
                 <svg className="absolute -top-6 -right-12 w-10 h-10 text-[var(--color-brand)] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translateZ(50px)" }}>
                    <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor"/>
                 </svg>
              </span> <br className="hidden md:block" />
              That Connect<span className="text-[var(--color-accent)]">.</span>
            </motion.h1>

            <motion.p style={{ transform: "translateZ(90px)" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium mb-10 max-w-xl leading-relaxed text-center opacity-80 drop-shadow-md">
              Graphic Designer & UI/UX Designer from Surat, India.<br/>
              I craft clean, intentional and impactful designs.
            </motion.p>

            <motion.div style={{ transform: "translateZ(140px)" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="#work" className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-brand)] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#152a1d] transition-all shadow-[0_20px_40px_rgba(31,61,43,0.3)] hover:-translate-y-1">
              View My Work
              <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <ArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" size={14} />
              </div>
            </a>
            <a href="#contact" className="group w-full sm:w-auto px-8 py-3.5 rounded-full border border-black/10 text-[var(--color-text-main)] font-semibold flex items-center justify-center gap-3 hover:bg-black/5 transition-all shadow-sm hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
              Start a Project
              <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <ArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" size={14} />
              </div>
            </a>
            </motion.div>

            <motion.div style={{ transform: "translateZ(60px)" }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex items-center justify-center gap-3 drop-shadow-md">
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#70C174] border-2 border-white shadow-sm"></span>
              </div>
              <span className="text-sm font-semibold text-[var(--color-text-main)]">Available for freelance projects</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


