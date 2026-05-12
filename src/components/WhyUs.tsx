'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';

interface WhyItem {
  title: string;
  desc: string;
  icon: string;
  image: string;
}

const Card = ({ item, index, progress, total }: { item: WhyItem, index: number, progress: any, total: number }) => {
  const scale = useTransform(progress, [index * (1 / total), 1], [1, 1 - (total - index) * 0.05]);
  
  return (
    <div className="sticky top-24 md:top-32 h-[70vh] md:h-[60vh] flex items-center justify-center mb-12 last:mb-0">
      <motion.div
        style={{ scale }}
        className="relative w-full h-full bg-white rounded-[2.5rem] border border-sky/10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden" />
          
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
            <span className="w-12 h-12 md:w-16 md:h-16 rounded-2xl glass flex items-center justify-center text-2xl md:text-3xl shadow-xl">
              {item.icon}
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center">
          <span className="editorial-subheader tracking-widest text-xs md:text-sm tracking-[0.3em] text-indigo/40 uppercase mb-4 block">
            Reason 0{index + 1}
          </span>
          <h3 className="font-playfair text-3xl md:text-5xl font-bold text-abyss mb-6 leading-tight">
            {item.title}
          </h3>
          <p className="font-dm-sans text-lg text-abyss/60 leading-relaxed font-light">
            {item.desc}
          </p>
          
          <div className="mt-8 flex items-center space-x-4">
            <div className="w-12 h-px bg-indigo/20" />
            <span className="editorial-subheader tracking-widest text-[10px] uppercase tracking-widest text-indigo/40">Blue-Sky Exclusive</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const WhyUs = () => {
  const { lang } = useLanguage();
  const t = content[lang].whyUs;
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="why-us" className="relative py-24 bg-ice min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-24 sticky top-12 md:top-16 z-0">
          <h2 className="font-playfair text-4xl md:text-7xl text-abyss font-bold drop-shadow-sm">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo to-sky mx-auto mt-6" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto mt-20">
          {t.items.map((item: any, i: number) => (
            <Card 
              key={i} 
              item={item} 
              index={i} 
              progress={scrollYProgress} 
              total={t.items.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
