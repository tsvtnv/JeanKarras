/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, ChevronRight, Trophy, Zap, Target, ShieldCheck } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar = ({ activeSection, onNavClick }: { activeSection: string, onNavClick: (id: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavClick('home')}
        >
          <span className="text-2xl font-display font-black tracking-tighter italic">
            JEAN<span className="text-primary">KARRAS</span>
          </span>
          <div className="h-6 w-[2px] bg-primary rotate-12 mx-1" />
          <span className="text-sm font-bold text-muted">#14</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <motion.button
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onNavClick(item.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                activeSection === item.href ? 'text-primary' : 'text-accent'
              }`}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
            onClick={() => onNavClick('contact')}
          >
            Partner
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    onNavClick(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-bold uppercase tracking-widest ${
                    activeSection === item.href ? 'text-primary' : 'text-accent'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = ({ onCtaClick }: { onCtaClick: (id: string) => void }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/285A2248.jpg" 
          alt="Jean Karras Racing"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Trophy size={14} /> 2025 Greek Senior Champion
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-6 italic">
            JEAN <br />
            <span className="text-gradient">KARRAS</span>
          </h1>
          
          <p className="text-muted text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
            Precision. Speed. Championship mentality. <br />
            The future of Greek motorsport, driven by performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => onCtaClick('career')}
              className="group bg-white text-background px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
            >
              View Career <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onCtaClick('sponsors')}
              className="px-8 py-4 rounded-full font-bold uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all"
            >
              Partner With Jean
            </button>
          </div>
        </motion.div>
      </div>

      {/* Racing Number Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute right-[-5%] bottom-[-5%] pointer-events-none select-none"
      >
        <span className="text-[40vw] font-display font-black italic leading-none">14</span>
      </motion.div>
    </section>
  );
};

export const ChampionBadge = () => (
  <div className="relative inline-block">
    <div className="absolute inset-0 bg-primary blur-2xl opacity-20 animate-pulse" />
    <div className="relative glass-card px-6 py-8 text-center border-primary/20">
      <Trophy className="text-primary mx-auto mb-4" size={48} />
      <h3 className="text-2xl mb-1">Champion</h3>
      <p className="text-muted text-xs uppercase tracking-widest">2025 Greek Senior</p>
    </div>
  </div>
);

export const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="glass-card p-6 hover:border-primary/30 transition-colors group">
    <p className="text-muted text-xs uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{label}</p>
    <p className="text-2xl font-display font-bold">{value}</p>
  </div>
);

export const Footer = ({ onNavClick }: { onNavClick: (id: string) => void }) => (
  <footer className="bg-surface border-t border-border pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-display font-black tracking-tighter italic">
              JEAN<span className="text-primary">KARRAS</span>
            </span>
          </div>
          <p className="text-muted max-w-sm mb-8 leading-relaxed">
            Jean Karras is a competitive racing driver focused on high-level performance, progression, and championship-winning results.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/jean_karras14" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
              <Instagram size={20} className="group-hover:text-white" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm mb-6 text-muted">Navigation</h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <button 
                  onClick={() => onNavClick(item.href)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm mb-6 text-muted">Contact</h4>
          <p className="text-sm mb-2">Athens, Greece</p>
          <p className="text-sm mb-6">kristiyan@tsvweb.com</p>
          <button 
            onClick={() => onNavClick('contact')}
            className="text-xs font-bold uppercase tracking-widest text-primary hover:underline"
          >
            Send a Message
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-border/50">
        <p className="text-xs text-muted">© 2026 Jean Karras Racing. All rights reserved.</p>
        <a
          href="https://octelis.com?utm_source=client-site&utm_medium=badge&utm_campaign=built-by&utm_content=jean-karras"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted hover:text-accent transition-colors"
        >
          Built by Octelis
        </a>
        <div className="flex gap-8">
          <button className="text-xs text-muted hover:text-accent">Privacy Policy</button>
          <button className="text-xs text-muted hover:text-accent">Terms of Service</button>
        </div>
      </div>
    </div>
  </footer>
);
