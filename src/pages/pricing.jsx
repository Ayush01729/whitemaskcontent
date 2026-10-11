import { Reveal, Stagger } from "../components/ui/reveal";
import { PricingCard } from "../components/pricing-card";
import { GuaranteeValue } from "../components/ui/guarantee-value";
import { SEOHead, buildFAQSchema, buildBreadcrumbSchema } from "../components/seo-head";
import { PRICING_TIERS, GUARANTEES, FAQS } from "../lib/content";

const PRICING_SCHEMA = [
  buildFAQSchema(FAQS),
  buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ]),
];

export function Pricing() {
  return (
    <>
      <SEOHead
        title="Pricing — AI Video Production for Startups & Brands | White Mask Content"
        description="Predictable AI video production from $54/mo for startups and brands. Includes high-converting scripts, UI motion graphics, hyper-realistic AI presenters, and multi-platform exports. Cancel anytime."
        path="/pricing"
        schema={PRICING_SCHEMA}
      />
      <section className="px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal delay={0.08}>
            <h1 className="font-display text-3xl font-semibold leading-tight text-balance text-paper sm:text-5xl">
              Transparent video production for high-growth brands.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-mute">
              Every plan includes strategic scripting, kinetic UI animations, AI brand presenters, and multi-format exports. $0 setup fee, no long-term contracts, cancel anytime.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <Stagger className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </Stagger>
      </section>

      <section className="border-t border-line px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-paper">The terms, in plain language.</h2>
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {GUARANTEES.map((g) => (
              <Reveal key={g.label}>
                <GuaranteeValue guarantee={g} />
                <p className="mt-1 text-xs text-mute">{g.label}</p>
              </Reveal>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10 space-y-3 text-sm leading-relaxed text-mute">
            <p>
              Every plan ships complete production: positioning analysis, motion graphics, AI presenters, platform aspect ratios, and custom thumbnails. Only video volume varies across tiers.
            </p>
            <p>
              No contract means zero risk: test high-performing videos for your product for one month, continue only if your acquisition metrics convert. Upgrade, downgrade, or cancel anytime with zero friction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper">Before you start, the honest answers.</h2>
          </Reveal>

          <div className="mt-8">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="border-t border-line py-6 first:border-t-0">
                  <h3 className="font-display text-base font-semibold text-paper">{item.q}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
