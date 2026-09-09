'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "CLI & Terminals",
    "path": "/category/cli"
  },
  {
    "label": "SDKs & APIs",
    "path": "/category/sdks"
  },
  {
    "label": "CI/CD & DevOps",
    "path": "/category/cicd"
  },
  {
    "label": "Database Tools",
    "path": "/category/databases"
  },
  {
    "label": "Testing & Debugging",
    "path": "/category/testing"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  const pathname = usePathname();

  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-list">
        {CATEGORIES.map((cat) => {
          const isActive =
            activeCategory
              ? cat.path.toLowerCase() === `/category/${activeCategory.toLowerCase()}`
              : pathname === cat.path;

          return (
            <Link
              key={cat.path}
              href={cat.path}
              className={`category-chip ${isActive ? 'active' : ''}`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
