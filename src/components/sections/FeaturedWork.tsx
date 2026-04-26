import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function FeaturedWork() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--color-bg-light)]">
      <div className="absolute inset-0 bg-dot-pattern opacity-50 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-12 items-start relative z-10">
        
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="inline-block bg-[var(--color-brand-light)] px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-brand)] font-bold tracking-wider shadow-sm uppercase">
             FEATURED WORK
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-[var(--color-text-main)] leading-[1.1] mb-8">
            Selected Project I'm <span className="text-[var(--color-accent)]">Proud</span> Of.
          </motion.h2>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="#" className="inline-flex py-3 px-6 rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] text-sm font-semibold hover:bg-[var(--color-brand)] hover:text-white transition-all items-center gap-2 group">
             View Case Study
             <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
          </motion.a>
        </motion.div>

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
          <div className="w-full md:w-7/12 relative bg-[#A4B1A0] min-h-[300px] md:min-h-full overflow-hidden group">
            <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
               alt="Clover Real Estate Branding" 
               className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
            />
            {/* Play button overlay */}
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
               <Play fill="var(--color-accent)" size={24} className="text-[var(--color-accent)] ml-1" />
            </div>

            {/* Floating Tag */}
            <div className="absolute z-10 bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-4 shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-xl font-bold">
                     🏅
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-semibold mb-0.5">AWARD WINNING</p>
                    <p className="text-sm font-bold">Best UI/UX 2024</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
