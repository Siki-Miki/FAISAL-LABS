import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCpu, FiShield, FiZap } from 'react-icons/fi';

const About: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: FiZap,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc'),
    },
    {
      icon: FiShield,
      title: t('about.values.integrity'),
      description: t('about.values.integrityDesc'),
    },
    {
      icon: FiCpu,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc'),
    },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-main">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
        >
          {t('about.label')}
        </motion.p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              style={{ letterSpacing: '-1.5px' }}
            >
              {t('about.title')}
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pt-4"
          >
            <p className="text-lg text-primary leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              {t('about.mission')}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl font-semibold text-foreground mt-20 mb-10"
        >
          {t('about.values.title')}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3}}
              whileHover={{ y: -5 }}
              className="glass-card rounded-xl p-6 md:p-8 group cursor-default"
            >
             <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
        <value.icon className="w-6 h-6 text-primary" />
            </div>
      <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
