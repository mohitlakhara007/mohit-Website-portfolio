import { motion } from 'motion/react';

export default function About() {
  const skills = ["Graphic Design", "UI/UX Design", "Branding", "Social Media", "Typography"];

  return (
    <section id="about" className="relative py-24 w-full">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Profile Image area */}
        <div className="w-full md:w-5/12 relative flex items-center justify-center">
          {/* Green backing square */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-8 w-[90%] h-[90%] bg-[#E5E5EA] rounded-[48px] -z-10 shadow-inner" 
          />
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative liquid-glass p-3 pb-8 md:p-4 md:pb-12 -rotate-2 hover:rotate-0 transition-transform duration-500 rounded-[32px]"
          >
             {/* Profile image container */}
             <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden relative shadow-inner rounded-[24px]">
               <img 
                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2664&auto=format&fit=crop" 
                 alt="Abstract Design" 
                 className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
             </div>
          </motion.div>
          
        </div>

        {/* Right Side: Text Reveal */}
        <motion.div 
          className="w-full md:w-7/12 relative pl-0 md:pl-8"
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
        >

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="inline-block liquid-glass border border-white/40 px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-text-main)] font-bold tracking-wider uppercase">
               ABOUT ME
            </div>
          </motion.div>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-[var(--color-text-main)] mb-8 leading-[1.05] tracking-tight">
            Turning Ideas Into <br className="hidden lg:block" />
            <span className="text-[var(--color-accent)] relative inline-block">
               Meaningful
               <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#007AFF] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
            </span> Design.
          </motion.h2>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="space-y-6 text-lg md:text-xl text-[var(--color-text-muted)] font-medium leading-relaxed max-w-xl">
            <p>
              Hey! I'm a graphic and UI/UX designer from Surat — currently doing my BCA and spending most of my free time designing things I actually care about.
            </p>
            <p>
              I like making things that look good and actually work well. Whether it's a logo, a mobile screen, or a social media post — I try to keep it clean, intentional, and real.
            </p>
            <div className="relative pt-4 pb-2">
               <div className="absolute left-0 top-6 bottom-4 w-1 bg-[#007AFF] rounded-full shadow-[0_0_8px_rgba(0,122,255,0.5)]" />
               <p className="italic text-[var(--color-text-main)] font-display text-2xl font-semibold opacity-90 pl-6 py-1 tracking-tight">
                 "Designing is how I think. Every project is just me trying to say something clearly — without words."
               </p>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex flex-wrap gap-x-3 gap-y-4 mt-12 liquid-glass p-6 rounded-[32px] border-white/40">
            <div className="w-full text-xs font-bold text-gray-500 tracking-widest uppercase mb-2 ml-2">My Core Skills</div>
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold liquid-glass text-[var(--color-text-main)] flex items-center gap-2 cursor-pointer transition-colors hover:border-[#007AFF]/50 hover:text-[#007AFF] hover:bg-white/60 dark:hover:bg-black/60"
              >
                <div className="w-2 h-2 rounded-full bg-[#007AFF]"></div>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
