'use client';

import React from 'react';

export function Header({ siteName = 'DevToolsHunt' }: { siteName?: string }) {
  return (
    <header className="terminal-navbar">
      <div className="container terminal-nav-container">
        <a href="/" className="terminal-nav-brand">
          <span className="terminal-prompt-char">&gt;_</span>
          <span>DevToolsHunt</span>
        </a>
        <div className="terminal-nav-links">
        <a href="/">cd /home</a>
        <a href="/trends">git /trends</a>
        <a href="/category/cli">ls /cli</a>
        <a href="/search">grep /search</a>
          <a href="/submit" className="terminal-btn-launch">+ submit_tool.sh</a>
        </div>
      </div>
    </header>
  );
}
