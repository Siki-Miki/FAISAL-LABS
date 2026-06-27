import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  duration = 2,
  isInView,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function (ease out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Statistics: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 47, suffix: '+', label: t('statistics.projects') },
    { value: 99.9, suffix: '%', label: t('statistics.uptime') },
    { value: 15, suffix: ' min', label: t('statistics.response') },
    { value: 23, suffix: '', label: t('statistics.countries') },
  ];

  return (
    <section id="statistics" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(56,139,255,0.03) 50%, transparent 100%)',
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4"
          >
            {t('statistics.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            style={{ letterSpacing: '-1.5px' }}
          >
            {t('statistics.title')}
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="text-center glass-card rounded-2xl p-8 md:p-10 group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue mb-3">
                {stat.value === 99.9 ? (
                  <>
                    <AnimatedCounter end={99} isInView={isInView} duration={2} />
                    .9{stat.suffix}
                  </>
                ) : (
                  <>
                    <AnimatedCounter end={stat.value} isInView={isInView} duration={2} />
                    {stat.suffix}
                  </>
                )}
              </div>
              <p className="text-sm text-text uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
