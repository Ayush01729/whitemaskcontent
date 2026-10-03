import { Link } from "react-router-dom";
import { NAV_LINKS } from "../lib/content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-paper">
              <Logo className="h-6 w-6" />
              white mask content
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              Done-for-you faceless video production for creators, startups, and YouTube channels. Scripts to
              posting, handled.
            </p>
          </div>

          <div className="flex gap-10">
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              <span className="text-sm text-paper-dim">Site</span>
              {NAV_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-mute transition-colors hover:text-paper">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-paper-dim">Platforms</span>
              <span className="text-sm text-mute">YouTube</span>
              <span className="text-sm text-mute">TikTok</span>
              <span className="text-sm text-mute">Instagram</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} white mask content. All rights reserved.</span>
          <span>$0 setup. No contracts. Cancel anytime.</span>
        </div>
      </div>
    </footer>
  );
}