import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-24 relative overflow-hidden bg-transparent">
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="inline-block liquid-glass px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-text-main)] font-bold tracking-wider border border-white/40 uppercase">
             FEATURED WORK
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-[var(--color-text-main)] leading-[1.1] mb-8 tracking-tight">
            Selected Project I'm <span className="text-[var(--color-accent)]">Proud</span> Of.
          </motion.h2>
          <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} href="#" className="inline-flex py-3.5 px-8 rounded-full bg-[#007AFF] text-white text-sm font-semibold hover:bg-[#0056b3] transition-all items-center gap-3 shadow-[0_8px_24px_rgba(0,122,255,0.3)]">
             View Case Study
             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
               <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-white"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
          </motion.a>
        </motion.div>

        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="xl:w-2/3 w-full liquid-glass rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-white/40 min-h-[400px]"
        >
          {/* Left info box inside card */}
          <div className="w-full md:w-5/12 p-10 md:p-12 flex flex-col justify-between">
             <div>
                <span className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4 block">BRAND IDENTITY</span>
                <h3 className="font-display text-4xl font-bold text-[var(--color-text-main)] mb-4">Clover Real Estate</h3>
                <p className="text-gray-600 text-[15px] pr-4 leading-relaxed font-medium">
                  A complete brand identity designed for a modern real estate company.
                </p>
             </div>
             
             <div className="mt-8">
               <span className="text-gray-400 text-sm font-bold">2024</span>
             </div>
          </div>

          {/* Right image box inside card */}
          <div className="w-full md:w-7/12 relative bg-[var(--color-bg-light)] min-h-[300px] md:min-h-full overflow-hidden group">
            <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
               alt="Clover Real Estate Branding" 
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            {/* Play button overlay */}
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:scale-110 transition-transform cursor-pointer">
               <Play fill="#007AFF" size={24} className="text-[#007AFF] ml-1" />
            </div>

            {/* Floating Tag */}
            <div className="absolute z-10 bottom-6 right-6 bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-white/40 text-[var(--color-text-main)] rounded-2xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.1)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center text-xl font-bold shadow-sm">
                     🏅
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold mb-0.5 tracking-wider">AWARD WINNING</p>
                    <p className="text-sm font-bold text-[var(--color-text-main)] tracking-tight">Best UI/UX 2024</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
