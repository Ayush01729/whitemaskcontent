import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Sparkles, Check, Calendar, ThumbsUp, ThumbsDown, ArrowRight, ShieldCheck, Download, Share2, Layers } from "lucide-react";
import { Button } from "./ui/button";

export function ProductionPipeline({ onClaim }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Drop Your Product Link",
      tagline: "Zero briefs. Zero cameras required.",
      body: "Our engine scans your landing page, extracting product features, value propositions, and customer pain points. You never write a brief or touch editing software.",
      preview: "scanner",
    },
    {
      num: "02",
      title: "We Revert in 24 Hours",
      tagline: "Tailored hooks and 3 free custom concepts.",
      body: "Within 24 hours, our team analyzes your positioning and emails you a tailored 3-video roadmap. You review the hooks, tone, and visual direction with zero obligation.",
      preview: "queue",
    },
    {
      num: "03",
      title: "Deploy for Customer Acquisition",
      tagline: "High-converting video ads and organic views.",
      body: "Receive master 4K vertical cuts ready for TikTok, Meta Ads, Instagram Reels, and YouTube Shorts. You can download the raw files or let us auto-schedule to your accounts.",
      preview: "calendar",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <h3 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          One link in. High-converting video creatives out.
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          A seamless 3-stage pipeline from website URL to customer-acquiring video distribution.
        </p>
      </div>

      {/* Step Buttons Nav */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {steps.map((st, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={st.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-xs font-semibold transition-all ${
                isSelected
                  ? "border-signal bg-signal/15 text-paper shadow-lg shadow-signal/10"
                  : "border-line-subtle bg-panel/40 text-mute hover:border-line hover:text-paper"
              }`}
            >
              <span className={`font-mono text-xs font-bold ${isSelected ? "text-signal" : "text-mute"}`}>
                {st.num}
              </span>
              <span>{st.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Stage Card */}
      <div className="mt-8">
        <div className="hairline-highlight relative overflow-hidden rounded-3xl border border-white/10 bg-panel/75 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              {/* Copy */}
              <div className="space-y-4 lg:col-span-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-signal">
                  Stage {steps[activeStep].num} • {steps[activeStep].tagline}
                </span>
                <h4 className="font-display text-2xl font-bold text-paper sm:text-3xl">
                  {steps[activeStep].title}
                </h4>
                <p className="text-sm leading-relaxed text-mute">
                  {steps[activeStep].body}
                </p>

                <div className="pt-3">
                  <Button onClick={() => onClaim()} size="sm" className="h-10 px-5 text-xs font-semibold">
                    Test this step with 3 free videos
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>

              {/* Graphic Stage Preview */}
              <div className="lg:col-span-6">
                {activeStep === 0 && (
                  <div className="hairline-highlight rounded-2xl border border-white/10 bg-ink-deep p-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-line-subtle pb-3 text-xs text-mute">
                      <span className="font-mono text-xs text-wave font-bold">SCAN ENGINE ACTIVE</span>
                      <span>Latency: 180ms</span>
                    </div>

                    <div className="mt-4 rounded-xl border border-signal/30 bg-panel p-3 font-mono text-xs text-signal">
                      https://yourbrand.com
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between rounded-lg bg-panel/50 p-2.5 text-xs">
                        <span className="text-mute">Product Hooks Identified</span>
                        <span className="font-semibold text-paper">12 Core Angles</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-panel/50 p-2.5 text-xs">
                        <span className="text-mute">Target Buyer Persona</span>
                        <span className="font-semibold text-paper">High-Growth Founders & Leads</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-panel/50 p-2.5 text-xs">
                        <span className="text-mute">Brand Voice Matrix</span>
                        <span className="font-semibold text-wave">High Energy & Plain-Spoken</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="hairline-highlight rounded-2xl border border-white/10 bg-ink-deep p-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-line-subtle pb-3 text-xs">
                      <span className="text-paper font-semibold">24h Concept Review Roadmap</span>
                      <span className="text-xs text-wave font-bold">Ready in 24 Hours</span>
                    </div>

                    <div className="mt-4 rounded-xl border border-line-subtle bg-panel p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-sm font-bold text-paper">
                            "POV: You replaced 4 tools with one workflow"
                          </p>
                          <p className="mt-1 text-xs text-mute">
                            0:32 • 9:16 Vertical • Trending Audio
                          </p>
                        </div>
                        <span className="rounded-full bg-signal/15 px-2.5 py-0.5 text-xs font-bold text-signal border border-signal/30">
                          Approved
                        </span>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <div className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-wave/40 bg-wave/10 py-2 text-xs font-bold text-wave">
                          <Check className="h-3.5 w-3.5" />
                          Concept Approved
                        </div>
                        <div className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-line-subtle bg-panel/70 py-2 text-xs font-semibold text-mute">
                          Ready for 4K Export
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="hairline-highlight rounded-2xl border border-white/10 bg-ink-deep p-6 shadow-xl">
                    <div className="flex items-center justify-between border-b border-line-subtle pb-3 text-xs">
                      <span className="flex items-center gap-1.5 text-paper font-semibold">
                        <Layers className="h-4 w-4 text-signal" />
                        Multi-Platform Export Bay
                      </span>
                      <span className="font-mono text-xs text-wave font-bold">4K Master Files</span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="rounded-xl border border-signal/30 bg-panel p-3">
                        <span className="font-bold text-paper">9:16 Vertical</span>
                        <p className="text-xs text-mute mt-1">TikTok / Reels / Shorts</p>
                      </div>
                      <div className="rounded-xl border border-line-subtle bg-panel p-3">
                        <span className="font-bold text-paper">4:5 Feed</span>
                        <p className="text-xs text-mute mt-1">Meta Video Ads</p>
                      </div>
                      <div className="rounded-xl border border-line-subtle bg-panel p-3">
                        <span className="font-bold text-paper">16:9 Desktop</span>
                        <p className="text-xs text-mute mt-1">Product Demo Embed</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-wave/10 p-2.5 text-xs text-wave border border-wave/20">
                      <Download className="h-3.5 w-3.5" />
                      <span>100% Raw Video Ownership & Commercial Rights</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
