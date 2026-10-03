import { motion } from "framer-motion";
import { NICHES } from "../lib/content";

export function NicheMarquee() {
  const row = [...NICHES, "170+ more"];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {[...row, ...row].map((niche, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-line bg-panel px-4 py-2 text-sm text-paper-dim"
          >
            {niche}
          </span>
        ))}
      </motion.div>
    </div>
  );
}