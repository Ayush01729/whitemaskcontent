import { useEffect } from "react";

const SITE_NAME = "White Mask Content";
const SITE_URL = "https://www.whitemaskcontent.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Dynamically sets <title>, meta description, canonical URL,
 * Open Graph / Twitter Card tags, and page-specific JSON-LD
 * structured data for each route.
 *
 * Usage:
 *   <SEOHead
 *     title="Pricing — Faceless Video Plans from $54/mo | White Mask Content"
 *     description="Faceless video plans starting at $54/mo…"
 *     path="/pricing"
 *     schema={faqSchema}
 *   />
 */
export function SEOHead({
  title,
  description,
  path = "/",
  type = "website",
  schema,
}) {
  const canonical = `${SITE_URL}${path}`;

  useEffect(() => {
    // ── Title ──────────────────────────────────────────────
    document.title = title;

    // ── Standard meta ─────────────────────────────────────
    upsertMeta("name", "description", description);

    // ── Open Graph ────────────────────────────────────────
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:site_name", SITE_NAME);

    // ── Twitter Card ──────────────────────────────────────
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", OG_IMAGE);

    // ── Canonical ─────────────────────────────────────────
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    // ── JSON-LD structured data ───────────────────────────
    if (schema) {
      let script = document.getElementById("seo-page-schema");
      if (!script) {
        script = document.createElement("script");
        script.id = "seo-page-schema";
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    return () => {
      const el = document.getElementById("seo-page-schema");
      if (el) el.remove();
    };
  }, [title, description, canonical, type, schema]);

  return null;
}

/** Upsert a <meta> tag by attribute key (name or property). */
function upsertMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

// ── Reusable JSON-LD schema builders ──────────────────────

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Done-for-you faceless AI video production for creators, startups, and YouTube channels.",
  sameAs: [],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Faceless AI Video Production",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description:
      "Done-for-you faceless video production: scripts, AI voiceover, editing, thumbnails, SEO metadata, and multi-platform posting.",
    areaServed: "Worldwide",
    serviceType: "Video Production",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "54",
      highPrice: "284",
      priceCurrency: "USD",
      offerCount: "4",
    },
  };
}

export function buildFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
