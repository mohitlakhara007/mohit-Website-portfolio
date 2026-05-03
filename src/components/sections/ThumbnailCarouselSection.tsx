import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const thumbnailImages = [
  { id: 1, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/dsyEr9GuTwRLEi7T8VfF/image.jpg', title: 'Thumbnail Design 1' },
  { id: 2, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/AFDoSGF0MmjARtJfccpp/image.jpg', title: 'Thumbnail Design 2' },
  { id: 3, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/93m90Em3xolUTbFqgxDk/image.jpg', title: 'Thumbnail Design 3' },
  { id: 4, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/bGsxpZLDxBCQO47NAjuX/image.jpg', title: 'Thumbnail Design 4' },
  { id: 5, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/z7BxQy9xjUzn2Zp2Npk2/image.jpg', title: 'Thumbnail Design 5' },
  { id: 6, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/C532radx5I7AnZTBLXLm/image.jpg', title: 'Thumbnail Design 6' },
];

const CarouselRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  // Duplicate array to ensure seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="flex w-full overflow-hidden mask-edges py-2 group cursor-pointer">
      <div className={`flex flex-shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused] whitespace-nowrap`}>
        {duplicatedItems.map((item, i) => (
          <span key={`a-${i}`} className="pr-4 md:pr-6 block">
            <div className="relative flex w-[280px] md:w-[480px] lg:w-[560px] aspect-video rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shrink-0 shadow-xl shadow-[var(--color-text-main)]/5 group/card border border-[var(--color-text-main)]/10">
              <img 
                 src={item.src} 
                 alt={item.title} 
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between text-white transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <span className="font-bold tracking-wider uppercase text-sm">{item.title}</span>
                  </div>
                  <ExternalLink size={20} className="translate-x-4 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300 delay-100" />
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
      
      {/* Second identical track for seamless looping */}
      <div className={`flex flex-shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused] whitespace-nowrap`} aria-hidden="true">
        {duplicatedItems.map((item, i) => (
          <span key={`b-${i}`} className="pr-4 md:pr-6 block">
            <div className="relative flex w-[280px] md:w-[480px] lg:w-[560px] aspect-video rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shrink-0 shadow-xl shadow-[var(--color-text-main)]/5 group/card border border-[var(--color-text-main)]/10">
              <img 
                 src={item.src} 
                 alt={item.title} 
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between text-white transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <span className="font-bold tracking-wider uppercase text-sm">{item.title}</span>
                  </div>
                  <ExternalLink size={20} className="translate-x-4 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300 delay-100" />
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function ThumbnailCarouselSection() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col overflow-hidden min-h-[60vh] justify-center">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter w-full text-center">
            Thumbnail <span className="font-bold italic">Designs.</span>
          </h2>
          <p className="text-center text-[var(--color-text-main)] mt-4 md:mt-6 opacity-70 text-sm md:text-base uppercase tracking-[0.2em]">
            Visual storytelling at a glance
          </p>
        </motion.div>
      </div>
      
      <div className="flex flex-col gap-4 md:gap-8 mt-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <CarouselRow items={thumbnailImages} reverse={true} />
          <CarouselRow items={thumbnailImages.slice().reverse()} />
        </motion.div>
      </div>
    </section>
  );
}
