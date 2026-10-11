import React, { useState } from 'react';
import { ArrowUpRight, X, ExternalLink, Sparkles, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { portfolioProjects } from '../data/mockData';

export function Portfolio({ onOpenContact }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'Fintech & Banking' },
    { id: 'ai', label: 'AI & Data Observability' },
    { id: 'ecommerce', label: 'Luxury E-Commerce' },
    { id: 'saas', label: 'Enterprise SaaS' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-wrapper portfolio-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-glow">
            <span>Proof of Craftsmanship</span>
          </div>
          <h2 className="section-title">
            Selected Works & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore how we partnered with ambitious founders and tier-one enterprises 
            to engineer high-performing software that drives tangible market value.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="portfolio-filter-bar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-card glass-card glass-card-hover"
              onClick={() => setActiveModalProject(project)}
            >
              {/* Image Preview Box */}
              <div className="portfolio-image-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="portfolio-thumb-img" 
                  loading="lazy"
                />
                <div className="portfolio-image-badge">
                  <span>{project.metric}</span>
                </div>
                <div className="portfolio-hover-overlay">
                  <div className="view-case-study-btn">
                    <span>View Case Study</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="portfolio-card-content">
                <div className="portfolio-meta-row">
                  <span className="portfolio-client-tag">{project.client}</span>
                  <span className="portfolio-year">{project.year}</span>
                </div>

                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-summary">{project.summary}</p>

                {/* Tech Tags */}
                <div className="portfolio-tags-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Full Modal */}
        {activeModalProject && (
          <div className="modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <div className="case-study-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
              
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="case-study-hero-image">
                <img src={activeModalProject.image} alt={activeModalProject.title} />
                <div className="case-study-hero-overlay">
                  <span className="case-study-cat-badge">{activeModalProject.category.toUpperCase()}</span>
                  <h3 className="case-study-hero-title">{activeModalProject.title}</h3>
                  <p className="case-study-hero-client">{activeModalProject.client} • {activeModalProject.year}</p>
                </div>
              </div>

              <div className="case-study-body">
                {/* Impact Metric Banner */}
                <div className="case-study-impact-box">
                  <div className="impact-icon-wrap">
                    <TrendingUp size={24} className="text-cyan" />
                  </div>
                  <div>
                    <span className="impact-label">KEY MEASURABLE OUTCOME</span>
                    <h4 className="impact-metric-text">{activeModalProject.metric}</h4>
                  </div>
                </div>

                {/* Breakdown Sections */}
                <div className="case-study-breakdown-grid">
                  <div className="breakdown-col glass-card">
                    <h5 className="breakdown-title text-violet">The Challenge</h5>
                    <p className="breakdown-text">{activeModalProject.challenge}</p>
                  </div>
                  <div className="breakdown-col glass-card">
                    <h5 className="breakdown-title text-cyan">The Architecture & Solution</h5>
                    <p className="breakdown-text">{activeModalProject.solution}</p>
                  </div>
                </div>

                {/* Business Impact */}
                <div className="business-impact-box glass-card">
                  <h5 className="breakdown-title text-emerald">Market & Business Impact</h5>
                  <p className="breakdown-text">{activeModalProject.impact}</p>
                </div>

                {/* Tags */}
                <div className="case-study-tags-row">
                  <span className="tags-label">Tech Stack & Disciplines:</span>
                  <div className="tags-list">
                    {activeModalProject.tags.map((t, idx) => (
                      <span key={idx} className="portfolio-tag active-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="case-study-cta-row">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setActiveModalProject(null)}
                  >
                    Back to Works
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => {
                      const projTitle = activeModalProject.title;
                      setActiveModalProject(null);
                      onOpenContact(`Project inquiry inspired by ${projTitle}`);
                    }}
                  >
                    Build Something Similar
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
