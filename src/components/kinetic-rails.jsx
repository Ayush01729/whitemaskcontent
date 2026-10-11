import { Heart, Eye, Volume2, Sparkles, CheckCircle2, Terminal, ArrowUpRight, ShieldCheck } from "lucide-react";

const RAIL_CARDS = [
  {
    title: "POV: You discovered the only project tracker that actually ships",
    niche: "SaaS Workflow",
    handle: "@linear.team",
    views: "840K",
    likes: "42.1K",
    badge: "Kinetic UI Cut",
    caption: "Hit Cmd+K, press C, assign in 0.2s. Why startups refuse to use Jira.",
    highlightWord: "Cmd+K in 0.2s",
    mockType: "devtools",
    mockData: { label: "LIN-840: Core Pipeline", metric: "+320% Velocity", tag: "Merged" },
    accent: "border-signal/30 text-signal",
    videoSrc: "/kinetic_ui_video_1.mp4",
  },
  {
    title: "3 fabric secrets athletic wear brands will never tell you",
    niche: "E-Commerce DTC",
    handle: "@athletic.lab",
    views: "1.2M",
    likes: "78.4K",
    badge: "AI Presenter Cut",
    caption: "Testing compression leggings through 500lb sets. Honest 30-day verdict.",
    highlightWord: "500lb Squat Test",
    mockType: "ecommerce",
    mockData: { label: "High-Density Knit", metric: "4.9★ (14K Reviews)", tag: "Verified" },
    accent: "border-amber/30 text-amber",
    videoSrc: "/dtc_brand_reviewer.mp4",
  },
  {
    title: "How one simple Postgres query dropped AWS bills by $4,000",
    niche: "Developer Tools",
    handle: "@supabase.community",
    views: "490K",
    likes: "29.8K",
    badge: "Kinetic UI Cut",
    caption: "We audited an AI startup's backend architecture. Here is the exact fix.",
    highlightWord: "Saved $4,000/mo",
    mockType: "database",
    mockData: { label: "SELECT * FROM edge_index", metric: "Latency 8ms", tag: "Query OK" },
    accent: "border-wave/30 text-wave",
    videoSrc: "/kinetic_video_2.mp4",
  },
  {
    title: "Why tech founders stopped setting up camera ring lights",
    niche: "Founder Brand",
    handle: "@growth.founder",
    views: "620K",
    likes: "38.5K",
    badge: "AI Presenter Cut",
    caption: "Daily product video ads without a single studio hour or filming setup.",
    highlightWord: "0 Studio Days",
    mockType: "founder",
    mockData: { label: "Autonomous Pipeline", metric: "24h Revert", tag: "No Filming" },
    accent: "border-signal/30 text-signal",
    videoSrc: "/tech_founder.mp4",
  },
  {
    title: "The 3 onboarding mistakes killing your app's trial retention",
    niche: "Consumer Apps",
    handle: "@product.growth",
    views: "910K",
    likes: "54.2K",
    badge: "Kinetic UI Cut",
    caption: "Why 80% of users churn before day 3 and the 2-step fix that doubled activations.",
    highlightWord: "2x Activations",
    mockType: "analytics",
    mockData: { label: "Day 3 Retention", metric: "84.2% Sustained", tag: "+42% Lift" },
    accent: "border-signal/30 text-signal",
    videoSrc: "/iphone_16_finance_app.mp4",
  },
  {
    title: "We audited the trending recovery electrolyte formula for 14 days",
    niche: "Health & DTC",
    handle: "@wellness.audit",
    views: "1.4M",
    likes: "92.0K",
    badge: "AI Presenter Cut",
    caption: "Electrolyte breakdown. Why sugar-loaded drinks destroy sustained energy.",
    highlightWord: "0g Sugar",
    mockType: "supplement",
    mockData: { label: "Clean Electrolytes", metric: "1,000mg Sodium", tag: "Clinical" },
    accent: "border-coral/30 text-coral",
    videoSrc: "/wellness_bottle_ad.mp4",
  },
];

export function KineticRails() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden py-12">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-ink to-transparent" />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
        {/* Column 1 (Scroll Up) */}
        <div className="relative h-[520px] sm:h-[660px] overflow-hidden">
          <div className="animate-rail-up flex flex-col gap-3 sm:gap-4">
            {[...RAIL_CARDS, ...RAIL_CARDS].map((item, idx) => (
              <RailItem key={`c1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Column 2 (Scroll Down) */}
        <div className="relative h-[520px] sm:h-[660px] overflow-hidden">
          <div className="animate-rail-down flex flex-col gap-3 sm:gap-4">
            {[...RAIL_CARDS.slice().reverse(), ...RAIL_CARDS].map((item, idx) => (
              <RailItem key={`c2-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Column 3 (Scroll Up Slow - Hidden on Mobile) */}
        <div className="relative hidden h-[660px] overflow-hidden md:block">
          <div className="animate-rail-up-slow flex flex-col gap-4">
            {[...RAIL_CARDS.slice(2), ...RAIL_CARDS].map((item, idx) => (
              <RailItem key={`c3-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Column 4 (Scroll Down Slow - Hidden on Mobile) */}
        <div className="relative hidden h-[660px] overflow-hidden md:block">
          <div className="animate-rail-down-slow flex flex-col gap-4">
            {[...RAIL_CARDS.slice(1), ...RAIL_CARDS].map((item, idx) => (
              <RailItem key={`c4-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RailItem({ item }) {
  return (
    <div className="hairline-highlight relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-2.5 sm:p-4 shadow-xl flex flex-col justify-between">
      {/* Background Video */}
      {item.videoSrc && (
        <video
          src={item.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Cinematic Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black/85 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-1 text-[10px] sm:text-xs">
          <span className="truncate max-w-[70px] sm:max-w-none rounded-full bg-black/70 px-2 py-0.5 font-semibold text-paper-dim border border-white/10 backdrop-blur-md">
            {item.niche}
          </span>
          <span className={`shrink-0 rounded-full bg-black/70 px-1.5 sm:px-2 py-0.5 font-bold uppercase tracking-wider text-[9px] sm:text-xs border ${item.accent} backdrop-blur-md`}>
            {item.badge}
          </span>
        </div>

        {/* Creator identity */}
        <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 text-[10px] sm:text-xs text-mute min-w-0">
          <span className="h-1.5 w-1.5 rounded-full bg-wave animate-pulse shrink-0" />
          <span className="font-semibold text-paper drop-shadow truncate">{item.handle}</span>
          <CheckCircle2 className="h-3 w-3 text-signal shrink-0" />
        </div>
      </div>

      {/* Middle: Sleek floating metric badge */}
      <div className="relative z-10 my-auto rounded-xl border border-white/15 bg-black/75 p-2 sm:p-3 shadow-2xl backdrop-blur-md">
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-mute pb-1 sm:pb-1.5 border-b border-white/10 gap-1">
          <span className="font-mono text-paper-dim truncate max-w-[75px] sm:max-w-none">{item.mockData.label}</span>
          <span className="rounded bg-white/15 px-1 py-0.5 text-[9px] sm:text-xs font-bold text-wave shrink-0">
            {item.mockData.tag}
          </span>
        </div>

        <div className="mt-1.5 sm:mt-2 flex items-center justify-between gap-1">
          <span className="font-display text-xs sm:text-sm font-bold text-paper truncate">
            {item.mockData.metric}
          </span>
          <span className="rounded-full bg-signal/25 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-semibold text-signal border border-signal/30 shrink-0 truncate max-w-[75px] sm:max-w-none">
            {item.highlightWord}
          </span>
        </div>

        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-medium text-paper line-clamp-2 leading-tight sm:leading-relaxed">
          "{item.title}"
        </p>
      </div>

      {/* Bottom: Kinetic Captions & Telemetry */}
      <div className="relative z-10 space-y-1.5 sm:space-y-2 pt-1">
        <div className="rounded-lg bg-black/85 px-2 sm:px-2.5 py-1 sm:py-1.5 border border-white/10 backdrop-blur-md">
          <p className="line-clamp-2 text-[10px] sm:text-xs font-bold text-amber leading-tight">
            {item.caption}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-1.5 sm:pt-2 text-[10px] sm:text-xs text-mute">
          <span className="flex items-center gap-1 font-mono">
            <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-signal" />
            <span className="text-paper-dim">{item.views}</span>
          </span>

          <span className="flex items-center gap-1 font-mono">
            <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-coral fill-coral/50" />
            <span className="text-paper-dim">{item.likes}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
