'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { Phone, MessageCircle } from 'lucide-react';

export const CTABanner = () => {
  const { lang } = useLanguage();
  const t = content[lang].ctaBanner;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        animate={{
          background: [
            'linear-gradient(135deg, #001D39 0%, #0A4174 50%, #7BBDE8 100%)',
            'linear-gradient(135deg, #7BBDE8 0%, #001D39 50%, #0A4174 100%)',
            'linear-gradient(135deg, #0A4174 0%, #7BBDE8 50%, #001D39 100%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-7xl text-white font-bold mb-8 leading-tight">
            {t.title}
          </h2>
          <p className="font-dm-sans text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            {t.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="tel:+919220384300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-indigo px-10 py-5 rounded-full font-dm-sans font-bold flex items-center justify-center space-x-3 shadow-2xl"
            >
              <Phone size={20} />
              <span>{t.ctaPrimary}</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919220384300"
              target="_blank"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-white text-white px-10 py-5 rounded-full font-dm-sans font-bold flex items-center justify-center space-x-3 backdrop-blur-sm"
            >
              <MessageCircle size={20} />
              <span>{t.ctaSecondary}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
