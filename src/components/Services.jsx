import React, { useState } from 'react';
import { 
  LayoutGrid, Code2, Cpu, Server, Sparkles, TrendingUp, 
  ArrowUpRight, Check, X, Layers, Clock, Award 
} from 'lucide-react';
import { servicesData } from '../data/mockData';

const iconMap = {
  LayoutGrid,
  Code2,
  Cpu,
  Server,
  Sparkles,
  TrendingUp
};

export function Services({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-glow">
            <span>Capabilities & Core Practices</span>
          </div>
          <h2 className="section-title">
            Engineered For Complexity. <br />
            <span className="gradient-text">Crafted For Precision.</span>
          </h2>
          <p className="section-subtitle">
            We don't deliver generic templates. We build bespoke software architectures, 
            high-converting interfaces, and resilient digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || LayoutGrid;

            return (
              <div 
                key={service.id} 
                className="service-card glass-card glass-card-hover"
                onClick={() => setSelectedService(service)}
              >
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={26} className="service-icon" />
                  </div>
                  <span className="service-badge-metric">{service.metric}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.summary}</p>

                <div className="service-deliverables-list">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="deliverable-item">
                      <Check size={14} className="deliverable-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-bottom">
                  <span className="service-action-label">Explore Deliverables</span>
                  <div className="service-arrow-wrap">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Details Interactive Modal */}
        {selectedService && (
          <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
            <div className="service-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
              
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="service-icon-box">
                  {React.createElement(iconMap[selectedService.icon] || LayoutGrid, { size: 28, className: "service-icon" })}
                </div>
                <div>
                  <span className="modal-category">PRACTICE OVERVIEW</span>
                  <h3 className="modal-title">{selectedService.title}</h3>
                </div>
              </div>

              <p className="modal-desc">{selectedService.summary}</p>

              <div className="modal-section-title">
                <Layers size={18} className="text-cyan" />
                <span>Complete Deliverables Package</span>
              </div>

              <div className="modal-deliverables-grid">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="modal-deliverable-card">
                    <Check size={16} className="text-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="modal-meta-row">
                <div className="meta-block">
                  <Clock size={16} className="text-violet" />
                  <span>Sprint Cycle: 2 - 4 Weeks</span>
                </div>
                <div className="meta-block">
                  <Award size={16} className="text-emerald" />
                  <span>Benchmark: {selectedService.metric}</span>
                </div>
              </div>

              <div className="modal-footer-cta">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedService(null);
                    onOpenContact(selectedService.title);
                  }}
                >
                  Request Proposal For This
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
