import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "dth-1",
    "title": "Ripgrep",
    "tagline": "Ultra-fast recursive regex search utility built in Rust that honors .gitignore",
    "link": "https://github.com/BurntSushi/ripgrep",
    "category": "CLI & Terminals",
    "upvotes": 520,
    "tags": [
      "cli",
      "search",
      "rust"
    ],
    "techStack": [
      "Rust",
      "Regex"
    ],
    "maker": {
      "name": "Andrew Gallant",
      "avatar": "https://placehold.co/64x64/22d3ee/0d1117?text=RG"
    }
  },
  {
    "id": "dth-2",
    "title": "LazyGit",
    "tagline": "Simple terminal UI for git commands that transforms your everyday workflow",
    "link": "https://github.com/jesseduffield/lazygit",
    "category": "CLI & Terminals",
    "upvotes": 480,
    "tags": [
      "git",
      "terminal",
      "tui"
    ],
    "techStack": [
      "Go",
      "Gocui"
    ],
    "maker": {
      "name": "Jesse Duffield",
      "avatar": "https://placehold.co/64x64/34d399/0d1117?text=LG"
    }
  },
  {
    "id": "dth-3",
    "title": "Starship CLI",
    "tagline": "The minimal, blazing-fast, and infinitely customizable cross-shell prompt",
    "link": "https://starship.rs",
    "category": "CLI & Terminals",
    "upvotes": 430,
    "tags": [
      "shell",
      "prompt",
      "rust"
    ],
    "techStack": [
      "Rust",
      "Zsh",
      "Fish"
    ],
    "maker": {
      "name": "Starship Team",
      "avatar": "https://placehold.co/64x64/f59e0b/0d1117?text=SS"
    }
  },
  {
    "id": "dth-4",
    "title": "Biome",
    "tagline": "High-performance toolchain for web development, formatting and linting in milliseconds",
    "link": "https://biomejs.dev",
    "category": "CI/CD & DevOps",
    "upvotes": 395,
    "tags": [
      "linter",
      "formatter",
      "compiler"
    ],
    "techStack": [
      "Rust",
      "JavaScript",
      "TypeScript"
    ],
    "maker": {
      "name": "Biome Authors",
      "avatar": "https://placehold.co/64x64/a78bfa/0d1117?text=BM"
    }
  },
  {
    "id": "dth-5",
    "title": "Bun",
    "tagline": "Incredibly fast all-in-one JavaScript runtime, bundler, and package manager",
    "link": "https://bun.sh",
    "category": "SDKs & APIs",
    "upvotes": 360,
    "tags": [
      "runtime",
      "package-manager",
      "zig"
    ],
    "techStack": [
      "Zig",
      "C++",
      "JavaScript"
    ],
    "maker": {
      "name": "Jarred Sumner",
      "avatar": "https://placehold.co/64x64/ec4899/0d1117?text=BN"
    }
  },
  {
    "id": "dth-6",
    "title": "OrbStack",
    "tagline": "Fast, light, and battery-friendly way to run Docker containers & Linux machines on Mac",
    "link": "https://orbstack.dev",
    "category": "CI/CD & DevOps",
    "upvotes": 340,
    "tags": [
      "docker",
      "macos",
      "containers"
    ],
    "techStack": [
      "Swift",
      "Rust",
      "Linux Kernel"
    ],
    "maker": {
      "name": "Danny Guo",
      "avatar": "https://placehold.co/64x64/38bdf8/0d1117?text=OS"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "devtoolshunt",
  "name": "DevToolsHunt",
  "domain": "devtoolshunt.com",
  "category": "developer-tools",
  "tags": [
    "developer-tools",
    "cli",
    "infrastructure",
    "terminal",
    "devtools"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
