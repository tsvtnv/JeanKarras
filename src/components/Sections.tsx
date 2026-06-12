/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { CAREER_TIMELINE, ACHIEVEMENTS, GALLERY, SPONSORS, DRIVER_STATS } from '../constants';
import { StatCard, ChampionBadge } from './Layout';
import { Trophy, Calendar, MapPin, Flag, ChevronRight, Zap } from 'lucide-react';

export const AboutSection = () => (
  <section id="about" className="py-32 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5]">
            <img 
              src="/JeanPaulKarrasF4SpainBarcelona-SUNDAY-9.jpg" 
              alt="Jean Karras Portrait"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 z-20 hidden md:block">
            <ChampionBadge />
          </div>
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-8">Built for <span className="text-primary">Competition</span></h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Jean Karras is a competitive racing driver focused on high-level performance, progression, and championship-winning results. His journey began with a passion for speed and has evolved into a disciplined pursuit of motorsport excellence.
          </p>
          <p className="text-muted text-lg mb-12 leading-relaxed">
            With a background in both Greek and French cultures, Jean brings a unique international perspective to his racing. His 2025 Greek Senior Championship title is just the beginning of what promises to be a remarkable career in the world of professional motorsport.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {DRIVER_STATS.map((stat, idx) => (
              <StatCard key={idx} label={stat.label} value={stat.value} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team / Behind the Scenes Mini Gallery */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden aspect-video relative group"
        >
          <img src="/KARRAS_F4CHESTE_1025_D-MD.6.jpg" alt="Grid Preparation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
            <p className="text-xs font-bold uppercase tracking-widest">Technical Excellence</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden aspect-video relative group"
        >
          <img src="/BA8A8633.jpg" alt="Pit Lane Strategy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
            <p className="text-xs font-bold uppercase tracking-widest">Race Strategy</p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden aspect-video relative group"
        >
          <img src="/122A0674.jpg" alt="Garage Preparation" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
            <p className="text-xs font-bold uppercase tracking-widest">Peak Preparation</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const CareerSection = () => (
  <section id="career" className="py-32 bg-surface/30 racing-grid">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl mb-6">Racing <span className="text-primary">Journey</span></h2>
        <p className="text-muted max-w-2xl mx-auto">From the first time behind the wheel to national championships, follow the progression of Jean Karras.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {CAREER_TIMELINE.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-8 items-start hover:border-primary/20 transition-all"
            >
              <div className="text-primary font-display font-bold text-3xl italic">{milestone.year}</div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10">{milestone.category}</span>
                  <h3 className="text-xl">{milestone.title}</h3>
                </div>
                <p className="text-muted leading-relaxed">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl mb-6 flex items-center gap-2">
              <Trophy className="text-primary" size={20} /> Key Results
            </h3>
            <div className="space-y-6">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{ach.year}</span>
                    <span className="text-xs font-medium text-muted">{ach.category}</span>
                  </div>
                  <p className="font-bold">{ach.title}</p>
                  <p className="text-sm text-muted italic">{ach.result}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl mb-4">Current Season</h3>
            <p className="text-muted text-sm mb-6">Competing in the 2026 European Karting Series and preparing for Formula 4 transition.</p>
            <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group">
              Full Calendar <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);
  const FILTERS = ['All', 'Action', 'Podium', 'Portrait', 'Behind the Scenes'];

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'All') return GALLERY;
    return GALLERY.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const visibleItems = filteredGallery.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGallery.length;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(12);
  };

  return (
    <section id="gallery" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl mb-4">Race <span className="text-primary">Highlights</span></h2>
            <p className="text-muted">Visual storytelling from the track and beyond.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border transition-colors ${
                  activeFilter === filter
                    ? 'border-primary bg-primary text-white'
                    : 'border-border hover:border-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.05, 0.3) }}
              className={`relative group overflow-hidden rounded-2xl ${idx % 5 === 1 ? 'md:row-span-2' : ''}`}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-xl font-display">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="px-10 py-4 rounded-full font-bold uppercase tracking-widest border border-border hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              Show More Photos
            </button>
          </div>
        )}

        {/* Video Highlights Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl mb-4">Video <span className="text-primary">Highlights</span></h3>
            <p className="text-muted">Onboard footage and race recaps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card aspect-video overflow-hidden relative group">
              <img src="/GK__5290.jpg" alt="Karting Action" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform">
                  <Zap size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Onboard</p>
                <h4 className="text-xl">Lap Record at Serres Circuit</h4>
              </div>
            </div>
            <div className="glass-card aspect-video overflow-hidden relative group">
              <img src="/285A1888.jpg" alt="F4 Race Start" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform">
                  <Zap size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Recap</p>
                <h4 className="text-xl">2025 Championship Season Highlights</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SponsorsSection = () => (
  <section id="sponsors" className="py-32 bg-surface/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">Partnership <span className="text-primary">Opportunities</span></h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Join a journey of excellence. Jean Karras offers brands a unique opportunity to align with a high-potential athlete in the fast-paced world of motorsport.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              'Champion-level credibility',
              'Strong visual brand identity',
              'Growing international audience',
              'Professional brand representation'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-primary/90 transition-all">
            Download Partnership Deck
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {SPONSORS.map((sponsor, idx) => (
            <div key={idx} className="glass-card p-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="max-h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const ContactSection = () => (
  <section id="contact" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="glass-card p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-1/4" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl mb-8 italic">GET IN <span className="text-primary">TOUCH</span></h2>
            <p className="text-muted text-lg mb-12">
              Interested in partnering, media inquiries, or just want to follow the journey? Send a message and we'll get back to you soon.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest">Location</p>
                  <p className="font-bold">Athens, Greece / Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Flag size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest">Racing Number</p>
                  <p className="font-bold">#14</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Email</label>
                <input type="email" className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors" placeholder="Your Email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Subject</label>
              <input type="text" className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors" placeholder="Partnership Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Message</label>
              <textarea rows={5} className="w-full bg-background border border-border rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors resize-none" placeholder="How can we work together?"></textarea>
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
