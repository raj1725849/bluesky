'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.properties, href: '#properties' },
    { name: t.about, href: '#about' },
    { name: t.locations, href: '#locations' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-abyss/90 backdrop-blur-md border-b border-sky/20 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="font-playfair font-bold text-2xl md:text-3xl gradient-text leading-tight tracking-tight">
              BLUE-SKY
            </span>
            <span className="editorial-subheader tracking-\[0.4em\] -mt-1">
              REALTECH
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-dm-sans text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20">
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full text-xs font-montserrat tracking-widest transition-all ${
                  lang === 'EN' ? 'bg-sky text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('HI')}
                className={`px-3 py-1 rounded-full text-xs font-montserrat tracking-widest transition-all ${
                  lang === 'HI' ? 'bg-sky text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                HI
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-sky to-indigo text-white px-6 py-2.5 rounded-full font-dm-sans text-sm font-semibold shadow-[0_0_30px_rgba(0,51,255,0.3)] hover:shadow-[0_0_30px_rgba(0,51,255,0.5)] transition-all"
            >
              {t.schedule}
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-abyss flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-playfair text-4xl text-white hover:text-sky transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <div className="flex flex-col items-center space-y-6 pt-8">
              <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setLang('EN')}
                  className={`px-6 py-2 rounded-full text-sm font-montserrat tracking-widest ${
                    lang === 'EN' ? 'bg-sky text-white' : 'text-white/60'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('HI')}
                  className={`px-6 py-2 rounded-full text-sm font-montserrat tracking-widest ${
                    lang === 'HI' ? 'bg-sky text-white' : 'text-white/60'
                  }`}
                >
                  HI
                </button>
              </div>
              
              <button className="bg-gradient-to-r from-sky to-indigo text-white px-8 py-4 rounded-full font-dm-sans text-lg font-semibold shadow-2xl">
                {t.schedule}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
