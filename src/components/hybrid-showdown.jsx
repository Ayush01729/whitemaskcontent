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
      videoSrc: "/kinetic_ui_video_1.mp4",
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
      videoSrc: "/tech_founder.mp4",
    },
  };

  const current = comparisonData[activeTab];

  return (
    <div className="hairline-highlight mx-auto max-w-5xl rounded-3xl border border-white/10 bg-panel/75 p-4 sm:p-10 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-6 border-b border-line-subtle pb-8 md:flex-row">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
            <Sparkles className="h-3.5 w-3.5" />
            The Hybrid Studio Superpower
          </span>
          <h3 className="mt-3 font-display text-xl sm:text-3xl font-bold tracking-tight text-paper text-balance">
            Why choose between UI demos and brand presenters? You get both.
          </h3>
          <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-mute">
            Most video agencies force you into a single rigid style. White Mask Content produces both formats from your website link so you can test which ad hooks convert best.
          </p>
        </div>

        {/* Style Switcher */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex rounded-2xl border border-white/10 bg-ink-deep p-1.5 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab("kinetic")}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold transition-all ${
              activeTab === "kinetic"
                ? "bg-signal text-white shadow-lg shadow-signal/30"
                : "text-mute hover:text-paper"
            }`}
          >
            <Monitor className="h-3.5 w-3.5 shrink-0" />
            <span>Kinetic UI Cuts</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("presenter")}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold transition-all ${
              activeTab === "presenter"
                ? "bg-amber text-ink-deep font-extrabold shadow-lg shadow-amber/30"
                : "text-mute hover:text-paper"
            }`}
          >
            <UserCheck className="h-3.5 w-3.5 shrink-0" />
            <span>AI Presenters</span>
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
            <h4 className="font-display text-xl sm:text-2xl font-bold text-paper">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-mute">
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
              <Button onClick={() => onClaim()} size="sm" className="h-10 px-5 text-xs font-semibold w-full sm:w-auto justify-center">
                Test this style in your 3 free videos
                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Screen Preview Frame */}
          <div className="flex justify-center lg:col-span-5">
            <div className="hairline-highlight relative aspect-[9/16] w-full max-w-[270px] sm:max-w-[280px] overflow-hidden rounded-3xl border border-white/15 bg-ink-deep shadow-2xl flex flex-col justify-between">
              {/* Background Video */}
              <video
                key={activeTab}
                src={current.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Gradient Vignette Overlay for readable HUD */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85 pointer-events-none" />

              {/* Top Header Status */}
              <div className="relative z-10 flex items-center justify-between text-xs text-mute p-4 pb-2">
                <span className="font-mono uppercase tracking-wider text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">Output Feed</span>
                <span className={`font-bold text-xs px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md ${current.accent}`}>{activeTab.toUpperCase()}</span>
              </div>

              {/* Center Subtle Telemetry Badge */}
              <div className="relative z-10 px-4 my-auto">
                <div className="inline-block rounded-xl bg-black/75 px-3 py-2 border border-white/15 backdrop-blur-md shadow-lg w-full text-center">
                  <p className="text-xs font-bold text-paper">
                    "{current.sampleHook}"
                  </p>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="relative z-10 p-4 pt-0">
                <div className="rounded-xl border border-white/10 bg-black/75 p-2.5 text-center backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-wave">
                    Zero Filming Required
                  </p>
                  <p className="text-[11px] text-paper-dim">
                    Available in your 3 free sample cuts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
