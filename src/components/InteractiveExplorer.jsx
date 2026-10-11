import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const componentsList = [
  {
    id: 'display',
    title: 'Layar 32 Inci 4K Anti-Pantulan',
    subtitle: 'Titik Fokus Visual',
    frame: '/images/frame/frame_60.webp',
    details: 'Panel IPS 10-bit beresolusi 3840×2160. Kamera video terintegrasi rapi di bingkai atas tanpa tonjolan berlebih, menjaga garis horizontal ruang kerja tetap bersih dan rapi.',
    specs: [
      { label: 'Resolusi', val: '3840 × 2160 UHD' },
      { label: 'Akurasi Warna', val: 'Delta E < 1.0 (Kalibrasi Pabrik)' },
      { label: 'Dudukan Layar', val: 'Cast Aluminum Y-Base (Tilt & Lift)' },
      { label: 'Konektivitas', val: 'Thunderbolt 4 Tunggal (Power Delivery 90W)' }
    ]
  },
  {
    id: 'pc',
    title: 'Sasis Mini-ITX Pendingin Cairan',
    subtitle: 'Mesin Komputasi Senyap',
    frame: '/images/frame/frame_1.webp',
    details: 'Dibuat dari baja berlapisan powder-coat dan kaca tempered pengaman. Sirkulasi termal dua bilik memastikan udara panas GPU tidak melintasi radiator CPU, menjaga kebisingan di bawah 20dB saat rendering.',
    specs: [
      { label: 'Dimensi Sasis', val: 'Small Form Factor (18 Liter)' },
      { label: 'Batas Kebisingan', val: '< 22 dB(A) pada Jarak 1 Meter' },
      { label: 'Pendingin CPU', val: 'AIO 280mm dengan Bantalan Keramik' },
      { label: 'Finishing Lapisan', val: 'Matte White Murni RAL 9016' }
    ]
  },
  {
    id: 'audio',
    title: 'Monitor Studio Aktif Nearfield',
    subtitle: 'Fidelitas Akustik Murni',
    frame: '/images/frame/frame_30.webp',
    details: 'Tweeter kubah sutra dan woofer anyaman karbon yang diatur dalam formasi segitiga sama sisi dengan posisi duduk. Diisolasi secara mekanis menggunakan bantalan poliuretan padat agar meja tidak beresonansi.',
    specs: [
      { label: 'Amplifikasi', val: 'Arsitektur Bi-Amp Kelas D' },
      { label: 'Isolasi Getaran', val: 'Baji Busa Akustik Bersudut 15°' },
      { label: 'Rentang Frekuensi', val: '48 Hz – 22.000 Hz Respon Datar' },
      { label: 'Material Bodi', val: 'Kabinet MDF Akustik Lembam' }
    ]
  },
  {
    id: 'peripherals',
    title: 'Papan Ketik 75% & Alas Wool Alami',
    subtitle: 'Sentuhan Taktil Ergonomis',
    frame: '/images/frame/frame_80.webp',
    details: 'Papan ketik bersuspensi gasket dengan pelat kuningan pemberat dan lapisan poron peredam suara. Duduk di atas alas wool felt merino asli setebal 3mm yang nyaman untuk pergelangan tangan sepanjang hari.',
    specs: [
      { label: 'Switch Tombol', val: 'Linear 62g Terlumasi (Stem Senyap)' },
      { label: 'Struktur Dudukan', val: 'Isolated Gasket Mount' },
      { label: 'Alas Meja', val: '100% Wool Felt Merino Alami (3mm)' },
      { label: 'Sensor Link', val: '1000Hz Ultra-Low Latency Wireless' }
    ]
  }
];

export function InteractiveExplorer({ onCommissionClick }) {
  const [activeTab, setActiveTab] = useState(componentsList[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  const activeItem = componentsList.find(c => c.id === activeTab) || componentsList[0];

  const handleTabChange = (newId) => {
    if (newId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newId);
      setIsTransitioning(false);
    }, 180);
  };

  return (
    <section id="breakdown" className="section-studio explorer-section" ref={sectionRef}>
      <div className="studio-container">
        
        {/* Asymmetric Golden Ratio Explorer Grid (38.2% Index Nav / 61.8% Showcase Viewport) */}
        <div className="explorer-golden-layout">
          
          {/* Narrow Left Column (38.2% / 1fr) — Header & Component Directory */}
          <div className="explorer-sidebar-col">
            <div className={`explorer-header-block ${inView ? 'in-view-fade-up' : 'pre-fade-up'}`}>
              <div className="specs-tag-wrap">
                <span className="specs-tag anim-tag">
                  <span className="blueprint-symbol">◈</span>
                  BEDAH PERANTI WORKSPACE
                </span>
              </div>
              <h2 className="specs-heading anim-title">
                <span className="headline-mask"><span className="headline-line">Inspeksi Detail Peranti.</span></span>
              </h2>
              <p className="specs-subtext anim-desc">
                Pilih peranti di bawah untuk meninjau spesifikasi material, manajemen termal, dan isolasi akustik.
              </p>
            </div>

            {/* Architectural Vertical Component Index */}
            <div className={`explorer-index-list ${inView ? 'in-view-fade-up delay-2' : 'pre-fade-up'}`}>
              {componentsList.map((comp, idx) => (
                <button
                  key={comp.id}
                  type="button"
                  className={`explorer-index-item ${activeTab === comp.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(comp.id)}
                  style={{ '--tab-idx': idx }}
                >
                  <div className="index-item-num">0{idx + 1}</div>
                  <div className="index-item-body">
                    <span className="index-item-title">{comp.title}</span>
                    <span className="index-item-sub">{comp.subtitle}</span>
                  </div>
                  <div className="index-item-arrow">→</div>
                </button>
              ))}
            </div>
          </div>

          {/* Wide Right Column (61.8% / 1.618fr) — Live Viewfinder & Detailed Hardware Breakdown */}
          <div className={`explorer-display-col ${inView ? 'in-view-card-scale' : 'pre-card-scale'}`}>
            <div className="explorer-card">
              
              {/* Top Viewfinder Frame with Camera Brackets */}
              <div className="explorer-media-frame-wrap">
                <div className={`explorer-image-frame ${isTransitioning ? 'frame-switching-out' : 'frame-switching-in'}`}>
                  <div className="viewfinder-corner tl" />
                  <div className="viewfinder-corner tr" />
                  <div className="viewfinder-corner bl" />
                  <div className="viewfinder-corner br" />
                  <img 
                    key={activeItem.frame}
                    src={activeItem.frame} 
                    alt={activeItem.title} 
                    className="explorer-frame-img"
                    loading="lazy"
                  />
                  <div className="explorer-frame-badge">
                    <span className="badge-pulse-dot" />
                    <span>TANGKAPAN FRAME MEJA AKTIF</span>
                  </div>
                </div>
              </div>

              {/* Hardware Detail & Specifications Breakdown */}
              <div className={`explorer-info-col ${isTransitioning ? 'info-switching-out' : 'info-switching-in'}`}>
                <div className="explorer-info-header">
                  <span className="explorer-sub">{activeItem.subtitle}</span>
                  <h3 className="explorer-item-title">{activeItem.title}</h3>
                  <p className="explorer-item-detail">{activeItem.details}</p>
                </div>

                <div className="explorer-specs-table">
                  {activeItem.specs.map((s, idx) => (
                    <div 
                      key={idx} 
                      className="spec-table-row spec-row-cascade"
                      style={{ '--cascade-delay': `${idx * 0.06}s` }}
                    >
                      <span className="spec-tbl-label">{s.label}</span>
                      <span className="spec-tbl-val">{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="explorer-action-row">
                  <button 
                    type="button" 
                    className="btn-studio-primary"
                    onClick={onCommissionClick}
                  >
                    Konsultasi Konfigurasi Serupa
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
