'use client';

import React from 'react';
import Link from 'next/link';
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
          <Link href="/submit" className="dth-cta-btn-primary">
            <Rocket size={15} /> Submit Your Tool
          </Link>
          <Link href="/sponsor" className="dth-cta-btn-secondary">
            Sponsor a Slot <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
