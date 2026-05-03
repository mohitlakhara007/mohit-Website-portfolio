import { motion } from 'motion/react';
import { Mail, Phone, Instagram, ArrowRight } from 'lucide-react';
import { PiPaperPlaneRightFill } from "react-icons/pi";
import React, { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMsg('Error submitting form. Please try later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="flex flex-col gap-8 w-full">
            <a href="mailto:mohitdznr@gmail.com" className="group block w-full border-b border-[var(--color-text-main)] pb-6 hover:opacity-70 transition-opacity">
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <p className="text-[10px] text-[var(--color-text-main)] font-bold tracking-[0.2em] uppercase mb-2">Email</p>
                  <p className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium tracking-tight break-all">mohitdznr@gmail.com</p>
                </div>
                <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform mt-1 flex-shrink-0" />
              </div>
            </a>
            <a href="tel:+918799179784" className="group block w-full border-b border-[var(--color-text-main)] pb-6 hover:opacity-70 transition-opacity">
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <p className="text-[10px] text-[var(--color-text-main)] font-bold tracking-[0.2em] uppercase mb-2">Phone</p>
                  <p className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium tracking-tight break-all">+91 8799179784</p>
                </div>
                <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform mt-1 flex-shrink-0" />
              </div>
            </a>
            <a href="https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="group block w-full border-b border-[var(--color-text-main)] pb-6 hover:opacity-70 transition-opacity">
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <p className="text-[10px] text-[var(--color-text-main)] font-bold tracking-[0.2em] uppercase mb-2">Instagram</p>
                  <p className="text-lg md:text-2xl text-[var(--color-text-main)] font-medium tracking-tight break-all">@mohitdznr</p>
                </div>
                <ArrowRight className="text-[var(--color-text-main)] transform group-hover:translate-x-2 transition-transform mt-1 flex-shrink-0" />
              </div>
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
             visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
          }}
          className="xl:w-[60%] w-full"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } } }}
            className="border border-[var(--color-text-main)] bg-[var(--color-bg-light)] p-8 md:p-16 w-full shadow-2xl shadow-[var(--color-text-main)]/5"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl lg:text-4xl font-display font-bold text-[var(--color-text-main)] mb-4 uppercase"
                >
                  Message Sent
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[var(--color-text-muted)] text-lg mb-8"
                >
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setIsSuccess(false)} 
                  className="px-8 py-3 border border-[var(--color-text-main)] text-[var(--color-text-main)] font-bold uppercase tracking-widest text-[11px] hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg-light)] transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
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

                {errorMsg && (
                  <p className="text-red-500 mb-6 text-sm">{errorMsg}</p>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-12 py-5 bg-[var(--color-text-main)] text-[var(--color-bg-light)] font-bold uppercase tracking-widest text-[11px] hover:opacity-80 transition-opacity flex items-center justify-center gap-4 disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Submit Message'}
                  {!isSubmitting && <PiPaperPlaneRightFill size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
