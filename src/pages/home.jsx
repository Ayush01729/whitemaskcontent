import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShieldCheck, Check, CheckCircle2, XCircle, ChevronDown } from "lucide-react";
import { SEOHead, buildServiceSchema, buildBreadcrumbSchema } from "../components/seo-head";
import { HeroUrlEngine } from "../components/hero-url-engine";
import { KineticRails } from "../components/kinetic-rails";
import { HybridShowdown } from "../components/hybrid-showdown";
import { ProductionPipeline } from "../components/production-pipeline";
import { RoiCalculator } from "../components/roi-calculator";
import { NicheMarquee } from "../components/niche-marquee";
import { Button } from "../components/ui/button";
import { useClaimFree } from "../context/claim-free-context";

const HOME_SCHEMA = [
  buildServiceSchema(),
  buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you generate product videos from a website URL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "White Mask Content analyzes your website link to extract product value propositions, user pain points, and feature workflows. We then script retention-optimized hooks and produce hybrid vertical videos using kinetic UI screen demos and realistic AI brand presenters."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 3 free videos offer work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paste your website link and email. Our team reviews your product positioning and reverts within 24 hours with your tailored 3-video concept roadmap. You approve the direction and receive your 3 fully produced videos free—no credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "Can we use these videos for Meta and TikTok paid ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every client receives 100% full commercial rights to all raw 4K vertical video files for paid advertising (Meta Ads, TikTok Spark Ads, YouTube Shorts) or organic social distribution."
        }
      },
      {
        "@type": "Question",
        "name": "Do founders or team members need to record anything?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Zero cameras, zero filming, and zero recording software required. All visuals, voiceovers, kinetic captions, and sound design are handled completely by White Mask Content."
        }
      }
    ]
  }
];

const PROOF_POINTS = [
  { value: "10x", label: "Lower acquisition cost than traditional video agencies" },
  { value: "0", label: "Cameras, actors, or studio equipment needed" },
  { value: "24h", label: "Turnaround to review your product and revert" },
  { value: "100%", label: "Commercial rights & master video ownership kept by your brand" },
];

const HOMEPAGE_FAQS = [
  {
    q: "How does the 'First 3 Videos Free' process work?",
    a: "You paste your website URL and email. Our team reviews your product positioning and reverts within 24 hours with 3 custom video concepts. You approve the angle, and we produce all 3 master videos for you—completely free, with zero credit card required.",
  },
  {
    q: "Do I or anyone on my team need to appear on camera?",
    a: "No. You never record footage, speak into a microphone, or open video editing software. We generate hybrid videos using your UI, product screenshots, kinetic motion typography, and hyper-realistic AI brand presenters.",
  },
  {
    q: "How does this compare to traditional video production agencies?",
    a: "Agencies charge $5,000–$10,000/month, demand endless creative briefs, and take weeks to deliver. White Mask Content turns your live website URL into ready-to-run short-form videos with zero production headache and a fraction of the cost.",
  },
  {
    q: "Will the videos look like generic AI slop?",
    a: "No. We explicitly reject low-effort automated carousels and glitchy avatars. We use natural voice models, cinematic B-roll, realistic presenter physics, and human editorial review so every video looks like a high-budget brand production.",
  },
  {
    q: "Can we use these videos for paid Meta, TikTok, and YouTube ads?",
    a: "Yes. You receive 100% full commercial rights to all raw video files. You can upload them directly as Meta Ads, TikTok Spark Ads, YouTube Shorts, or post them organically across your channels.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Just your website link. Our engine extracts your product value propositions, target audience pains, and features straight from your public URL.",
  },
];

export function Home() {
  const { openClaimModal } = useClaimFree();
  const [finalUrl, setFinalUrl] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    openClaimModal(finalUrl);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <SEOHead
        title="White Mask Content — AI Video Production Services & Product Video Ads"
        description="We produce high-converting AI videos for your product with zero filming required. Drop your website link so we can study what you build — we revert in 24 hours with your first 3 videos free. No card needed."
        path="/"
        schema={HOME_SCHEMA}
      />

      {/* ── Precision Studio Lighting & Subtle Architecture Grid ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="subtle-spotlight absolute inset-0" />
        <div className="studio-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10">
        {/* ── HERO SECTION ── */}
        <section className="relative px-4 pt-4 pb-20 sm:px-6 sm:pt-6 lg:pt-8">
          <div className="mx-auto max-w-5xl text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-1.5 text-xs font-semibold text-signal shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Video Studio for Startups & Brands • First 3 Videos Free</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-paper sm:text-6xl lg:text-7xl text-balance">
              Video ads and product demos for high-growth brands. Zero camera days.
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg text-balance">
              We produce high-converting AI videos for your product — zero cameras or filming required. Just drop your website link so we can learn what you build, and we'll revert within 24 hours with your first 3 custom videos free.
            </p>

            {/* Hero Interactive URL Engine */}
            <div className="mt-10">
              <HeroUrlEngine onClaim={(url) => openClaimModal(url)} />
            </div>

            {/* Proof Metric Strip */}
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 border-t border-line-subtle pt-8 sm:grid-cols-4">
              {PROOF_POINTS.map((pt) => (
                <div key={pt.label} className="text-left sm:text-center">
                  <div className="font-display text-2xl font-extrabold text-paper sm:text-3xl">
                    {pt.value}
                  </div>
                  <div className="mt-1 text-xs text-mute leading-tight">
                    {pt.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAIN VS SOLUTION: THE AGENCY RUT VS THE WHITE MASK ENGINE ── */}
        <section className="border-t border-line-subtle bg-ink-deep/60 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl text-balance">
                Why video marketing has been broken for startups.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-mute">
                Short-form video is the highest-converting growth engine on the internet. But the traditional way to produce it is a nightmare.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Left Column: The Traditional Production Rut */}
              <div className="hairline-highlight rounded-3xl border border-coral/20 bg-panel/40 p-6 sm:p-8 backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-coral" />
                    <span className="font-display text-lg font-bold text-paper">Traditional Production</span>
                  </div>
                  <span className="rounded-full bg-coral/15 px-2.5 py-0.5 text-xs font-bold text-coral">
                    High Friction
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-mute">
                    <XCircle className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper-dim">$5,000–$10,000 monthly retainers:</strong> Bloated production houses demand long lock-in contracts before shipping a single creative.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-mute">
                    <XCircle className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper-dim">15+ hours of founder filming:</strong> Ring lights, microphone setups, awkward retakes, and editing software you don't have time for.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-mute">
                    <XCircle className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper-dim">Generic AI slide generators:</strong> Off-the-shelf text-to-video tools output robotic voices and glitchy avatars that damage brand trust.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-mute">
                    <XCircle className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper-dim">3-week revision cycles:</strong> Endless back-and-forth creative meetings while your acquisition sprint slips away.
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl bg-coral/10 p-3 border border-coral/20 text-center">
                  <p className="text-xs font-mono font-bold text-coral">Average Cost: $1,200 per video • Turnaround: 21 Days</p>
                </div>
              </div>

              {/* Right Column: The White Mask Engine */}
              <div className="hairline-highlight rounded-3xl border border-signal/40 bg-panel-raised/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-wave animate-pulse" />
                    <span className="font-display text-lg font-bold text-paper">The White Mask Engine</span>
                  </div>
                  <span className="rounded-full bg-wave/15 px-2.5 py-0.5 text-xs font-bold text-wave">
                    Zero Friction
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-paper-dim">
                    <CheckCircle2 className="h-4 w-4 text-wave shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper">1 product link in, video assets out:</strong> Drop your URL. We extract pain points, feature workflows, and conversion angles.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-paper-dim">
                    <CheckCircle2 className="h-4 w-4 text-wave shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper">Zero cameras or filming required:</strong> You never appear on camera or write a brief. None of it touches your calendar.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-paper-dim">
                    <CheckCircle2 className="h-4 w-4 text-wave shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper">Kinetic UI cuts & realistic presenters:</strong> Custom software screen motion paired with studio-grade natural brand presenters.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs sm:text-sm text-paper-dim">
                    <CheckCircle2 className="h-4 w-4 text-wave shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-paper">We revert in 24 hours:</strong> Receive your custom 3-video concept roadmap within 24 hours. First 3 videos free, No card needed.
                    </div>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl bg-wave/10 p-3 border border-wave/20 text-center">
                  <p className="text-xs font-mono font-bold text-wave">First 3 Videos Free • 0 Credit Card Required • We Revert in 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KINETIC VIDEO SHOWCASE RAILS ── */}
        <section className="border-y border-line-subtle bg-ink-deep/70 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
              Engineered for customer conversion, not vanity metrics.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-mute">
              Every video is engineered for retention: 3-second psychological hooks, kinetic UI screen demos, trending audio beds, and seamless loop pacing.
            </p>
          </div>

          <KineticRails />

          <div className="mt-8 text-center">
            <Button
              onClick={() => openClaimModal("")}
              className="h-11 px-6 text-sm font-semibold"
            >
              Get 3 custom videos for your product free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* ── HOW IT WORKS: 3-STAGE PIPELINE ── */}
        <section id="how-it-works" className="px-4 py-24 sm:px-6">
          <ProductionPipeline onClaim={(url) => openClaimModal(url)} />
        </section>

        {/* ── HYBRID SHOWDOWN: KINETIC UI VS AI BRAND PRESENTER ── */}
        <section id="hybrid-studio" className="border-t border-line-subtle bg-ink-deep/40 px-4 py-24 sm:px-6">
          <HybridShowdown onClaim={(url) => openClaimModal(url)} />
        </section>

        {/* ── STARTUP & BRAND VERTICALS ── */}
        <section className="border-y border-line-subtle py-16">
          <div className="mx-auto mb-8 max-w-5xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
              Engineered for high-growth startups, SaaS, and product brands.
            </h2>
            <p className="mt-2 text-sm text-mute">
              From developer tools and B2B workflows to mobile apps, fintech, and DTC product launches.
            </p>
          </div>
          <NicheMarquee />
        </section>

        {/* ── REACH & ROI CALCULATOR ── */}
        <section id="reach-calculator" className="px-4 py-24 sm:px-6">
          <RoiCalculator onClaim={(url) => openClaimModal(url)} />
        </section>

        {/* ── RADICAL HONESTY & VALUE GUARANTEE ── */}
        <section className="border-t border-line-subtle bg-ink-deep/60 px-4 py-20 sm:px-6">
          <div className="hairline-highlight mx-auto max-w-4xl rounded-3xl border border-white/10 bg-panel/70 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-wave/30 bg-wave/10 text-wave">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-paper sm:text-4xl">
              Zero risk. Zero upfront cost. See your product concepts first.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mute">
              We know agencies overpromise and AI generators deliver hallucinated junk. That is why we review your product and revert in 24 hours with your tailored 3-video concept roadmap. You test our scripts, pacing, and hooks before committing to any paid plan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border border-line-subtle bg-ink-deep/50 p-4">
                <span className="font-bold text-wave text-xs uppercase tracking-wider">No Credit Card</span>
                <p className="mt-1 text-xs text-mute">
                  Zero billing details collected upfront. If you don't love the concepts, you pay nothing.
                </p>
              </div>
              <div className="rounded-2xl border border-line-subtle bg-ink-deep/50 p-4">
                <span className="font-bold text-signal text-xs uppercase tracking-wider">We Revert in 24h</span>
                <p className="mt-1 text-xs text-mute">
                  Paste your link today, receive your custom 3-video breakdown and production plan in your inbox within 24 hours.
                </p>
              </div>
              <div className="rounded-2xl border border-line-subtle bg-ink-deep/50 p-4">
                <span className="font-bold text-amber text-xs uppercase tracking-wider">100% Owned By You</span>
                <p className="mt-1 text-xs text-mute">
                  You keep the raw master video files, all ad revenue, and every lead generated across campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO FAQ SECTION (Answer Engine Optimization for Google & AI) ── */}
        <section className="px-4 py-20 sm:px-6 border-t border-line-subtle">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-mute">
                Everything founders and marketing leads ask about our autonomous AI video pipeline.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {HOMEPAGE_FAQS.map((faq, idx) => (
                <div key={faq.q} className="hairline-highlight rounded-2xl border border-line-subtle bg-panel/50 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-paper hover:text-signal transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 flex-none transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180 text-signal" : "text-mute"
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-mute border-t border-line-subtle/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL HIGH-CONVERTING CALL TO ACTION ── */}
        <section className="px-4 py-24 sm:px-6">
          <div className="hairline-highlight mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-panel/75 p-8 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
            <h2 className="font-display text-3xl font-extrabold text-paper sm:text-5xl text-balance">
              Get 3 free AI videos for your product.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-mute leading-relaxed">
              Drop your website link below. We will review your product positioning and revert within 24 hours with your custom video concepts. Zero credit card required.
            </p>

            <form onSubmit={handleFinalSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="url"
                required
                value={finalUrl}
                onChange={(e) => setFinalUrl(e.target.value)}
                placeholder="https://yourbrand.com"
                className="h-12 flex-1 rounded-xl border border-white/10 bg-ink-deep px-4 text-sm text-paper placeholder-mute/50 focus:border-signal focus:outline-none"
              />
              <Button type="submit" className="h-12 px-6 text-sm font-semibold whitespace-nowrap">
                Start Free <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-mute">
              <span className="inline-flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-wave" /> Zero card required
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-wave" /> We revert in 24 hours
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="h-3.5 w-3.5 text-wave" /> 100% commercial rights
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
