import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const brandingItems = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Logomark & Typography',
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80',
    description: 'Visual systems that scale across all touchpoints and mediums.'
  },
  {
    id: 2,
    title: 'Packaging Design',
    category: 'Retail',
    src: 'https://images.unsplash.com/photo-1628527304948-0615f6176a95?auto=format&fit=crop&w=1920&q=80',
    description: 'Tactile experiences that tell a story before the product is even seen.'
  },
  {
    id: 3,
    title: 'Stationery',
    category: 'Print Media',
    src: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1920&q=80',
    description: 'Premium print collateral for meaningful physical interactions.'
  },
  {
    id: 4,
    title: 'Color Palette & Assets',
    category: 'Brand Guidelines',
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80',
    description: 'Comprehensive guidelines bridging strategy with visual expression.'
  },
  {
    id: 5,
    title: 'Social Media Kit',
    category: 'Digital Assets',
    src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1920&q=80',
    description: 'Cohesive templates and assets for consistent digital presence.'
  },
  {
    id: 6,
    title: 'Merchandise',
    category: 'Physical Goods',
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1920&q=80',
    description: 'Branded merchandise that turns customers into ambassadors.'
  }
];

export default function BrandingSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="w-full py-12 md:py-24 flex flex-col justify-center min-h-[80vh] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter">
            Brand <span className="font-bold italic">Identity.</span>
          </h2>
          <p className="text-[var(--color-text-main)] mt-4 md:mt-6 opacity-70 text-sm md:text-base uppercase tracking-[0.2em]">
            Interactive 16:9 Canvas Gallery
          </p>
        </motion.div>

        {/* Desktop Expanding Accordion */}
        <div className="hidden md:flex w-full h-[60vh] gap-4">
          {brandingItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative rounded-3xl overflow-hidden cursor-pointer h-full group bg-[var(--color-bg-main)] shadow-xl shadow-[var(--color-text-main)]/5 border border-[var(--color-text-main)]/10"
              animate={{ flex: hoveredIndex === index ? 4 : 1 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              tabIndex={0}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={item.src} 
                  alt={item.title}
                  loading="lazy"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                style={{ opacity: hoveredIndex === index ? 1 : 0.4 }}
              />

              {/* Vertical Title (when collapsed) */}
              <motion.div 
                className="absolute inset-x-0 bottom-8 flex justify-center uppercase tracking-[0.3em] text-white/50 whitespace-nowrap -rotate-90 origin-center text-sm font-semibold pointer-events-none"
                animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.div>

              {/* Content (when expanded) */}
              <motion.div 
                className="absolute inset-0 p-8 flex flex-col justify-end"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, delay: hoveredIndex === index ? 0.2 : 0 }}
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-white/80" />
                    <span className="text-white/80 text-xs font-bold tracking-widest uppercase">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 max-w-md hidden md:block text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View (Stacked) */}
        <div className="flex md:hidden flex-col gap-6">
          {brandingItems.map((item) => (
             <div key={item.id} className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl shadow-[var(--color-text-main)]/5 border border-[var(--color-text-main)]/10">
               <img src={item.src} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
               <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-white/80 text-[10px] font-bold tracking-widest uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-xs">
                    {item.description}
                  </p>
               </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
