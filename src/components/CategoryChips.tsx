'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "CLI & Shell",
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
    "label": "Databases",
    "path": "/category/databases"
  },
  {
    "label": "Testing",
    "path": "/category/testing"
  },
  {
    "label": "Developer Tools",
    "path": "/category/developer-tools"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`chip ${isActive ? 'chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
