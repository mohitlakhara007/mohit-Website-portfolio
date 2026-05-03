import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/layout/ThemeToggle';
import AudioPlayer from '../components/layout/AudioPlayer';
import Preloader from '../components/layout/Preloader';
import Hero from '../components/sections/Hero';
import BackgroundWaves from '../components/layout/BackgroundWaves';
import SEO from '../components/SEO';

// Lazy load below-the-fold sections for better performance
const About = lazy(() => import('../components/sections/About'));
const Portfolio = lazy(() => import('../components/sections/Portfolio'));
const CurrentProject = lazy(() => import('../components/sections/CurrentProject'));
const FeaturedWork = lazy(() => import('../components/sections/FeaturedWork'));
const Contact = lazy(() => import('../components/sections/Contact'));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="bg-[var(--color-bg-light)] min-h-screen text-[var(--color-text-main)] font-sans relative selection:bg-[var(--color-text-main)] selection:text-[var(--color-bg-light)] transition-colors duration-500">
      <SEO 
        title="Mohit Lakhara | UI UX Designer in USA and India | Graphic Designer India"
        description="Mohit Lakhara is a top-rated freelance UI/UX Designer and Graphic Designer serving clients in the USA and India. Elevate your brand with user-centered digital experiences."
      />
      <BackgroundWaves />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-[50vh] flex items-center justify-center opacity-50">Loading...</div>}>
          <About />
          <Portfolio />
          <CurrentProject />
          <FeaturedWork />
          <Contact />
        </Suspense>
      </main>
      
      {/* Controls Container - Bottom Left on Mobile, Bottom Right on Desktop */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-[calc(1.5rem+4rem+12px)] xl:right-[5.5rem] z-[100] flex items-center gap-3 pointer-events-auto">
        <ThemeToggle />
        <AudioPlayer />
      </div>
      
      <Footer />
    </div>
  );
}
