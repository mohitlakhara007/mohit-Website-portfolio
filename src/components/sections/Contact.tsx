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

        {/* Right Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="xl:w-3/4 w-full flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
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
          </div>

          {/* Contact Form */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm w-full"
          >
          <form action="https://api.web3forms.com/submit" method="POST">
            <h3 className="text-2xl font-bold font-display text-[var(--color-text-main)] mb-8">Send a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="hidden" name="access_key" value="089b903b-ef19-4cfc-8d0f-2c49f38ef1e3" />
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-600">Name</label>
                <input type="text" name="name" id="name" required placeholder="John Doe" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-600">Your Email</label>
                <input type="email" name="email" id="email" required placeholder="john@example.com" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="message" className="text-sm font-semibold text-gray-600">Your Message</label>
              <textarea id="message" name="message" rows={4} required placeholder="How can I help you?" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-all w-full resize-none"></textarea>
            </div>

            <button type="submit" className="px-8 py-4 bg-[var(--color-brand)] text-white font-bold rounded-full hover:bg-[#1a3324] transition-colors flex items-center gap-3 group shadow-sm inline-flex">
              Submit Message
              <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <PiPaperPlaneRightFill className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
