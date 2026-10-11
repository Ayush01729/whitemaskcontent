import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, UserCheck, Film, Check, ArrowRight, Monitor, Mic, Volume2, ShieldCheck, Activity, Terminal } from "lucide-react";
import { Button } from "./ui/button";

export function HybridShowdown({ onClaim }) {
  const [activeTab, setActiveTab] = useState("kinetic"); // 'kinetic' | 'presenter'

  const comparisonData = {
    kinetic: {
      title: "Kinetic UI & Product Screencasts",
      badge: "Software & Workflow Focused",
      desc: "For startups that want clean product walk-throughs, kinetic UI screencasts, motion typography, and high-impact micro-animations. Zero on-camera stress, maximum feature clarity.",
      points: [
        "Curated 4K motion graphics & software UI screencasts",
        "Bold kinetic typography synced to audio transients",
        "Natural studio-grade brand narrator (conversational & clear)",
        "High-energy retention pacing (0.8s cuts & zoom transitions)",
        "Ideal for B2B SaaS, developer tools, fintech, and productivity platforms",
      ],
      sampleHook: "POV: You switched your database and your AWS bill dropped by 70%.",
      sampleSound: "Cyber Tech Bassline • 126 BPM",
      accent: "text-signal",
      bgGlow: "bg-signal/20",
    },
    presenter: {
      title: "Hyper-Realistic AI Brand Presenters",
      badge: "Human Face & Conversion Trust",
      desc: "A consistent, realistic brand presenter explaining your product benefits directly to camera. No shoot days, no studio lights, no creator fees, and no talent flaking on revisions.",
      points: [
        "Consistent brand presenter identity across all campaign variants",
        "Realistic lip-sync and human micro-expressions",
        "Natural conversational cadence in 28+ languages",
        "Modern office, podcast studio, or casual tech desk environments",
        "Ideal for DTC consumer products, mobile apps, and founder video ads",
      ],
      sampleHook: "I stopped buying cheap workout clothes and tested this for 30 days. Here is the honest verdict.",
      sampleSound: "Trending Ambient • 118 BPM",
      accent: "text-amber",
      bgGlow: "bg-amber/20",
    },
  };

  const current = comparisonData[activeTab];

  return (
    <div className="hairline-highlight mx-auto max-w-5xl rounded-3xl border border-white/10 bg-panel/75 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
      <div className="flex flex-col items-center justify-between gap-6 border-b border-line-subtle pb-8 md:flex-row">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
            <Sparkles className="h-3.5 w-3.5" />
            The Hybrid Studio Superpower
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
            Why choose between UI demos and brand presenters? You get both.
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">
            Most video agencies force you into a single rigid style. White Mask Content produces both formats from your website link so you can test which ad hooks convert best.
          </p>
        </div>

        {/* Style Switcher */}
        <div className="flex rounded-2xl border border-white/10 bg-ink-deep p-1.5 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab("kinetic")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              activeTab === "kinetic"
                ? "bg-signal text-white shadow-lg shadow-signal/30"
                : "text-mute hover:text-paper"
            }`}
          >
            <Monitor className="h-3.5 w-3.5" />
            Kinetic UI Cuts
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("presenter")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              activeTab === "presenter"
                ? "bg-amber text-ink-deep font-extrabold shadow-lg shadow-amber/30"
                : "text-mute hover:text-paper"
            }`}
          >
            <UserCheck className="h-3.5 w-3.5" />
            AI Presenters
          </button>
        </div>
      </div>

      {/* Content Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 grid items-center gap-8 lg:grid-cols-12"
        >
          {/* Details */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${current.accent}`}>
                {current.badge}
              </span>
            </div>
            <h4 className="font-display text-2xl font-bold text-paper">
              {current.title}
            </h4>
            <p className="text-sm leading-relaxed text-mute">
              {current.desc}
            </p>

            <ul className="space-y-2.5 pt-2">
              {current.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-xs text-paper-dim">
                  <div className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-ink-deep border border-white/10 ${current.accent}`}>
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button onClick={() => onClaim()} size="sm" className="h-10 px-5 text-xs font-semibold">
                Test this style in your 3 free videos
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Screen Preview Frame */}
          <div className="flex justify-center lg:col-span-5">
            <div className="hairline-highlight relative aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/15 bg-ink-deep p-4 shadow-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-mute pb-2 border-b border-white/10">
                <span className="font-mono uppercase tracking-wider text-xs">Output Feed</span>
                <span className={`font-bold text-xs ${current.accent}`}>{activeTab.toUpperCase()}</span>
              </div>

              {/* Realistic Mock Window */}
              <div className="my-auto w-full">
                {activeTab === "kinetic" ? (
                  <div className="rounded-2xl border border-white/15 bg-panel/90 p-3.5 shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-mute pb-2 border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-coral/80" />
                        <span className="h-2 w-2 rounded-full bg-amber/80" />
                        <span className="h-2 w-2 rounded-full bg-wave/80" />
                      </div>
                      <span className="font-mono text-xs text-paper-dim">app.demo.io</span>
                    </div>

                    <div className="mt-3 space-y-2">
                      <div className="rounded-lg bg-black/50 p-2 text-xs">
                        <span className="text-xs text-mute">Conversion Lift</span>
                        <p className="font-display text-base font-bold text-wave">+248% Lift</p>
                      </div>

                      <div className="flex items-center justify-between rounded-lg bg-signal/15 border border-signal/30 p-2 text-xs">
                        <span className="text-xs font-medium text-paper">Auto-sync active</span>
                        <span className="h-2 w-2 rounded-full bg-signal animate-ping" />
                      </div>
                    </div>

                    <p className="mt-3 text-xs font-bold text-paper text-center">
                      "{current.sampleHook}"
                    </p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-white/15 bg-panel/90 p-3.5 shadow-xl backdrop-blur-md">
                    {/* Studio Presenter Telemetry */}
                    <div className="flex items-center justify-between text-xs text-mute pb-2 border-b border-white/5">
                      <span className="flex items-center gap-1 text-wave font-bold text-xs">
                        <Mic className="h-3 w-3" /> Voice Synced
                      </span>
                      <span className="font-mono text-xs text-paper-dim">5600K Key</span>
                    </div>

                    <div className="mt-3 rounded-xl bg-black/60 p-3 text-center border border-white/5">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber/20 text-amber border border-amber/30">
                        <UserCheck className="h-5 w-5" />
                      </div>
                      <p className="mt-2 text-xs font-bold text-paper">
                        Brand Presenter • Natural Pacing
                      </p>
                      <p className="mt-1 text-xs text-mute">
                        Sub-frame facial alignment (60fps)
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-1 h-3">
                      {[30, 80, 50, 95, 60, 40, 85, 45].map((h, i) => (
                        <span key={i} className="w-1 rounded-full bg-amber" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Guarantee */}
              <div className="rounded-xl border border-white/10 bg-black/60 p-2.5 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-wave">
                  Zero Filming Required
                </p>
                <p className="text-xs text-paper-dim">
                  Available in your 3 free sample cuts
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
