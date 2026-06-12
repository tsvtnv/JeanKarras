/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, Hero, Footer } from './components/Layout';
import { AboutSection, CareerSection, GallerySection, SponsorsSection, ContactSection } from './components/Sections';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [maintenance, setMaintenance] = useState<boolean | null>(null)
  useEffect(() => {
    fetch('https://app.octelis.com/api/monitor/status/jeankarras.com')
      .then(r => r.ok ? r.json() : { maintenanceMode: false })
      .then((d: { maintenanceMode: boolean }) => setMaintenance(d.maintenanceMode))
      .catch(() => setMaintenance(false))
  }, [])
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'career', 'gallery', 'sponsors', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (maintenance) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', backgroundColor: '#f8f8f8', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', color: '#111' }}>Down for maintenance</h1>
      <p style={{ color: '#666', maxWidth: '400px' }}>jeankarras.com is temporarily offline. We&apos;ll be back shortly.</p>
      <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#aaa' }}>Managed by <a href="https://octelis.com" style={{ color: '#b8622a' }}>Octelis</a></p>
    </div>
  )

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      <main>
        <Hero onCtaClick={scrollToSection} />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AboutSection />
          <CareerSection />
          <GallerySection />
          <SponsorsSection />
          
          {/* CTA Banner */}
          <section className="py-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 racing-grid" />
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-2 italic">Interested in partnering?</h2>
                <p className="text-white/80 font-medium">Support a driven athlete with championship-level ambition.</p>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-background hover:text-white transition-all"
              >
                Get In Touch
              </button>
            </div>
          </section>

          <ContactSection />
        </motion.div>
      </main>

      <Footer onNavClick={scrollToSection} />
    </div>
  );
}
