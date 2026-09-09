'use client';

import React from 'react';
import { Cpu, GitFork, Layers, Package, Shield, Zap } from 'lucide-react';

const FEATURES = [
  { icon: Zap, title: 'Lightning Reviews', description: 'Every tool is benchmarked and reviewed by active developers. No fluff, just data.', color: '#22d3ee' },
  { icon: GitFork, title: 'Open Source First', description: 'We prioritize open-source tools. See GitHub stars, license type, and contributor count.', color: '#34d399' },
  { icon: Cpu, title: 'Performance Metrics', description: 'Build times, bundle sizes, memory usage — real benchmarks for real decisions.', color: '#f59e0b' },
  { icon: Package, title: 'Stack Builder', description: 'Assemble your perfect dev stack. Compare tools side-by-side across categories.', color: '#a78bfa' },
  { icon: Layers, title: 'Deep Integrations', description: 'See how tools connect — CI/CD compatibility, plugin ecosystems, and migration guides.', color: '#fb923c' },
  { icon: Shield, title: 'Security Audit', description: 'Every tool is checked for known vulnerabilities, supply chain risks, and license conflicts.', color: '#f87171' },
];

export function FeaturesSection() {
  return (
    <section className="dth-features">
      <div className="dth-features-header">
        <span className="dth-section-tag"># Features</span>
        <h2 className="dth-section-title">
          Built by Devs, <span className="dth-cyan-text">for Devs</span>
        </h2>
        <p className="dth-section-subtitle">
          More than a list — a living, benchmarked ecosystem of developer tools.
        </p>
      </div>
      <div className="dth-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="dth-feature-card">
            <div className="dth-feature-icon" style={{ color: f.color, borderColor: f.color + '30' }}>
              <f.icon size={22} />
            </div>
            <h3 className="dth-feature-title">{f.title}</h3>
            <p className="dth-feature-desc">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
