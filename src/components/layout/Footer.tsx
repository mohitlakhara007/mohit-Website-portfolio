import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 relative z-10 text-white rounded-t-[48px] mt-[-2rem] border-t border-black/10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-[1400px] mx-auto px-6 md:px-12"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
           {/* Col 1 */}
           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
             <a href="#home" className="flex flex-col z-50 group no-underline text-left mb-6">
               <span className="text-2xl md:text-3xl font-display font-bold text-white leading-tight flex items-start tracking-tight">
                 Mohit Lakhara<span className="text-[#007AFF] text-xl ml-0.5">*</span>
               </span>
               <span className="text-xs text-[#EBEBF5]/60 font-medium tracking-wide mt-1">Graphic & UI/UX Designer</span>
             </a>
             <p className="text-[#EBEBF5]/60 text-[15px] leading-relaxed max-w-xs pr-4 font-medium">
                Designing is how I think. Every project is just me trying to say something clearly — without words.
             </p>
           </motion.div>

           {/* Col 2 */}
           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="font-bold text-base mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                 <li><a href="#home" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Home</a></li>
                 <li><a href="#about" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">About</a></li>
                 <li><a href="#work" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Portfolio</a></li>
                 <li><a href="#contact" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Contact</a></li>
              </ul>
           </motion.div>

           {/* Col 3 */}
           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="font-bold text-base mb-6 text-white">Categories</h4>
              <ul className="space-y-3">
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Logofolio</a></li>
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Branding</a></li>
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Social Media</a></li>
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">App Design</a></li>
              </ul>
           </motion.div>

           {/* Col 4 */}
           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="font-bold text-base mb-6 text-white">Follow Me</h4>
              <ul className="space-y-3">
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Instagram</a></li>
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">LinkedIn</a></li>
                 <li><a href="#" className="text-[#EBEBF5]/60 text-[15px] font-medium hover:text-white transition-colors">Behance</a></li>
              </ul>
           </motion.div>
        </div>

        <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[#EBEBF5]/40 text-[13px] font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Mohit Lakhara. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Made with passion <span className="text-[#FF2D55] animate-pulse">❤️</span>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Absolute "Open for freelance projects" stamp */}
      <motion.div 
         initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
         whileInView={{ opacity: 0.5, rotate: -15, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1, delay: 0.5, type: 'spring' }}
         className="hidden lg:flex absolute right-16 bottom-16 items-center justify-center pointer-events-none"
      >
        <div className="w-24 h-24 border border-dashed border-white/30 rounded-full flex flex-col items-center justify-center p-2 text-center">
           <span className="text-[8px] uppercase tracking-widest text-white">Open For</span>
           <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Freelance</span>
           <span className="text-[8px] uppercase tracking-widest text-white">Projects</span>
        </div>
      </motion.div>
    </footer>
  );
}
