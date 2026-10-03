import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/ui/reveal";
import { Button } from "../components/ui/button";
import { NicheMarquee } from "../components/niche-marquee";
import { GuaranteeValue } from "../components/ui/guarantee-value";
import { DELIVERABLES, PLATFORMS, GUARANTEES, FEATURES } from "../lib/content";

export function WhatYouGet() {
  return (
    <>
      <section className="px-6 pt-36 pb-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-sm text-wave">What you get</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance text-paper sm:text-5xl">
              Everything your channel needs. Nothing you have to do.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-mute">
              You pick the niche, or tell us about your product. We script it, voice it, edit it, caption it,
              and post it if you want. None of it touches your calendar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl">
          {DELIVERABLES.map((d, i) => (
            <Reveal key={d.step} delay={i * 0.05}>
              <div className="flex gap-6 border-t border-line py-8 first:border-t-0 sm:gap-10">
                <span className="font-display text-sm text-signal">{d.step}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-paper">{d.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">{d.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper">Wherever your audience watches.</h2>
          </Reveal>
          <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PLATFORMS.map((p) => (
              <StaggerItem key={p} className="rounded-xl border border-line bg-panel px-4 py-5 text-center">
                <span className="text-sm text-paper-dim">{p}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper">16+ features, included on every plan.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 max-w-lg text-sm text-mute">
              The volume changes between tiers. The production standard doesn't.
            </p>
          </Reveal>
          <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <StaggerItem key={f} className="flex items-center gap-2.5 rounded-xl border border-line bg-panel px-4 py-3">
                <Check className="h-4 w-4 shrink-0 text-wave" />
                <span className="text-sm text-paper-dim">{f}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper">Across 170+ niches, with the same guarantees.</h2>
          </Reveal>
          <Stagger className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {GUARANTEES.map((g) => (
              <StaggerItem key={g.label}>
                <GuaranteeValue guarantee={g} />
                <p className="mt-1 text-xs text-mute">{g.label}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10">
            <NicheMarquee />
          </Reveal>

          <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/pricing" size="lg">
              See plans <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/results" variant="ghost" size="lg">
              See what it produces
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}