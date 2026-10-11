import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../data/mockData';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleItem = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-wrapper faq-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-glow">
            <HelpCircle size={14} />
            <span>Transparency First</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about partnering with NEXOVA, from initial sprint contracts 
            to complete code IP ownership.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-wrap">
          {faqItems.map((item, index) => {
            const isOpen = openIdx === index;
            return (
              <div 
                key={index} 
                className={`faq-item glass-card ${isOpen ? 'active' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
