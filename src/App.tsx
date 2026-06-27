import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // 1. هذا الاستيراد هو ما كان ينقصك
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
  const { i18n } = useTranslation(); // 2. هذا السطر يعطيك الوصول للغة الحالية
  const [loading, setLoading] = useState(true);

  // تحديث اتجاه الموقع واللغة تلقائياً
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // تحديد الخط بناءً على اللغة
  const fontClass = i18n.language === 'ar' ? 'font-cairo' : 
                    i18n.language === 'ru' ? 'font-roboto' : 'font-inter';

  useEffect(() => {
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

      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'} ${fontClass}`}>
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