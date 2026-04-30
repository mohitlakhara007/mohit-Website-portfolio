import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLetsTalkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isOpen) setIsOpen(false);
    setIsNavigating(true);
    
    setTimeout(() => {
      window.open("https://wa.me/message/IGYFQLBM4O4GC1", "_blank");
      setTimeout(() => {
        setIsNavigating(false);
      }, 500); 
    }, 1200); 
  };

  return (
    <>
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[var(--color-text-main)] text-[var(--color-bg-light)]"
          >
            <div className="overflow-hidden">
              <motion.div
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter text-center"
              >
                Connecting to WhatsApp
              </motion.div>
            </div>
            
             <div className="overflow-hidden mt-4">
                <motion.div
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                   className="text-[12px] font-bold tracking-[0.2em] uppercase opacity-50"
                >
                  Opening Chat...
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
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
                <Link to="/" className="hover:opacity-50 transition-opacity">Home</Link>
                <Link to="/about" className="hover:opacity-50 transition-opacity">About</Link>
             </div>
             <div className="flex flex-col gap-1.5">
                <Link to="/portfolio" className="hover:opacity-50 transition-opacity">Portfolio</Link>
                <Link to="/#featured" className="hover:opacity-50 transition-opacity">Featured</Link>
             </div>
             <div className="flex flex-col gap-1.5">
                <Link to="/#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
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
              href="https://wa.me/message/IGYFQLBM4O4GC1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLetsTalkClick}
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
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-full left-0 right-0 bg-[var(--color-bg-light)] border-b border-[var(--color-text-main)] overflow-hidden lg:hidden origin-top"
          >
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              className="px-6 py-8 flex flex-col gap-6 text-[var(--color-text-main)] uppercase text-sm font-medium tracking-wide"
            >
              <div className="flex flex-col gap-4 overflow-hidden">
                {[
                  { name: 'Home', href: '/', isExternal: false },
                  { name: 'About', href: '/about', isExternal: false },
                  { name: 'Portfolio', href: '/portfolio', isExternal: false },
                  { name: 'Featured', href: '/#featured', isExternal: false },
                  { name: 'Contact', href: '/#contact', isExternal: false },
                  { name: 'Instagram', href: 'https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', isExternal: true },
                  { name: 'Linkedin', href: 'https://www.linkedin.com/in/lakhara-mohit-45260a336', isExternal: true },
                  { name: 'Behance', href: 'https://www.behance.net/mohitlakharadesigner', isExternal: true }
                ].map((item, index) => (
                  <div key={index} className="overflow-hidden">
                    {item.isExternal ? (
                      <motion.a 
                        variants={{
                          open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
                          closed: { y: "100%", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }
                        }}
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:opacity-50 transition-opacity"
                      >
                        {item.name}
                      </motion.a>
                    ) : (
                      <motion.div
                        variants={{
                          open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
                          closed: { y: "100%", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }
                        }}
                      >
                        <Link 
                          to={item.href} 
                          onClick={() => setIsOpen(false)}
                          className="block hover:opacity-50 transition-opacity"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
              <motion.div 
                variants={{
                  open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
                  closed: { y: 20, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }
                }}
              >
                <a 
                  href="https://wa.me/message/IGYFQLBM4O4GC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLetsTalkClick}
                  className="px-6 py-4 mt-4 bg-[var(--color-text-main)] text-[var(--color-bg-light)] font-medium w-full text-center flex items-center justify-center gap-3 border border-transparent"
                >
                  Lets Talk <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
