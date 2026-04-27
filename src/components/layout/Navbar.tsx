import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[var(--color-bg-light)] border-b border-[var(--color-text-main)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-row items-center justify-between">
          
          <a href="#home" className="text-xl md:text-2xl font-display font-bold text-[var(--color-text-main)] leading-tight tracking-tighter">
            MOHITDZNR
          </a>

          {/* Desktop Nav - Split into columns */}
          <div className="hidden lg:flex items-start gap-16 xl:gap-24 text-[13px] font-medium tracking-tight uppercase border-l pl-16 border-[var(--color-text-main)]">
             <div className="flex flex-col gap-1.5">
                <a href="#home" className="hover:opacity-50 transition-opacity">Home</a>
                <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
             </div>
             <div className="flex flex-col gap-1.5">
                <a href="#work" className="hover:opacity-50 transition-opacity">Portfolio</a>
                <a href="#featured" className="hover:opacity-50 transition-opacity">Featured</a>
             </div>
             <div className="flex flex-col gap-1.5">
                <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
                <a href="https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Instagram</a>
             </div>
             <div className="flex flex-col gap-1.5">
                <a href="https://www.linkedin.com/in/lakhara-mohit-45260a336" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Linkedin</a>
                <a href="https://www.behance.net/mohitlakharadesigner" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Behance</a>
             </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block relative z-50">
            <a
              href="#contact"
              className="px-6 py-3 bg-[var(--color-text-main)] text-[var(--color-bg-light)] text-[13px] font-medium tracking-wider hover:opacity-80 transition-all flex items-center gap-3 group border border-transparent"
            >
              Lets Talk
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-[var(--color-text-main)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-bg-light)] border-b border-[var(--color-text-main)] overflow-hidden lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-[var(--color-text-main)] uppercase text-sm font-medium tracking-wide">
              <div className="flex flex-col gap-4">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#work" onClick={() => setIsOpen(false)}>Portfolio</a>
                <a href="#featured" onClick={() => setIsOpen(false)}>Featured</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                <a href="https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Instagram</a>
                <a href="https://www.linkedin.com/in/lakhara-mohit-45260a336" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Linkedin</a>
                <a href="https://www.behance.net/mohitlakharadesigner" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Behance</a>
              </div>
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-4 mt-4 bg-[var(--color-text-main)] text-[var(--color-bg-light)] font-medium w-full text-center flex items-center justify-center gap-3 border border-transparent"
              >
                Lets Talk <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
