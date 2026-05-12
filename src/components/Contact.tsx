'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/lib/content';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export const Contact = () => {
  const { lang } = useLanguage();
  const t = content[lang].contact;
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', city: '', message: '' });

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-abyss overflow-hidden">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-sky/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-indigo/30 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-10">
              {t.title}
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={t.fields.name}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky/60 focus:ring-1 focus:ring-sky/60 transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder={t.fields.phone}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky/60 focus:ring-1 focus:ring-sky/60 transition-all"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder={t.fields.email}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky/60 focus:ring-1 focus:ring-sky/60 transition-all"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
              <input
                type="text"
                placeholder={t.fields.city}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky/60 focus:ring-1 focus:ring-sky/60 transition-all"
                value={formState.city}
                onChange={(e) => setFormState({ ...formState, city: e.target.value })}
              />
              <textarea
                placeholder={t.fields.message}
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky/60 focus:ring-1 focus:ring-sky/60 transition-all"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-sky to-indigo text-white font-dm-sans font-bold text-lg shadow-xl"
              >
                {t.submit}
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Cards */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 group hover:border-sky/40 transition-all">
                <Phone className="text-sky mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="editorial-subheader tracking-widest text-xs text-white/40 uppercase tracking-widest mb-4">Call Us</h3>
                {t.info.phones.map(phone => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-white font-dm-sans text-lg hover:text-sky transition-colors mb-2">
                    {phone}
                  </a>
                ))}
              </div>

              {/* Email Card */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 group hover:border-sky/40 transition-all">
                <Mail className="text-sky mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="editorial-subheader tracking-widest text-xs text-white/40 uppercase tracking-widest mb-4">Email</h3>
                <a href={`mailto:${t.info.email}`} className="text-white font-dm-sans text-lg hover:text-sky transition-colors break-all">
                  {t.info.email}
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 group hover:border-sky/40 transition-all">
              <MapPin className="text-sky mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="editorial-subheader tracking-widest text-xs text-white/40 uppercase tracking-widest mb-4">Visit Our Office</h3>
              <p className="text-white font-dm-sans text-xl leading-relaxed">
                {t.info.address}
              </p>
            </div>

            <div className="flex items-center justify-between p-8 rounded-2xl bg-white/10 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white font-dm-sans font-medium">{t.info.hours}</span>
              </div>
              <a href="https://instagram.com/blueskyrealtech" target="_blank" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
