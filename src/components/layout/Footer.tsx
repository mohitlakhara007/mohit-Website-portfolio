import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[var(--color-text-main)] text-[var(--color-bg-light)] relative z-10 mt-[-2rem] border-t border-[var(--color-bg-light)]/20">
      
      {/* Huge Marquee / Heading */}
      <div className="w-full border-b border-[var(--color-bg-light)]/20 py-12 md:py-24 overflow-hidden relative group cursor-pointer" onClick={() => window.location.href = '#contact'}>
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-text-main)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-text-main)] to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 pr-12">
                   <span className="text-[12vw] md:text-[8vw] font-display font-medium uppercase tracking-tighter leading-none hover:italic transition-all duration-300">
                     HAVE AN IDEA?
                   </span>
                   <span className="text-[12vw] md:text-[8vw] font-display font-black uppercase tracking-tighter leading-none text-transparent italic" style={{ WebkitTextStroke: '2px var(--color-bg-light)' }}>
                     LET'S TALK.
                   </span>
                </div>
            ))}
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 max-w-[1600px] mx-auto w-full">
         
         {/* About / Status - 4 cols */}
         <div className="md:col-span-4 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[var(--color-bg-light)]/20 flex flex-col justify-between md:h-auto gap-12">
            <div>
               <div className="flex items-center gap-3 mb-6 bg-[var(--color-bg-light)]/10 w-max px-4 py-2 rounded-full border border-[var(--color-bg-light)]/10">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Available for Work</span>
               </div>
               <p className="text-sm opacity-60 leading-relaxed font-medium">Design isn't just about making things look good. It's about problem-solving, communication, and creating an experience. Let's build something exceptional.</p>
            </div>

            <div>
               <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 block mb-2">Local Time & Location</span>
               <div className="text-sm font-mono font-medium tracking-tight">
                 {time} <span className="opacity-50 ml-2">IND</span>
               </div>
            </div>
         </div>

         {/* Navigation - 4 cols */}
         <div className="md:col-span-4 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[var(--color-bg-light)]/20 flex flex-col justify-between gap-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 block">Index</span>
            
            <ul className="flex flex-col gap-4">
               {[
                 { name: 'Home', href: '/#home' },
                 { name: 'About', href: '/#about' },
                 { name: 'Portfolio', href: '/portfolio' },
                 { name: 'Featured', href: '/#featured' }
               ].map(item => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-2xl md:text-3xl font-display font-medium uppercase tracking-tight hover:italic hover:translate-x-2 transition-all duration-300 w-max inline-block pr-4">
                      {item.name}
                    </Link>
                  </li>
               ))}
            </ul>
         </div>

         {/* Contact & Socials - 4 cols */}
         <div className="md:col-span-4 p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 block">Connect</span>
            
            <ul className="flex flex-col gap-4">
               {[
                 { name: 'Email', url: '#contact' },
                 { name: 'Instagram', url: 'https://www.instagram.com/mohitdznr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                 { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lakhara-mohit-45260a336' },
                 { name: 'Behance', url: 'https://www.behance.net/mohitlakharadesigner' },
               ].map((social) => (
                  <li key={social.name}>
                    <a href={social.url} target={social.name === 'Email' ? undefined : "_blank"} rel="noopener noreferrer" className="text-2xl md:text-3xl font-display font-medium uppercase tracking-tight group flex items-center justify-between transition-all duration-300">
                      <span className="group-hover:italic">{social.name}</span>
                      <ArrowUpRight strokeWidth={1.5} className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </a>
                  </li>
               ))}
            </ul>
         </div>

      </div>

      {/* Extreme minimal bottom footer */}
      <div className="border-t border-[var(--color-bg-light)]/20 py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
         <Link to="/" className="hover:opacity-70 transition-opacity">
           <span>&copy; {new Date().getFullYear()} MOHIT LAKHARA</span>
         </Link>
         <span>DEVELOPED BY MOHIT</span>
      </div>
    </footer>
  );
}
