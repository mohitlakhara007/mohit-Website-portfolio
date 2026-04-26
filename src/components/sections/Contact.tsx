import { motion } from 'motion/react';
import { Mail, Phone, Instagram, ArrowRight, Rss } from 'lucide-react';
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--color-bg-light)]">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-12 items-start relative z-10">
        
        {/* Left Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="xl:w-1/4"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block bg-[var(--color-brand-light)] px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-brand)] font-bold tracking-wider shadow-sm uppercase">
             CONTACT
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-[4rem] font-display font-bold text-[var(--color-text-main)] leading-[1.1] mb-6">
            Let's Work <br/>
            <span className="text-[var(--color-accent)]">Together.</span>
          </motion.h2>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="xl:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          {/* Email Card */}
          <motion.a 
            href="mailto:mohitlakhara007061@gmail.com"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-brand)] group-hover:scale-110 transition-transform">
               <Mail size={20} />
            </div>
            <div className="mt-8">
               <h4 className="font-bold text-sm text-[var(--color-text-main)] mb-1">Email</h4>
               <p className="text-gray-500 text-sm break-words leading-tight">mohitlakhara007061<br/>@gmail.com</p>
            </div>
            <div className="mt-6 flex justify-end">
               <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-gray-400 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-[var(--color-accent)] transition-all">
                 <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
               </div>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            href="tel:+918799179784"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-brand)] group-hover:scale-110 transition-transform">
               <Phone size={20} />
            </div>
            <div className="mt-8">
               <h4 className="font-bold text-sm text-[var(--color-text-main)] mb-1">Phone</h4>
               <p className="text-gray-500 text-sm break-words leading-tight">8799179784</p>
            </div>
            <div className="mt-6 flex justify-end">
               <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-accent)]/10 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                 <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
               </div>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a 
            href="#"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[var(--color-brand)] group-hover:scale-110 transition-transform">
               <Instagram size={20} />
            </div>
            <div className="mt-8">
               <h4 className="font-bold text-sm text-[var(--color-text-main)] mb-1">Instagram</h4>
               <p className="text-gray-500 text-sm break-words leading-tight">@mohit_lakhara_</p>
            </div>
            <div className="mt-6 flex justify-end">
               <div className="w-8 h-8 rounded-full border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                 <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
               </div>
            </div>
          </motion.a>

          {/* Start Project Card (Dark Green) */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-[var(--color-brand)] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px] relative overflow-hidden text-white"
          >
            {/* Top right texture dot */}
            <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-white/20"></div>
            
            <div className="w-10 h-10 rounded-full flex items-center justify-start text-[var(--color-accent)]">
               <PiPaperPlaneRightFill size={24} />
            </div>
            <div className="mt-4">
               <h4 className="font-bold text-sm mb-1">Start a Project</h4>
               <p className="text-white/70 text-sm leading-snug pr-4">Let's create something amazing together.</p>
            </div>
            <div className="mt-6 flex justify-between items-center">
               <button className="bg-white text-[var(--color-brand)] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                 Mail Me 
                 <div className="w-4 h-4 bg-[var(--color-accent)] rounded-full text-white flex items-center justify-center"><span className="text-[8px] font-black">i</span></div>
               </button>
               <div className="text-[var(--color-accent)]">
                 <ArrowRight size={20} />
               </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
