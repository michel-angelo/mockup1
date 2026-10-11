import React from 'react';
import { processSteps } from '../data/mockData';
import { ArrowRight, Compass, Layers, Code, Rocket } from 'lucide-react';

const stepIcons = [Compass, Layers, Code, Rocket];

export function Process() {
  return (
    <section id="process" className="section-wrapper process-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-glow">
            <span>Methodology & Cadence</span>
          </div>
          <h2 className="section-title">
            How We Build: From <span className="gradient-text">Concept to Dominance</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested 4-stage engineering lifecycle designed to eliminate guesswork, 
            deliver predictable sprint velocity, and minimize technical debt.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="process-timeline-grid">
          {processSteps.map((item, idx) => {
            const Icon = stepIcons[idx] || Compass;

            return (
              <div key={item.step} className="process-step-card glass-card glass-card-hover">
                <div className="step-card-top">
                  <span className="step-number gradient-text">{item.step}</span>
                  <div className="step-icon-wrap">
                    <Icon size={22} className="text-cyan" />
                  </div>
                </div>

                <div className="step-timeframe-badge">
                  <span>{item.timeframe}</span>
                </div>

                <h3 className="step-name">{item.name}</h3>
                <p className="step-desc">{item.desc}</p>
                
                <div className="step-connector-dot"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
