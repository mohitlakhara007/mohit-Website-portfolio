import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Featured', href: '#featured' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 transition-all duration-500`}
    >
      <div className={`relative flex items-center justify-between w-full max-w-5xl px-6 py-3 md:py-4 rounded-full transition-all duration-500 ${isScrolled ? 'bg-[#F5F2ED]/80 backdrop-blur-xl shadow-lg border border-black/10' : 'bg-transparent'}`}>
        
        <a href="#home" className="flex flex-col z-50 group no-underline">
          <span className="text-xl font-display font-bold text-[var(--color-text-main)] leading-tight flex items-start">
            Mohit<span className="text-[var(--color-accent)]">*</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 px-8 py-2 rounded-full bg-white/40 shadow-inner border border-white/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                link.active ? 'text-[var(--color-brand)]' : 'text-gray-500 hover:text-[var(--color-text-main)]'
              }`}
            >
              {link.name}
              {link.active && (
                <motion.div layoutId="nav-pill" className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-accent)]" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block relative z-50">
          <a
            href="mailto:mohitlakhara007061@gmail.com"
            className="px-5 py-2.5 rounded-full bg-[var(--color-brand)] text-white text-sm font-semibold hover:bg-[#1a3324] transition-all duration-300 shadow-md flex items-center gap-2 group"
          >
            Let's Talk
            <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
               <ArrowRight size={12} className="text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-[var(--color-text-main)] bg-white/50 rounded-full shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`absolute top-full left-0 right-0 bg-[#F5F2ED] border-b border-black/5 p-6 lg:hidden transition-all duration-300 shadow-xl ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 items-center mb-4 text-center py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                 link.active ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-main)]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:mohitlakhara007061@gmail.com"
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 mt-6 rounded-full bg-[var(--color-brand)] text-white font-medium w-full text-center flex items-center justify-center gap-2"
          >
            Let's Talk <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
