import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, PenTool, Star, Instagram, PlaySquare, Package, Printer, Smartphone, Monitor, ArrowRight } from 'lucide-react';
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

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  img: string;
  isDark: boolean;
  link?: string;
};

const portfolioData: PortfolioItem[] = [
  { id: 1, title: 'Maharaja Sweets & Namkeen', category: 'Logofolio', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/74887c236017537.Y3JvcCwxMzU5LDEwNjMsMjc5LDEw.jpg', link: 'https://www.behance.net/gallery/236017537/Logo-Presentation-Of-Maharaja-Sweet-Namkeen', isDark: true },
  { id: 2, title: 'Svarah Jewellery', category: 'Branding', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/a954f9238787187.Y3JvcCw5ODEsNzY4LDE3LDA.jpg', link: 'https://www.behance.net/gallery/238787187/Svarah-jewellery-Branding', isDark: false },
  { id: 3, title: 'Social media Post', category: 'Social Media', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/21ec5d235024919.Y3JvcCwxOTIwLDE1MDEsMCwxNTgy.jpg', link: 'https://www.behance.net/gallery/235024919/Creative-Social-Media-Post', isDark: false },
  { id: 4, title: 'Youtube Thumbnail', category: 'YouTube Thumbnails', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/129cfb233310773.Y3JvcCwxMjQ2LDk3NCw2Nyww.jpg', link: 'https://www.behance.net/gallery/233310773/Youtube-Thumbnail-Design', isDark: true },
  { id: 5, title: 'Event Application design', category: 'Application design', img: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/b45b12232041019.Y3JvcCw5ODEsNzY4LDIxLDA.jpg', link: 'https://www.behance.net/gallery/232041019/Event-Managment-Case-Study', isDark: true },
];

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-[50px] md:py-[100px] relative z-10 overflow-hidden bg-[var(--color-bg-light)]">
      
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="inline-block border border-[var(--color-text-main)] px-4 py-1.5 rounded-full mb-8 text-[11px] text-[var(--color-text-main)] font-semibold tracking-[0.2em] uppercase">
             Portfolio
          </motion.div>

          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-16">
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-[var(--color-text-main)] max-w-xl leading-[0.9] tracking-tighter uppercase shrink-0">
              Work That <br />
              <span className="italic font-light">Speaks.</span>
            </motion.h2>
            
            <motion.div 
               variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} 
               className="flex flex-wrap gap-y-3 gap-x-4 lg:gap-x-6 xl:max-w-2xl xl:justify-end mt-4 xl:mt-0"
            >
               {categories.map((cat, index) => (
                 <span key={index} className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-main)] flex items-center gap-4 lg:gap-6 group cursor-crosshair hover:italic transition-all duration-300">
                    {cat.name}
                    {index < categories.length - 1 && <span className="opacity-30 not-italic">/</span>}
                 </span>
               ))}
            </motion.div>
        </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative group/wrapper mt-12">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[var(--color-bg-light)] border border-[var(--color-text-main)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] transition-colors duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
             onClick={() => scroll('right')} 
             className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[var(--color-bg-light)] border border-[var(--color-text-main)] flex items-center justify-center text-[var(--color-text-main)] hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] transition-colors duration-300"
           >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto hide-scroll snap-x snap-mandatory py-4 px-2"
          >
            {portfolioData.map((item, index) => {
              const content = (
                <>
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text-main)] to-transparent opacity-0 group-hover/card:opacity-80 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 flex items-end justify-between gap-4">
                     <div>
                       <p className="text-[10px] text-[var(--color-bg-light)] font-bold tracking-[0.2em] uppercase mb-2">
                         {item.category}
                       </p>
                       <h3 className="font-display text-3xl font-bold text-[var(--color-bg-light)] tracking-tight uppercase">
                          {item.title}
                       </h3>
                     </div>
                     {item.link && (
                       <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-bg-light)] text-[var(--color-text-main)] flex items-center justify-center -rotate-45 group-hover/card:rotate-0 transition-transform duration-500">
                         <ArrowRight size={20} />
                       </div>
                     )}
                  </div>
                </>
              );

              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={item.id}
                >
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block relative w-[80vw] md:w-[400px] lg:w-[450px] aspect-[4/5] overflow-hidden group/card bg-[var(--color-text-muted)] snap-center shrink-0 border border-[var(--color-text-main)] grayscale hover:grayscale-0 transition-all duration-700"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="relative w-[80vw] md:w-[400px] lg:w-[450px] aspect-[4/5] overflow-hidden group/card bg-[var(--color-text-muted)] snap-center shrink-0 border border-[var(--color-text-main)] grayscale hover:grayscale-0 transition-all duration-700">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="https://www.behance.net/mohitlakharadesigner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-[var(--color-text-main)] font-semibold text-sm uppercase tracking-wide hover:opacity-70 transition-opacity group">
            View All Projects
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
