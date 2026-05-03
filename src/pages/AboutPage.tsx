import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ThemeToggle from '../components/layout/ThemeToggle';
import AudioPlayer from '../components/layout/AudioPlayer';
import About from '../components/sections/About';
import BackgroundWaves from '../components/layout/BackgroundWaves';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow this page to be viewable on tablet (768px) and desktop.
    // On mobile, redirect to home page #about section.
    if (window.innerWidth < 768) {
      navigate('/#about', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="bg-[var(--color-bg-light)] min-h-screen text-[var(--color-text-main)] font-sans relative selection:bg-[var(--color-text-main)] selection:text-[var(--color-bg-light)] transition-colors duration-500">
      <SEO 
        title="About Mohit Lakhara | UI UX Designer USA & India"
        description="Learn more about Mohit Lakhara, a passionate UI/UX and Graphic Designer based in India, delivering modern design solutions to clients globally, including the USA."
      />
      <BackgroundWaves />
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        <div className="sr-only">
           <h1>About Mohit Lakhara - Freelance UI/UX & Graphic Designer in India and USA</h1>
        </div>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <About />
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
