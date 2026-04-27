import { motion } from 'motion/react';
import { Mail, Phone, Instagram, ArrowRight } from 'lucide-react';
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Contact() {
  return (
    <section id="contact" className="py-[50px] md:py-[100px] relative bg-[var(--color-bg-light)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-16 md:gap-24 items-start relative z-10">
        
        {/* Left Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="xl:w-[40%]"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="inline-block border border-[var(--color-text-main)] px-4 py-1.5 rounded-full mb-8 text-[11px] text-[var(--color-text-main)] font-semibold tracking-[0.2em] uppercase">
             Contact
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-6xl lg:text-[7rem] font-display font-bold text-[var(--color-text-main)] leading-[0.9] mb-10 tracking-tighter uppercase">
            Let's Work <br/>
            <span className="italic font-light">Together.</span>
          </motion.h2>

          <div className="flex flex-col gap-8">
            <a href="mailto:mohitlakhara007061@gmail.com" className="group flex items-center justify-between border-b border-[var(--color-text-main)] pb-6 hover:opacity-70 transition-opacity">
              <div>
                <p className="text-[10px] text-[var(--color-text-main)] font-bold tracking-[0.2em] uppercase mb-2">Email</p>
                <p className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium tracking-tight">mohitlakhara007061@gmail.com</p>
              </div>
              <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="tel:+918799179784" className="group flex items-center justify-between border-b border-[var(--color-text-main)] pb-6 hover:opacity-70 transition-opacity">
              <div>
                <p className="text-[10px] text-[var(--color-text-main)] font-bold tracking-[0.2em] uppercase mb-2">Phone</p>
                <p className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium tracking-tight">+91 8799179784</p>
              </div>
              <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-[var(--color-text-main)] pb-6 hover:opacity-70 transition-opacity">
              <div>
                <p className="text-[10px] text-[var(--color-text-main)] font-bold tracking-[0.2em] uppercase mb-2">Instagram</p>
                <p className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium tracking-tight">@mohitdznr</p>
              </div>
              <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="xl:w-[60%] w-full"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="border border-[var(--color-text-main)] bg-[var(--color-bg-light)] p-8 md:p-16 w-full"
          >
            <form action="https://api.web3forms.com/submit" method="POST">
              <h3 className="text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-main)] mb-12 tracking-tight uppercase">Send a Message</h3>
              
              <div className="grid grid-cols-1 gap-12 mb-12">
                <input type="hidden" name="access_key" value="089b903b-ef19-4cfc-8d0f-2c49f38ef1e3" />
                <div className="flex flex-col gap-4">
                  <label htmlFor="name" className="text-[11px] font-bold text-[var(--color-text-main)] tracking-[0.2em] uppercase">Name</label>
                  <input type="text" name="name" id="name" required placeholder="John Doe" className="pb-4 bg-transparent border-b border-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-text-main)] transition-colors w-full text-xl text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] rounded-none" />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="text-[11px] font-bold text-[var(--color-text-main)] tracking-[0.2em] uppercase">Email</label>
                  <input type="email" name="email" id="email" required placeholder="john@example.com" className="pb-4 bg-transparent border-b border-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-text-main)] transition-colors w-full text-xl text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] rounded-none" />
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-16">
                <label htmlFor="message" className="text-[11px] font-bold text-[var(--color-text-main)] tracking-[0.2em] uppercase">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="How can I help you?" className="pb-4 bg-transparent border-b border-[var(--color-text-main)] focus:outline-none focus:border-[var(--color-text-main)] transition-colors w-full resize-none text-xl text-[var(--color-text-main)] placeholder:text-[var(--color-text-muted)] rounded-none"></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-12 py-5 bg-[var(--color-text-main)] text-[var(--color-bg-light)] font-bold uppercase tracking-widest text-[11px] hover:opacity-80 transition-opacity flex items-center justify-center gap-4">
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
