export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand)] pt-20 pb-10 relative z-10 text-white rounded-t-[3rem] mt-[-2rem]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
           {/* Col 1 */}
           <div>
             <a href="#home" className="flex flex-col z-50 group no-underline text-left mb-6">
               <span className="text-2xl md:text-3xl font-display font-bold text-white leading-tight flex items-start">
                 Mohit Lakhara<span className="text-[var(--color-accent)] text-xl">*</span>
               </span>
               <span className="text-xs text-white/50 font-medium tracking-wide">Graphic & UI/UX Designer</span>
             </a>
             <p className="text-white/60 text-sm leading-relaxed max-w-xs pr-4">
                Designing is how I think. Every project is just me trying to say something clearly — without words.
             </p>
           </div>

           {/* Col 2 */}
           <div>
              <h4 className="font-bold text-base mb-6">Quick Links</h4>
              <ul className="space-y-3">
                 <li><a href="#home" className="text-white/60 text-sm hover:text-white transition-colors">Home</a></li>
                 <li><a href="#about" className="text-white/60 text-sm hover:text-white transition-colors">About</a></li>
                 <li><a href="#work" className="text-white/60 text-sm hover:text-white transition-colors">Portfolio</a></li>
                 <li><a href="#contact" className="text-white/60 text-sm hover:text-white transition-colors">Contact</a></li>
              </ul>
           </div>

           {/* Col 3 */}
           <div>
              <h4 className="font-bold text-base mb-6">Categories</h4>
              <ul className="space-y-3">
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Logofolio</a></li>
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Branding</a></li>
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Social Media</a></li>
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">App Design</a></li>
              </ul>
           </div>

           {/* Col 4 */}
           <div>
              <h4 className="font-bold text-base mb-6">Follow Me</h4>
              <ul className="space-y-3">
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Instagram</a></li>
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">LinkedIn</a></li>
                 <li><a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Behance</a></li>
              </ul>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-white/40 text-xs font-semibold">
          <p>&copy; {new Date().getFullYear()} Mohit Lakhara. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Made with passion <span className="text-[var(--color-accent)] animate-pulse">❤️</span>
          </div>
        </div>
      </div>
      
      {/* Absolute "Open for freelance projects" stamp */}
      <div className="hidden lg:flex absolute right-16 bottom-16 items-center justify-center pointer-events-none opacity-50">
        <div className="w-24 h-24 border border-dashed border-white/30 rounded-full flex flex-col items-center justify-center p-2 text-center rotate-[-15deg]">
           <span className="text-[8px] uppercase tracking-widest text-white">Open For</span>
           <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Freelance</span>
           <span className="text-[8px] uppercase tracking-widest text-white">Projects</span>
        </div>
      </div>
    </footer>
  );
}
