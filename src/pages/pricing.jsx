import { Reveal, Stagger } from "../components/ui/reveal";
import { PricingCard } from "../components/pricing-card";
import { GuaranteeValue } from "../components/ui/guarantee-value";
import { PRICING_TIERS, GUARANTEES, FAQS } from "../lib/content";

export function Pricing() {
  return (
    <>
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-sm text-wave">Pricing</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance text-paper sm:text-5xl">
              Faceless video plans from $54/mo.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-mute">
              Every plan includes scripts, AI voiceover, editing, thumbnails, and SEO metadata. $0 setup, no
              contract, cancel before renewal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20">
        <Stagger className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </Stagger>
      </section>

      <section className="border-t border-line px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-paper">The terms, in plain language.</h2>
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {GUARANTEES.map((g) => (
              <Reveal key={g.label}>
                <GuaranteeValue guarantee={g} />
                <p className="mt-1 text-xs text-mute">{g.label}</p>
              </Reveal>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10 space-y-3 text-sm leading-relaxed text-mute">
            <p>
              Every plan ships the same 16+ production features: script, voice, edit, thumbnails, SEO metadata,
              and posting. Only the monthly volume changes between tiers.
            </p>
            <p>
              No contract means no risk: test a niche for one month, keep going only if it's working. Upgrade,
              downgrade, or cancel before your renewal date. Nothing locks you in.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
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



