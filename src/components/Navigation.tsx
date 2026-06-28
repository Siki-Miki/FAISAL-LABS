import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentLang = i18n.language;
  const isRTL = currentLang === 'ar';

  const navItems = [
    { key: 'platform', label: t('nav.platform'), href: '#about' },
    { key: 'solutions', label: t('nav.solutions'), href: '#services' },
    { key: 'research', label: t('nav.research'), href: '#projects' },
    { key: 'about', label: t('nav.about'), href: '#team' },
    { key: 'careers', label: t('nav.careers'), href: '#contact' },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'ar', label: 'العربية', flag: 'AR' },
    { code: 'ru', label: 'Русский', flag: 'RU' },
    { code: 'jp', label: '日本語', flag: 'JP' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  const handleLangChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLangDropdownOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-lg shadow-black/5' : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl md:text-2xl font-bold tracking-tight text-text">
                FAISAL <span className="text-primary">LABS</span>
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium uppercase tracking-wider text-text hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full flex items-center justify-center
                           bg-primary/100 hover:bg-transparent transition-colors duration-300"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <FiSun className="w-4 h-4 text-text" />
                ) : (
                  <FiMoon className="w-4 h-4 text-text" />
                )}
              </motion.button>

              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center
                             bg-primary/100 hover:bg-transparent transition-colors duration-300"
                  aria-label="Change language"
                >
                  <FiGlobe className="w-4 h-4 text-text" />
                </motion.button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 right-0 min-w-[140px] rounded-lg overflow-hidden
                                 glass-nav shadow-xl border border-primary/20"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLangChange(lang.code)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200
                                     hover:bg-primary/20 flex items-center gap-3
                                     ${currentLang === lang.code ? 'text-primary bg-primary/10' : 'text-text'}`}
                        >
                          <span className="text-xs font-bold w-6 h-6 rounded-full bg-primary/20 
                                           flex items-center justify-center">
                            {lang.flag}
                          </span>
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex btn-primary text-sm"
              >
                {t('nav.getStarted')}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center
                           bg-primary/100 hover:bg-transparent transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="w-5 h-5 text-text" />
                ) : (
                  <FiMenu className="w-5 h-5 text-text" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 glass-nav lg:hidden"
          >
            <div className="container-main py-8 flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-medium text-text hover:text-primary transition-colors duration-300 text-left"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('#contact')}
                className="btn-primary mt-4 text-center"
              >
                {t('nav.getStarted')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close lang dropdown */}
      {langDropdownOpen && (
        <div
          className="fixed inset-0 z-[45]"
          onClick={() => setLangDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
