import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import FeaturedWork from './components/sections/FeaturedWork';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="bg-[var(--color-bg-light)] min-h-screen text-[var(--color-text-main)] font-sans relative">
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

