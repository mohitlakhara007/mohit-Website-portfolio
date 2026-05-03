import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/layout/ThemeToggle';
import AudioPlayer from '../components/layout/AudioPlayer';
import Preloader from '../components/layout/Preloader';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import CurrentProject from '../components/sections/CurrentProject';
import FeaturedWork from '../components/sections/FeaturedWork';
import Contact from '../components/sections/Contact';
import AIAssistant from '../components/AIAssistant';
import BackgroundWaves from '../components/layout/BackgroundWaves';

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
      <BackgroundWaves />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <CurrentProject />
        <FeaturedWork />
        <Contact />
      </main>
      
      {/* Controls Container - Bottom Left on Mobile, Bottom Right on Desktop */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-[calc(1.5rem+4rem+12px)] xl:right-[5.5rem] z-[100] flex items-center gap-3 pointer-events-auto">
        <ThemeToggle />
        <AudioPlayer />
      </div>

      {/* AI Assistant - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-end pointer-events-auto">
        <AIAssistant />
      </div>
      
      <Footer />
    </div>
  );
}
