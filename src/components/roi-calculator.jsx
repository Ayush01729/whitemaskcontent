import { useState } from "react";
import { ArrowRight, Calculator, Sparkles, TrendingUp, DollarSign, Clock, Users, MousePointerClick } from "lucide-react";
import { Button } from "./ui/button";

const VALUE_PRESETS = [
  { label: "$35 (Ecom / App)", value: 35 },
  { label: "$80 (Prosumer)", value: 80 },
  { label: "$200 (B2B SaaS)", value: 200 },
  { label: "$500 (Enterprise)", value: 500 },
];

export function RoiCalculator({ onClaim }) {
  const [videosPerWeek, setVideosPerWeek] = useState(5);
  const [customerValue, setCustomerValue] = useState(80);

  // Conversion math tailored for startups & product marketing
  const monthlyVideos = videosPerWeek * 4;
  // Conservative organic & ad view benchmark: ~3,500 qualified views per video across TikTok, Reels, Shorts
  const totalViews = monthlyVideos * 3500;
  // Conservative bio/link click-through rate (1.2%)
  const websiteVisitors = Math.round(totalViews * 0.012);
  // Conversion rate of visitors who convert to paying customers / users (2.4%)
  const newCustomers = Math.max(1, Math.round(websiteVisitors * 0.024));
  // Total projected monthly revenue generated from video pipeline
  const projectedRevenue = newCustomers * customerValue;
  // Agency cost comparison ($300/asset traditional agency standard)
  const agencyCostSaved = monthlyVideos * 300;
  // Founder/team hours saved (scripting, recording, editing ~3h/video)
  const hoursSaved = monthlyVideos * 3;

  return (
    <div className="glass-panel mx-auto max-w-5xl rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
              <Calculator className="h-3.5 w-3.5" />
              Startup Revenue Calculator
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
              Calculate projected sales from short-form video.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              See how turning your product into high-retention video ads and UI walkthroughs translates directly into website traffic and monthly sales pipeline.
            </p>
          </div>

          {/* Slider 1: Videos produced per week */}
          <div className="space-y-2 rounded-2xl border border-line-subtle bg-panel/40 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-paper-dim">Video creative output</span>
              <span className="font-mono text-sm font-bold text-signal">{videosPerWeek} videos / week</span>
            </div>
            <input
              type="range"
              min="2"
              max="14"
              step="1"
              value={videosPerWeek}
              onChange={(e) => setVideosPerWeek(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-panel accent-signal"
            />
            <div className="flex justify-between text-[11px] text-mute">
              <span>2/wk (Starter)</span>
              <span>5/wk (Growth)</span>
              <span>14/wk (Daily Blitz)</span>
            </div>
          </div>

          {/* Slider 2: Average Sale Value / Customer LTV */}
          <div className="space-y-2 rounded-2xl border border-line-subtle bg-panel/40 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-paper-dim">Average sale price / Customer LTV</span>
              <span className="font-mono text-sm font-bold text-wave">${customerValue}</span>
            </div>
            <input
              type="range"
              min="20"
              max="500"
              step="10"
              value={customerValue}
              onChange={(e) => setCustomerValue(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-panel accent-wave"
            />
            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {VALUE_PRESETS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setCustomerValue(p.value)}
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-all ${
                    customerValue === p.value
                      ? "border border-wave bg-wave/20 text-paper font-semibold"
                      : "border border-line-subtle bg-panel/50 text-mute hover:text-paper"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Output Cards */}
        <div className="space-y-3 lg:col-span-6">
          {/* Champion Metric: Projected Video Revenue */}
          <div className="rounded-2xl border border-wave/40 bg-gradient-to-br from-wave/15 via-panel-raised to-panel-raised p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-wave">
                <DollarSign className="h-4 w-4" />
                Projected New Sales Revenue
              </span>
              <span className="rounded-full border border-wave/30 bg-wave/10 px-2.5 py-0.5 text-[11px] font-bold text-wave">
                ~{newCustomers} new customers/mo
              </span>
            </div>
            <p className="mt-2 font-display text-4xl font-extrabold tracking-tight text-paper sm:text-5xl">
              ${projectedRevenue.toLocaleString()}
              <span className="text-lg font-normal text-mute"> / month</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-mute">
              Estimated pipeline generated from video conversions at an average value of <strong className="text-paper">${customerValue}</strong>.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Metric 2: Product Traffic Driven */}
            <div className="rounded-2xl border border-line-subtle bg-panel-raised p-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-signal">
                <MousePointerClick className="h-4 w-4" />
                Product Visitors Driven
              </div>
              <p className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-paper">
                {websiteVisitors.toLocaleString()}
              </p>
              <p className="mt-0.5 text-[11px] text-mute">
                Qualified visits to your URL from {totalViews.toLocaleString()} views
              </p>
            </div>

            {/* Metric 3: Agency Production Budget Saved */}
            <div className="rounded-2xl border border-line-subtle bg-panel-raised p-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber">
                <TrendingUp className="h-4 w-4" />
                Agency Production Saved
              </div>
              <p className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-paper">
                ${agencyCostSaved.toLocaleString()}
              </p>
              <p className="mt-0.5 text-[11px] text-mute">
                Saved vs traditional agency fees (~$300/asset)
              </p>
            </div>
          </div>

          {/* Metric 4: Hours Saved Highlight Box */}
          <div className="rounded-2xl border border-line-subtle bg-panel/60 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-paper-dim">
                <Clock className="h-3.5 w-3.5 text-signal" />
                Internal Founder Hours Saved
              </div>
              <span className="font-mono text-xs font-bold text-signal">
                {hoursSaved} hrs / mo
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-mute">
              Zero time filming takes, writing scripts, or editing keyframes.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2">
            <Button onClick={() => onClaim()} className="w-full h-12 text-sm font-semibold">
              Unlock your video revenue with 3 free videos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
