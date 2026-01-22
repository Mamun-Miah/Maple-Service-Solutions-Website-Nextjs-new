"use client";

import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "framer-motion";

export function ServicesChoreographyV2() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const sweepX = useSpring(useTransform(scrollYProgress, [0, 1], ["-28%", "28%"]), {
    stiffness: 55,
    damping: 18,
  });

  const sweepOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.55, 0.35, 0.22]);

  const blueprintY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "8%"]), {
    stiffness: 40,
    damping: 18,
  });

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.0, 0.05, 0.05, 0.0]);

  const processGlow = useTransform(scrollYProgress, [0.28, 0.46, 0.62], [0, 0.42, 0.12]);
  const vignette = useTransform(scrollYProgress, [0, 0.25, 1], [0.08, 0.18, 0.22]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base soft gradients (consistent with Maple) */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 18% 10%, rgba(79,70,229,0.10), transparent 55%)," +
            "radial-gradient(circle at 82% 16%, rgba(167,139,250,0.10), transparent 55%)," +
            "radial-gradient(circle at 50% 82%, rgba(99,102,241,0.08), transparent 58%)",
        }}
      />

      {/* Blueprint whisper layer (ultra subtle) */}
      <motion.div
        aria-hidden="true"
        style={{ y: blueprintY, opacity: blueprintOpacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.30),transparent_55%)]" />
      </motion.div>

      {/* Diagonal studio light sweep */}
      <motion.div
        aria-hidden="true"
        style={{ x: sweepX, opacity: sweepOpacity }}
        className="absolute -inset-y-40 left-1/2 w-[54vw] -translate-x-1/2 rotate-[18deg] bg-gradient-to-r from-white/0 via-white/14 to-white/0 blur-2xl"
      />

      {/* Process glow (mid-page) - reduced intensity */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: processGlow }}
        className="absolute -inset-x-24 top-[48%] h-[420px] rounded-[999px] bg-gradient-to-r from-indigo-500/0 via-violet-400/8 to-indigo-500/0 blur-3xl"
      />

      {/* Vignette for readability - reduced opacity */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: vignette }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_60%,rgba(0,0,0,0.25)_100%)]"
      />
    </div>
  );
}
