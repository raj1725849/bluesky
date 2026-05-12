'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

export const Hero = () => {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-abyss">
      {/* Layer 1: Drifting Watermark */}
      <motion.div
        animate={{
          x: [-100, 100],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 z-0 flex items-center justify-center whitespace-nowrap pointer-events-none select-none"
      >
        <span className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-playfair font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(123, 189, 232, 0.1)' }}>
          BLUE-SKY REALTECH
        </span>
      </motion.div>

      {/* Layer 2: Hero Image & Overlay */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/antigravity/hero-image.png"
          alt="Luxury Real Estate"
          fill
          priority
          className="object-cover scale-105"
        />
        {/* Color overlay removed for maximum clarity */}
      </div>

      {/* Layer 3: Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <span className="px-6 py-2 glass rounded-full editorial-subheader">
            {t.label}
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-playfair text-5xl md:text-7xl lg:text-9xl text-white font-bold leading-[1.1] tracking-tight mb-6 drop-shadow-2xl"
        >
          {t.title.split(t.highlight).map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="gradient-text italic font-normal">{t.highlight}</span>
              )}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="font-dm-sans text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-light drop-shadow-lg"
        >
          {content[lang].tagline}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo to-sky text-white px-10 py-5 rounded-full font-dm-sans font-semibold shadow-[0_8px_32px_rgba(0,163,255,0.4)] transition-all"
          >
            {t.ctaPrimary}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border border-white/30 px-10 py-5 rounded-full font-dm-sans font-semibold text-white backdrop-blur-sm bg-white/10 transition-all"
          >
            {t.ctaSecondary}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="editorial-subheader !text-white/60 mb-4">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-sky to-transparent"
        />
      </motion.div>
    </section>
  );
};
