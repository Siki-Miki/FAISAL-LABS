import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer'),
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer'),
    },
    {
      question: t('faq.questions.q5.question'),
      answer: t('faq.questions.q5.answer'),
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative" ref={ref}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#388BFF] mb-4">
              {t('faq.label')}
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              style={{ letterSpacing: '-1.5px' }}
            >
              {t('faq.title')}
            </h2>
          </motion.div>

          {/* Right - Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {questions.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-foreground font-medium pr-4 group-hover:text-[#388BFF] transition-colors duration-300">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-[#388BFF] text-foreground'
                        : 'bg-[#388BFF]/10 text-[#388BFF]'
                    }`}
                  >
                    {openIndex === index ? (
                      <FiMinus className="w-4 h-4" />
                    ) : (
                      <FiPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="h-px bg-[#388BFF]/10 mb-4" />
                        <p className="text-sm text-[#A9D2FF] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
