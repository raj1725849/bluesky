'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="relative bg-abyss pt-24 pb-12 overflow-hidden">
      {/* Layer 1: Background Image Backdrop */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/antigravity/hero-image.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-abyss/80" />
      </div>

      {/* Layer 2: Giant Brand Watermark */}
      <div className="absolute bottom-[-5%] left-0 w-full z-0 select-none pointer-events-none opacity-50 overflow-hidden">
        <h2 className="font-playfair font-bold text-[10vw] lg:text-[14vw] text-center text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '1px rgba(151, 125, 255, 0.2)' }}>
          BLUE-SKY REALTECH
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-playfair font-bold text-3xl gradient-text leading-tight tracking-tight">
                BLUE-SKY
              </span>
              <span className="editorial-subheader tracking-\[0.4em\] -mt-1">
                REALTECH
              </span>
            </div>
            <p className="font-dm-sans text-white/50 text-sm leading-relaxed mb-8 italic">
              {content.EN.tagline} <br />
              {content.HI.tagline}
            </p>
            <div className="flex items-center space-x-6 text-white/40">
              <Instagram size={20} className="hover:text-sky transition-colors cursor-pointer" />
              <Facebook size={20} className="hover:text-sky transition-colors cursor-pointer" />
              <Twitter size={20} className="hover:text-sky transition-colors cursor-pointer" />
              <Linkedin size={20} className="hover:text-sky transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat tracking-widest text-xs text-white/30 uppercase tracking-[0.2em] mb-8">Navigation</h3>
            <ul className="space-y-4 font-dm-sans text-white/70">
              <li><a href="#properties" className="hover:text-sky transition-colors">Properties</a></li>
              <li><a href="#about" className="hover:text-sky transition-colors">About Us</a></li>
              <li><a href="#locations" className="hover:text-sky transition-colors">Locations</a></li>
              <li><a href="#contact" className="hover:text-sky transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-montserrat tracking-widest text-xs text-white/30 uppercase tracking-[0.2em] mb-8">Locations</h3>
            <ul className="space-y-4 font-dm-sans text-white/70 text-sm">
              <li>Sector 18, Noida</li>
              <li>Sector 62, Noida</li>
              <li>Greater Noida West</li>
              <li>Delhi NCR</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-montserrat tracking-widest text-xs text-white/30 uppercase tracking-[0.2em] mb-8">Direct Contact</h3>
            <div className="space-y-4 font-dm-sans text-white/70 text-sm">
              <p>{t.contact.info.address}</p>
              <p>{t.contact.info.phones[0]}</p>
              <p>{t.contact.info.email}</p>
              <div className="pt-4 flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-montserrat tracking-widest text-[10px] text-white/50 tracking-widest uppercase">Always Open</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-dm-sans text-xs text-white/30 tracking-wide">
            © 2026 Blue-Sky Realtech. All rights reserved.
          </p>
          <p className="font-montserrat tracking-widest text-[10px] text-white/20 tracking-[0.4em] uppercase">
            Where Premium Living Meets Infinite Possibility
          </p>
        </div>
      </div>
    </footer>
  );
};
