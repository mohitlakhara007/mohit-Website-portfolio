import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollPath from './components/layout/ScrollPath';
import FluidBackground from './components/layout/FluidBackground';
import FloatingControls from './components/layout/FloatingControls';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import FeaturedWork from './components/sections/FeaturedWork';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="bg-transparent min-h-screen text-[var(--color-text-main)] font-sans relative">
      <FluidBackground />
      <ScrollPath />
      <FloatingControls />
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

