'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Cpu, Code2, Zap, Play, Copy, Check, Search, ShieldCheck, ArrowRight, Star, Users } from 'lucide-react';

const RUNTIME_TOOLS = [
  {
    id: 'oxc',
    name: 'oxc_parser',
    ecosystem: 'Rust Toolchain',
    category: 'High-Performance JS/TS Tooling',
    cmd: 'cargo install oxc_cli && oxc lint ./src',
    speed: '4.2x faster than Biome',
    output: `[oxc] 482 files parsed in 14.2ms (0 errors, 0 warnings)\n✓ AST memory footprint: 1.8MB`,
  },
  {
    id: 'bunx',
    name: 'bunx runner',
    ecosystem: 'Zig / C++ Runtime',
    category: 'Native Fast Executor',
    cmd: 'bunx --bun create-next-app@latest ./app',
    speed: '28x faster than npm/npx',
    output: `[bun] Resolved 42 packages in 84ms\n✓ Ready in 120ms at http://localhost:3000`,
  },
  {
    id: 'fzf',
    name: 'fzf previewer',
    ecosystem: 'Go / Native CLI',
    category: 'Interactive Fuzzy Finder',
    cmd: 'fzf --preview="bat --color=always {}"',
    speed: 'Sub-millisecond index',
    output: `14,290/14,290 items indexed in 2.1ms\n> Query: async* (Match 100%)`,
  },
];

export function HeroSection() {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentTool = RUNTIME_TOOLS[activeToolIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTool.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="devtool-hero">
      <div className="devtool-ambient-glow" />

      <div className="devtool-hero-grid">
        {/* Left: Terminal Value Proposition */}
        <div className="devtool-hero-content">
          <div className="devtool-badge">
            <span className="devtool-terminal-prompt">$</span>
            <span>Developer Tools & High-Speed CLI Index</span>
            <span className="devtool-badge-pill">v2026</span>
          </div>

          <h1 className="devtool-title">
            The Engineer's Hub for <span className="devtool-highlight">CLI Utilities</span>, Compilers & Runtimes.
          </h1>

          <p className="devtool-lead">
            Curating ultra-fast Rust, Zig, Go, and Native developer tools, linters, debuggers, profiling engines, and terminal workhorses.
          </p>

          {/* Hacker Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="devtool-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <span className="devtool-search-prefix">$ devtools search</span>
            <input
              type="text"
              name="q"
              placeholder="--tag=compilers,profilers,linters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="devtool-search-input"
            />
            <button type="submit" className="devtool-search-btn">
              Execute
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="devtool-cta-row">
            <Link href="/category/developer-tools" className="devtool-primary-btn">
              Explore 4,800+ DevTools <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="devtool-secondary-btn">
              Submit CLI Tool
            </Link>
          </div>

          {/* Social Proof */}
          <div className="devtool-social-proof">
            <div className="devtool-avatar-stack">
              <span className="dev-avatar av-1">⚡</span>
              <span className="dev-avatar av-2">💻</span>
              <span className="dev-avatar av-3">🦀</span>
              <span className="dev-avatar av-4">🚀</span>
            </div>
            <div className="devtool-proof-text">
              <div className="devtool-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />
                ))}
                <span className="devtool-rating">4.9/5.0</span>
              </div>
              <span className="devtool-subtext">Benchmarked by 72,000+ backend and systems developers</span>
            </div>
          </div>

          {/* Ecosystem Pills */}
          <div className="devtool-tags-row">
            <span className="devtool-tags-label">Toolchains:</span>
            <div className="devtool-tags-list">
              <Link href="/category/developer-tools" className="devtool-tag-pill">
                <Terminal size={12} /> Rust / Zig
              </Link>
              <Link href="/category/productivity" className="devtool-tag-pill">
                <Zap size={12} /> Fast Linters
              </Link>
              <Link href="/category/ai" className="devtool-tag-pill">
                <Code2 size={12} /> AI Copilots
              </Link>
              <Link href="/category/automation" className="devtool-tag-pill">
                <Cpu size={12} /> Profilers
              </Link>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="devtool-metrics-strip">
            <div className="devtool-metric-box">
              <span className="devtool-metric-val">4,800+</span>
              <span className="devtool-metric-desc">DevTools & CLIs</span>
            </div>
            <div className="devtool-metric-divider" />
            <div className="devtool-metric-box">
              <span className="devtool-metric-val">0-Bloat</span>
              <span className="devtool-metric-desc">Native Speed</span>
            </div>
            <div className="devtool-metric-divider" />
            <div className="devtool-metric-box">
              <span className="devtool-metric-val">100% Free</span>
              <span className="devtool-metric-desc">Community Tested</span>
            </div>
          </div>
        </div>

        {/* Right: macOS Interactive Terminal Window Card */}
        <div className="devtool-terminal-card">
          <div className="terminal-window-top">
            <div className="terminal-dots">
              <span className="tdot red" />
              <span className="tdot yellow" />
              <span className="tdot green" />
            </div>
            <span className="terminal-title">bash — 80x24 (zsh)</span>
            <span className="terminal-speed-tag">{currentTool.speed}</span>
          </div>

          {/* Tool Switcher Tabs */}
          <div className="terminal-switcher-row">
            {RUNTIME_TOOLS.map((tool, idx) => (
              <button
                key={tool.id}
                onClick={() => setActiveToolIndex(idx)}
                className={`terminal-tab-btn ${activeToolIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {tool.name}
              </button>
            ))}
          </div>

          {/* Active Tool Meta Box */}
          <div className="terminal-meta-row">
            <span className="terminal-ecosystem">{currentTool.ecosystem}</span>
            <span className="terminal-cat">{currentTool.category}</span>
          </div>

          {/* Interactive Shell Command & Output */}
          <div className="terminal-body">
            <div className="terminal-cmd-line">
              <span className="tprompt">techmero@macbook-pro:~$</span>
              <code className="tcode">{currentTool.cmd}</code>
              <button 
                onClick={handleCopy} 
                className="terminal-copy-btn"
                title="Copy Command"
                type="button"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="terminal-stdout">
              <code>{currentTool.output}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="terminal-card-footer">
            <span className="terminal-status-text">● Zero runtime dependencies</span>
            <Link href="/submit" className="terminal-submit-link">
              Submit DevTool <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
