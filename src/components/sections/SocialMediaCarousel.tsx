import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const row1Images = [
  { id: 1, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/NfRB2W9VT6CGuo0CjkV9/image.jpg', platform: 'Instagram' },
  { id: 2, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/gsaYHs71fo1nWlnFv8Mr/image.jpg', platform: 'Twitter' },
  { id: 3, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/iNOdOqJAdoS0UpNlTbhS/image.jpg', platform: 'LinkedIn' },
  { id: 4, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/DEOmRpHU06vNRhl2tWRC/image.png', platform: 'Instagram' },
];

const row2Images = [
  { id: 5, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/PhkDk12Qdj84i5peo6ZG/image.jpg', platform: 'Behance' },
  { id: 6, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/VkSL3yB14kfMGBqbNIOm/image.png', platform: 'Instagram' },
  { id: 7, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/WidnDsgOkSsnmxwNpM9R/image.png', platform: 'Dribbble' },
  { id: 8, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/1GX7r6oMFveTbdSvJo2Z/image.png', platform: 'LinkedIn' },
];

const CarouselRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  // Duplicate array to ensure seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="flex w-full overflow-hidden mask-edges py-2 group cursor-pointer">
      {/* First track */}
      <div className={`flex flex-shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused] whitespace-nowrap`}>
        {duplicatedItems.map((item, i) => (
          <span key={`a-${i}`} className="pr-4 md:pr-6 block">
            <a 
              href="#"
              className="relative flex w-[280px] md:w-[360px] lg:w-[400px] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 shadow-xl shadow-[var(--color-text-main)]/5 group/card"
            >
              <img 
                 src={item.src} 
                 alt={item.platform} 
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between text-white transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <span className="font-bold tracking-wider uppercase text-sm">{item.platform}</span>
                  </div>
                  <ExternalLink size={20} className="translate-x-4 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300 delay-100" />
                </div>
              </div>
            </a>
          </span>
        ))}
      </div>
      
      {/* Second identical track for seamless looping */}
      <div className={`flex flex-shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused] whitespace-nowrap`} aria-hidden="true">
        {duplicatedItems.map((item, i) => (
          <span key={`b-${i}`} className="pr-4 md:pr-6 block">
            <div className="relative flex w-[280px] md:w-[360px] lg:w-[400px] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 shadow-xl shadow-[var(--color-text-main)]/5 group/card">
              <img 
                 src={item.src} 
                 alt={item.platform} 
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between text-white transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <span className="font-bold tracking-wider uppercase text-sm">{item.platform}</span>
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

export default function SocialMediaCarousel() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col overflow-hidden min-h-[80vh] justify-center">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter w-full text-center">
            Social Media <span className="font-bold italic">Posts.</span>
          </h2>
          <p className="text-center text-[var(--color-text-main)] mt-4 md:mt-6 opacity-70 text-sm md:text-base uppercase tracking-[0.2em]">
            Digital presence & recent explorations
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
          <CarouselRow items={row1Images} />
          {/* Reverse scrolling direction for bottom row */}
          <CarouselRow items={row2Images} reverse={true} />
        </motion.div>
      </div>
    </section>
  );
}
