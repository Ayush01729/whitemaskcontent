import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, Send, Sparkles, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { usePlanModal } from "../context/plan-modal-context";
import { Button } from "./ui/button";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function PlanModal() {
  const { isOpen, selectedTier, closePlanModal } = usePlanModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
      setErrorMessage("");
      setFormData({ name: "", email: "", requirements: "" });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closePlanModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closePlanModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            user_name: formData.name,
            name: formData.name,
            from_name: formData.name,
            user_email: formData.email,
            email: formData.email,
            from_email: formData.email,
            reply_to: formData.email,
            plan_name: selectedTier?.name || "General Inquiry",
            tier_name: selectedTier?.name || "General Inquiry",
            requirements: formData.requirements || "None provided",
            message: formData.requirements || "None provided",
          },
          PUBLIC_KEY
        );
      } else {
        console.warn(
          "EmailJS credentials missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file."
        );
        // Fallback delay for testing before credentials are added
        await new Promise((r) => setTimeout(r, 600));
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMessage(
        err?.text || "Unable to send request. Please verify your EmailJS keys or try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closePlanModal}
            className="fixed inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-panel-raised p-6 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closePlanModal}
              className="absolute right-5 top-5 rounded-full p-2 text-mute transition-colors hover:bg-line/40 hover:text-paper"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header with Selected Plan Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/15 px-3 py-1 text-xs font-medium text-signal">
                    <Sparkles className="h-3.5 w-3.5" />
                    {selectedTier?.name ? `${selectedTier.name} Plan` : "Get Started"}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-paper">
                  Start with {selectedTier?.name || "White Mask"}
                </h3>
                <p className="mt-1 text-sm text-mute">
                  Fill in your details below and we&apos;ll set up your personalized video production pipeline.
                </p>

                {/* Promise Banner */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-wave/20 bg-wave/10 px-4 py-3 text-wave">
                  <Clock className="h-5 w-5 shrink-0" />
                  <p className="text-xs font-medium sm:text-sm">
                    Our team will contact you in less than 24 hrs.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-medium text-paper-dim">
                      Your Name <span className="text-signal">*</span>
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-paper placeholder:text-mute/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-medium text-paper-dim">
                      Email Address <span className="text-signal">*</span>
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-paper placeholder:text-mute/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="modal-requirements" className="block text-xs font-medium text-paper-dim">
                        Channel Requirements / Niche
                      </label>
                      <span className="text-[11px] text-mute">Optional</span>
                    </div>
                    <textarea
                      id="modal-requirements"
                      rows={3}
                      placeholder="Tell us about your niche (Finance, True Crime, etc.), current channel, or your product..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="mt-1.5 w-full resize-none rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-paper placeholder:text-mute/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
                    />
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-xs text-red-300">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success View */
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wave/15 text-wave">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-paper">
                  Request Received!
                </h3>
                <p className="mt-2 text-sm text-paper-dim">
                  Thank you, <span className="font-semibold text-paper">{formData.name}</span>!
                </p>
                <div className="mt-4 rounded-2xl border border-wave/20 bg-wave/10 p-4 text-sm text-paper-dim">
                  <p className="font-medium text-wave">
                    Our team will contact you in less than 24 hrs.
                  </p>
                  <p className="mt-1 text-xs text-mute">
                    We sent a confirmation note to{" "}
                    <span className="text-paper">{formData.email}</span> regarding your{" "}
                    <span className="text-signal">{selectedTier?.name} Plan</span>.
                  </p>
                </div>

                <div className="mt-6">
                  <Button variant="outline" onClick={closePlanModal} className="w-full">
                    Done
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
