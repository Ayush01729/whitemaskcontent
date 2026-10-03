import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/ui/reveal";
import { Button } from "../components/ui/button";
import { GuaranteeValue } from "../components/ui/guarantee-value";
import { VideoGenerationVisual } from "../components/video-generation-visual";
import { NicheMarquee } from "../components/niche-marquee";
import { PricingCard } from "../components/pricing-card";
import { DELIVERABLES, GUARANTEES, RESULT_STATS, PRICING_TIERS } from "../lib/content";

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm text-wave">Done-for-you faceless video</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-balance text-paper sm:text-5xl lg:text-[3.3rem]">
                We make the videos. You keep the channel.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-mute">
                No camera, no scripts, no editing software. We write it, voice it, edit it, and post it, so your
                channel uploads every week while you do none of the work. Startups use the same pipeline to turn
                a product into a steady stream of promo and ad videos.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-4">
              <Button as={Link} to="/pricing" size="lg">
                Start from $54/mo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as={Link} to="/what-you-get" variant="ghost" size="lg">
                See what's included
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={32}>
            <VideoGenerationVisual />
          </Reveal>
        </div>

        <Stagger className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {GUARANTEES.map((g) => (
            <StaggerItem key={g.label}>
              <GuaranteeValue guarantee={g} />
              <p className="mt-1 text-xs text-mute">{g.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-paper">You bring the niche. We do the rest.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 max-w-lg text-mute">
              Five steps, zero editing software. The finished video lands in your inbox, or skip even that and
              let us post it for you.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.slice(0, 3).map((d) => (
              <StaggerItem key={d.step} className="rounded-2xl border border-line bg-panel p-6">
                <span className="font-display text-sm text-signal">{d.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-paper">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{d.body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-8">
            <Link to="/what-you-get" className="inline-flex items-center gap-2 text-sm text-paper hover:text-signal">
              See everything that's included <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line py-14">
        <Reveal className="mx-auto mb-8 max-w-6xl px-6">
          <p className="text-sm text-mute">
            170+ niches already in production, from your first test video to a daily-upload channel.
          </p>
        </Reveal>
        <NicheMarquee />
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-paper">Numbers that make this an easy yes.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/results" className="inline-flex items-center gap-2 text-sm text-paper hover:text-signal">
                Full breakdown <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.04}>
            <p className="mt-3 max-w-lg text-mute">Real throughput from channels running on white mask content right now.</p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RESULT_STATS.map((s) => (
              <StaggerItem key={s.label} className="rounded-2xl border border-line bg-panel p-6">
                <p className="font-display text-3xl text-paper">{s.value}</p>
                <p className="mt-2 text-sm text-paper-dim">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-paper">Pick a plan, or outgrow it.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 max-w-lg text-mute">$0 setup, no contract, cancel before renewal.</p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-6 py-24">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-line bg-panel px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Your channel's next video starts with your niche.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mute">
            Pick one, and we'll write it, voice it, edit it, and post it.
          </p>
          <Button as={Link} to="/pricing" size="lg" className="mt-8">
            Start from $54/mo <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </section>
    </>
  );
}




