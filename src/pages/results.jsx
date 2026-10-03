import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/ui/reveal";
import { Button } from "../components/ui/button";
import { SEOHead, buildBreadcrumbSchema } from "../components/seo-head";
import { RESULT_STATS, OUTPUT_SAMPLES } from "../lib/content";

const BREADCRUMB = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Results", path: "/results" },
]);

export function Results() {
  return (
    <>
      <SEOHead
        title="Results & Case Studies — 12M+ Monthly Views | White Mask Content"
        description="12M+ monthly views, 240+ channels in production, $850K+ in ad revenue kept by creators. See real results from White Mask Content's faceless AI video pipeline across 170+ niches."
        path="/results"
        schema={BREADCRUMB}
      />
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-sm text-wave">Results</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance text-paper sm:text-5xl">
              What a month of production actually looks like.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-mute">
              The throughput, the terms, and what four different niches, channels, and products get out of it
              every month.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10">
        <Stagger className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT_STATS.map((s) => (
            <StaggerItem key={s.label} className="rounded-2xl border border-line bg-panel p-6">
              <p className="font-display text-3xl text-paper">{s.value}</p>
              <p className="mt-2 text-sm text-paper-dim">{s.label}</p>
              <p className="mt-3 text-xs leading-relaxed text-mute">{s.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper">What production looks like, by niche or product.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 max-w-lg text-sm text-mute">Four niches, one product launch, the same pipeline underneath.</p>
          </Reveal>

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
            {OUTPUT_SAMPLES.map((sample) => (
              <StaggerItem key={sample.niche} className="rounded-2xl border border-line bg-panel p-6">
                <h3 className="font-display text-lg font-semibold text-paper">{sample.niche}</h3>
                <p className="mt-1 text-sm text-paper-dim">{sample.cadence}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mute">{sample.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-line bg-panel px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            See which plan matches your cadence.
          </h2>
          <Button as={Link} to="/pricing" size="lg" className="mt-8">
            See plans <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
