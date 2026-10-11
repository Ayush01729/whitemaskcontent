import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Video, Menu, X, Sparkles, ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "../lib/content";
import { Button } from "./ui/button";
import { Logo } from "./logo";

export function Navbar({ onOpenClaim }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Top Announcement Bar ── */}
      <div className="relative z-50 flex items-center justify-center gap-2 border-b border-line-subtle bg-ink-deep/95 px-4 py-2 text-center text-xs text-mute backdrop-blur-md">
        <span className="flex h-2 w-2 rounded-full bg-wave animate-pulse" />
        <span className="font-semibold text-paper">
          Special Founder Access: <strong className="text-wave">First 3 AI videos free</strong> for your product.
        </span>
        <span className="hidden sm:inline text-mute">We revert in 24h • No card required.</span>
        <button
          type="button"
          onClick={onOpenClaim}
          className="ml-2 inline-flex items-center gap-1 font-semibold text-signal hover:underline"
        >
          Claim 3 videos <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      {/* ── Main Navigation Header ── */}
      <header className="sticky top-0 z-40 px-4 py-3 sm:px-6">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full transition-all duration-300 ${
            scrolled || mobileMenuOpen
              ? "glass-panel px-5 py-2.5 shadow-2xl shadow-black/70"
              : "border border-transparent bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-paper transition-opacity hover:opacity-90"
          >
            <Logo />
            <span>white mask content</span>
            <span className="hidden rounded-full border border-signal/30 bg-signal/15 px-2 py-0.5 text-xs font-bold text-signal uppercase tracking-wider sm:inline-block">
              AI for Brands
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            <a href="/#how-it-works" className="text-xs font-semibold text-mute hover:text-paper transition-colors">
              How It Works
            </a>
            <a href="/#hybrid-studio" className="text-xs font-semibold text-mute hover:text-paper transition-colors">
              Hybrid Studio
            </a>
            <a href="/#reach-calculator" className="text-xs font-semibold text-mute hover:text-paper transition-colors">
              ROI Calculator
            </a>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs font-semibold transition-colors duration-200 ${
                    isActive ? "text-paper" : "text-mute hover:text-paper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2.5">
            <Button
              type="button"
              onClick={onOpenClaim}
              size="sm"
              className="hidden h-9 rounded-full px-4 text-xs font-semibold shadow-md shadow-signal/20 sm:inline-flex"
            >
              <Video className="h-3.5 w-3.5 mr-1" />
              Get 3 Free Videos
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-subtle bg-panel/70 text-paper transition-colors hover:bg-panel md:hidden"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Navigation Drawer Overlay ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass-panel fixed inset-x-4 top-24 z-50 rounded-3xl p-6 shadow-2xl md:hidden"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
                <a
                  href="/#how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-paper-dim hover:bg-panel/50 hover:text-paper"
                >
                  How It Works
                </a>
                <a
                  href="/#hybrid-studio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-paper-dim hover:bg-panel/50 hover:text-paper"
                >
                  Hybrid Studio (Faceless vs AI Presenters)
                </a>
                <a
                  href="/#reach-calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-paper-dim hover:bg-panel/50 hover:text-paper"
                >
                  Reach & ROI Calculator
                </a>

                <div className="my-1 border-t border-line-subtle" />

                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-signal/15 text-signal"
                          : "text-paper-dim hover:bg-panel/50 hover:text-paper"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="pt-3">
                  <Button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenClaim();
                    }}
                    className="w-full h-11 text-sm font-semibold"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Get 3 Free Videos (No Card Required)
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1 text-xs text-mute">
                  <ShieldCheck className="h-3.5 w-3.5 text-wave" />
                  <span>We review your brand & revert in 24 hours</span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
