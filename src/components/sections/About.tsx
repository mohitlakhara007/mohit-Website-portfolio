import { motion } from 'motion/react';

export default function About() {
  const skills = ["Graphic Design", "UI/UX Design", "Branding", "Social Media", "Typography"];

  return (
    <section id="about" className="relative py-24 w-full">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Profile Image area */}
        <div className="w-full md:w-5/12 relative">
          {/* Green backing square */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-8 w-full h-full bg-[var(--color-brand)] rounded-tl-[3rem] rounded-br-[3rem] -z-10" 
          />
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative bg-white p-3 pb-8 md:p-4 md:pb-12 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500 rounded-lg"
          >
             {/* Profile image container */}
             <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden relative shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2664&auto=format&fit=crop" 
                 alt="Abstract Design" 
                 className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
             </div>

             {/* Small floating sticky note details */}
             <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-80 h-10 w-20 flex justify-center mt-[-20px]">
                <div className="w-16 h-8 bg-[#EFECE6]/90 shadow-sm rotate-[4deg]" />
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
          {/* Decorative element background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-2xl -z-10" />

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="inline-block bg-[var(--color-brand-light)] border border-brand/10 px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-brand)] font-bold tracking-wider shadow-sm uppercase shadow-brand/5">
               ABOUT ME
            </div>
          </motion.div>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-[var(--color-text-main)] mb-8 leading-[1.05] tracking-tight">
            Turning Ideas Into <br className="hidden lg:block" />
            <span className="text-[var(--color-accent)] relative inline-block">
               Meaningful
               <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--color-brand)] opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
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
               <div className="absolute left-0 top-6 bottom-4 w-1 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-brand)] rounded-full" />
               <p className="italic text-[var(--color-text-main)] font-display text-2xl font-semibold opacity-90 pl-6 py-1 tracking-tight">
                 "Designing is how I think. Every project is just me trying to say something clearly — without words."
               </p>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex flex-wrap gap-x-3 gap-y-4 mt-12 bg-white/50 p-6 rounded-3xl border border-black/5 shadow-sm backdrop-blur-sm">
            <div className="w-full text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">My Core Skills</div>
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white border border-gray-100 text-[var(--color-brand)] shadow-sm flex items-center gap-2 cursor-pointer transition-colors hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)]"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent-glow)]"></div>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
