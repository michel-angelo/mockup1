import React from 'react';
import { useInView } from '../hooks/useInView';

const specsData = [
  {
    category: "01 / ARSITEKTUR MEJA",
    title: "Papan Kayu White Oak Solid",
    detail: "Papan kayu white oak pilihan berukuran 1800mm × 800mm × 32mm melalui proses pengeringan kiln, dilapisi pelindung matte tahan air. Ditopang kaki baja struktural berpenampang kotak agar meja kokoh tanpa getaran mikro.",
    tags: ["Kayu Solid White Oak", "Palung Kabel Tersembunyi", "Baja Struktural Anti-Goyang"]
  },
  {
    category: "02 / VISUAL & LAYAR",
    title: "Layar 32 Inci 4K Ultra-Jernih",
    detail: "Panel IPS berkerapatan piksel tinggi dengan cakupan warna 99% DCI-P3, kalibrasi pabrik, lapisan matte anti-pantulan, dan sensor kamera terpasang rapi di bingkai atas tanpa tonjolan berlebih.",
    tags: ["3840 × 2160 UHD", "Warna Asli 10-Bit", "Koneksi Satu Kabel USB-C"]
  },
  {
    category: "03 / KOMPUTASI SENYAP",
    title: "Workstation Mini-ITX Kustom Putih",
    detail: "Sasis ringkas berpenutup kaca tempered ganda dengan pendingin cairan CPU. Kurva putaran kipas disetel teliti agar tingkat kebisingan tetap di bawah 22dB saat rendering atau kompilasi kode berat.",
    tags: ["Arsitektur Ringkas SFF", "Profil Suara <22dB", "Jalur Khusus PCIe 5.0"]
  },
  {
    category: "04 / TATA SUARA RUANG",
    title: "Monitor Studio Nearfield & Headphone",
    detail: "Sepasang speaker aktif bi-amplified yang ditopang bantalan isolasi silikon bersudut khusus untuk memutus getaran meja. Dipadukan headphone planar open-back di atas penyangga aluminium padat.",
    tags: ["Isolasi Resonansi Akustik", "Respon Frekuensi Datar", "Dudukan Aluminium Milled"]
  },
  {
    category: "05 / PERANTI KENDALI",
    title: "Papan Ketik Taktil & Alas Wool Alami",
    detail: "Papan ketik mekanis 75% berbahan aluminium milled dengan switch linear berpelumas halus dan keycaps PBT dye-sub. Duduk di atas alas meja wool felt 100% merino dan mouse berbobot ringan berlatensi rendah.",
    tags: ["Switch Linear Terlumasi", "Alas Wool Felt Merino Asli", "Koneksi Nirkabel Sub-1ms"]
  }
];

export function SpecsBreakdown() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [listRef, listInView] = useInView({ threshold: 0.1 });

  return (
    <section id="specs" className="section-studio specs-section">
      <div className="specs-sheet-handle" aria-hidden="true">
        <span className="specs-handle-pill" />
      </div>
      <div className="studio-container">
        
        {/* Asymmetric Golden Ratio Grid (38.2% narrow / 61.8% wide) */}
        <div className="specs-golden-grid">

          {/* Narrow Column (38.2% / 1fr) — Left-aligned Section Identity */}
          <div className="specs-sticky-col">
            <div ref={headerRef} className={`specs-header ${headerInView ? 'in-view-fade-up' : 'pre-fade-up'}`}>
              <div className="specs-tag-wrap">
                <span className="specs-tag anim-tag">
                  <span className="blueprint-symbol">⌖</span>
                  CETAK BIRU MATERIAL
                </span>
              </div>
              <h2 className="specs-heading anim-title">
                <span className="headline-mask"><span className="headline-line">Dibangun Khusus untuk Bekerja Tanpa Jeda.</span></span>
              </h2>
              <p className="specs-subtext anim-desc">
                Setiap elemen di atas meja ini dipilih berdasarkan fungsi fisik nyata: 
                menghilangkan kebisingan visual, material berumur panjang, dan isolasi akustik.
              </p>

              <div className="specs-golden-meta">
                <span className="golden-ratio-tag">φ 1.618 RASIO ARSITEKTUR</span>
                <div className="golden-hairline-rule" />
                <p className="golden-meta-note">
                  Bentang kayu padat 1800mm dengan defleksi nol. Dikalibrasi untuk sesi kerja fokus hingga 10 jam.
                </p>
              </div>
            </div>
          </div>

          {/* Wide Column (61.8% / 1.618fr) — Hardware Specifications List */}
          <div ref={listRef} className="specs-list-col">
            <div className="specs-list">
              {specsData.map((spec, index) => (
                <div 
                  key={index} 
                  className={`spec-row ${listInView ? 'spec-row-active' : ''}`}
                  style={{ '--row-delay': `${index * 0.14}s` }}
                >
                  <div className="spec-meta-col">
                    <div className="spec-cat-mask">
                      <span className="spec-cat-label">{spec.category}</span>
                    </div>
                    <h3 className="spec-title">{spec.title}</h3>
                  </div>
                  <div className="spec-desc-col">
                    <p className="spec-detail">{spec.detail}</p>
                    <div className="spec-tags-row">
                      {spec.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="spec-pill"
                          style={{ '--pill-delay': `${index * 0.14 + tIdx * 0.08}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
