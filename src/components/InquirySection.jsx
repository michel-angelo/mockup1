import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

export function InquirySection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'Private Home Studio',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cardRef, cardInView] = useInView({ threshold: 0.15 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="inquire" className="section-studio inquiry-section">
      <div className="studio-container">
        
        {/* Asymmetric Golden Ratio Split (38.2% narrow left / 61.8% wide right) */}
        <div ref={cardRef} className={`inquiry-golden-grid ${cardInView ? 'inquiry-active' : 'inquiry-prep'}`}>
          
          {/* Narrow Left Column (38.2% / 1fr) — Left-Aligned Architectural Brief */}
          <div className="inquiry-context-col">
            <div className="specs-tag-wrap">
              <span className="specs-tag anim-tag">
                <span className="blueprint-symbol">✉</span>
                KONSULTASI RUANG KERJA
              </span>
            </div>
            <h2 className="inquiry-title anim-title">
              <span className="headline-mask"><span className="headline-line">Pesan Ruang Kerja Kustom Anda.</span></span>
            </h2>
            <p className="inquiry-sub anim-desc">
              Kami merancang dan memproduksi meja kerja fisik untuk insinyur perangkat lunak, perancang visual, 
              dan kreator yang mengutamakan keheningan, presisi sentuhan, dan susunan meja tanpa kabel berserakan.
            </p>

            <div className="inquiry-guarantees">
              <div className="guarantee-row">
                <span className="guarantee-bullet">01</span>
                <div>
                  <h4 className="guarantee-heading">Konsultasi Perajin Langsung</h4>
                  <p className="guarantee-detail">Diskusi mendalam mengenai palung kabel tersembunyi, redaman getaran akustik, dan dimensi spesifik ruangan Anda.</p>
                </div>
              </div>
              <div className="guarantee-row">
                <span className="guarantee-bullet">02</span>
                <div>
                  <h4 className="guarantee-heading">Papan Kayu White Oak Pilihan</h4>
                  <p className="guarantee-detail">Kayu solid White Oak bersertifikasi kelestarian hutan FSC, diproses kiln-dry agar stabil dan tahan cuaca tropis.</p>
                </div>
              </div>
              <div className="guarantee-row">
                <span className="guarantee-bullet">03</span>
                <div>
                  <h4 className="guarantee-heading">Pengerjaan 4 hingga 6 Minggu</h4>
                  <p className="guarantee-detail">Konstruksi sambungan presisi, pengelasan rangka baja tersembunyi, hingga perakitan langsung di lokasi kerja Anda.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Wide Right Column (61.8% / 1.618fr) — Form Card */}
          <div className="inquiry-form-card">
            {submitted ? (
              <div className="inquiry-success-state success-animate-in">
                <div className="success-check-badge">
                  <svg className="success-svg" viewBox="0 0 52 52">
                    <circle className="success-circle" cx="26" cy="26" r="23" fill="none" />
                    <path className="success-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
                <h3 className="success-title">Permintaan Berhasil Terkirim</h3>
                <p className="success-desc">
                  Terima kasih{form.name ? <>, <strong>{form.name}</strong></> : null}. Kami akan meninjau rancangan kebutuhan peranti dan ukuran ruangan Anda, 
                  lalu menghubungi Anda{form.email ? <> melalui <strong>{form.email}</strong></> : null} dalam 1 hari kerja.
                </p>
                <button 
                  type="button" 
                  className="btn-studio-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', type: 'Private Home Studio', notes: '' });
                  }}
                >
                  Kirim Catatan Tambahan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-fields-grid">
                  <div className="input-group form-field-anim" style={{ '--field-delay': '0.08s' }}>
                    <label htmlFor="inq-name">Nama Lengkap</label>
                    <input 
                      id="inq-name"
                      type="text" 
                      required 
                      placeholder="misal: Julian Pratama"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="studio-input"
                    />
                  </div>

                  <div className="input-group form-field-anim" style={{ '--field-delay': '0.14s' }}>
                    <label htmlFor="inq-email">Alamat Email</label>
                    <input 
                      id="inq-email"
                      type="email" 
                      required 
                      placeholder="misal: julian@studio.id"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="studio-input"
                    />
                  </div>
                </div>

                <div className="input-group form-field-anim" style={{ '--field-delay': '0.21s' }}>
                  <label htmlFor="inq-type">Kategori Ruang Kerja</label>
                  <select 
                    id="inq-type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="studio-input studio-select"
                  >
                    <option value="Private Home Studio">Studio Rumah Pribadi (Arsitektur Meja Tunggal Solid)</option>
                    <option value="Executive Office">Ruang Kerja Eksekutif (Kayu Oak Kustom & Audio Terpadu)</option>
                    <option value="Team Engineering Pod">Pod Kolaborasi Tim (Rangkaian Meja Terhubung & Kabel Pusat)</option>
                  </select>
                </div>

                <div className="input-group form-field-anim" style={{ '--field-delay': '0.28s' }}>
                  <label htmlFor="inq-notes">Dimensi Ruangan & Kebutuhan Khusus</label>
                  <textarea 
                    id="inq-notes"
                    rows={4}
                    required
                    placeholder="Ceritakan perkiraan luas ruangan Anda, peranti komputer/layar yang digunakan saat ini, opsi kayu oak pilihan, atau kebutuhan peredam suara..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="studio-input studio-textarea"
                  />
                </div>

                <div className="form-submit-row form-field-anim" style={{ '--field-delay': '0.35s' }}>
                  <button 
                    type="submit" 
                    className="btn-studio-primary submit-btn-wide"
                    disabled={submitting}
                  >
                    {submitting ? 'Mengirimkan Rencana...' : 'Kirim Rencana Ruang Kerja'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
