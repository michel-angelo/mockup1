import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactModal({ isOpen, onClose, initialScope }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialScope) {
      if (typeof initialScope === 'string') {
        setFormData(prev => ({ ...prev, details: `Inquiry regarding: ${initialScope}` }));
      } else if (typeof initialScope === 'object') {
        const desc = `Locked Scope Details:
• Architecture: ${initialScope.projectType}
• Estimated Budget: ${initialScope.estimatedBudget}
• Timeline: ${initialScope.timeline} (${initialScope.speed})
• Modules: ${initialScope.features?.join(', ') || 'N/A'}`;
        setFormData(prev => ({ ...prev, details: desc }));
      }
    }
  }, [initialScope, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 900);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="contact-modal-box glass-card" onClick={(e) => e.stopPropagation()}>
        
        <button 
          type="button" 
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle2 size={56} className="text-emerald" />
            <h3>Project Scope Submitted!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our engineering partner will review your technical requirements 
              and schedule your discovery call shortly at <strong>{formData.email}</strong>.
            </p>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={handleClose}
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <div className="badge badge-glow">
                <Sparkles size={14} />
                <span>Executive Strategy Call</span>
              </div>
              <h3 className="modal-title">Initiate Your Project Sprint</h3>
              <p className="modal-sub">
                Lock your project slot with NEXOVA. Zero commitments until scope & contract alignment.
              </p>
            </div>

            {initialScope && typeof initialScope === 'object' && (
              <div className="scope-preview-banner glass-card">
                <span className="scope-tag">CALCULATED SCOPE ATTACHED</span>
                <span className="scope-highlight">{initialScope.projectType} • {initialScope.estimatedBudget}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="m-name">Your Full Name *</label>
                <input 
                  id="m-name"
                  type="text" 
                  required
                  placeholder="e.g. David Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="m-email">Work Email *</label>
                <input 
                  id="m-email"
                  type="email" 
                  required
                  placeholder="e.g. david@vanceholdings.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="m-company">Company / Venture Name</label>
                <input 
                  id="m-company"
                  type="text" 
                  placeholder="e.g. Vance Holdings Ltd."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="m-details">Project Scope & Requirements *</label>
                <textarea 
                  id="m-details"
                  rows={4}
                  required
                  placeholder="Please specify target launch quarter, key objectives, or existing challenges..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="form-input form-textarea"
                />
              </div>

              <div className="modal-form-actions">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Transmitting...' : (
                    <>
                      <span>Transmit Brief</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
