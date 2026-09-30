import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutEducation from './components/AboutEducation';
import SkillsProjects from './components/SkillsProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      // 1. Calculate active section
      const scrollPosition = window.scrollY + 140;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      // 2. Calculate top scroll progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 3. Scroll Reveal Handler: Check elements on scroll and trigger observer
    const checkAndObserve = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport or above, show it immediately
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    checkAndObserve();

    // Re-scan when tabs switch or content loads
    const mutationObserver = new MutationObserver(() => {
      checkAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="text-on-background font-body-md antialiased selection:bg-primary-container/20 selection:text-primary-container min-h-screen flex flex-col">
      
      {/* Top Scroll Indicator Progress Line */}
      <div 
        className="scroll-progress-line" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Animated Floating Background Orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>

      <Navbar activeSection={activeSection} />
      <main className="flex-grow pt-[100px]">
        <Hero />
        <Services />
        <AboutEducation />
        <SkillsProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
