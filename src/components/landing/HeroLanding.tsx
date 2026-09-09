'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Terminal, Code2, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.dth-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="dth-hero">
      {/* Terminal scanline effect */}
      <div className="dth-hero-scanlines" aria-hidden="true" />

      <div className="dth-hero-container">
        <div className="dth-hero-content">
          <div className="dth-animate dth-hero-badge">
            <Terminal size={13} />
            <span>~/devtools-hunt</span>
            <span className="dth-badge-cursor">▊</span>
          </div>

          <h1 className="dth-animate dth-hero-title">
            The Developer's <br />
            <span className="dth-cyan-text">Ultimate Toolbox</span>
          </h1>

          <p className="dth-animate dth-hero-subtitle">
            Discover, compare, and upvote 1,800+ developer tools — from CLI utilities
            and IDE extensions to CI/CD pipelines and infrastructure.
          </p>

          <form
            className="dth-animate dth-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <span className="dth-search-prompt">$</span>
            <input type="text" placeholder="search --tools 'linting, bundlers, testing...'" />
            <button type="submit">
              <Search size={14} /> Run
            </button>
          </form>

          <div className="dth-animate dth-hero-tags">
            <Link href="/category/developer-tools" className="dth-tag">
              <Code2 size={12} /> CLI Tools
            </Link>
            <Link href="/category/productivity" className="dth-tag">IDE Extensions</Link>
            <Link href="/category/ai" className="dth-tag">AI Coding</Link>
            <Link href="/trends" className="dth-tag dth-tag-hot">
              <TrendingUp size={12} /> Trending
            </Link>
          </div>
        </div>

        {/* Terminal window preview */}
        <div className="dth-animate dth-hero-terminal">
          <div className="dth-terminal-titlebar">
            <div className="dth-terminal-dots">
              <span className="dth-dot dth-dot-red" />
              <span className="dth-dot dth-dot-yellow" />
              <span className="dth-dot dth-dot-green" />
            </div>
            <span className="dth-terminal-title">devtools-hunt — zsh</span>
          </div>
          <div className="dth-terminal-body">
            <div className="dth-terminal-line">
              <span className="dth-t-prompt">❯</span>
              <span className="dth-t-cmd"> dth search</span>
              <span className="dth-t-flag"> --category</span>
              <span className="dth-t-val"> "developer-tools"</span>
            </div>
            <div className="dth-terminal-line dth-t-output">
              Found <span className="dth-t-num">1,847</span> tools across <span className="dth-t-num">24</span> categories
            </div>
            <div className="dth-terminal-line dth-t-output">
              <span className="dth-t-success">✓</span> Top today: <span className="dth-t-highlight">Vite 7</span> — 342 upvotes
            </div>
            <div className="dth-terminal-line dth-t-output">
              <span className="dth-t-success">✓</span> Rising: <span className="dth-t-highlight">Biome 2.0</span> — 289 upvotes
            </div>
            <div className="dth-terminal-line dth-t-output">
              <span className="dth-t-success">✓</span> New: <span className="dth-t-highlight">Oxlint</span> — 256 upvotes
            </div>
            <div className="dth-terminal-line">
              <span className="dth-t-prompt">❯</span>
              <span className="dth-cursor-blink">▊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
