import { motion } from 'motion/react';
import { Mail, Phone, Instagram, ArrowRight, Rss } from 'lucide-react';
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block liquid-glass border border-white/40 px-5 py-2.5 rounded-full mb-6 text-xs text-[var(--color-text-main)] font-bold tracking-wider uppercase">
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
            className="group liquid-glass rounded-[32px] p-8 border border-white/40 transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-text-main)] group-hover:scale-110 transition-transform">
               <Mail size={22} />
            </div>
            <div className="mt-8">
               <h4 className="font-bold text-sm text-gray-500 mb-1">Email</h4>
               <p className="text-[var(--color-text-main)] font-semibold text-lg hover:text-[var(--color-accent)] transition-colors line-clamp-2">mohitlakhara007061@gmail.com</p>
            </div>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            href="tel:+918799179784"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group liquid-glass rounded-[32px] p-8 border border-white/40 transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-text-main)] group-hover:scale-110 transition-transform">
               <Phone size={22} />
            </div>
            <div className="mt-8">
               <h4 className="font-bold text-sm text-gray-500 mb-1">Phone</h4>
               <p className="text-[var(--color-text-main)] font-semibold text-lg hover:text-[var(--color-accent)] transition-colors">+91 8799179784</p>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a 
            href="#"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } } }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group liquid-glass rounded-[32px] p-8 border border-white/40 transition-all flex flex-col justify-between min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-text-main)] group-hover:scale-110 transition-transform">
               <Instagram size={22} />
            </div>
            <div className="mt-8 flex items-center justify-between">
                 <div>
                   <h4 className="font-bold text-sm text-gray-500 mb-1">Instagram</h4>
                   <p className="text-[var(--color-text-main)] font-semibold text-base hover:text-[var(--color-accent)] transition-colors">@mohit_lakhara_</p>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center text-[var(--color-text-main)] group-hover:bg-[#007AFF] group-hover:text-white transition-all shrink-0">
                    <ArrowRight size={14} className="-rotate-45" />
                 </div>
            </div>
          </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="liquid-glass rounded-[32px] p-8 md:p-10 border border-white/40 w-full"
          >
          <form action="https://api.web3forms.com/submit" method="POST">
            <h3 className="text-3xl font-bold font-display text-[var(--color-text-main)] mb-8 tracking-tight">Send a Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="hidden" name="access_key" value="089b903b-ef19-4cfc-8d0f-2c49f38ef1e3" />
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[15px] font-semibold text-gray-500 ml-1">Name</label>
                <input type="text" name="name" id="name" required placeholder="John Doe" className="px-5 py-4 rounded-2xl bg-[var(--color-bg-light)] border border-transparent focus:outline-none focus:bg-transparent focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all w-full text-[17px] text-[var(--color-text-main)]" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[15px] font-semibold text-gray-500 ml-1">Your Email</label>
                <input type="email" name="email" id="email" required placeholder="john@example.com" className="px-5 py-4 rounded-2xl bg-[var(--color-bg-light)] border border-transparent focus:outline-none focus:bg-transparent focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all w-full text-[17px] text-[var(--color-text-main)]" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="message" className="text-[15px] font-semibold text-gray-500 ml-1">Your Message</label>
              <textarea id="message" name="message" rows={4} required placeholder="How can I help you?" className="px-5 py-4 rounded-2xl bg-[var(--color-bg-light)] border border-transparent focus:outline-none focus:bg-transparent focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/10 transition-all w-full resize-none text-[17px] text-[var(--color-text-main)]"></textarea>
            </div>

            <button type="submit" className="px-8 py-4 bg-[#007AFF] text-white font-semibold rounded-full hover:bg-[#0056b3] transition-colors flex items-center justify-center gap-3 w-[fit-content] shadow-[0_4px_14px_rgba(0,122,255,0.39)]">
              Submit Message
              <PiPaperPlaneRightFill size={18} />
            </button>
          </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
