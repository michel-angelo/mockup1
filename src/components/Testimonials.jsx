import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/mockData';

export function Testimonials() {
  return (
    <section id="reviews" className="section-wrapper reviews-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-glow">
            <span>Executive Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted By The Leaders <span className="gradient-text">Shaping Tomorrow</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here is what engineering leaders and enterprise 
            executives say about partnering with NEXOVA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card glass-card glass-card-hover">
              
              <div className="testimonial-top">
                <div className="stars-row">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" fill="currentColor" />
                  ))}
                </div>
                <div className="highlight-pill">
                  <span>{t.highlight}</span>
                </div>
              </div>

              <div className="quote-wrap">
                <Quote size={24} className="quote-icon" />
                <p className="quote-text">"{t.quote}"</p>
              </div>

              <div className="testimonial-author">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="author-avatar"
                  loading="lazy" 
                />
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role}</p>
                  <p className="author-company">{t.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Satisfaction Guarantee Banner */}
        <div className="satisfaction-banner glass-card">
          <div className="satisfaction-icon">
            <ShieldCheck size={32} className="text-cyan" />
          </div>
          <div className="satisfaction-text">
            <h4>Backed By Our 100% Code Quality & Sprint Velocity Guarantee</h4>
            <p>Every milestone undergoes strict automated linting, test suites, and executive sign-off before invoice approval.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
