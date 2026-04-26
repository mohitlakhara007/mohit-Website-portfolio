import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function FeaturedWork() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-bg-light)]">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-12 items-start">
        
        {/* Left text */}
        <div className="xl:w-1/3">
          <div className="inline-block bg-[var(--color-brand-light)] px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-brand)] font-bold tracking-wider shadow-sm uppercase">
             FEATURED WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-[var(--color-text-main)] leading-[1.1] mb-8">
            Selected Project I'm <span className="text-[var(--color-accent)]">Proud</span> Of.
          </h2>
          <a href="#" className="inline-flex py-3 px-6 rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] text-sm font-semibold hover:bg-[var(--color-brand)] hover:text-white transition-all items-center gap-2 group">
             View Case Study
             <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
          </a>
        </div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="xl:w-2/3 w-full bg-[var(--color-brand)] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-xl border border-black/10 min-h-[400px]"
        >
          {/* Left info box inside card */}
          <div className="w-full md:w-5/12 p-10 md:p-12 flex flex-col justify-between">
             <div>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4 block">BRAND IDENTITY</span>
                <h3 className="font-display text-4xl font-bold text-white mb-4">Clover Real Estate</h3>
                <p className="text-white/70 text-sm md:text-base pr-4 leading-relaxed">
                  A complete brand identity designed for a modern real estate company.
                </p>
             </div>
             
             <div className="mt-8">
               <span className="text-white/60 text-sm font-medium">2024</span>
             </div>
          </div>

          {/* Right image box inside card */}
          <div className="w-full md:w-7/12 relative bg-[#A4B1A0] min-h-[300px] md:min-h-full">
            <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
               alt="Clover Real Estate Branding" 
               className="w-full h-full object-cover mix-blend-multiply opacity-50"
            />
            {/* Play button overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
               <Play fill="var(--color-accent)" size={24} className="text-[var(--color-accent)] ml-1" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
