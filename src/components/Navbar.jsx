import React, { useState, useEffect } from 'react';

export function Navbar({ onOpenInquire }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      const specsEl = document.getElementById('specs');
      let shouldShow = false;

      if (specsEl) {
        const rect = specsEl.getBoundingClientRect();
        // Reveal navbar when next section (#specs) begins sliding into the viewport (reaches 85% of screen height)
        // or when user has scrolled into or past #specs
        shouldShow = rect.top <= window.innerHeight * 0.85;
      } else {
        shouldShow = window.scrollY > window.innerHeight * 3;
      }

      setIsVisible(shouldShow);

      // Track active section for navigation highlight
      if (shouldShow) {
        const sections = ['specs', 'breakdown', 'inquire'];
        let current = '';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const r = el.getBoundingClientRect();
            if (r.top <= window.innerHeight * 0.45 && r.bottom >= 80) {
              current = id;
            }
          }
        }
        setActiveSection(current);
      }

      ticking = false;
    };

    const handleScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    // Initial check on mount
    checkVisibility();

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, []);

  return (
    <header 
      className={`studio-navbar ${isVisible ? 'nav-visible' : 'nav-hidden'}`} 
      aria-hidden={!isVisible}
    >
      <div className="nav-border-track">
        <div className="nav-border-line" />
      </div>

      <div className="nav-inner">
        <a href="#experience" className="nav-brand" tabIndex={isVisible ? 0 : -1}>
          <span className="brand-symbol">◆</span>
          <span className="brand-title">KINETIC</span>
          <span className="brand-tag">RUANG KERJA & PRODUKTIVITAS</span>
        </a>

        <nav className="nav-links" aria-label="Navigasi Utama Studio">
          <a 
            href="#experience" 
            className={`nav-anchor ${activeSection === 'experience' ? 'nav-anchor-active' : ''}`} 
            style={{ '--nav-idx': 0 }}
            tabIndex={isVisible ? 0 : -1}
          >
            Setup Meja
          </a>
          <a 
            href="#specs" 
            className={`nav-anchor ${activeSection === 'specs' ? 'nav-anchor-active' : ''}`} 
            style={{ '--nav-idx': 1 }}
            tabIndex={isVisible ? 0 : -1}
          >
            Material & Konstruksi
          </a>
          <a 
            href="#breakdown" 
            className={`nav-anchor ${activeSection === 'breakdown' ? 'nav-anchor-active' : ''}`} 
            style={{ '--nav-idx': 2 }}
            tabIndex={isVisible ? 0 : -1}
          >
            Bedah Peranti
          </a>
          <a 
            href="#inquire" 
            className={`nav-anchor ${activeSection === 'inquire' ? 'nav-anchor-active' : ''}`} 
            style={{ '--nav-idx': 3 }}
            tabIndex={isVisible ? 0 : -1}
          >
            Konsultasi Studio
          </a>
        </nav>

        <div className="nav-cta-wrap">
          <button 
            type="button" 
            className="btn-studio-primary nav-btn-anim"
            onClick={onOpenInquire}
            tabIndex={isVisible ? 0 : -1}
          >
            Konsultasi Meja
          </button>
        </div>
      </div>
    </header>
  );
}
