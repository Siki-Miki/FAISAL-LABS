import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCpu, FiSearch, FiLayers, FiHeadphones } from 'react-icons/fi';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = [
    {
      icon: FiCpu,
      title: t('whyUs.items.aiPowered.title'),
      description: t('whyUs.items.aiPowered.description'),
    },
    {
      icon: FiSearch,
      title: t('whyUs.items.expertise.title'),
      description: t('whyUs.items.expertise.description'),
    },
    {
      icon: FiLayers,
      title: t('whyUs.items.scalable.title'),
      description: t('whyUs.items.scalable.description'),
    },
    {
      icon: FiHeadphones,
      title: t('whyUs.items.support.title'),
      description: t('whyUs.items.support.description'),
    },
  ];

  return (
    <section id="why-us" className="section-padding relative" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
            >
              {t('whyUs.label')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              style={{ letterSpacing: '-1.5px' }}
            >
              {t('whyUs.title')}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-end"
          >
            <p className="text-lg text-primary lg:pb-2">
              {t('whyUs.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="group"
            >
              <div className="flex gap-6 p-6 rounded-xl transition-all duration-300 hover:bg-primary/10">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-[primary]/5
                              flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10
                              transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-[primary] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {index < items.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-[#388BFF]/20 to-transparent mt-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
