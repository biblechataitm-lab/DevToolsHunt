'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="terminal-benchmarks container">
  <div class="t-bench-header">
    <span class="t-green-badge">// BENCHMARKS</span>
    <h2>Performance First, <span class="terminal-cyan">Zero Fluff</span></h2>
    <p>Every CLI tool and extension is benchmarked for startup latency and RAM footprint.</p>
  </div>
  <div class="terminal-grid-3">
    <div class="t-card">
      <div class="t-card-num">01</div>
      <h3>Micro-Second Cold Starts</h3>
      <p>We test binary execution times down to the microsecond so your shell prompt never stutters.</p>
    </div>
    <div class="t-card">
      <div class="t-card-num">02</div>
      <h3>Multi-Architecture Binaries</h3>
      <p>Instant compatibility checks for Apple Silicon (ARM64), Linux x86_64, and WSL2.</p>
    </div>
    <div class="t-card">
      <div class="t-card-num">03</div>
      <h3>Verified Open Source</h3>
      <p>Direct GitHub telemetry: Star velocity, commit cadence, and maintainer activity audits.</p>
    </div>
  </div>
</section>
  );
}
