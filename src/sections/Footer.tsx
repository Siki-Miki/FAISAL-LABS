import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, rgba(56,139,255,0.2) 0%, transparent 70%)' }}
      />

      <div className="container-main relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h3
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-foreground mb-4 cursor-default"
            >
              FAISAL <span className="text-primary">LABS</span>
            </motion.h3>
            <p className="text-primary/100 max-w-sm mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                           hover:bg-primary/30 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5 text-text" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                           hover:bg-primary/30 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5 text-text" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                           hover:bg-primary/30 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5 text-text" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Team'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {['FAQ', 'Contact', 'Research', 'Careers'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text/60">
            {t('footer.rights')}
          </p>

          <div className="flex items-center gap-6">
            <button className="text-sm text-text/60 hover:text-primary transition-colors duration-300">
              {t('footer.links.privacy')}
            </button>
            <button className="text-sm text-text/60 hover:text-primary transition-colors duration-300">
              {t('footer.links.terms')}
            </button>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center
                         hover:bg-primary/30 transition-colors duration-300 ml-4"
              aria-label={t('scrollToTop')}
            >
              <FiArrowUp className="w-5 h-5 text-[#A9D2FF]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
