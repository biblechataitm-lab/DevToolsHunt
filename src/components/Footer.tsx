import React from 'react';
import Link from 'next/link';
import { Terminal, ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'DevToolsHunt' }: { siteName?: string }) {
  return (
    <footer className="dth-footer">
      <div className="dth-footer-content">
        <div className="dth-footer-top">
          <div className="dth-footer-brand-area">
            <div className="dth-footer-brand">
              <div className="dth-nav-logo"><Terminal size={14} /></div>
              <span>{siteName}</span>
            </div>
            <p className="dth-footer-tagline">
              The curated developer tools directory. Discover, compare, and upvote
              the best CLI tools, IDE extensions, and infrastructure utilities.
            </p>
            <div className="dth-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>

          <div className="dth-footer-links-grid">
            <div>
              <h4 className="dth-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending Tools</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="dth-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/developer-tools">CLI & Build Tools</Link></li>
                <li><Link href="/category/ai">AI Coding</Link></li>
                <li><Link href="/category/productivity">IDE Extensions</Link></li>
                <li><Link href="/category/search-data">APIs & Data</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="dth-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit a Tool</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dth-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span className="dth-footer-code">// powered by Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
