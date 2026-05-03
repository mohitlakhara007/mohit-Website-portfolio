import { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/layout/ThemeToggle';
import AudioPlayer from '../components/layout/AudioPlayer';
import AIAssistant from '../components/AIAssistant';
import BackgroundWaves from '../components/layout/BackgroundWaves';
import { motion } from 'motion/react';

// Lazy load heavy components
const SocialMediaCarousel = lazy(() => import('../components/sections/SocialMediaCarousel'));
const CarouselPostSection = lazy(() => import('../components/sections/CarouselPostSection'));
const ThumbnailCarouselSection = lazy(() => import('../components/sections/ThumbnailCarouselSection'));
const MotionGraphicsSection = lazy(() => import('../components/sections/MotionGraphicsSection'));
const LogofolioSection = lazy(() => import('../components/sections/LogofolioSection'));

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
          <Suspense fallback={<div className="h-[50vh] flex items-center justify-center opacity-50">Loading sections...</div>}>
            <SocialMediaCarousel />
            <CarouselPostSection />
            <ThumbnailCarouselSection />
            <MotionGraphicsSection />
            <LogofolioSection />
          </Suspense>
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
