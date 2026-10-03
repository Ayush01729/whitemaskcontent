import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate, useMotionValue } from "framer-motion";
import { Play, TrendingUp, DollarSign } from "lucide-react";

const NICHES_PREVIEW = [
  {
    name: "Finance & Investing",
    media: `${import.meta.env.BASE_URL}finance.mp4`,
  },
  {
    name: "True Crime",
    media: `${import.meta.env.BASE_URL}true_crime.mp4`,
  },
  {
    name: "Stoicism",
    media: `${import.meta.env.BASE_URL}stoicism.mp4`,
  },
  {
    name: "Side Hustles",
    media: `${import.meta.env.BASE_URL}side_hustles.mp4`,
  },
  {
    name: "Technology & AI",
    media: `${import.meta.env.BASE_URL}IT.mp4`,
  },
];

const STAGES = ["Writing the script", "Designing characters", "Generating voiceover", "Rendering the video"];

const LEFT_TAGS = ["Voice matched", "Script locked", "Characters ready", "Scene mapped"];
const RIGHT_TAGS = ["4K render", "Captions added", "Color graded", "Audio mixed"];

const BAR_HEIGHTS = [10, 16, 13, 20, 17, 26, 30];

function useCycle(items, intervalMs) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);
  return [items[index], index];
}

function FloatingTag({ word, className, y }) {
  return (
    <motion.span
      className={className}
      animate={{ y: [0, y, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

function isVideoSource(src) {
  if (typeof src !== "string") return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src) || src.startsWith("data:video/");
}

function GeneratedFrame({ media, image, alt }) {
  const source = media || image;
  const isVideo = isVideoSource(source);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl bg-ink">
      <AnimatePresence mode="wait">
        {isVideo ? (
          <motion.video
            key={source}
            src={source}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <motion.img
            key={source}
            src={source}
            alt={alt || "Preview frame of an AI-generated video"}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/10 to-ink/85" />
      <motion.div
        className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-signal/0 via-signal/25 to-signal/0"
        animate={{ y: ["-120%", "220%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function StatGraphic({ icon: Icon, label, from, to, prefix = "", accent = "wave" }) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(`${prefix}${from.toLocaleString()}`);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => setDisplay(`${prefix}${Math.round(v).toLocaleString()}`));
    const controls = animate(count, to, {
      duration: 9,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, from, to, prefix]);

  const barClass = accent === "signal" ? "bg-signal/70" : "bg-wave/70";
  const iconClass = accent === "signal" ? "text-signal" : "text-wave";

  return (
    <div className="rounded-2xl border border-line bg-panel px-4 py-3.5">
      <div className="flex items-center gap-1.5 text-xs text-mute">
        <Icon className={`h-3.5 w-3.5 ${iconClass}`} />
        {label}
      </div>
      <p className="mt-1 font-display text-lg text-paper">{display}</p>

      <div className="mt-2 flex h-6 items-end gap-1">
        {BAR_HEIGHTS.map((h, i) => (
          <motion.span
            key={i}
            className={`w-1.5 rounded-full ${barClass}`}
            style={{ height: `${h}px` }}
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function VideoGenerationVisual() {
  const [niche] = useCycle(NICHES_PREVIEW, 2400);
  const [stage, stageIndex] = useCycle(STAGES, 2200);
  const [leftTag] = useCycle(LEFT_TAGS, 3000);
  const [rightTag] = useCycle(RIGHT_TAGS, 3400);

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative flex h-[420px] w-full items-center justify-center">
        <motion.div
          className="absolute h-[330px] w-[195px] rounded-2xl border border-line bg-panel-raised"
          style={{ rotate: -11 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.45, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <motion.div
          className="absolute h-[345px] w-[202px] rounded-2xl border border-line bg-panel-raised"
          style={{ rotate: 9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.65, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <motion.div
          className="relative z-10 h-[380px] w-[220px] overflow-hidden rounded-2xl border border-line bg-panel"
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GeneratedFrame media={niche.media || niche.image} alt={niche.name} />

          <div className="absolute left-3 top-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={niche.name}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className="inline-block rounded-full bg-ink/70 px-3 py-1 text-xs text-paper-dim backdrop-blur"
              >
                {niche.name}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Play className="h-5 w-5 text-ink" fill="currentColor" />
            </motion.div>
          </div>

          <div className="absolute inset-x-3 bottom-3">
            <div className="h-1 overflow-hidden rounded-full bg-paper/15">
              <motion.div
                key={stageIndex}
                className="h-full rounded-full bg-signal"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-2 text-[11px] text-paper-dim">
              <AnimatePresence mode="wait">
                <motion.span
                  key={stage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {stage}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <FloatingTag
          word={leftTag}
          y={-8}
          className="absolute -left-4 top-10 z-20 whitespace-nowrap rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-wave"
        />
        <FloatingTag
          word={rightTag}
          y={8}
          className="absolute -right-6 bottom-16 z-20 whitespace-nowrap rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-signal"
        />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <StatGraphic icon={TrendingUp} label="Views this week" from={10000} to={2000000} accent="wave" />
        <StatGraphic icon={DollarSign} label="Revenue this week" prefix="$" from={400} to={86000} accent="signal" />
      </div>
    </div>
  );
}