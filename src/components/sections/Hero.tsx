import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
      
      {/* Social Links sidebar (absolute left) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-30">
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaBehance size={20} /></a>
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaInstagram size={20} /></a>
         <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center text-gray-800 hover:text-[var(--color-accent)] hover:bg-white hover:shadow-sm transition-all"><FaLinkedinIn size={20} /></a>
      </div>

      <div className="relative z-20 max-w-4xl w-full mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-12 lg:gap-4">
        
        {/* Main Content Area */}
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
          className="pt-10 flex flex-col items-center"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
            <div className="inline-block bg-[var(--color-bg-light)] border border-black/10 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-[var(--color-text-main)] shadow-sm">
              HELLO, I'M MOHIT 👋
            </div>
          </motion.div>
          
          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="font-display text-6xl md:text-[5rem] lg:text-[7rem] font-bold tracking-tight text-[var(--color-text-main)] leading-[1.05] mb-6">
            I Design <br className="hidden md:block" />
            <span className="text-[var(--color-accent)]">Visual Stories</span> <br className="hidden md:block" />
            That Connect<span className="text-[var(--color-accent)]">.</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-lg md:text-xl text-[var(--color-text-main)] font-medium mb-10 max-w-lg leading-relaxed text-center">
            Graphic Designer & UI/UX Designer from Surat, India.<br/>
            I craft clean, intentional and impactful designs.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="#work" className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-brand)] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#152a1d] transition-all shadow-md">
              View My Work
              <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <ArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" size={14} />
              </div>
            </a>
            <a href="#contact" className="group w-full sm:w-auto px-8 py-3.5 rounded-full border border-black/10 text-[var(--color-text-main)] font-semibold flex items-center justify-center gap-3 hover:bg-black/5 transition-all shadow-sm">
              Start a Project
              <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                <ArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" size={14} />
              </div>
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex items-center justify-center gap-3">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#70C174] border-2 border-white shadow-sm"></span>
            </div>
            <span className="text-sm font-semibold text-[var(--color-text-main)]">Available for freelance projects</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


