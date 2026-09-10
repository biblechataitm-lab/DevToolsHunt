'use client';

import React from 'react';

export function Header({ siteName = 'DevToolsHunt' }: { siteName?: string }) {
  return (
    <header className="terminal-navbar">
      <div className="container terminal-nav-container">
        <a href="/" className="terminal-nav-brand">
          <span className="terminal-prompt-char">&gt;_</span>
          <span className="terminal-brand-name">{siteName}</span>
          <span className="terminal-tag-release">v2.4.0</span>
        </a>

        <div className="terminal-nav-links">
          <a href="/" className="terminal-nav-item active"><span className="t-prefix">cd</span> /home</a>
          <a href="/trends" className="terminal-nav-item"><span className="t-prefix">git</span> /trends</a>
          <a href="/category/cli" className="terminal-nav-item"><span className="t-prefix">ls</span> /cli-tools</a>
          <a href="/category/developer-tools" className="terminal-nav-item"><span className="t-prefix">cat</span> /debuggers</a>
          <a href="/sponsor" className="terminal-nav-item terminal-nav-sponsor">sudo sponsor</a>
        </div>

        <div className="terminal-nav-actions">
          <div className="terminal-sys-status">
            <span className="terminal-green-pulse"></span>
            <span>CLI: OK · 8ms</span>
          </div>
          <a href="/submit" className="terminal-btn-launch">
            + submit_tool.sh
          </a>
        </div>
      </div>
    </header>
  );
}

