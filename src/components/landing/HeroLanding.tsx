'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section className="terminal-hero">
      <div className="terminal-hero-grid container">
        <div className="terminal-hero-left">
          <div className="terminal-badge">
            <span className="terminal-blink">$</span>
            <span>brew install devtoolshunt</span>
          </div>

          <h1 className="terminal-title">
            The Command-Line <br />
            <span className="terminal-cyan">&amp; Terminal Engine</span>
          </h1>

          <p className="terminal-desc">
            Curating the fastest CLI binaries, Rust-based TUIs, high-throughput debugging harnesses, and open developer infrastructure.
          </p>

          <div className="terminal-cmd-bar">
            <span className="terminal-prompt-sym">❯</span>
            <input 
              type="text" 
              placeholder="dth search --category=cli --stars &gt; 1000" 
              className="terminal-cmd-input" 
              aria-label="Search developer tools"
            />
            <span className="terminal-kbd">⌘K</span>
          </div>

          <div className="terminal-tags">
            <span className="terminal-tag-lbl">#popular_flags:</span>
            <a href="/category/cli" className="t-tag">--cli-tui</a>
            <a href="/category/databases" className="t-tag">--sqlite-db</a>
            <a href="/category/cicd" className="t-tag">--containers</a>
            <a href="/category/developer-tools" className="t-tag">--harnesses</a>
          </div>
        </div>

        <div className="terminal-hero-right">
          <div className="terminal-window">
            <div className="terminal-window-header">
              <div className="terminal-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <span className="terminal-tab-title">dth@bash: ~ (zsh)</span>
            </div>
            <div className="terminal-window-body">
              <div className="t-line"><span className="t-green">→</span> <span className="t-cyan">~</span> dth list --trending --verified</div>
              <div className="t-line t-dim">[INFO] Connecting to live developer tool registry...</div>
              <div className="t-table">
                <div className="t-row t-header-row">
                  <span>PKG_NAME</span>
                  <span>CATEGORY</span>
                  <span>RUNTIME</span>
                  <span>STATUS</span>
                </div>
                <div className="t-row">
                  <span className="t-pkg">ripgrep</span>
                  <span className="t-cat">search</span>
                  <span className="t-speed">Rust</span>
                  <span className="t-stars">VERIFIED</span>
                </div>
                <div className="t-row">
                  <span className="t-pkg">lazygit</span>
                  <span className="t-cat">git-tui</span>
                  <span className="t-speed">Go</span>
                  <span className="t-stars">VERIFIED</span>
                </div>
                <div className="t-row">
                  <span className="t-pkg">bat</span>
                  <span className="t-cat">cat-clone</span>
                  <span className="t-speed">Rust</span>
                  <span className="t-stars">VERIFIED</span>
                </div>
                <div className="t-row">
                  <span className="t-pkg">zellij</span>
                  <span className="t-cat">multiplexer</span>
                  <span className="t-speed">Rust</span>
                  <span className="t-stars">VERIFIED</span>
                </div>
              </div>
              <div className="t-cursor-line">
                <span className="t-green">❯</span> <span className="t-cursor">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
