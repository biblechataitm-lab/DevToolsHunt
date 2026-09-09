'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="terminal-hero">
  <div class="terminal-hero-grid container">
    <div class="terminal-hero-left">
      <div class="terminal-badge">
        <span class="terminal-blink">$</span>
        <span>brew install devtoolshunt</span>
      </div>
      <h1 class="terminal-title">
        The Command-Line <br/><span class="terminal-cyan">& Terminal Engine</span>
      </h1>
      <p class="terminal-desc">
        Curating the fastest CLI binaries, TUI dashboards, debugger harnesses, and open developer infrastructure.
      </p>
      <div class="terminal-cmd-bar">
        <span class="terminal-prompt-sym">❯</span>
        <input type="text" placeholder="dth search --category=cli" class="terminal-cmd-input" />
        <span class="terminal-kbd">⌘K</span>
      </div>
      <div class="terminal-tags">
        <span>#popular:</span>
        <a href="/category/cli" class="t-tag">CLI & TUI</a>
        <a href="/category/databases" class="t-tag">SQLite / DB</a>
        <a href="/category/cicd" class="t-tag">Docker</a>
      </div>
    </div>
    <div class="terminal-hero-right">
      <div class="terminal-window">
        <div class="terminal-window-header">
          <div class="terminal-dots">
            <span class="dot-red"></span>
            <span class="dot-yellow"></span>
            <span class="dot-green"></span>
          </div>
          <span class="terminal-tab-title">devtoolshunt@macbook: ~</span>
        </div>
        <div class="terminal-window-body">
          <div class="t-line"><span class="t-green">→</span> <span class="t-cyan">~</span> dth list --trending</div>
          <div class="t-line t-dim">Fetching verified developer tools...</div>
          <div class="t-table">
            <div class="t-row t-head"><span>NAME</span><span>STARS</span><span>BENCHMARK</span></div>
            <div class="t-row"><span>ripgrep</span><span class="t-yellow">★ 48.2k</span><span class="t-green">14ms parse</span></div>
            <div class="t-row"><span>lazygit</span><span class="t-yellow">★ 42.1k</span><span class="t-green">0.2s launch</span></div>
            <div class="t-row"><span>bun</span><span class="t-yellow">★ 75.3k</span><span class="t-green">4x v8 node</span></div>
            <div class="t-row"><span>biome</span><span class="t-yellow">★ 18.9k</span><span class="t-green">25x prettier</span></div>
          </div>
          <div className="t-line t-cyan mt-2">
            <span className="terminal-blink">█</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
