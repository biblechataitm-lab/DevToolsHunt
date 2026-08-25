'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Code, Cpu, Flame, Copy, Check, Search, ShieldCheck, ArrowRight, GitBranch, Play } from 'lucide-react';

const CLI_TOOLS = [
  {
    id: 'oxc',
    name: 'oxc_parser',
    ecosystem: 'Rust • JS Toolchain',
    cmd: 'cargo add oxc_parser --features=ast-serialize',
    output: '✓ Compiled oxc_parser v0.34.0 (3.2x faster than SWC/Babel)\n⚡ AST Generation completed in 4.2ms across 1,840 modules',
    stars: '14.8k ★',
  },
  {
    id: 'bun',
    name: 'bunx runner',
    ecosystem: 'Zig • Fast Runtime',
    cmd: 'bunx --bun create-next-app@latest ./app --ts',
    output: '✓ Installed 42 packages in 184ms\n⚡ Ready on http://localhost:3000 in 12ms',
    stars: '72.4k ★',
  },
  {
    id: 'fzf',
    name: 'fzf previewer',
    ecosystem: 'Go • Shell Utility',
    cmd: 'git log --oneline | fzf --preview "git show --color=always {}"',
    output: '✓ Interactive fuzzy stream initialized\n⚡ Filtering 100k commits with zero drop frames',
    stars: '61.2k ★',
  },
];

export function HeroSection() {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const currentTool = CLI_TOOLS[activeToolIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTool.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="devtool-hero">
      <div className="devtool-hero-grid">
        {/* Left: Monospace Value Proposition */}
        <div className="devtool-hero-content">
          <div className="devtool-terminal-badge">
            <span className="devtool-prompt-char">&gt;</span>
            <span>devtoolshunt --status=active --curated=2026</span>
          </div>

          <h1 className="devtool-title">
            The Developer-First Index for <span className="devtool-matrix-text">CLI Tools & Dev Runtimes</span>.
          </h1>

          <p className="devtool-lead">
            Curated command-line utilities, high-performance compilers, profiling engines, API test harnesses, and terminal superpowers.
          </p>

          {/* Search box formatted as a shell prompt */}
          <form 
            action="/search" 
            method="GET" 
            className="devtool-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <span className="devtool-cli-icon">$</span>
            <input
              type="text"
              name="q"
              placeholder="Search CLI tools, rust crates, debuggers, linters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="devtool-search-input"
            />
            <button type="submit" className="devtool-search-btn">
              Execute Search
            </button>
          </form>

          {/* Ecosystem chips */}
          <div className="devtool-tags-row">
            <span className="devtool-tags-label">Stacks:</span>
            <div className="devtool-tags-list">
              <Link href="/category/developer-tools" className="devtool-tag-pill">
                <Terminal size={12} /> CLI Engines
              </Link>
              <Link href="/category/ai" className="devtool-tag-pill">
                <Cpu size={12} /> Rust Tooling
              </Link>
              <Link href="/category/productivity" className="devtool-tag-pill">
                <Code size={12} /> API Clients
              </Link>
              <Link href="/category/automation" className="devtool-tag-pill">
                <GitBranch size={12} /> Git Utilities
              </Link>
            </div>
          </div>

          {/* Developer trust metrics */}
          <div className="devtool-metrics-strip">
            <div className="devtool-metric-box">
              <span className="devtool-metric-val">4,800+</span>
              <span className="devtool-metric-desc">DevTools & CLIs</span>
            </div>
            <div className="devtool-metric-divider" />
            <div className="devtool-metric-box">
              <span className="devtool-metric-val">100%</span>
              <span className="devtool-metric-desc">Terminal Tested</span>
            </div>
            <div className="devtool-metric-divider" />
            <div className="devtool-metric-box">
              <span className="devtool-metric-val">Zero-Bloat</span>
              <span className="devtool-metric-desc">Curated Stacks</span>
            </div>
          </div>
        </div>

        {/* Right: Live Interactive macOS Terminal Window */}
        <div className="devtool-terminal-window">
          <div className="terminal-window-header">
            <div className="terminal-window-controls">
              <span className="control-dot close" />
              <span className="control-dot minimize" />
              <span className="control-dot expand" />
            </div>
            <span className="terminal-window-title">bash — 80x24 (dev-runtime)</span>
            <span className="terminal-window-stars">{currentTool.stars}</span>
          </div>

          {/* Terminal Tabs */}
          <div className="terminal-tabs-row">
            {CLI_TOOLS.map((tool, idx) => (
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

          {/* Interactive Shell Body */}
          <div className="terminal-body">
            <div className="terminal-cmd-line">
              <span className="terminal-shell-user">dev@hunt:~</span>
              <span className="terminal-prompt">$</span>
              <code className="terminal-cmd-text">{currentTool.cmd}</code>
              <button 
                onClick={handleCopy} 
                className="terminal-copy-action"
                title="Copy Command"
                type="button"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Output Stream */}
            <pre className="terminal-stdout">
              <code>{currentTool.output}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="terminal-window-footer">
            <div className="terminal-ecosystem-tag">
              <span className="terminal-status-green" />
              <span>{currentTool.ecosystem}</span>
            </div>
            <Link href="/submit" className="terminal-submit-link">
              Submit DevTool <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
