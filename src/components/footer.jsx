import { Link } from "react-router-dom";
import { NAV_LINKS } from "../lib/content";
import { Logo } from "./logo";

const TOPIC_LINKS = [
  { label: "Faceless YouTube Channel", to: "/faceless-youtube-channel" },
  { label: "Faceless YouTube Automation", to: "/faceless-youtube-automation" },
  { label: "How to Make a Faceless Channel", to: "/how-to-make-a-faceless-youtube-channel" },
  { label: "Make Faceless Videos with AI", to: "/how-to-make-faceless-youtube-videos-with-ai" },
  { label: "YouTube Automation Service", to: "/youtube-automation-service" },
  { label: "Done-for-You YouTube Channel", to: "/done-for-you-youtube-channel" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-paper">
              <Logo className="h-6 w-6" />
              white mask content
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Done-for-you faceless video production for creators, startups, and YouTube channels. Scripts to
              posting, handled.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-wave">
              <span>● Production active across 170+ niches</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-paper-dim">Site</span>
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-mute transition-colors hover:text-paper">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Guides navigation" className="flex flex-col gap-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-paper-dim">Guides & Topics</span>
              {TOPIC_LINKS.map((topic) => (
                <Link
                  key={topic.to}
                  to={topic.to}
                  className="text-xs text-mute transition-colors hover:text-paper"
                >
                  {topic.label}
                </Link>
              ))}
              <Link to="/resources" className="text-xs font-medium text-signal hover:underline">
                View all 10 guides →
              </Link>
            </nav>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-paper-dim">Platforms</span>
              <span className="text-sm text-mute">YouTube</span>
              <span className="text-sm text-mute">TikTok</span>
              <span className="text-sm text-mute">Instagram</span>
              <span className="text-sm text-mute">Meta Reels</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} white mask content. All rights reserved.</span>
          <span>$0 setup. No contracts. Cancel anytime.</span>
        </div>
      </div>
    </footer>
  );
}