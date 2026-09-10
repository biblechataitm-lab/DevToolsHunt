'use client';

import React from 'react';

const STATS = [
  { value: '100%', label: 'Direct Maker Submissions' },
  { value: 'Realtime', label: 'Verified Catalog Releases' },
  { value: 'Community', label: 'Upvote & Feedback Engine' },
  { value: 'Zero Tracking', label: 'Privacy First Directory' },
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
