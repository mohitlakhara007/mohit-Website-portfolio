import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, PenTool, Star, Instagram, PlaySquare, Package, Printer, Smartphone, Monitor } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const categories = [
  { name: "Logofolio", icon: PenTool },
  { name: "Branding", icon: Star },
  { name: "Social Media", icon: Instagram },
  { name: "YouTube Thumbnails", icon: PlaySquare },
  { name: "Packaging Design", icon: Package },
  { name: "Print Media", icon: Printer },
  { name: "App Design", icon: Smartphone },
  { name: "Website Design", icon: Monitor },
];

const portfolioData = [
  { id: 1, title: 'Clover Real Estate', category: 'Logofolio', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop', isDark: true },
  { id: 2, title: 'Coffee Cups', category: 'Packaging Design', img: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2670&auto=format&fit=crop', isDark: false },
  { id: 3, title: 'New Arrival Poster', category: 'Social Media', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2662&auto=format&fit=crop', isDark: false },
  { id: 4, title: 'Youtube Thumbnail', category: 'YouTube Thumbnails', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop', isDark: true },
  { id: 5, title: 'Bottle Package', category: 'Packaging Design', img: 'https://images.unsplash.com/photo-1626162987518-4fee109ba4d8?q=80&w=2670&auto=format&fit=crop', isDark: true },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 relative z-10 overflow-hidden bg-[var(--color-bg-light)]">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="inline-block bg-[var(--color-brand-light)] px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-brand)] font-bold tracking-wider shadow-sm uppercase">
             MY PORTFOLIO
          </motion.div>

          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-16 px-2">
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-[var(--color-text-main)] max-w-md leading-[1.1]">
              Work That Speaks For <span className="text-[var(--color-accent)]">Itself.</span>
            </motion.h2>
            
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} className="flex overflow-x-auto hide-scroll gap-3 pb-4 xl:max-w-3xl xl:flex-wrap xl:justify-end">
            {categories.map(cat => {
               const Icon = cat.icon;
               const isActive = activeCategory === cat.name;
               return (
                 <button
                   key={cat.name}
                   onClick={() => setActiveCategory(cat.name)}
                   className={`flex items-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded-full whitespace-nowrap transition-all duration-300 font-semibold border text-sm ${
                     isActive 
                       ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)] shadow-lg translate-y-[-2px]' 
                       : 'bg-white/80 text-[var(--color-text-main)] border-black/10 hover:border-[var(--color-brand)]/50 hover:bg-white hover:text-[var(--color-brand)]'
                   }`}
                 >
                   <Icon size={16} className={isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-brand)]/70'} />
                   {cat.name}
                 </button>
               )
            })}
          </motion.div>
        </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative group/wrapper mt-8">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-black/5 text-[var(--color-brand)] hover:scale-110 hover:bg-[var(--color-brand)] hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
             onClick={() => scroll('right')} 
             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-black/5 text-[var(--color-brand)] hover:scale-110 hover:bg-[var(--color-brand)] hover:text-white transition-all duration-300"
           >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scroll snap-x snap-mandatory py-4 px-2"
          >
            {portfolioData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.id}
                className="relative w-[260px] md:w-[300px] lg:w-[340px] aspect-square rounded-[2rem] overflow-hidden shadow-sm group/card bg-gray-100 snap-center shrink-0 border border-black/5"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                
                {item.category === 'YouTube Thumbnails' && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white w-10 h-8 rounded flex items-center justify-center">
                    <FaYoutube size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.behance.net/mohitlakharadesigner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-brand)] font-bold text-lg hover:text-[var(--color-accent)] transition-colors group">
            View All Projects
            <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
               <ChevronRight className="text-white group-hover:translate-x-0.5 transition-transform" size={14} />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
