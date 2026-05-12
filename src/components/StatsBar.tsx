'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

const CountUp = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and surrounding text
  const match = value.match(/([^0-9.]*)([0-9.]+)(.*)/);
  const prefix = match ? match[1] : '';
  const numericValue = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref} className="flex items-baseline justify-center">
      <span>{prefix}</span>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

export const StatsBar = () => {
  const { lang } = useLanguage();
  const stats = content[lang].stats;

  return (
    <section className="relative z-20 bg-gradient-to-r from-sky via-indigo to-abyss py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-2 group-hover:scale-110 transition-transform duration-500">
                <CountUp value={stat.value} />
              </div>
              <span className="editorial-subheader !text-white/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
