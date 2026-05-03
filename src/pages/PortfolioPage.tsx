import { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/layout/ThemeToggle';
import AudioPlayer from '../components/layout/AudioPlayer';
import BackgroundWaves from '../components/layout/BackgroundWaves';
import Preloader from '../components/layout/Preloader';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';

// Lazy load heavy components
const SocialMediaCarousel = lazy(() => import('../components/sections/SocialMediaCarousel'));
const CarouselPostSection = lazy(() => import('../components/sections/CarouselPostSection'));
const ThumbnailCarouselSection = lazy(() => import('../components/sections/ThumbnailCarouselSection'));
const MotionGraphicsSection = lazy(() => import('../components/sections/MotionGraphicsSection'));
const LogofolioSection = lazy(() => import('../components/sections/LogofolioSection'));

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only allow this page to be viewable on tablet (768px) and desktop. 
    // On mobile, redirect to home page #work section.
    if (window.innerWidth < 768) {
      navigate('/#work', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="bg-[var(--color-bg-light)] min-h-screen text-[var(--color-text-main)] font-sans relative selection:bg-[var(--color-text-main)] selection:text-[var(--color-bg-light)] transition-colors duration-500">
      <SEO 
        title="Portfolio | UI UX & Graphic Designer in USA and India | Mohit Lakhara"
        description="Explore the design portfolio of Mohit Lakhara, featuring top-tier UI/UX and Graphic Design projects for clients across the USA and India."
      />
      <BackgroundWaves />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        <div className="sr-only">
           <h1>Design Portfolio - Top UI/UX & Graphic Designer works for USA and India</h1>
        </div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <Suspense fallback={<div className="h-[50vh] flex items-center justify-center opacity-0 w-full" />}>
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

      <Footer />
    </div>
  );
}
