import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { agencyInfo } from '../data/mockData';

export function Hero({ onOpenContact, onOpenEstimator }) {
  return (
    <section className="hero-section">
      <div className="container">
        
        {/* Top Announcement Badge */}
        <div className="hero-badge-container">
          <div className="badge badge-glow">
            <span className="badge-dot"></span>
            <span>Available for Q4 Enterprise Projects</span>
            <span className="badge-sep">•</span>
            <span className="badge-highlight">Top 1% Engineering Squad</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="hero-content">
          <h1 className="hero-title">
            Engineering <span className="gradient-text">Breakthrough Digital</span> Experiences That Scale
          </h1>
          <p className="hero-subtitle">
            {agencyInfo.heroSub}
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={onOpenContact}
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#estimator" 
              className="btn btn-secondary btn-lg"
            >
              <Zap size={18} className="text-cyan" />
              <span>Calculate Project Cost</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Full IP Ownership</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>2-Week Sprints</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Fixed-Scope Guarantees</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup Centerpiece */}
        <div className="hero-mockup-wrapper">
          <div className="hero-mockup-frame glass-card">
            
            {/* Top Browser Bar */}
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-url-bar">
                <span>https://platform.nexovadigital.io/enterprise/telemetry</span>
              </div>
              <div className="mockup-status-badge">
                <span className="pulse-indicator"></span>
                <span>SYSTEM LIVE</span>
              </div>
            </div>

            {/* Display Image */}
            <div className="mockup-image-box">
              <img 
                src="/images/hero-preview.jpg" 
                alt="NEXOVA Enterprise Suite Platform Demo" 
                className="mockup-main-img"
              />
              <div className="mockup-gradient-overlay"></div>
            </div>

            {/* Floating Live Metric Card 1 */}
            <div className="floating-metric-card metric-left floating-elem">
              <div className="metric-icon-wrap bg-cyan-glow">
                <TrendingUp size={22} className="text-cyan" />
              </div>
              <div className="metric-details">
                <span className="metric-caption">Avg. Revenue Lift</span>
                <span className="metric-value">+320.4%</span>
                <span className="metric-sub">Over 90-day baseline</span>
              </div>
            </div>

            {/* Floating Live Metric Card 2 */}
            <div className="floating-metric-card metric-right floating-elem" style={{ animationDelay: '2.5s' }}>
              <div className="metric-icon-wrap bg-violet-glow">
                <ShieldCheck size={22} className="text-violet" />
              </div>
              <div className="metric-details">
                <span className="metric-caption">Security & Reliability</span>
                <span className="metric-value">99.99% Uptime</span>
                <span className="metric-sub">SOC2 & ISO Compliant</span>
              </div>
            </div>

          </div>
        </div>

        {/* Agency Metrics Bar */}
        <div className="hero-stats-grid glass-card">
          {agencyInfo.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <span className="stat-number gradient-text">{stat.value}</span>
              <span className="stat-title">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* Brand Marquee Ticker */}
        <div className="hero-ticker-section">
          <p className="ticker-label">TRUSTED BY GLOBAL TEAMS & VENTURE-BACKED DISRUPTORS</p>
          <div className="ticker-track-wrap">
            <div className="ticker-track">
              {agencyInfo.trustedBrands.concat(agencyInfo.trustedBrands).map((brand, i) => (
                <div key={i} className="ticker-item">
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
