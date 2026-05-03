import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const carouselPost1 = [
  { id: 1, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/Mou2J3FiX2KBOmJvxV8u/image.jpg' },
  { id: 2, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/oHuKKPh0Q9PCFBnTo2tA/image.jpg' },
  { id: 3, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/KvtopDJUneHLEdE9fqTv/image.jpg' },
  { id: 4, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/j6gYR1IUUwmgw6775aQ6/image.jpg' },
  { id: 5, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/mGrfE9m55LwN7O900TQe/image.jpg' },
  { id: 6, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/rGdJggG1rj1l8XUpWCk6/image.jpg' },
  { id: 7, src: 'https://plain-apac-prod-public.komododecks.com/202604/30/QW3xyy39s8cfzfYmQSZq/image.jpg' },
];

const carouselPost2 = [
  { id: 1, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/Wu4JyrJqwEbm4yhOHg6T/image.jpg' },
  { id: 2, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/UbBCQ51rIH0Ofpu8J5mU/image.jpg' },
  { id: 3, src: 'https://plain-apac-prod-public.komododecks.com/202605/02/qrlJESuJgfAbrBnGEFR9/image.jpg' },
];

const InstagramCard = ({ images, likes, timeAgo, username = "houseofekta_pr_digital" }: { images: {id: number, src: string}[], likes: string, timeAgo: string, username?: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-[470px] mx-auto border border-[var(--color-text-main)]/20 rounded-[3px] sm:rounded-xl bg-[var(--color-bg-main)] shadow-xl shadow-[var(--color-text-main)]/5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-[var(--color-text-main)]/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px]">
            <div className="w-full h-full rounded-full border-[1.5px] border-[var(--color-bg-main)] overflow-hidden bg-[var(--color-text-muted)]">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f0f0f0" alt="avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm leading-tight text-[var(--color-text-main)]">{username}</div>
            <div className="text-[11px] opacity-70 leading-tight">Sponsored</div>
          </div>
        </div>
        <MoreHorizontal size={20} className="text-[var(--color-text-main)] cursor-pointer" />
      </div>

      {/* Media area */}
      <div className="relative w-full aspect-[4/5] bg-[var(--color-text-muted)]/20 overflow-hidden group">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((item) => (
             <div key={item.id} className="w-full h-full shrink-0 snap-center relative">
               <img src={item.src} className="w-full h-full object-cover" />
             </div>
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 transition-opacity">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Nav arrows */}
        {currentIndex > 0 && (
          <button 
            onClick={scrollLeft} 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ArrowLeft size={16} />
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button 
            onClick={scrollRight} 
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-3 relative">
          <div className="flex gap-4 items-center">
            <Heart size={26} className="text-[var(--color-text-main)] hover:text-red-500 transition-colors cursor-pointer" />
            <MessageCircle size={26} className="text-[var(--color-text-main)] hover:opacity-60 transition-opacity cursor-pointer transform -scale-x-100" />
            <Send size={24} className="text-[var(--color-text-main)] hover:opacity-60 transition-opacity cursor-pointer" />
          </div>
          
          {/* Dots pagination */}
          <div className="flex gap-[4px] absolute left-1/2 -translate-x-1/2">
            {images.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-[6px] rounded-full transition-all duration-300 ${
                   currentIndex === i ? 'w-[6px] bg-[#3897f0]' : 'w-[6px] bg-[var(--color-text-main)]/20'
                 }`} 
               />
            ))}
          </div>
          
          <Bookmark size={26} className="text-[var(--color-text-main)] hover:opacity-60 transition-opacity cursor-pointer" />
        </div>
        
        <div className="font-semibold text-sm mb-1.5 text-[var(--color-text-main)]">{likes} likes</div>
        
        <div className="text-[var(--color-text-main)] opacity-50 text-[10px] mt-2 uppercase tracking-wide font-medium">
          {timeAgo} ago
        </div>
      </div>
    </div>
  );
};

export default function CarouselPostSection() {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col justify-center relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter">
            Carousel <span className="font-bold italic">Posts.</span>
          </h2>
          <p className="text-[var(--color-text-main)] mt-4 md:mt-6 opacity-70 text-sm md:text-base uppercase tracking-[0.2em]">
            Swipeable storytelling & editorial
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16 items-center md:items-start max-w-6xl mx-auto">
          <InstagramCard 
            images={carouselPost1} 
            likes="1,337" 
            timeAgo="2 hours" 
          />
          <InstagramCard 
            images={carouselPost2} 
            likes="892" 
            timeAgo="5 hours" 
          />
        </div>
      </motion.div>
    </section>
  );
}
