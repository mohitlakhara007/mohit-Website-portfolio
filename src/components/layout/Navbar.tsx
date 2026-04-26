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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4`}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 ${isScrolled ? 'opacity-100 bg-[#F5F2ED]/90 backdrop-blur-md shadow-sm border-b border-black/5' : 'opacity-0'}`} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex flex-col z-50 group no-underline">
          <span className="text-xl md:text-2xl font-display font-bold text-[var(--color-text-main)] leading-tight flex items-start">
            Mohit Lakhara<span className="text-[var(--color-accent)] text-lg">*</span>
          </span>
          <span className="text-[10px] text-gray-500 font-medium tracking-wide">Graphic & UI/UX Designer</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold transition-all duration-300 relative py-2 ${
                link.active ? 'text-[var(--color-text-main)] after:w-full' : 'text-gray-500 hover:text-[var(--color-text-main)] after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-accent)] hover:after:w-full`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block relative z-50">
          <a
            href="mailto:mohitlakhara007061@gmail.com"
            className="px-6 py-2.5 rounded-full bg-[var(--color-brand)] text-white text-sm font-semibold hover:bg-[#1a3324] transition-all duration-300 shadow-sm flex items-center gap-2 group"
          >
            Let's Talk
            <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
               <ArrowRight size={12} className="text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
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
