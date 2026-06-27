import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Technologies from '@/sections/Technologies';
import Statistics from '@/sections/Statistics';
import Projects from '@/sections/Projects';
import Team from '@/sections/Team';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollProgress />
        <Navigation />

        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Technologies />
          <Statistics />
          <Projects />
          <Team />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
