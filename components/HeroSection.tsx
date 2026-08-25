'use client';

import React from 'react';
import Hero17 from '@/components/ui/hero-17';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero17
        brandName="DevToolsHunt"
        eyebrow="HIGH-PERFORMANCE DEVELOPER TOOLING"
        headingLine1Prefix="Engineered for"
        headingHighlight="Sub-Millisecond"
        headingLine2="CLIs & Runtimes."
        description="Discover native Rust & Zig binaries, lightning-fast bundlers, terminal emulators, and local development proxies tested under high concurrency."
        primaryCtaLabel="Explore 1,200+ DevTools"
        primaryCtaHref="/category/developer-tools"
        secondaryCtaLabel="Submit Binary"
        secondaryCtaHref="/submit"
        signupLabel="Submit DevTool"
        signupHref="/submit"
        scrollLabel="Explore Fast Tools"
      />
    </div>
  );
}
