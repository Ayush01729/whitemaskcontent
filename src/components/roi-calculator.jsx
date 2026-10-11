import { useState } from "react";
import { ArrowRight, Calculator, Sparkles, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function RoiCalculator({ onClaim }) {
  const [videosPerWeek, setVideosPerWeek] = useState(5);
  const [accountCount, setAccountCount] = useState(2);

  // Math models based on aggregate short-form industry benchmarks
  const monthlyVideos = videosPerWeek * 4;
  const totalPostsAcrossAccounts = monthlyVideos * accountCount;
  // Conservative estimate: 2,500 - 8,000 views per post on warmed accounts
  const estimatedViews = totalPostsAcrossAccounts * 4500;
  // CPM equivalent on TikTok/Meta ads average $12.50 CPM
  const paidAdEquivalent = Math.round((estimatedViews / 1000) * 12.5);
  // Hours saved: ~3 hours per edited vertical cut (scripting + B-roll + captions + thumbnail)
  const hoursSaved = monthlyVideos * 3;

  return (
    <div className="glass-panel mx-auto max-w-5xl rounded-3xl p-6 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Controls Column */}
        <div className="space-y-6 lg:col-span-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
              <Calculator className="h-3.5 w-3.5" />
              Volume & Reach Calculator
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
              Calculate your organic acquisition leverage.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              See what happens when you post consistent, retention-engineered short-form video instead of buying expensive ads.
            </p>
          </div>

          {/* Slider 1: Videos per week */}
          <div className="space-y-2 rounded-2xl border border-line-subtle bg-panel/40 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-paper-dim">Videos produced per week</span>
              <span className="font-mono text-sm font-bold text-signal">{videosPerWeek} videos</span>
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
              <span>2/week (Starter)</span>
              <span>7/week (Daily)</span>
              <span>14/week (Blitz)</span>
            </div>
          </div>

          {/* Slider 2: Accounts managed */}
          <div className="space-y-2 rounded-2xl border border-line-subtle bg-panel/40 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-paper-dim">Social accounts (TikTok, IG, Shorts)</span>
              <span className="font-mono text-sm font-bold text-wave">{accountCount} accounts</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={accountCount}
              onChange={(e) => setAccountCount(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-panel accent-wave"
            />
            <div className="flex justify-between text-[11px] text-mute">
              <span>1 account</span>
              <span>3 accounts</span>
              <span>6 accounts</span>
            </div>
          </div>
        </div>

        {/* Results Output Cards */}
        <div className="space-y-3 lg:col-span-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Metric 1: Monthly Views */}
            <div className="rounded-2xl border border-line-subtle bg-panel-raised p-5 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-signal">
                <TrendingUp className="h-4 w-4" />
                Est. Monthly Views
              </div>
              <p className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper">
                {estimatedViews.toLocaleString()}
              </p>
              <p className="mt-1 text-[11px] text-mute">
                Across {totalPostsAcrossAccounts} posts distributed this month
              </p>
            </div>

            {/* Metric 2: Paid Ad Equivalent */}
            <div className="rounded-2xl border border-line-subtle bg-panel-raised p-5 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-wave">
                <DollarSign className="h-4 w-4" />
                Paid Ad CPM Value
              </div>
              <p className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper">
                ${paidAdEquivalent.toLocaleString()}
              </p>
              <p className="mt-1 text-[11px] text-mute">
                What this view volume would cost on Meta/TikTok Ads
              </p>
            </div>
          </div>

          {/* Metric 3: Hours Saved Highlight Box */}
          <div className="rounded-2xl border border-signal/30 bg-signal/5 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-signal">
                <Clock className="h-4 w-4" />
                Internal Creator Hours Saved
              </div>
              <span className="rounded bg-signal/15 px-2 py-0.5 text-xs font-bold text-signal">
                Autonomous
              </span>
            </div>
            <p className="mt-2 font-display text-2xl font-bold text-paper">
              {hoursSaved} hours / month
            </p>
            <p className="mt-1 text-xs leading-relaxed text-mute">
              Zero time spent writing scripts, setting up ring lights, recording takes, or editing keyframes.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2">
            <Button onClick={() => onClaim()} className="w-full h-12 text-sm font-semibold">
              Lock in your reach with 3 free videos
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
