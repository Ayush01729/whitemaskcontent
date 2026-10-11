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
        title="Results & Benchmarks — High-Converting Product Videos | White Mask Content"
        description="Real production benchmarks from White Mask Content's AI video engine: 4.8x ROAS on paid campaigns, 82% retention on product demos, and scalable organic growth for startups and brands."
        path="/results"
        schema={BREADCRUMB}
      />
      <section className="px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal delay={0.08}>
            <h1 className="font-display text-3xl font-semibold leading-tight text-balance text-paper sm:text-5xl">
              What video production does for product conversion.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-mute">
              The throughput, the conversion impact, and what four different product categories achieve every month with zero filming time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10">
        <Stagger className="mx-auto grid max-w-6xl gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT_STATS.map((s) => (
            <StaggerItem key={s.label} className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
              <p className="font-display text-2xl sm:text-3xl text-paper">{s.value}</p>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-paper-dim">{s.label}</p>
              <p className="mt-2.5 sm:mt-3 text-xs leading-relaxed text-mute">{s.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-4 sm:px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-paper">Production outputs across business models.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 max-w-lg text-xs sm:text-sm text-mute">Different product models, same conversion architecture.</p>
          </Reveal>

          <Stagger className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {OUTPUT_SAMPLES.map((sample) => (
              <StaggerItem key={sample.niche} className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
                <h3 className="font-display text-base sm:text-lg font-semibold text-paper">{sample.niche}</h3>
                <p className="mt-1 text-xs sm:text-sm text-paper-dim">{sample.cadence}</p>
                <p className="mt-2 sm:mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-mute">{sample.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-line bg-panel px-5 sm:px-8 py-10 sm:py-14 text-center">
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-4xl text-balance">
            See which plan matches your cadence.
          </h2>
          <Button as={Link} to="/pricing" size="lg" className="mt-6 sm:mt-8">
            See plans <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
