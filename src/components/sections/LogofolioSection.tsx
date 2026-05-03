import React from 'react';
import { motion } from 'motion/react';

const logos = [
  { id: 1, name: 'Sweets & Namkeen Logo', src: 'https://plain-apac-prod-public.komododecks.com/202605/03/uDPZolrnpeP4yeLie5L2/image.jpg', span: 'col-span-1' },
  { id: 2, name: 'Clothing Brand Logo', src: 'https://plain-apac-prod-public.komododecks.com/202605/03/JEIeHS2teW4G0EANApeA/image.jpg', span: 'col-span-1' },
  { id: 3, name: 'Skin Care Brand Logo', src: 'https://plain-apac-prod-public.komododecks.com/202605/03/kVwo1HoEqzwUjwbSCpVW/image.jpg', span: 'col-span-1' },
];

export default function LogofolioSection() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col justify-center min-h-[80vh] relative z-10">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter">
            Logo<span className="font-bold italic">folio.</span>
          </h2>
          <p className="text-[var(--color-text-main)] mt-4 md:mt-6 opacity-70 text-sm md:text-base uppercase tracking-[0.2em]">
            Brand Marks & Identities
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-[var(--color-text-muted)]/5 rounded-3xl overflow-hidden shadow-xl border border-[var(--color-text-main)]/10 cursor-pointer ${logo.span}`}
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <span className="text-white text-lg md:text-xl font-medium tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   {logo.name}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
