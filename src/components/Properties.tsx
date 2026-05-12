'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface PropertyItem {
  title: string;
  location: string;
  price: string;
  tag: string;
}

export const Properties = () => {
  const { lang } = useLanguage();
  const t = content[lang].properties;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
      },
    },
  };

  return (
    <section id="properties" className="relative py-24 md:py-32 bg-abyss overflow-hidden">
      {/* Mesh Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="editorial-subheader text-sky mb-4 block">
              {t.label}
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl text-white font-bold leading-tight">
              {t.title}
            </h2>
          </div>
          <motion.button
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-dm-sans text-sm hover:bg-white/5 transition-all self-start"
          >
            Browse All Properties
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {t.items.map((item: PropertyItem, i: number) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                {/* Real Project Image */}
                <Image
                  src={`/antigravity/project-${i + 1}.png`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-indigo/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-abyss shadow-2xl"
                  >
                    <ArrowUpRight size={32} />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 glass-dark rounded-full editorial-subheader tracking-widest text-[10px] text-white/90 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 bg-gradient-to-t from-abyss/90 via-transparent to-transparent">
                  <h3 className="font-playfair text-3xl text-white font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-white/60 text-sm mb-4">
                    <MapPin size={14} className="mr-2 text-sky" />
                    {item.location}
                  </div>
                  <div className="text-2xl font-playfair font-bold text-white">
                    {item.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
