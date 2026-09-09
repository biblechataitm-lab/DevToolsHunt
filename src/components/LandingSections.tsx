'use client';

import React from 'react';
import { Terminal, Cpu, Zap, Code2, ArrowRight, CheckCircle2, Flame, Layers, ShieldCheck, Binary } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Terminal size={12} className="text-emerald-400" />
            <span>Curated DevTool Matrix</span>
          </div>
          <h2 className="landing-section-heading">Engineered for High-Performance Developers</h2>
          <p className="landing-section-sub">
            Curated Rust & Zig CLIs, sub-millisecond compilers, zero-config linters, memory profilers, and modern terminal environments.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Native Binaries */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Binary size={20} />
              </div>
              <span className="bento-badge">Zero Runtime Overhead</span>
            </div>
            <h3 className="bento-card-title">Rust & Zig Native CLI Workhorses</h3>
            <p className="bento-card-desc">
              Standalone, static binary tools with instant startup times, zero garbage collection pauses, and minimal memory footprint.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">4,800+</span>
                <span className="pill-lbl">CLI Utilities</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">&lt;2ms</span>
                <span className="pill-lbl">Cold Start</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">72k+</span>
                <span className="pill-lbl">Devs</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Ultra-Fast Bundlers */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Zap size={20} />
              </div>
              <span className="bento-badge">10x Speed</span>
            </div>
            <h3 className="bento-card-title">Instant Hot-Reload Toolchains</h3>
            <p className="bento-card-desc">
              Next-generation package managers, Oxlint/Biome linters, and lightning-fast bundlers.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Biome / Oxlint Ready</span>
              <span className="check-item"><CheckCircle2 size={13} /> Multi-Threaded I/O</span>
            </div>
          </div>

          {/* Bento Card 3: Memory Profilers */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Cpu size={20} />
              </div>
              <span className="bento-badge">Flamegraphs</span>
            </div>
            <h3 className="bento-card-title">Low-Level Profilers & Debuggers</h3>
            <p className="bento-card-desc">
              Interactive eBPF tracers, memory leak analyzers, and terminal flamegraph visualizers.
            </p>
          </div>

          {/* Bento Card 4: Terminal Environments */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box purple">
                <Code2 size={20} />
              </div>
              <span className="bento-badge">GPU Accelerated</span>
            </div>
            <h3 className="bento-card-title">GPU Terminal Emulators & Shell Multiplexers</h3>
            <p className="bento-card-desc">
              Ghostty, WezTerm, and Zellij configurations optimized for 120fps smooth scrolling and true color rendering.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">Ghostty GPU</span>
              <span className="tag-chip">Zellij Workspace</span>
              <span className="tag-chip">Nushell Pipeline</span>
              <span className="tag-chip">Starship Prompt</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Flame size={12} className="text-emerald-400" />
            <span>CLI Benchmark Pipeline</span>
          </div>
          <h2 className="landing-section-heading">How DevToolsHunt Validates Tools</h2>
          <p className="landing-section-sub">
            We benchmark binary sizes, execution throughput, and cross-platform installation reliability.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Benchmark & Cold-Start Test</h4>
            <p className="step-desc">
              We run hyperfine timing suites across POSIX shells, Linux, macOS ARM64, and Windows.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Package Manager Verification</h4>
            <p className="step-desc">
              We verify seamless installation via Cargo, Homebrew, Winget, Pacman, and curl-to-bash scripts.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Developer Radar</h4>
            <p className="step-desc">
              Verified CLI tools receive terminal command snippets, performance badges, and distribution to 72,000+ engineers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ SHIP ON DEVTOOLSHUNT</span>
          <h3 className="launch-cta-heading">Ship Your CLI & Developer Tool to 72,000+ Hackers</h3>
          <p className="launch-cta-desc">
            Gain immediate GitHub stars, early contributors, and adoption from engineers at top tech companies.
          </p>
          <div className="launch-cta-buttons">
            <a href="/submit" className="launch-cta-primary">
              Submit CLI Tool <ArrowRight size={15} />
            </a>
            <a href="/category/developer-tools" className="launch-cta-secondary">
              Browse DevTools
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
