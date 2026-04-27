import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FaBehance, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[var(--color-bg-light)]"
    >
      
      {/* Social Links sidebar (absolute left) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-30">
         <a href="https://www.behance.net/mohitlakharadesigner" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"><FaBehance size={20} /></a>
         <a href="https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"><FaInstagram size={20} /></a>
         <a href="https://www.linkedin.com/in/lakhara-mohit-45260a336" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors"><FaLinkedinIn size={20} /></a>
      </div>

      <div className="relative z-20 max-w-5xl w-full mx-auto px-6 md:px-12 flex flex-col items-center sm:items-start text-center sm:text-left gap-12 pointer-events-none mt-16 md:mt-24">
        
        {/* Main Content Area */}
        <motion.div 
          className="flex flex-col items-center sm:items-start pointer-events-auto w-full"
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
            className="flex flex-col items-center sm:items-start w-full"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
              <div className="inline-block border border-[var(--color-text-main)] rounded-full px-4 py-1.5 mb-8 text-[11px] font-semibold tracking-[0.2em] text-[var(--color-text-main)] uppercase" >
                Mohit Lakhara — Designer
              </div>
            </motion.div>
            
            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="font-display text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter text-[var(--color-text-main)] leading-[0.9] mb-8 uppercase w-full">
              Digital <br />
              <span className="italic font-light">Experiences.</span>
            </motion.h1>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex flex-col md:flex-row items-center sm:items-start md:justify-between w-full gap-8 border-t border-[var(--color-text-main)] pt-8">
               <p className="text-base md:text-xl text-[var(--color-text-main)] font-medium max-w-md leading-relaxed">
                 Graphic Designer & UI/UX Designer from Surat, India. I craft clean, intentional and minimalist designs.
               </p>
               
               <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                 <a href="#work" className="group px-8 py-4 bg-[var(--color-text-main)] text-[var(--color-bg-light)] text-sm font-semibold flex items-center justify-center gap-3 hover:opacity-80 transition-opacity uppercase tracking-wide">
                   View Work
                 </a>
                 <a href="#contact" className="group px-8 py-4 border border-[var(--color-text-main)] text-[var(--color-text-main)] text-sm font-semibold flex items-center justify-center gap-3 hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] transition-colors uppercase tracking-wide">
                   Contact
                 </a>
               </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="mt-12 flex items-center justify-center sm:justify-start gap-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-text-main)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-text-main)]"></span>
              </div>
              <span className="text-sm font-medium text-[var(--color-text-main)] tracking-tight uppercase">Available for freelance projects</span>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}


