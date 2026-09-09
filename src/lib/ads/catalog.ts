import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "dev-1",
    "title": "HyperTerm CLI",
    "tagline": "GPU-accelerated terminal multiplexer with built-in agentic command hooks",
    "description": "Next-generation terminal emulator designed for high-throughput streaming and live agent telemetry.",
    "logo": "https://placehold.co/96x96/161b22/10b981?text=HT",
    "link": "https://example.com/hyperterm",
    "category": "CLI & Terminals",
    "tags": [
      "cli",
      "terminal",
      "rust"
    ],
    "techStack": [
      "Rust",
      "WebGPU",
      "C++"
    ],
    "coverImages": [],
    "upvotes": 312,
    "launchedAt": "2026-08-19T05:12:33.187Z",
    "maker": {
      "name": "Alex Miller",
      "username": "amiller",
      "avatar": "https://placehold.co/64x64/21262d/10b981?text=A"
    }
  },
  {
    "id": "dev-2",
    "title": "QueryMesh",
    "tagline": "Instant zero-overhead Postgres query mocking and visual explain analyzer",
    "description": "Profile slow queries, simulate lock contention, and generate schema migration plans with instant AST analysis.",
    "logo": "https://placehold.co/96x96/161b22/06b6d4?text=QM",
    "link": "https://example.com/querymesh",
    "category": "Database Tools",
    "tags": [
      "database",
      "postgres",
      "sql"
    ],
    "techStack": [
      "Go",
      "PostgreSQL",
      "TypeScript"
    ],
    "coverImages": [],
    "upvotes": 245,
    "launchedAt": "2026-08-17T05:12:33.188Z",
    "maker": {
      "name": "Sarah Lin",
      "username": "slin",
      "avatar": "https://placehold.co/64x64/21262d/06b6d4?text=S"
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
