import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { StaggerItem } from "./ui/reveal";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { usePlanModal } from "../context/plan-modal-context";

export function PricingCard({ tier }) {
  const { openPlanModal } = usePlanModal();
  const highlighted = tier.badge === "Most popular";

  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex h-full flex-col rounded-3xl border p-6",
          highlighted ? "border-signal/50 bg-panel-raised" : "border-line bg-panel"
        )}
      >
        {tier.badge && (
          <span
            className={cn(
              "mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs",
              highlighted ? "bg-signal text-paper" : "bg-wave/15 text-wave"
            )}
          >
            {tier.badge}
          </span>
        )}

        <h3 className="font-display text-xl font-semibold text-paper">{tier.name}</h3>
        <p className="mt-1 text-sm text-mute">{tier.tagline}</p>

        <div className="mt-5 flex items-baseline gap-1">
          <span className="font-display text-4xl font-semibold text-paper">${tier.price}</span>
          <span className="text-sm text-mute">/mo</span>
        </div>

        <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-paper-dim">
          <p>{tier.longForm}</p>
          <p>{tier.shorts}</p>
          <p>{tier.thumbnails}</p>
        </div>

        <ul className="mt-5 flex-1 space-y-2.5">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-paper-dim">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-wave" />
              {f}
            </li>
          ))}
        </ul>

        <Button
          type="button"
          onClick={() => openPlanModal(tier)}
          variant={highlighted ? "primary" : "outline"}
          className="mt-6 w-full cursor-pointer"
        >
          Start with {tier.name}
        </Button>
      </motion.div>
    </StaggerItem>
  );
}