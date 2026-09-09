'use client';

import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="dth-cta">
      <div className="dth-cta-border" aria-hidden="true" />
      <div className="dth-cta-content">
        <h2 className="dth-cta-title">Ship Your Dev Tool to <span className="dth-cyan-text">40K+ Developers</span></h2>
        <p className="dth-cta-subtitle">
          Join the fastest-growing developer tools directory. Get featured, benchmarked, and discovered.
        </p>
        <div className="dth-cta-buttons">
          <a href="/submit" className="dth-cta-btn-primary">
            <Rocket size={15} /> Submit Your Tool
          </a>
          <a href="/sponsor" className="dth-cta-btn-secondary">
            Sponsor a Slot <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
