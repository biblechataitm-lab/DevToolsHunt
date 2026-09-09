import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending Tools</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="dth-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/developer-tools">CLI & Build Tools</a></li>
                <li><a href="/category/ai">AI Coding</a></li>
                <li><a href="/category/productivity">IDE Extensions</a></li>
                <li><a href="/category/search-data">APIs & Data</a></li>
              </ul>
            </div>
            <div>
              <h4 className="dth-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit a Tool</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
