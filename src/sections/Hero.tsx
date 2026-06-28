import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// 1. استدعاء الأنميشن من الملف المشترك
import InteractiveCanvas from './InteractiveCanvas';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  // الكود الجديد
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoaded(true);
  }, 0);
  
  return () => clearTimeout(timer);
}, []);
  return (
    <section 
      id="hero" 
      className="relative w-full h-screen overflow-hidden bg-transparent text-[var(--color-text)] transition-colors duration-500"
    >
      {/* 2. وضع الكومبوننت الجديد هنا ليكون في الخلفية */}
      <InteractiveCanvas />

      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-transparent to-transparent" />

      {/* Content Layer */}
      <div className="relative z-[3] h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--color-primary)] mb-4 md:mb-6 font-semibold"
            >
              FAISAL LABS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--color-text)] leading-[1.05] tracking-tight mb-6 md:mb-8 transition-colors duration-500"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-xl mb-8 md:mb-10 leading-relaxed transition-colors duration-500"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                {t('hero.ctaPrimary')}
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;