import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent"
    >
      
      {/* 3D-like Morphing Glass Blobs (Static for performance) */}
      <div className="absolute top-[20%] left-[10%] w-48 h-48 water-drop z-0 hidden md:block rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-64 h-64 water-drop z-0 hidden md:block opacity-80 rounded-full" />
      <div className="absolute top-[60%] left-[70%] w-32 h-32 water-drop z-0 hidden md:block opacity-60 rounded-full" />
      
      {/* Social Links sidebar (absolute left) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-30">
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaBehance size={20} /></a>
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaInstagram size={20} /></a>
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaLinkedinIn size={20} /></a>
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-12 lg:gap-4 pointer-events-none">
        
        {/* Main Content Area */}
        <motion.div 
          className="pt-10 flex flex-col items-center pointer-events-auto"
        >
          <motion.div 
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
              <div className="inline-block liquid-glass border border-white/40 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-[var(--color-text-main)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform" >
                HELLO, I'M MOHIT 👋
              </div>
            </motion.div>
            
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="font-display text-6xl md:text-[6rem] lg:text-[7.5rem] font-bold tracking-tighter text-[var(--color-text-main)] leading-[0.95] mb-6 relative drop-shadow-xl">
              I Design <br className="hidden md:block" />
              <span className="text-[var(--color-accent)] relative inline-block">Visual Stories
                 <svg className="absolute -top-6 -right-12 w-10 h-10 text-[var(--color-brand)] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5L12 2Z" fill="currentColor"/>
                 </svg>
              </span> <br className="hidden md:block" />
              That Connect<span className="text-[var(--color-accent)]">.</span>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium mb-10 max-w-xl leading-relaxed text-center opacity-80 drop-shadow-md">
              Graphic Designer & UI/UX Designer from Surat, India.<br/>
              I craft clean, intentional and impactful designs.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a href="#work" className="group w-full sm:w-auto px-8 py-3.5 rounded-[20px] bg-black text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              View My Work
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" size={14} />
              </div>
            </a>
            <a href="#contact" className="group w-full sm:w-auto px-8 py-3.5 rounded-[20px] border border-white/40 text-[var(--color-text-main)] font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.06)] liquid-glass">
              Start a Project
              <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center">
                <ArrowRight className="text-[var(--color-text-main)] group-hover:translate-x-0.5 transition-transform" size={14} />
              </div>
            </a>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex items-center justify-center gap-3 drop-shadow-md bg-white/60 dark:bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-black/5 dark:border-white/10">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#34C759] border-2 border-white shadow-sm"></span>
              </div>
              <span className="text-sm font-semibold text-[var(--color-text-main)] opacity-80 tracking-tight">Available for freelance projects</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


