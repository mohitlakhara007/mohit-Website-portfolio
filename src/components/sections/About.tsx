import { motion } from 'motion/react';

export default function About() {
  const skills = ["Graphic Design", "UI/UX Design", "Branding", "Social Media", "Typography"];

  return (
    <section id="about" className="relative py-[50px] md:py-[100px] w-full bg-[var(--color-bg-light)]">
      
      {/* Mobile Headers */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 md:hidden mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-[var(--color-text-main)] px-4 py-1.5 rounded-full mb-6 text-[11px] text-[var(--color-text-main)] font-semibold tracking-[0.2em] uppercase">
             About Me
          </div>
          <h2 className="text-4xl font-display font-bold text-[var(--color-text-main)] leading-[0.9] tracking-tighter uppercase">
            Turning Ideas <br />
            <span className="italic font-light text-[var(--color-text-main)]">
               Into Reality.
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-start gap-10 md:gap-24">
        
        {/* Left Side: Text Reveal */}
        <motion.div 
          className="w-full md:w-[50%] relative mt-4 md:mt-0 order-2 md:order-1"
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
          <motion.div className="hidden md:block" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
            <div className="inline-block border border-[var(--color-text-main)] px-4 py-1.5 rounded-full mb-8 text-[11px] text-[var(--color-text-main)] font-semibold tracking-[0.2em] uppercase">
               About Me
            </div>
          </motion.div>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="hidden md:block text-5xl lg:text-7xl font-display font-bold text-[var(--color-text-main)] mb-10 leading-[0.9] tracking-tighter uppercase">
            Turning Ideas <br />
            <span className="italic font-light text-[var(--color-text-main)]">
               Into Reality.
            </span>
          </motion.h2>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="space-y-8 text-base md:text-lg text-[var(--color-text-main)] font-medium leading-relaxed max-w-xl">
            <p>
              Hey! I'm a graphic and UI/UX designer from Surat — currently doing my BCA and spending most of my free time designing things I actually care about.
            </p>
            <p>
              I like making things that look good and actually work well. Whether it's a logo, a mobile screen, or a social media post — I try to keep it clean, intentional, and real.
            </p>
            <div className="relative pt-6 pb-2 border-t border-[var(--color-text-main)]">
               <p className="italic text-[var(--color-text-main)] font-display text-2xl font-medium opacity-90 tracking-tight">
                 "Designing is how I think. Every project is just me trying to say something clearly — without words."
               </p>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="mt-12 pt-8 border-t border-b border-[var(--color-text-main)] pb-8 relative overflow-hidden group">
            <div className="w-full text-[10px] font-bold text-[var(--color-text-main)] tracking-[0.2em] uppercase mb-6">Core Skills</div>
            
            <div className="relative flex overflow-hidden">
               {/* Left and Right Fade masks */}
               <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg-light)] to-transparent z-10 pointer-events-none" />
               <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg-light)] to-transparent z-10 pointer-events-none" />
               
               <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                 {[...Array(2)].map((_, i) => (
                   <div key={i} className="flex items-center justify-around gap-8 pr-8 pointer-events-auto">
                     {skills.map((skill, index) => (
                       <span key={`${i}-${index}`} className="flex items-center gap-8 cursor-pointer">
                         <span className="text-2xl md:text-3xl font-display font-medium text-[var(--color-text-main)] uppercase tracking-tight hover:italic transition-all duration-300">
                           {skill}
                         </span>
                         <span className="text-[var(--color-text-main)] opacity-30 text-lg">✦</span>
                       </span>
                     ))}
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image area */}
        <div className="w-full md:w-[50%] relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 order-1 md:order-2">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] overflow-hidden group"
          >
             <img 
               src="https://plain-apac-prod-public.komododecks.com/202604/27/sUr4GJHq2qOap0mzoUAJ/image.jpg" 
               alt="Mohit Lakhara" 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             {/* minimalist corner accent */}
             <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[var(--color-text-main)] m-6" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
