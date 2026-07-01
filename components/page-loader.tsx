"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = reduceMotion ? 650 : 1700;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - elapsed) ** 3;
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        frame = window.requestAnimationFrame(tick);
        return;
      }

      window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 180);
    }

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#030406]/95 backdrop-blur-2xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_75%_40%,rgba(139,92,246,0.16),transparent_32%)]" />
          <div className="relative z-10 w-[min(28rem,88vw)] space-y-8 text-center">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.45em] text-white/40">
                Loading Interface
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl">
                Arjun C
              </h1>
            </div>
            <div className="mx-auto h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400"
                animate={{ width: `${progress}%` }}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/36">
              <span>Premium Motion Build</span>
              <span>{String(progress).padStart(2, "0")}</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
