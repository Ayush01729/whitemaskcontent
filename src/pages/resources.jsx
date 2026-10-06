import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Sparkles, Search, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/ui/reveal";
import { Button } from "../components/ui/button";
import { SEOHead, buildBreadcrumbSchema } from "../components/seo-head";
import { SEO_PAGES, SEO_PAGE_KEYS } from "../lib/seo-pages-data";

const BREADCRUMB = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Guides", path: "/resources" },
]);

const CATEGORIES = [
  { label: "All Guides", value: "all" },
  { label: "Channel Launch", value: "launch" },
  { label: "AI & Video Editing", value: "ai" },
  { label: "Systems & Automation", value: "automation" },
];

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const pages = SEO_PAGE_KEYS.map((key) => SEO_PAGES[key]);

  const filteredPages = pages.filter((page) => {
    const matchesSearch =
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === "all") return true;
    if (selectedCategory === "launch") {
      return (
        page.slug.includes("how-to-make") ||
        page.slug.includes("channel") ||
        page.slug === "faceless-youtube"
      );
    }
    if (selectedCategory === "ai") {
      return (
        page.slug.includes("ai") ||
        page.slug.includes("videos") ||
        page.slug.includes("creation")
      );
    }
    if (selectedCategory === "automation") {
      return (
        page.slug.includes("automation") ||
        page.slug.includes("done-for-you") ||
        page.slug.includes("service")
      );
    }
    return true;
  });

  return (
    <>
      <SEOHead
        title="Faceless YouTube Guides & Video Automation Resources | White Mask Content"
        description="Explore in-depth guides on faceless YouTube channels, video automation pipelines, AI scripting & voiceovers, top RPM niches, and done-for-you channel growth."
        path="/resources"
        schema={BREADCRUMB}
      />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
              <BookOpen className="h-3.5 w-3.5" />
              White Mask Knowledge Hub
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance text-paper sm:text-5xl">
              Faceless YouTube & Video Automation Guides
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
              Everything you need to master anonymous video production: algorithm retention rules, high-RPM niche selection, AI video tool stacks, and turnkey automation.
            </p>
          </Reveal>

          {/* Search Bar & Filters */}
          <Reveal delay={0.24} className="mt-10">
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mute" />
              <input
                type="text"
                placeholder="Search topics, keywords, or guides…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-line bg-panel py-3 pl-11 pr-4 text-sm text-paper placeholder-mute transition-colors focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-signal text-paper"
                      : "border border-line bg-panel text-mute hover:border-paper hover:text-paper"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Guides Grid ────────────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {filteredPages.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-base text-mute">No guides found matching your query.</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                size="sm"
                className="mt-4"
              >
                Reset filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPages.map((page, idx) => (
                <Reveal key={page.slug} delay={(idx % 6) * 0.05}>
                  <Link
                    to={`/${page.slug}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-signal/50 hover:bg-panel-raised"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-mute">
                        <span className="inline-flex items-center gap-1 font-medium text-wave">
                          <Sparkles className="h-3 w-3" />
                          {page.eyebrow}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {page.readTime}
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-lg font-semibold text-paper transition-colors group-hover:text-signal">
                        {page.title.split(":")[0]}
                      </h2>
                      <p className="mt-2 text-xs leading-relaxed text-mute">
                        {page.metaDescription}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium text-signal">
                      <span>Target: "{page.keyword}"</span>
                      <span className="flex items-center gap-1 group-hover:underline">
                        Read guide <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="border-t border-line px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Prefer to skip the learning curve?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-lg text-base text-mute">
              Let White Mask Content handle scripts, voiceover, editing, and publishing for you. Plans start from $54/month.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/pricing" size="lg">
              Explore Pricing Plans <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/what-you-get" variant="ghost" size="lg">
              See What's Included
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
