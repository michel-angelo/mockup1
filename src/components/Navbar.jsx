import React, { useState, useEffect } from 'react';

export function Navbar({ onOpenInquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`studio-navbar ${scrolled ? 'nav-scrolled' : ''} ${mounted ? 'nav-mounted' : 'nav-pre-mount'}`}>
      <div className="nav-border-track">
        <div className="nav-border-line" />
      </div>

      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <span className="brand-symbol">◆</span>
          <span className="brand-title">KINETIC</span>
          <span className="brand-tag">RUANG KERJA & PRODUKTIVITAS</span>
        </a>

        <nav className="nav-links">
          <a href="#experience" className="nav-anchor" style={{ '--nav-idx': 0 }}>Setup Meja</a>
          <a href="#specs" className="nav-anchor" style={{ '--nav-idx': 1 }}>Material & Konstruksi</a>
          <a href="#breakdown" className="nav-anchor" style={{ '--nav-idx': 2 }}>Bedah Peranti</a>
          <a href="#inquire" className="nav-anchor" style={{ '--nav-idx': 3 }}>Konsultasi Studio</a>
        </nav>

        <div className="nav-cta-wrap">
          <button 
            type="button" 
            className="btn-studio-primary nav-btn-anim"
            onClick={onOpenInquire}
          >
            Konsultasi Meja
          </button>
        </div>
      </div>
    </header>
  );
}
