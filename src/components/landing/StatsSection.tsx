'use client';

import React from 'react';

const STATS = [
  { value: '1,847', label: 'Developer Tools', color: '#22d3ee' },
  { value: '24', label: 'Categories', color: '#34d399' },
  { value: '120+', label: 'Daily Submissions', color: '#f59e0b' },
  { value: '40K+', label: 'Active Developers', color: '#a78bfa' },
];

export function StatsSection() {
  return (
    <section className="dth-stats">
      <div className="dth-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="dth-stat-card">
            <div className="dth-stat-value" style={{ color: s.color }}>{s.value}</div>
            <div className="dth-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
