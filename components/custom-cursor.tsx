"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useEffectEvent, useState } from "react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useSpring(-120, { stiffness: 320, damping: 28, mass: 0.4 });
  const y = useSpring(-120, { stiffness: 320, damping: 28, mass: 0.4 });
  const glowX = useSpring(-120, { stiffness: 90, damping: 20, mass: 1 });
  const glowY = useSpring(-120, { stiffness: 90, damping: 20, mass: 1 });

  const handlePointerMove = useEffectEvent((event: PointerEvent) => {
    x.set(event.clientX);
    y.set(event.clientY);
    glowX.set(event.clientX);
    glowY.set(event.clientY);
  });

  const handlePointerState = useEffectEvent((event: Event) => {
    const target = event.target as HTMLElement | null;
    const isInteractive = Boolean(
      target?.closest(
        "a, button, input, textarea, select, [data-cursor='interactive']",
      ),
    );

    setInteractive(isInteractive);
  });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);
    const update = () => setEnabled(media.matches);
    update();

    media.addEventListener("change", update);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerover", handlePointerState, true);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerState, true);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [reduceMotion]);

  if (!enabled || reduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <motion.div
        className="absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.22),rgba(59,130,246,0.15),rgba(139,92,246,0.02)_72%)] blur-3xl"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: pressed ? 0.82 : interactive ? 1.12 : 1,
          opacity: interactive ? 0.42 : 0.2,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 24 }}
      />
      <motion.div
        className="absolute h-9 w-9 rounded-full border border-white/30 bg-white/[0.03] backdrop-blur-xl"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: pressed ? 0.72 : interactive ? 1.45 : 1,
          borderColor: interactive
            ? "rgba(255,255,255,0.68)"
            : "rgba(255,255,255,0.28)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      />
      <motion.div
        className="absolute h-2.5 w-2.5 rounded-full bg-white"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: pressed ? 0.6 : 1, opacity: interactive ? 0.9 : 0.7 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      />
    </div>
  );
}
