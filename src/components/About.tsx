'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { CheckCircle2, MapPin } from 'lucide-react';

export const About = () => {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky/10 blur-[120px] rounded-full -mr-64 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="editorial-subheader gradient-text mb-4 block">
              {t.label}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {t.title}
            </h2>
            <p className="font-dm-sans text-lg text-abyss/70 leading-relaxed mb-10 font-light">
              {t.body}
            </p>

            <div className="space-y-6 mb-10">
              {t.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-sky/10 flex items-center justify-center text-sky">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-dm-sans font-medium text-abyss/80">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="font-dm-sans font-bold text-sky flex items-center space-x-2 group"
            >
              <span>{t.cta}</span>
              <span className="w-8 h-px bg-sky transition-all group-hover:w-12" />
            </motion.button>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-1 bg-gradient-to-br from-sky via-royal to-indigo rounded-[2rem]">
              <div className="bg-white rounded-[1.9rem] p-8 md:p-12">
                <div className="flex items-start space-x-6 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-abyss flex items-center justify-center text-white shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold mb-2">Our Noida HQ</h3>
                    <p className="font-dm-sans text-abyss/60 text-sm">Wave One Tower, Sector 18, Noida</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {['Noida', 'Delhi', 'Greater Noida', 'Sector 62'].map((loc) => (
                    <div key={loc} className="px-4 py-3 bg-blush rounded-xl text-center editorial-subheader tracking-widest text-xs font-semibold text-abyss/80 uppercase tracking-wider">
                      {loc}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-abyss/5">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-${i+1}00`} />
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-sky flex items-center justify-center text-white text-[10px] font-bold">
                        +500
                      </div>
                    </div>
                    <span className="font-dm-sans text-sm font-medium text-abyss/40">Trusted by Families</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-sky/5 rounded-[2rem] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
