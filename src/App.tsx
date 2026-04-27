import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SiteControls from './components/layout/SiteControls';
import Preloader from './components/layout/Preloader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import FeaturedWork from './components/sections/FeaturedWork';
import Contact from './components/sections/Contact';

export default function App() {
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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <SiteControls />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

