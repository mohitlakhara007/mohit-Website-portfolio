import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/layout/ThemeToggle';
import AudioPlayer from '../components/layout/AudioPlayer';
import SocialMediaCarousel from '../components/sections/SocialMediaCarousel';
import CarouselPostSection from '../components/sections/CarouselPostSection';
import ThumbnailCarouselSection from '../components/sections/ThumbnailCarouselSection';
import MotionGraphicsSection from '../components/sections/MotionGraphicsSection';
import LogofolioSection from '../components/sections/LogofolioSection';
import AIAssistant from '../components/AIAssistant';
import BackgroundWaves from '../components/layout/BackgroundWaves';
import { motion } from 'motion/react';

export default function PortfolioPage() {
  useEffect(() => {
    document.title = "Portfolio | Mohit Lakhara";
  }, []);

  return (
    <div className="bg-[var(--color-bg-light)] min-h-screen text-[var(--color-text-main)] font-sans relative selection:bg-[var(--color-text-main)] selection:text-[var(--color-bg-light)] transition-colors duration-500">
      <BackgroundWaves />
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <SocialMediaCarousel />
          <CarouselPostSection />
          <ThumbnailCarouselSection />
          <MotionGraphicsSection />
          <LogofolioSection />
        </motion.div>
      </main>

      {/* Controls Container */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-[calc(1.5rem+4rem+12px)] xl:right-[5.5rem] z-[100] flex items-center gap-3 pointer-events-auto">
        <ThemeToggle />
        <AudioPlayer />
      </div>

      {/* AI Assistant */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-end pointer-events-auto">
        <AIAssistant />
      </div>

      <Footer />
    </div>
  );
}
