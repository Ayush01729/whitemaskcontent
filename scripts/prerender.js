import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SEO_PAGES, SEO_PAGE_KEYS } from "../src/lib/seo-pages-data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const SITE_URL = "https://www.whitemaskcontent.com";

const CORE_ROUTES = {
  "": {
    title: "AI Video Production Services for Startups & Brands | White Mask Content",
    description:
      "Turn your product into high-converting AI video ads and UI walkthroughs. Share your URL — get your first 3 custom videos free in 24h. No credit card required.",
    canonical: `${SITE_URL}/`,
  },
  pricing: {
    title: "Pricing — AI Video Production Plans | White Mask Content",
    description:
      "Predictable AI video production from $54/mo for startups and brands. Free 3 videos test offer, kinetic UI cuts, and AI presenters. $0 setup fee. Cancel anytime.",
    canonical: `${SITE_URL}/pricing`,
  },
  "what-you-get": {
    title: "What You Get — Studio-Grade AI Product Videos | White Mask Content",
    description:
      "Everything your product video marketing needs: conversion copywriting, kinetic UI animations, hyper-realistic AI presenters, and platform exports. Zero filming required.",
    canonical: `${SITE_URL}/what-you-get`,
  },
  results: {
    title: "Results & Conversion Benchmarks — AI Video Ads | White Mask Content",
    description:
      "Real production benchmarks from White Mask Content's AI video engine: 4.8x ROAS on paid campaigns, 82% retention on product demos, and scalable organic growth.",
    canonical: `${SITE_URL}/results`,
  },
  resources: {
    title: "AI Video Guides & Product Growth Resources | White Mask Content",
    description:
      "Explore in-depth guides on AI video production, kinetic UI screencasts, AI UGC video ads, and high-retention video funnels for startups.",
    canonical: `${SITE_URL}/resources`,
  },
};

function getCoreFallbackHtml(routeKey) {
  if (routeKey === "") {
    return `
    <div id="root">
      <main style="max-width:1120px;margin:0 auto;padding:48px 20px;font-family:system-ui,-apple-system,sans-serif;color:#f3f5f9;background:#0b1220;line-height:1.6;">
        <header style="text-align:center;margin-bottom:48px;">
          <p style="color:#3e7bfa;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">AI Video Studio for Startups &amp; Brands • First 3 Videos Free</p>
          <h1 style="font-size:42px;font-weight:800;line-height:1.15;margin:16px 0;">AI Video Production Services for Startups &amp; Brands</h1>
          <p style="font-size:18px;color:#7e89a3;max-width:760px;margin:0 auto;">Turn your product link into high-converting AI short-form video ads, kinetic UI screencasts, and founder explainers. Drop your product URL — we study what you build and revert within 24 hours with your first 3 custom video concepts free. No credit card required.</p>
        </header>

        <section style="margin:48px 0;border-top:1px solid #1a253c;padding-top:36px;">
          <h2 style="font-size:26px;margin-bottom:12px;">Autonomous URL-to-Video Production Engine</h2>
          <p style="color:#b8c0d4;">White Mask Content analyzes your website or landing page URL to extract your positioning, value propositions, and customer objections. Our hybrid AI studio crafts tailored 9:16 vertical ads tuned for TikTok, Meta Reels, and YouTube Shorts.</p>
          <ul style="margin-top:16px;color:#b8c0d4;">
            <li style="margin-bottom:8px;">• <strong>Kinetic UI Demos:</strong> High-energy speed-runs of your software interface, highlighting core workflows.</li>
            <li style="margin-bottom:8px;">• <strong>AI Brand Presenters:</strong> Studio-grade AI actors and presenters delivering natural product reviews.</li>
            <li style="margin-bottom:8px;">• <strong>Zero Filming Overhead:</strong> No cameras, microphones, or lighting setups required from your team.</li>
            <li style="margin-bottom:8px;">• <strong>First 3 Videos Free:</strong> Receive 3 complete video concepts within 24 hours with zero credit card required.</li>
          </ul>
        </section>

        <section style="margin:48px 0;border-top:1px solid #1a253c;padding-top:36px;">
          <h2 style="font-size:26px;margin-bottom:16px;">AI Video Production Packages &amp; Free Trial</h2>
          <p style="color:#b8c0d4;">Explore flexible monthly video creative packages starting from $0 with 100% commercial ownership rights on all raw video files.</p>
          <ul style="margin-top:12px;color:#b8c0d4;">
            <li style="margin-bottom:8px;">• <strong>Free 3 Videos ($0):</strong> 3 custom reels (45-60s each), product angle research, delivered in 24h. No credit card required.</li>
            <li style="margin-bottom:8px;">• <strong>Starter ($54/mo):</strong> 26 vertical video ads + 2 long-form walkthroughs per month.</li>
            <li style="margin-bottom:8px;">• <strong>Creator ($86/mo):</strong> 28 vertical video ads + 4 long-form walkthroughs per month.</li>
            <li style="margin-bottom:8px;">• <strong>Growth ($124/mo):</strong> 30 vertical video ads + 6 long-form walkthroughs per month.</li>
            <li style="margin-bottom:8px;">• <strong>Pro ($284/mo):</strong> Daily-upload cadence across TikTok, Reels, and Shorts.</li>
          </ul>
        </section>

        <section style="margin:48px 0;border-top:1px solid #1a253c;padding-top:36px;">
          <h2 style="font-size:26px;margin-bottom:20px;">Frequently Asked Questions</h2>
          <div style="margin-bottom:24px;">
            <h3 style="font-size:18px;margin-bottom:6px;">How does White Mask Content create AI video ads from a product URL?</h3>
            <p style="color:#b8c0d4;">White Mask Content analyzes your website or landing page URL to extract your product positioning, customer pain points, and visual design tokens. Our hybrid pipeline combines advanced generative AI video models with human creative direction to deliver 3 custom video concepts within 24 hours with no credit card required.</p>
          </div>
          <div style="margin-bottom:24px;">
            <h3 style="font-size:18px;margin-bottom:6px;">How does the 'First 3 Videos Free' process work?</h3>
            <p style="color:#b8c0d4;">Paste your website link and email. Our team reviews your product positioning and reverts within 24 hours with your tailored 3-video concept roadmap. You approve the direction and receive your 3 fully produced videos free—no credit card required.</p>
          </div>
          <div style="margin-bottom:24px;">
            <h3 style="font-size:18px;margin-bottom:6px;">Can we use these videos for Meta and TikTok paid ads?</h3>
            <p style="color:#b8c0d4;">Yes. Every client receives 100% full commercial rights to all raw 4K vertical video files for paid advertising (Meta Ads, TikTok Spark Ads, YouTube Shorts) or organic social distribution.</p>
          </div>
          <div style="margin-bottom:24px;">
            <h3 style="font-size:18px;margin-bottom:6px;">Do founders or team members need to record anything?</h3>
            <p style="color:#b8c0d4;">No. Zero cameras, zero filming, and zero recording software required. All visuals, voiceovers, kinetic captions, and sound design are handled completely by White Mask Content.</p>
          </div>
        </section>
      </main>
    </div>`;
  }

  if (routeKey === "pricing") {
    return `
    <div id="root">
      <main style="max-width:1120px;margin:0 auto;padding:48px 20px;font-family:system-ui,-apple-system,sans-serif;color:#f3f5f9;background:#0b1220;line-height:1.6;">
        <header style="text-align:center;margin-bottom:48px;">
          <h1 style="font-size:38px;font-weight:800;line-height:1.2;">Transparent AI Video Production Plans for High-Growth Brands</h1>
          <p style="font-size:18px;color:#7e89a3;max-width:680px;margin:12px auto 0;">From our $0 Free 3 Videos trial to daily-upload scale packages. Zero setup fee, no long-term contracts, cancel anytime.</p>
        </header>
        <section style="margin:36px 0;">
          <h2 style="font-size:24px;margin-bottom:16px;">Video Production Tiers</h2>
          <ul style="color:#b8c0d4;">
            <li style="margin-bottom:12px;"><strong>Free 3 Videos ($0):</strong> 3 custom reels (45-60s each), product angle research, delivered in 24h. No credit card required.</li>
            <li style="margin-bottom:12px;"><strong>Starter ($54/mo):</strong> 26 vertical video ads + 2 long-form walkthroughs per month.</li>
            <li style="margin-bottom:12px;"><strong>Creator ($86/mo):</strong> 28 vertical video ads + 4 long-form walkthroughs per month.</li>
            <li style="margin-bottom:12px;"><strong>Growth ($124/mo):</strong> 30 vertical video ads + 6 long-form walkthroughs per month.</li>
            <li style="margin-bottom:12px;"><strong>Pro ($284/mo):</strong> 30 vertical video ads + 16 long-form walkthroughs per month.</li>
          </ul>
        </section>
      </main>
    </div>`;
  }

  return "";
}

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
  } else {
    // Core routes fallback
    const fallback = getCoreFallbackHtml(routeKey);
    if (fallback) {
      html = html.replace('<div id="root"></div>', fallback);
    }
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
