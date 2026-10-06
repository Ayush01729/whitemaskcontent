import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SEO_PAGES, SEO_PAGE_KEYS } from "../src/lib/seo-pages-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const SITE_URL = "https://www.whitemaskcontent.com";

// Base static metadata for core routes
const CORE_ROUTES = {
  "": {
    title: "White Mask Content — Done-for-You Faceless AI Video Production",
    description:
      "White Mask Content turns one idea into a full faceless video pipeline: scripts, AI voiceover, editing, thumbnails, and posting for creators, startups, and YouTube channels. Plans from $54/mo.",
    canonical: `${SITE_URL}/`,
  },
  pricing: {
    title: "Pricing — Faceless Video Plans from $54/mo | White Mask Content",
    description:
      "Flat monthly pricing for done-for-you faceless video production. Starter ($54), Creator ($86), Growth ($124), Pro ($284). $0 setup fee. Cancel anytime.",
    canonical: `${SITE_URL}/pricing`,
  },
  "what-you-get": {
    title: "What You Get — 16+ Features Included | White Mask Content",
    description:
      "Everything your faceless YouTube channel needs: niche-researched scripts, AI voiceover, video editing, CTR thumbnails, SEO metadata, and multi-platform posting.",
    canonical: `${SITE_URL}/what-you-get`,
  },
  results: {
    title: "Results — 12M+ Monthly Views Across 170+ Niches | White Mask Content",
    description:
      "Real production performance across 240+ client channels. $850K+ in ad revenue kept 100% by creators. Explore sample output and niche metrics.",
    canonical: `${SITE_URL}/results`,
  },
  resources: {
    title: "Faceless YouTube Guides & Video Automation Resources | White Mask Content",
    description:
      "Explore in-depth guides on faceless YouTube channels, video automation pipelines, AI scripting & voiceovers, top RPM niches, and done-for-you channel growth.",
    canonical: `${SITE_URL}/resources`,
  },
};

function buildStaticHtml(baseHtml, routeKey, meta, pageData) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${meta.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonical}" />`
  );

  // Replace Twitter Card Tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${meta.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${meta.description}" />`
  );

  // If this is one of our SEO Pillar pages, inject Schema & Crawlable semantic fallback HTML
  if (pageData) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pageData.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${SITE_URL}/resources`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: pageData.keyword,
          item: meta.canonical,
        },
      ],
    };

    const schemaInjection = `
    <!-- Page Specific Schemas -->
    <script type="application/ld+json" id="seo-page-schema">${JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json" id="seo-breadcrumb-schema">${JSON.stringify(breadcrumbSchema)}</script>
    `;

    html = html.replace("</head>", `${schemaInjection}\n  </head>`);

    // Build rich crawlable semantic fallback markup inside #root for search engine indexing
    const crawlableFallback = `
    <div id="root">
      <article style="max-width:960px;margin:0 auto;padding:40px 20px;font-family:sans-serif;color:#f3f5f9;background:#0b1220;">
        <header>
          <p style="color:#38c6b9;font-weight:600;font-size:14px;text-transform:uppercase;">${pageData.eyebrow} • ${pageData.readTime}</p>
          <h1 style="font-size:36px;margin:16px 0;line-height:1.2;">${pageData.h1}</h1>
          <p style="font-size:18px;color:#7e89a3;line-height:1.6;">${pageData.heroSubtitle}</p>
        </header>

        <section style="margin:40px 0;border-top:1px solid #263050;padding-top:30px;">
          <h2 style="font-size:24px;margin-bottom:20px;">Guide Overview & Table of Contents</h2>
          <ul>
            ${pageData.tableOfContents.map((t) => `<li style="margin-bottom:8px;"><a href="#${t.id}" style="color:#3e7bfa;">${t.title}</a></li>`).join("")}
          </ul>
        </section>

        ${pageData.sections
          .map(
            (sec) => `
          <section id="${sec.id}" style="margin:40px 0;border-top:1px solid #263050;padding-top:30px;">
            <h2 style="font-size:26px;color:#f3f5f9;margin-bottom:8px;">${sec.title}</h2>
            ${sec.subtitle ? `<p style="font-weight:600;color:#b8c0d4;margin-bottom:16px;">${sec.subtitle}</p>` : ""}
            ${sec.paragraphs.map((p) => `<p style="line-height:1.7;color:#b8c0d4;margin-bottom:16px;">${p}</p>`).join("")}
            ${
              sec.comparisonTable
                ? `
              <div style="overflow-x:auto;margin:20px 0;">
                <table style="width:100%;border-collapse:collapse;border:1px solid #263050;">
                  <thead>
                    <tr style="background:#182238;color:#f3f5f9;">
                      ${sec.comparisonTable.headers.map((h) => `<th style="padding:10px;border:1px solid #263050;text-align:left;">${h}</th>`).join("")}
                    </tr>
                  </thead>
                  <tbody>
                    ${sec.comparisonTable.rows
                      .map(
                        (row) => `
                      <tr style="border-bottom:1px solid #263050;">
                        ${row.map((cell) => `<td style="padding:10px;border:1px solid #263050;color:#b8c0d4;">${cell}</td>`).join("")}
                      </tr>`
                      )
                      .join("")}
                  </tbody>
                </table>
              </div>`
                : ""
            }
          </section>`
          )
          .join("")}

        <section style="margin:40px 0;border-top:1px solid #263050;padding-top:30px;">
          <h2 style="font-size:26px;color:#f3f5f9;margin-bottom:20px;">Frequently Asked Questions: ${pageData.keyword}</h2>
          ${pageData.faqs
            .map(
              (f) => `
            <div style="margin-bottom:20px;">
              <h3 style="font-size:18px;color:#f3f5f9;margin-bottom:6px;">${f.q}</h3>
              <p style="color:#b8c0d4;line-height:1.6;">${f.a}</p>
            </div>`
            )
            .join("")}
        </section>
      </article>
    </div>`;

    html = html.replace('<div id="root"></div>', crawlableFallback);
  }

  return html;
}

async function runPrerender() {
  const baseHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(baseHtmlPath)) {
    console.error("dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

  console.log("Generating static SEO pages for 200 OK indexing on GitHub Pages / Custom Domain...");

  // 1. Process Core Routes
  for (const [route, meta] of Object.entries(CORE_ROUTES)) {
    const routeDir = route ? path.join(distDir, route) : distDir;
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const outputPath = path.join(routeDir, "index.html");
    const staticHtml = buildStaticHtml(baseHtml, route, meta, null);
    fs.writeFileSync(outputPath, staticHtml, "utf-8");
    console.log(`  ✓ Generated: /${route}`);
  }

  // 2. Process All 10 Target Keyword SEO Pages
  for (const slug of SEO_PAGE_KEYS) {
    const pageData = SEO_PAGES[slug];
    const meta = {
      title: `${pageData.title} | White Mask Content`,
      description: pageData.metaDescription,
      canonical: `${SITE_URL}/${slug}`,
    };

    const routeDir = path.join(distDir, slug);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    const outputPath = path.join(routeDir, "index.html");
    const staticHtml = buildStaticHtml(baseHtml, slug, meta, pageData);
    fs.writeFileSync(outputPath, staticHtml, "utf-8");
    console.log(`  ✓ Generated SEO Pillar Page: /${slug}`);
  }

  console.log("✨ Prerendering complete! All 10 keywords and core routes have static 200 OK HTML files.");
}

runPrerender().catch((err) => {
  console.error("Prerender error:", err);
  process.exit(1);
});
