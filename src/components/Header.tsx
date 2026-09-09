'use client';

import React from 'react';

export function Header({ siteName = 'DevToolsHunt' }: { siteName?: string }) {
  return (
    <header class="terminal-navbar">
  <div class="container terminal-nav-container">
    <a href="/" class="terminal-nav-brand">
      <span class="terminal-prompt-char">&gt;_</span>
      <span>DevToolsHunt</span>
    </a>
    <div class="terminal-nav-links">
      <a href="/"><span class="t-dim">cd</span> /home</a>
      <a href="/trends"><span class="t-dim">git</span> /trends</a>
      <a href="/search"><span class="t-dim">grep</span> /search</a>
      <a href="/submit" class="terminal-btn-launch">+ submit_tool.sh</a>
    </div>
  </div>
</header>
  );
}
