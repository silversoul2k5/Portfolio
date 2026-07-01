"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type {
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variants = {
  primary:
    "border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#dff7ff_100%)] text-slate-950 shadow-[0_20px_80px_rgba(255,255,255,0.18)] hover:brightness-[0.98]",
  secondary:
    "border border-white/12 bg-white/[0.05] text-white hover:border-white/24 hover:bg-white/[0.08]",
  ghost:
    "border border-white/10 bg-transparent text-white hover:border-white/22 hover:bg-white/[0.04]",
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  external = false,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 });

  function handleMove(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !ref.current) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative inline-flex min-h-[3.35rem] shrink-0 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-medium tracking-[0.02em] transition-colors duration-300",
        variants[variant],
        className,
      )}
      data-cursor="interactive"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        <span className="absolute inset-x-[20%] bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </span>
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-2 whitespace-nowrap",
          variant === "primary" ? "text-slate-950" : "text-current",
        )}
      >
        {children}
      </span>
    </motion.a>
  );
}
