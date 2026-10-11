import React from 'react';
import { Navbar } from './components/Navbar';
import { ScrollHero } from './components/ScrollHero';
import { SpecsBreakdown } from './components/SpecsBreakdown';
import { InteractiveExplorer } from './components/InteractiveExplorer';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  const handleScrollToInquire = () => {
    const el = document.getElementById('inquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="studio-app-root">
      {/* Navigation */}
      <Navbar onOpenInquire={handleScrollToInquire} />

      {/* Main Content */}
      <main>
        {/* Full Viewport 120-Frame Scroll Video Hero */}
        <section id="experience">
          <ScrollHero />
        </section>

        {/* Physical Hardware & Specs Breakdown */}
        <SpecsBreakdown />

        {/* Interactive Component Explorer */}
        <InteractiveExplorer onCommissionClick={handleScrollToInquire} />

        {/* Custom Commission Inquiry */}
        <InquirySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
