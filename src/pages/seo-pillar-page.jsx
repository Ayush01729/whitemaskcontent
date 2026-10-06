import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  PlayCircle,
  Clock,
  Calendar,
  Layers,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/ui/reveal";
import { Button } from "../components/ui/button";
import { SEOHead, buildFAQSchema, buildBreadcrumbSchema } from "../components/seo-head";
import { usePlanModal } from "../context/plan-modal-context";
import { SEO_PAGES } from "../lib/seo-pages-data";
import { GUARANTEES } from "../lib/content";
import { GuaranteeValue } from "../components/ui/guarantee-value";
import { NotFound } from "./not-found";

export function SEOPillarPage({ fixedSlug }) {
  const params = useParams();
  const slug = fixedSlug || params.slug;
  const pageData = SEO_PAGES[slug];

  const { openPlanModal } = usePlanModal();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!pageData) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/resources" },
    { name: pageData.title.split(":")[0], path: `/${pageData.slug}` },
  ];

  const schema = [
    buildBreadcrumbSchema(breadcrumbs),
    buildFAQSchema(pageData.faqs),
  ];

  const relatedPages = (pageData.relatedSlugs || [])
    .map((s) => SEO_PAGES[s])
    .filter(Boolean);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title={`${pageData.title} | White Mask Content`}
        description={pageData.metaDescription}
        path={`/${pageData.slug}`}
        schema={schema}
      />

      {/* ── Breadcrumb & Hero Header ─────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb nav */}
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-mute">
              <Link to="/" className="transition-colors hover:text-paper">
                Home
              </Link>
              <span>/</span>
              <Link to="/resources" className="transition-colors hover:text-paper">
                Guides
              </Link>
              <span>/</span>
              <span className="text-paper-dim">{pageData.keyword}</span>
            </nav>
          </Reveal>

          {/* Badge & Meta */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-wave/30 bg-wave/10 px-3 py-1 text-xs font-medium text-wave">
                <Sparkles className="h-3 w-3" />
                {pageData.eyebrow}
              </span>
              <span className="flex items-center gap-1 text-xs text-mute">
                <Clock className="h-3.5 w-3.5" />
                {pageData.readTime}
              </span>
              <span className="flex items-center gap-1 text-xs text-mute">
                <Calendar className="h-3.5 w-3.5" />
                Updated {pageData.lastUpdated}
              </span>
            </div>
          </Reveal>

          {/* Main H1 */}
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance text-paper sm:text-4xl lg:text-[2.75rem]">
              {pageData.h1}
            </h1>
          </Reveal>

          {/* Hero Subtitle */}
          <Reveal delay={0.15}>
            <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
              {pageData.heroSubtitle}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => openPlanModal({ name: "Growth", price: 124 })}
              size="lg"
            >
              Launch your channel <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/pricing" variant="outline" size="lg">
              View plans from $54/mo
            </Button>
          </Reveal>
        </div>

        {/* ── Key Stats Banner ─────────────────────────────────── */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-line pt-10">
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pageData.keyStats.map((stat, i) => (
              <StaggerItem
                key={i}
                className="rounded-xl border border-line bg-panel p-4"
              >
                <span className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs font-medium text-paper-dim">{stat.label}</p>
                <p className="mt-1 text-[11px] leading-tight text-mute">{stat.subtext}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Table of Contents & Quick Navigation ──────────────── */}
      {pageData.tableOfContents && (
        <section className="border-y border-line bg-panel/40 px-6 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mute">
              <Layers className="h-3.5 w-3.5 text-signal" />
              In this guide
            </div>
            <nav className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {pageData.tableOfContents.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-paper-dim transition-colors hover:border-line hover:bg-panel hover:text-paper"
                >
                  <span className="font-display text-xs text-signal">0{idx + 1}.</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    {item.title}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>
      )}

      {/* ── Main Article Sections ─────────────────────────────── */}
      <article className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-16">
          {pageData.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-b border-line/60 pb-16 last:border-b-0 last:pb-0"
            >
              <Reveal>
                <span className="font-display text-xs font-semibold tracking-wider text-signal uppercase">
                  Section 0{idx + 1}
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="mt-2 text-sm font-medium text-paper-dim">
                    {section.subtitle}
                  </p>
                )}
              </Reveal>

              {/* Text Paragraphs */}
              <div className="mt-6 space-y-4">
                {section.paragraphs.map((p, pIdx) => (
                  <Reveal key={pIdx} delay={pIdx * 0.05}>
                    <p className="text-base leading-relaxed text-mute">{p}</p>
                  </Reveal>
                ))}
              </div>

              {/* Comparison Table if present */}
              {section.comparisonTable && (
                <Reveal delay={0.1} className="mt-8 overflow-x-auto rounded-xl border border-line bg-panel">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-line bg-panel-raised/60 text-xs text-paper-dim uppercase tracking-wider">
                      <tr>
                        {section.comparisonTable.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-5 py-3.5 font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line/60">
                      {section.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-panel-raised/30 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-5 py-3.5 ${
                                cIdx === 0
                                  ? "font-medium text-paper"
                                  : cIdx === 1
                                  ? "text-wave font-medium"
                                  : "text-mute"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Reveal>
              )}

              {/* Step Process if present */}
              {section.stepProcess && (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {section.stepProcess.map((step, sIdx) => (
                    <Reveal key={sIdx} delay={sIdx * 0.05}>
                      <div className="h-full rounded-xl border border-line bg-panel p-5">
                        <div className="flex items-center justify-between">
                          <span className="font-display text-xs font-semibold text-signal">
                            {step.step}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-wave" />
                        </div>
                        <h3 className="mt-3 font-display text-base font-semibold text-paper">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-mute">
                          {step.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* ── Mid-Article Conversion Callout ─────────────────────── */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-gradient-to-br from-panel-raised to-panel p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-wave uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                White Mask Content Advantage
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
                Ready to turn "{pageData.keyword}" into passive media income?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                We handle the entire pipeline: scripts, custom AI narrator voices, full video editing, B-roll sourcing,
                CTR thumbnails, and upload scheduling. You retain 100% of your channel and ad revenue.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button
                onClick={() => openPlanModal({ name: "Growth", price: 124 })}
                size="lg"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-center text-[11px] text-mute">
                Plans from $54/mo • Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guarantees Strip ──────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {GUARANTEES.map((g) => (
              <StaggerItem
                key={g.label}
                className="rounded-xl border border-line bg-panel p-4 text-center"
              >
                <GuaranteeValue guarantee={g} />
                <p className="mt-1 text-xs text-mute">{g.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ Section (Indexed via FAQPage Schema) ───────────── */}
      <section className="border-t border-line px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-wave">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-paper sm:text-3xl">
              Everything you need to know about {pageData.keyword}
            </h2>
            <p className="mt-2 text-sm text-mute">
              Direct answers to the most common questions creators and founders ask us.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {pageData.faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-xl border border-line bg-panel transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleFaq(i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold text-paper">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-mute transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-signal" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-line/60 px-5 pt-3 pb-5">
                        <p className="text-sm leading-relaxed text-mute">{faq.a}</p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Topic Cluster Cross-Linking ───────────────────────── */}
      {relatedPages.length > 0 && (
        <section className="border-t border-line bg-panel/20 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-signal">
                    Topic Cluster & Related Guides
                  </span>
                  <h2 className="mt-2 font-display text-xl font-semibold text-paper sm:text-2xl">
                    Deepen your faceless YouTube knowledge
                  </h2>
                </div>
                <Link
                  to="/resources"
                  className="hidden items-center gap-1 text-xs font-medium text-paper-dim hover:text-paper sm:flex"
                >
                  View all guides <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {relatedPages.map((rel) => (
                <Reveal key={rel.slug}>
                  <Link
                    to={`/${rel.slug}`}
                    className="group block h-full rounded-xl border border-line bg-panel p-5 transition-all hover:border-signal/50 hover:bg-panel-raised"
                  >
                    <div className="flex items-center justify-between text-xs text-mute">
                      <span className="font-medium text-wave">{rel.eyebrow}</span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-semibold text-paper transition-colors group-hover:text-signal">
                      {rel.title.split(":")[0]}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-mute">
                      {rel.metaDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-signal group-hover:underline">
                      Read full guide <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final Conversion CTA ──────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Start building your faceless video engine today.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-lg text-base text-mute">
              No contracts. $0 setup fee. Choose your plan and let our studio script, voice, edit, and publish for you.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => openPlanModal({ name: "Starter", price: 54 })}
              size="lg"
            >
              Start from $54/mo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/what-you-get" variant="ghost" size="lg">
              Explore all 16+ features
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
