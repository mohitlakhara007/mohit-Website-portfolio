import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-[50px] md:py-[100px] relative bg-[var(--color-bg-light)]">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-8 md:gap-16 xl:gap-24 items-start relative z-10">
        
        {/* Left text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="xl:w-1/3"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="inline-block border border-[var(--color-text-main)] px-4 py-1.5 rounded-full mb-8 text-[11px] text-[var(--color-text-main)] font-semibold tracking-[0.2em] uppercase">
             Featured Work
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-[var(--color-text-main)] leading-[0.9] xl:mb-10 tracking-tighter uppercase">
            Selected <br className="hidden md:block" />
            <span className="italic font-light">Project.</span>
          </motion.h2>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="https://www.behance.net/gallery/238787187/Svarah-jewellery-Branding" target="_blank" rel="noopener noreferrer" className="hidden xl:inline-flex py-4 px-8 border border-[var(--color-text-main)] text-[var(--color-text-main)] text-sm font-semibold hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] transition-colors items-center gap-3 uppercase tracking-wide">
             View Case Study
          </motion.a>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="xl:w-2/3 w-full border border-[var(--color-text-main)] bg-[var(--color-bg-light)] flex flex-col md:flex-row group"
        >
          {/* Left info box inside card */}
          <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--color-text-main)]">
             <div>
                <span className="text-[var(--color-text-main)] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 block border border-[var(--color-text-main)] px-2 py-1 inline-block">BRAND IDENTITY</span>
                <h3 className="font-display text-4xl font-bold text-[var(--color-text-main)] mb-6 tracking-tight uppercase leading-none">Svarah Jewellery</h3>
                <p className="text-[var(--color-text-muted)] text-[15px] leading-relaxed font-medium">
                  A complete brand identity design for Svarah Jewellery.
                </p>
             </div>
             
             <div className="mt-12 flex items-center justify-between border-t border-[var(--color-text-main)] pt-6">
               <span className="text-[var(--color-text-main)] text-sm font-bold uppercase tracking-widest">2025</span>
               <a href="https://www.behance.net/gallery/238787187/Svarah-jewellery-Branding" target="_blank" rel="noopener noreferrer">
                 <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform cursor-pointer" />
               </a>
             </div>
          </div>

          {/* Right image box inside card */}
          <a href="https://www.behance.net/gallery/238787187/Svarah-jewellery-Branding" target="_blank" rel="noopener noreferrer" className="w-full md:w-[60%] relative bg-[var(--color-text-muted)] min-h-[400px] md:min-h-full overflow-hidden transition-all duration-700 block">
            <img 
               src="https://mir-s3-cdn-cf.behance.net/projects/max_808/a954f9238787187.Y3JvcCw5ODEsNzY4LDE3LDA.jpg" 
               alt="Svarah Jewellery Branding" 
               loading="lazy"
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          </a>
        </motion.div>

        {/* Mobile View Case Study Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full xl:hidden flex justify-center"
        >
          <a href="https://www.behance.net/gallery/238787187/Svarah-jewellery-Branding" target="_blank" rel="noopener noreferrer" className="inline-flex py-4 px-8 border border-[var(--color-text-main)] text-[var(--color-text-main)] text-sm font-semibold hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] transition-colors items-center justify-center gap-3 uppercase tracking-wide w-full md:w-auto">
             View Case Study
          </a>
        </motion.div>

      </div>
    </section>
  );
}
