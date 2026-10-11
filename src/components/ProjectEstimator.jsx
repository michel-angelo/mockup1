import React, { useState } from 'react';
import { 
  Calculator, Check, Sparkles, Clock, Users, ArrowRight, 
  HelpCircle, ShieldCheck, DollarSign, RefreshCw 
} from 'lucide-react';
import { estimatorConfig } from '../data/mockData';

export function ProjectEstimator({ onOpenContactWithScope }) {
  const [currency, setCurrency] = useState('USD'); // 'USD' or 'IDR'
  const [selectedType, setSelectedType] = useState(estimatorConfig.projectTypes[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState([
    estimatorConfig.features[0].id,
    estimatorConfig.features[1].id
  ]);
  const [selectedSpeed, setSelectedSpeed] = useState('standard');

  const activeTypeObj = estimatorConfig.projectTypes.find(t => t.id === selectedType) || estimatorConfig.projectTypes[0];
  const activeSpeedObj = estimatorConfig.speeds.find(s => s.id === selectedSpeed) || estimatorConfig.speeds[0];

  const toggleFeature = (fId) => {
    if (selectedFeatures.includes(fId)) {
      setSelectedFeatures(selectedFeatures.filter(id => id !== fId));
    } else {
      setSelectedFeatures([...selectedFeatures, fId]);
    }
  };

  // Calculations
  const baseCostUSD = activeTypeObj.baseUSD;
  const baseCostIDR = activeTypeObj.baseIDR;
  let baseWeeks = activeTypeObj.weeks;

  let featuresCostUSD = 0;
  let featuresCostIDR = 0;
  let addedWeeks = 0;

  selectedFeatures.forEach(fId => {
    const feat = estimatorConfig.features.find(f => f.id === fId);
    if (feat) {
      featuresCostUSD += feat.costUSD;
      featuresCostIDR += feat.costIDR;
      addedWeeks += feat.addWeeks;
    }
  });

  const totalWeeksRaw = (baseWeeks + addedWeeks) * (1 + activeSpeedObj.weekMod);
  const totalWeeks = Math.max(2, Math.round(totalWeeksRaw * 10) / 10);

  const subtotalUSD = (baseCostUSD + featuresCostUSD) * activeSpeedObj.multiplier;
  const subtotalIDR = (baseCostIDR + featuresCostIDR) * activeSpeedObj.multiplier;

  // Format currency
  const formatMoney = (val, curr) => {
    if (curr === 'USD') {
      return `$${Math.round(val).toLocaleString('en-US')}`;
    }
    return `Rp ${Math.round(val).toLocaleString('id-ID')}`;
  };

  const handleLockScope = () => {
    const featureNames = selectedFeatures.map(id => {
      const feat = estimatorConfig.features.find(f => f.id === id);
      return feat ? feat.name : id;
    });

    const summary = {
      projectType: activeTypeObj.name,
      currency,
      estimatedBudget: formatMoney(subtotalUSD, currency === 'USD' ? 'USD' : 'IDR'),
      timeline: `${totalWeeks} Weeks`,
      speed: activeSpeedObj.name,
      features: featureNames
    };

    onOpenContactWithScope(summary);
  };

  return (
    <section id="estimator" className="section-wrapper estimator-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-glow">
            <Calculator size={14} />
            <span>Interactive Scope & Investment Planner</span>
          </div>
          <h2 className="section-title">
            Instant Project Scope & <span className="gradient-text">Budget Calculator</span>
          </h2>
          <p className="section-subtitle">
            Configure your technical scope below to generate an immediate, realistic estimate of sprint duration and capital allocation.
          </p>

          {/* Currency Toggle */}
          <div className="currency-toggle-wrap">
            <span className="currency-label">Display Currency:</span>
            <div className="currency-switch glass-card">
              <button 
                type="button" 
                className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                USD ($)
              </button>
              <button 
                type="button" 
                className={`currency-btn ${currency === 'IDR' ? 'active' : ''}`}
                onClick={() => setCurrency('IDR')}
              >
                IDR (Rp)
              </button>
            </div>
          </div>
        </div>

        {/* Main Calculator Layout */}
        <div className="estimator-grid">
          
          {/* Left Column: Form Controls */}
          <div className="estimator-controls-col">
            
            {/* Step 1: Project Type */}
            <div className="calc-group glass-card">
              <div className="calc-group-header">
                <span className="calc-step-badge">1</span>
                <div>
                  <h4 className="calc-group-title">Select Core Architecture / Platform</h4>
                  <p className="calc-group-desc">What type of primary system are we engineering?</p>
                </div>
              </div>

              <div className="project-type-options">
                {estimatorConfig.projectTypes.map((t) => (
                  <div 
                    key={t.id} 
                    className={`project-type-card ${selectedType === t.id ? 'selected' : ''}`}
                    onClick={() => setSelectedType(t.id)}
                  >
                    <div className="type-card-radio">
                      <div className={`radio-dot ${selectedType === t.id ? 'active' : ''}`} />
                    </div>
                    <div className="type-card-info">
                      <span className="type-name">{t.name}</span>
                      <span className="type-meta">
                        Base: {formatMoney(currency === 'USD' ? t.baseUSD : t.baseIDR, currency)} • ~{t.weeks} wks
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Scope Add-ons */}
            <div className="calc-group glass-card">
              <div className="calc-group-header">
                <span className="calc-step-badge">2</span>
                <div>
                  <h4 className="calc-group-title">Select Key Modules & Enterprise Features</h4>
                  <p className="calc-group-desc">Tailor capabilities to your exact release roadmap.</p>
                </div>
              </div>

              <div className="features-options-list">
                {estimatorConfig.features.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div 
                      key={feat.id} 
                      className={`feature-check-card ${isChecked ? 'checked' : ''}`}
                      onClick={() => toggleFeature(feat.id)}
                    >
                      <div className={`checkbox-box ${isChecked ? 'active' : ''}`}>
                        {isChecked && <Check size={14} />}
                      </div>
                      <div className="feature-info">
                        <span className="feature-name">{feat.name}</span>
                        <span className="feature-cost">
                          +{formatMoney(currency === 'USD' ? feat.costUSD : feat.costIDR, currency)} (+{feat.addWeeks} wk)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Pacing */}
            <div className="calc-group glass-card">
              <div className="calc-group-header">
                <span className="calc-step-badge">3</span>
                <div>
                  <h4 className="calc-group-title">Sprint Priority & Delivery Cadence</h4>
                  <p className="calc-group-desc">Speed to market preference.</p>
                </div>
              </div>

              <div className="speed-options-row">
                {estimatorConfig.speeds.map((s) => (
                  <div 
                    key={s.id} 
                    className={`speed-card ${selectedSpeed === s.id ? 'active' : ''}`}
                    onClick={() => setSelectedSpeed(s.id)}
                  >
                    <div className="speed-top">
                      <span className="speed-title">{s.name}</span>
                      <span className="speed-tag">{s.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Summary Receipt Card */}
          <div className="estimator-summary-col">
            <div className="summary-sticky-card glass-card">
              
              <div className="summary-header">
                <div className="summary-badge">
                  <Sparkles size={14} className="text-cyan" />
                  <span>ESTIMATED INVESTMENT</span>
                </div>
                <h3 className="summary-price-display gradient-text">
                  {formatMoney(currency === 'USD' ? subtotalUSD : subtotalIDR, currency)}
                </h3>
                <p className="summary-disclaimer">
                  *Transparent sprint-based projection based on selected parameters.
                </p>
              </div>

              <div className="summary-divider"></div>

              {/* Metrics Grid */}
              <div className="summary-meta-grid">
                <div className="summary-meta-item">
                  <div className="meta-item-icon">
                    <Clock size={18} className="text-violet" />
                  </div>
                  <div>
                    <span className="meta-label">Estimated Timeline</span>
                    <span className="meta-val">{totalWeeks} Weeks</span>
                  </div>
                </div>

                <div className="summary-meta-item">
                  <div className="meta-item-icon">
                    <Users size={18} className="text-emerald" />
                  </div>
                  <div>
                    <span className="meta-label">Dedicated Squad</span>
                    <span className="meta-val">3 - 4 Specialists</span>
                  </div>
                </div>
              </div>

              {/* What is Included */}
              <div className="summary-included-list">
                <span className="included-title">Every Engagement Includes:</span>
                <div className="inc-item">
                  <Check size={14} className="text-cyan" />
                  <span>100% Intellectual Property & Source Code Transfer</span>
                </div>
                <div className="inc-item">
                  <Check size={14} className="text-cyan" />
                  <span>Dedicated Slack Channel & Weekly Live Demos</span>
                </div>
                <div className="inc-item">
                  <Check size={14} className="text-cyan" />
                  <span>Automated CI/CD Pipeline & Staging Environment</span>
                </div>
                <div className="inc-item">
                  <Check size={14} className="text-cyan" />
                  <span>30-Day Post-Launch Warranty & Bug Fix Support</span>
                </div>
              </div>

              {/* CTA Action */}
              <button 
                type="button" 
                className="btn btn-primary summary-action-btn"
                onClick={handleLockScope}
              >
                <span>Lock Scope & Request Formal RFP</span>
                <ArrowRight size={18} />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
