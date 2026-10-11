import React from 'react';
import { useInView } from '../hooks/useInView';

export function Footer() {
  const [footerRef, footerInView] = useInView({ threshold: 0.1 });

  return (
    <footer ref={footerRef} className={`studio-footer ${footerInView ? 'footer-active' : 'footer-prep'}`}>
      <div className="studio-container">
        
        <div className="footer-top-row">
          <div className="footer-brand-side">
            <div className="footer-brand-badge">
              <span className="brand-symbol">◆</span>
              <span className="footer-brand-name">KINETIC WORKSTATIONS</span>
            </div>
            <p className="footer-tagline">
              Perabot ruang kerja fisik yang dibangun dari kayu solid berkualitas tinggi, 
              sambungan presisi, dan kalibrasi akustik untuk produktivitas mendalam.
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col" style={{ '--col-idx': 0 }}>
              <span className="footer-nav-heading">EKSPLORASI</span>
              <a href="#specs">Papan Kayu White Oak</a>
              <a href="#breakdown">Layar 32 Inci 4K</a>
              <a href="#breakdown">Workstation Senyap</a>
              <a href="#breakdown">Tata Suara Nearfield</a>
            </div>

            <div className="footer-nav-col" style={{ '--col-idx': 1 }}>
              <span className="footer-nav-heading">STUDIO</span>
              <a href="#inquire">Proses Pemesanan Kustom</a>
              <a href="#inquire">Pilihan Corak Kayu</a>
              <a href="#inquire">Pengendalian Akustik</a>
              <a href="#inquire">Konsultasi Meja</a>
            </div>
          </div>
        </div>

        <div className="footer-divider-track">
          <div className="footer-divider-line" />
        </div>

        <div className="footer-bottom-row">
          <span className="footer-copy">
            © {new Date().getFullYear()} Kinetic Studio Ltd. Arsitektur ruang kerja produktivitas. Hak cipta dilindungi.
          </span>
          <span className="footer-materials-pill">
            Kayu White Oak Kiln-Dried • Sertifikasi Hutan FSC • Bebas Busa Sintetis
          </span>
        </div>

      </div>
    </footer>
  );
}
