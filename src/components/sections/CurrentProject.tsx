import { motion } from 'motion/react';

export default function CurrentProject() {
  return (
    <section className="py-[40px] md:py-[80px] bg-[var(--color-bg-light)] relative w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="border border-[var(--color-text-main)] p-8 md:p-16 flex flex-col items-center justify-center text-center gap-10 group relative overflow-hidden"
        >
           {/* Background hover effect */}
           <div className="absolute inset-0 bg-[var(--color-text-main)] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

           <div className="flex-1 w-full flex flex-col items-center gap-8 relative z-10">
              <div className="flex items-center justify-center gap-4">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-text-main)] group-hover:bg-[var(--color-bg-light)] opacity-75 transition-colors duration-500"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-text-main)] group-hover:bg-[var(--color-bg-light)] transition-colors duration-500"></span>
                 </span>
                 <span className="text-[10px] md:text-xs font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-bg-light)] tracking-[0.2em] uppercase transition-colors duration-500">Currently Working On</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-bg-light)] tracking-tight leading-[1.1] uppercase max-w-4xl transition-colors duration-500">
                Vrajras Production
              </h2>
              
              <p className="text-[var(--color-text-muted)] group-hover:text-[var(--color-bg-light)] group-hover:opacity-90 text-sm md:text-lg font-medium max-w-3xl transition-colors duration-500 leading-relaxed tracking-wide">
                 Leading end-to-end creative strategy, branding, and digital experiences for Shri Gaurav Krishna Goswami, Vrajras Production, and Bhagwat Mission.
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
