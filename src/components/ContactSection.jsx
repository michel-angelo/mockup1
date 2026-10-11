import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { agencyInfo } from '../data/mockData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$25,000 - $50,000',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        
        <div className="contact-card-wrapper glass-card">
          <div className="contact-grid">
            
            {/* Left Info Column */}
            <div className="contact-info-col">
              <div className="badge badge-glow">
                <Sparkles size={14} />
                <span>Start Your Sprint</span>
              </div>

              <h2 className="contact-col-title">
                Let's Build Something <br />
                <span className="gradient-text">Unforgettable Together</span>
              </h2>

              <p className="contact-col-desc">
                Have a new product, system overhaul, or AI initiative? 
                Drop your vision below. We review inquiries within 12 hours and respond with 
                a technical feasibility breakdown.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div>
                    <span className="detail-label">Direct Communication</span>
                    <a href={`mailto:${agencyInfo.email}`} className="detail-val">{agencyInfo.email}</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <Phone size={18} className="text-violet" />
                  </div>
                  <div>
                    <span className="detail-label">Phone & WhatsApp</span>
                    <span className="detail-val">{agencyInfo.phone}</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <MapPin size={18} className="text-emerald" />
                  </div>
                  <div>
                    <span className="detail-label">Global Engineering Hubs</span>
                    <span className="detail-val">{agencyInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="contact-sla-badge">
                <Clock size={16} className="text-cyan" />
                <span>Average Discovery Call scheduled within 24 hours.</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="contact-form-col">
              {submitted ? (
                <div className="form-success-box glass-card">
                  <CheckCircle2 size={54} className="text-emerald" />
                  <h3>Proposal Request Received!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our lead architectural squad 
                    has been notified and will email you at <strong>{formData.email}</strong> 
                    with available discovery call slots.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', budget: '$25,000 - $50,000', message: '' });
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="c-name">Your Name *</label>
                      <input 
                        id="c-name" 
                        type="text" 
                        required 
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-email">Work Email *</label>
                      <input 
                        id="c-email" 
                        type="email" 
                        required 
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="c-company">Company / Organization</label>
                      <input 
                        id="c-company" 
                        type="text" 
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-budget">Expected Investment</label>
                      <select 
                        id="c-budget" 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="form-input form-select"
                      >
                        <option value="Under $20,000">Under $20,000 (Rp 300 Jt)</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000 (Rp 375 Jt - Rp 750 Jt)</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000 (Rp 750 Jt - Rp 1.5 M)</option>
                        <option value="$100,000+">$100,000+ (Rp 1.5 M+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="c-message">Tell Us About Your Project & Goals *</label>
                    <textarea 
                      id="c-message" 
                      rows={4} 
                      required
                      placeholder="Outline your vision, current tech stack, desired launch timeline, and key challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Validating & Sending...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
