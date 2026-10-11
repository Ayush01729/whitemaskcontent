import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Play, Pause, Check, RefreshCw, Volume2, ShieldCheck, Heart, MessageCircle, Share2, Eye, Sparkles, Terminal, Activity, Layers, Sliders } from "lucide-react";
import { Button } from "./ui/button";

const DEMO_PRESETS = [
  {
    name: "Linear",
    url: "linear.app",
    niche: "DevTools & SaaS",
    hooks: [
      {
        title: "POV: You finally deleted Jira",
        format: "Kinetic UI Screencast",
        style: "Kinetic UI",
        duration: "0:34",
        retentionScore: "96%",
        sound: "Moody Synth Bass (Trending)",
        captionPreview: "POV: Your engineering team stopped writing 40-page tickets and shipped 3 versions in 7 days.",
      },
      {
        title: "The 3 shortcuts saving 4 hours a week",
        format: "Speed-Run Product Workflow",
        style: "Kinetic UI",
        duration: "0:28",
        retentionScore: "98%",
        sound: "Upbeat Lo-Fi Crunch",
        captionPreview: "Hit Cmd+K, press C, assign in 0.2 seconds. Here is why high-growth startups refuse to use anything else.",
      },
      {
        title: "Why tech leads are replacing their PM stack",
        format: "Founder Persona Cut",
        style: "AI Presenter",
        duration: "0:42",
        retentionScore: "91%",
        sound: "Curious Ambient",
        captionPreview: "If your developers spend more time updating sprint boards than writing code, you have a tooling problem.",
      },
    ],
  },
  {
    name: "Supabase",
    url: "supabase.com",
    niche: "Developer Infrastructure",
    hooks: [
      {
        title: "Build your backend in 60 seconds",
        format: "Code-Sync Speed Cut",
        style: "Kinetic UI",
        duration: "0:31",
        retentionScore: "97%",
        sound: "Fast Tech House",
        captionPreview: "Postgres, Auth, Edge Functions, and Vectors with one click. Firebase just lost the argument.",
      },
      {
        title: "Stop paying $4,000/mo for managed DBs",
        format: "Cost Comparison Hook",
        style: "AI Presenter",
        duration: "0:36",
        retentionScore: "93%",
        sound: "Dark Electronic Pulse",
        captionPreview: "We audited an AI startup paying AWS thousands for simple queries. Here is what happened after switching.",
      },
      {
        title: "The Postgres trick 90% of devs miss",
        format: "Educational Explainer",
        style: "Kinetic UI",
        duration: "0:45",
        retentionScore: "95%",
        sound: "Deep Cinematic Bed",
        captionPreview: "Row level security without a custom middleware layer. Save this for your next weekend project.",
      },
    ],
  },
  {
    name: "Gymshark",
    url: "gymshark.com",
    niche: "DTC Fitness & Apparel",
    hooks: [
      {
        title: "3 gym fits that survived leg day test",
        format: "High-Energy Lifestyle Cut",
        style: "AI Presenter",
        duration: "0:25",
        retentionScore: "97%",
        sound: "Hardstyle Motivational",
        captionPreview: "Squat proof, zero roll-down, and moisture-wicking that actually holds up through 500lb sets.",
      },
      {
        title: "The fabric mistake ruining your workout",
        format: "Problem-Agitation Hook",
        style: "Kinetic UI",
        duration: "0:33",
        retentionScore: "92%",
        sound: "Heavy Bass Rhythm",
        captionPreview: "Cheap polyester traps odor forever. Here is what high-density seamless weave actually does.",
      },
      {
        title: "What 7 days in the new compression feels like",
        format: "Authentic Product Review",
        style: "AI Presenter",
        duration: "0:40",
        retentionScore: "94%",
        sound: "Trending Audio",
        captionPreview: "Unboxing the seamless drop. Honest review: the waistband support is literally unmatched.",
      },
    ],
  },
];

export function HeroUrlEngine({ onClaim, onClaimFree }) {
  const handleClaimTrigger = onClaim || onClaimFree || (() => {});
  const [inputUrl, setInputUrl] = useState("");
  const [activePreset, setActivePreset] = useState(DEMO_PRESETS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [selectedHookIndex, setSelectedHookIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [simulatedProgress, setSimulatedProgress] = useState(35);

  const scanSteps = [
    "Fetching website HTML & analyzing positioning...",
    "Extracting conversion hooks & target buyer objections...",
    "Selecting kinetic UI cuts and brand voice models...",
    "Compiling 3 custom video roadmaps (9:16)...",
  ];

  // Video progress loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSimulatedProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleRunAnalysis = (e) => {
    if (e) e.preventDefault();
    const clean = inputUrl.trim();
    const targetUrl = clean || activePreset.url;
    handleClaimTrigger(targetUrl);
  };

  const currentHook = activePreset.hooks[selectedHookIndex] || activePreset.hooks[0];

  return (
    <div className="w-full">
      {/* ── Interactive Command Center Bar ── */}
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={handleRunAnalysis}
          className="hairline-highlight relative flex items-center gap-2 rounded-2xl border border-white/10 bg-panel/80 p-2 shadow-2xl backdrop-blur-xl transition-all focus-within:border-signal/50"
        >
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-ink-deep border border-white/5 text-mute">
            <Globe className="h-4 w-4" />
          </div>

          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter your website URL (e.g. yourbrand.com)"
            className="h-11 w-full bg-transparent px-2 text-sm sm:text-base font-medium text-paper placeholder-mute/50 focus:outline-none"
          />

          <Button
            type="submit"
            disabled={isScanning}
            className="h-11 px-5 text-sm font-semibold whitespace-nowrap"
          >
            {isScanning ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 animate-spin text-paper" />
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                Generate 3 Free Videos
                <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </form>

        {/* Quick brand triggers */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-mute">
          <span className="font-medium text-paper-dim">Instant test presets:</span>
          {DEMO_PRESETS.map((preset) => (
            <button
              key={preset.url}
              type="button"
              onClick={() => {
                setInputUrl(preset.url);
                setActivePreset(preset);
                setSelectedHookIndex(0);
              }}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                activePreset.url === preset.url
                  ? "border-signal bg-signal/15 text-paper shadow-sm"
                  : "border-line-subtle bg-panel/30 text-mute hover:border-line hover:text-paper"
              }`}
            >
              {preset.name}
            </button>
          ))}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-wave ml-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            No card required
          </span>
        </div>
      </div>

      {/* ── Scanning Stage or Realistic Video Player Deck ── */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {isScanning ? (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hairline-highlight mx-auto max-w-xl rounded-3xl border border-white/10 bg-panel/90 p-8 text-center shadow-2xl backdrop-blur-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/30 bg-signal/10 text-signal">
                <RefreshCw className="h-6 w-6 animate-spin" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-paper">
                Synthesizing custom video pipeline for {inputUrl || activePreset.url}
              </h3>

              <div className="mt-6 space-y-2 text-left">
                {scanSteps.map((step, idx) => {
                  const isDone = idx < scanStep;
                  const isCurrent = idx === scanStep;
                  return (
                    <div
                      key={step}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-xs transition-colors ${
                        isDone
                          ? "border-wave/30 bg-wave/5 text-wave"
                          : isCurrent
                          ? "border-signal/50 bg-signal/10 text-paper font-semibold"
                          : "border-line-subtle bg-ink-deep/40 text-mute/50"
                      }`}
                    >
                      <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ink-deep border border-white/5">
                        {isDone ? (
                          <Check className="h-3 w-3 text-wave" />
                        ) : isCurrent ? (
                          <span className="h-2 w-2 rounded-full bg-signal animate-ping" />
                        ) : (
                          <span className="text-xs text-mute">{idx + 1}</span>
                        )}
                      </div>
                      <span>{step}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="deck"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-12"
            >
              {/* Left Column: 3 Generated Angles */}
              <div className="space-y-3 lg:col-span-6">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-wave animate-pulse" />
                    <span className="text-xs font-bold tracking-wider text-paper uppercase">
                      3 Video Angles Generated for {activePreset.name}
                    </span>
                  </div>
                  <span className="text-xs text-mute font-medium">{activePreset.niche}</span>
                </div>

                {activePreset.hooks.map((hook, idx) => {
                  const isSelected = selectedHookIndex === idx;
                  return (
                    <button
                      key={hook.title}
                      type="button"
                      onClick={() => {
                        setSelectedHookIndex(idx);
                        setSimulatedProgress(20);
                      }}
                      className={`hairline-highlight group relative w-full rounded-2xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-signal/80 bg-panel-raised shadow-xl shadow-signal/10 ring-1 ring-signal/30"
                          : "border-line-subtle bg-panel/50 hover:border-line hover:bg-panel/80"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center justify-center rounded-lg px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                            hook.style === "AI Presenter"
                              ? "bg-amber/15 text-amber border border-amber/30"
                              : "bg-signal/15 text-signal border border-signal/30"
                          }`}>
                            {hook.style}
                          </span>
                          <span className="text-xs font-mono text-mute">{hook.duration}</span>
                        </div>
                        <span className="text-xs font-semibold text-wave">
                          {hook.retentionScore} retention score
                        </span>
                      </div>

                      <h4 className="mt-2.5 font-display text-base font-bold text-paper group-hover:text-signal transition-colors">
                        "{hook.title}"
                      </h4>

                      <p className="mt-1.5 text-xs leading-relaxed text-mute line-clamp-2">
                        {hook.captionPreview}
                      </p>

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-line-subtle text-xs text-mute">
                        <span className="flex items-center gap-1.5">
                          <Volume2 className="h-3.5 w-3.5 text-signal" />
                          <span className="truncate max-w-[180px]">{hook.sound}</span>
                        </span>
                        <span className="font-semibold text-paper-dim">
                          {isSelected ? "Now Playing Preview →" : "Click to Preview"}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {/* Bottom CTA Box */}
                <div className="pt-2">
                  <div className="hairline-highlight flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-panel/70 p-4 shadow-lg backdrop-blur-md">
                    <div>
                      <p className="text-xs font-bold text-wave uppercase tracking-wider">
                        Zero Risk • We Revert in 24 Hours
                      </p>
                      <p className="text-sm font-semibold text-paper">
                        Get 3 custom videos for your product. No credit card required.
                      </p>
                    </div>
                    <Button
                      onClick={() => handleClaimTrigger(activePreset.url)}
                      size="sm"
                      className="whitespace-nowrap h-10 px-5 text-sm font-semibold"
                    >
                      Claim 3 Free Videos
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: 9:16 Authentic High-Craft Video Scene */}
              <div className="flex justify-center lg:col-span-6">
                <div className="relative aspect-[9/16] w-full max-w-[310px] sm:max-w-[330px] overflow-hidden rounded-[32px] border-2 border-white/15 bg-ink-deep shadow-2xl shadow-black">
                  {/* Subtle ambient lighting */}
                  <div className="absolute inset-0 bg-gradient-to-b from-panel-raised/90 via-ink-deep/95 to-ink-deep" />

                  {/* Header Camera Status */}
                  <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/10">
                      <span className="h-2 w-2 rounded-full bg-coral animate-pulse" />
                      <span className="font-mono text-xs uppercase tracking-wider text-paper">
                        REC • 4K 60FPS
                      </span>
                    </div>

                    <div className="rounded-full bg-black/60 px-2.5 py-1 font-mono text-xs text-paper-dim backdrop-blur-md border border-white/10">
                      {currentHook.style}
                    </div>
                  </div>

                  {/* ── REALISTIC PRODUCT UI SCENE ACCORDING TO ACTIVE PRESET ── */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 pt-16 pb-20">
                    {/* Simulated Authentic Product Interface */}
                    <div className="my-auto w-full">
                      {activePreset.name === "Linear" ? (
                        <div className="rounded-2xl border border-white/15 bg-ink/90 p-4 shadow-2xl backdrop-blur-md">
                          {/* Mini Linear UI */}
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs text-mute">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-signal" />
                              <span className="font-semibold text-paper">Linear Core</span>
                            </div>
                            <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-mono text-paper-dim">
                              Cmd+K
                            </span>
                          </div>

                          <div className="mt-3 space-y-2">
                            <div className="flex items-center justify-between rounded-lg bg-panel/60 p-2 text-xs">
                              <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                                <span className="font-medium text-paper">LIN-402: Refactor auth flow</span>
                              </div>
                              <span className="text-xs text-mute font-mono">0.2s</span>
                            </div>

                            <div className="flex items-center justify-between rounded-lg bg-signal/15 border border-signal/30 p-2 text-xs">
                              <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-wave" />
                                <span className="font-medium text-paper">Shipped 3 releases this sprint</span>
                              </div>
                              <span className="text-xs text-wave font-bold">Done</span>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-xs text-mute">
                            <span>Ship velocity</span>
                            <span className="font-bold text-wave">+340% YoY</span>
                          </div>
                        </div>
                      ) : activePreset.name === "Supabase" ? (
                        <div className="rounded-2xl border border-white/15 bg-ink/90 p-4 shadow-2xl backdrop-blur-md">
                          {/* Mini Supabase UI */}
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs text-mute">
                            <div className="flex items-center gap-1.5">
                              <Terminal className="h-3.5 w-3.5 text-wave" />
                              <span className="font-semibold text-paper">SQL Console</span>
                            </div>
                            <span className="rounded bg-wave/15 px-1.5 py-0.5 text-xs font-mono text-wave">
                              Active (12ms)
                            </span>
                          </div>

                          <div className="mt-3 rounded-lg bg-black/60 p-2.5 font-mono text-xs text-paper-dim border border-white/5 space-y-1">
                            <p className="text-wave">SELECT * FROM edge_clusters;</p>
                            <p className="text-mute text-xs">Rows: 48,290 • Latency: 12ms</p>
                            <p className="text-signal text-xs">Vector search: 100% indexed</p>
                          </div>

                          <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-xs text-mute">
                            <span>Cloud DB Costs</span>
                            <span className="font-bold text-wave">Saved $4,200/mo</span>
                          </div>
                        </div>
                      ) : activePreset.name === "Gymshark" ? (
                        <div className="rounded-2xl border border-white/15 bg-ink/90 p-4 shadow-2xl backdrop-blur-md">
                          {/* Mini Gymshark DTC Card */}
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs">
                            <span className="font-bold text-paper">Apex Seamless Drop</span>
                            <span className="rounded bg-coral/20 px-1.5 py-0.5 text-xs font-bold text-coral">
                              High Demand
                            </span>
                          </div>

                          <div className="mt-3 rounded-xl bg-panel/70 p-3 text-center border border-white/5">
                            <p className="text-xs font-bold uppercase tracking-wider text-paper">
                              High-Density Compression Weave
                            </p>
                            <div className="mt-2 flex items-center justify-center gap-1 text-amber">
                              {"★★★★★".split("").map((s, i) => (
                                <span key={i} className="text-xs">{s}</span>
                              ))}
                              <span className="ml-1 text-xs text-mute font-mono">(18.4K reviews)</span>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10 text-xs text-mute">
                            <span>Leg day stress test</span>
                            <span className="font-bold text-wave">Zero Roll-Down</span>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-2xl border border-white/15 bg-ink/90 p-4 shadow-2xl backdrop-blur-md text-center">
                          <p className="text-xs font-bold text-signal uppercase tracking-wider">
                            {activePreset.url}
                          </p>
                          <p className="mt-2 font-display text-sm font-bold text-paper">
                            {currentHook.title}
                          </p>
                          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-mute">
                            <span className="rounded bg-white/10 px-2 py-0.5">High Retaining Hook</span>
                            <span className="font-bold text-wave">4.8x ROAS</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Dynamic High-Impact Subtitles (CapCut / Reels style) */}
                    <div className="text-center pt-2">
                      <div className="inline-block rounded-xl bg-black/80 px-3.5 py-1.5 border border-white/10 shadow-xl backdrop-blur-md">
                        <p className="font-display text-xs sm:text-sm font-extrabold uppercase leading-snug tracking-wide text-amber drop-shadow">
                          {currentHook.captionPreview}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Action Column */}
                  <div className="absolute right-3 bottom-20 z-20 flex flex-col items-center gap-2.5 text-white">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-md border border-white/15"
                      aria-label="Toggle play"
                    >
                      {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    </button>

                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-coral border border-white/10">
                        <Heart className="h-3.5 w-3.5 fill-coral" />
                      </div>
                      <span className="text-xs font-bold">24.5K</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white border border-white/10">
                        <MessageCircle className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-bold">612</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white border border-white/10">
                        <Share2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-bold">2.4K</span>
                    </div>
                  </div>

                  {/* Audio Waveform & Handle */}
                  <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between rounded-xl bg-black/70 p-2 border border-white/10 backdrop-blur-md text-xs">
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      {/* Animated Sound Wave Bars */}
                      <div className="flex items-end gap-0.5 h-3 flex-none">
                        {[40, 90, 60, 100, 75, 45, 80, 55].map((h, i) => (
                          <span
                            key={i}
                            className="w-0.5 rounded-full bg-signal transition-all duration-300"
                            style={{ height: isPlaying ? `${h}%` : "25%" }}
                          />
                        ))}
                      </div>
                      <p className="truncate text-xs text-paper-dim">@{activePreset.url.split(".")[0]}</p>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-xs text-wave flex-none">
                      <Eye className="h-3 w-3" />
                      <span>{currentHook.retentionScore}</span>
                    </div>
                  </div>

                  {/* Video Progress Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15">
                    <div
                      className="h-full bg-signal transition-all duration-150"
                      style={{ width: `${simulatedProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
