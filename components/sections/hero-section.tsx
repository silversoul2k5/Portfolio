"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, GitBranch, Sparkles } from "lucide-react";
import Image from "next/image";

import { heroStats, techOrbit } from "@/lib/portfolio-data";

import { MagneticButton } from "../ui/magnetic-button";
import { Reveal, Stagger, StaggerItem } from "../ui/reveal";

const floatingBadges = [
  { label: "Embedded Systems", className: "left-0 top-12" },
  { label: "8Bit Framework", className: "right-4 top-0" },
  { label: "System Tuning", className: "right-0 bottom-28" },
  { label: "ROM Experiments", className: "left-6 bottom-8" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-12 pt-32 sm:px-6 lg:pb-20 lg:pt-36"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/52 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Available for internships, collabs, and build-focused work
              </div>
            </Reveal>

            <Stagger className="space-y-8" delay={0.1}>
              <StaggerItem>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.34em] text-white/42">
                    Arjun C
                  </p>
                  <div className="space-y-2">
                    {["EEE Student", "Embedded Systems", "Web Developer"].map(
                      (line) => (
                        <motion.h1
                          key={line}
                          className="font-display text-[clamp(3.5rem,10vw,8.6rem)] font-semibold leading-[0.94] tracking-[-0.09em] text-white"
                          variants={{
                            hidden: { opacity: 0, y: 36 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.95,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            },
                          }}
                        >
                          {line}
                        </motion.h1>
                      ),
                    )}
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg lg:text-xl">
                  Building hardware-software experiences using embedded systems,
                  modern web technologies, AI, and creative engineering.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <MagneticButton
                    href="#projects"
                    className="min-w-[11.5rem] shadow-[0_24px_70px_rgba(255,255,255,0.12)]"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <MagneticButton
                    href="#contact"
                    variant="secondary"
                    className="min-w-[11rem]"
                  >
                    Contact Me
                  </MagneticButton>
                  <MagneticButton
                    href="https://github.com/silversoul2k5"
                    variant="ghost"
                    external
                    className="sm:min-w-[11rem]"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </MagneticButton>
                </div>
              </StaggerItem>
            </Stagger>

            <Stagger className="grid gap-4 sm:grid-cols-3" delay={0.3}>
              {heroStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="glass-panel rounded-[28px] p-5 sm:p-6">
                    <div className="font-display text-4xl font-semibold tracking-[-0.08em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-white/54">
                      {stat.label}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/46">
                      {stat.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="relative" delay={0.25}>
            <div className="relative mx-auto max-w-[34rem]">
              <div className="absolute inset-x-10 top-10 h-56 rounded-full bg-cyan-400/20 blur-[100px]" />
              <div className="absolute inset-x-20 bottom-10 h-48 rounded-full bg-violet-500/18 blur-[110px]" />

              <motion.div
                className="glass-panel relative overflow-hidden rounded-[36px] p-5 sm:p-6"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -14, 0],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_26%,transparent_70%,rgba(255,255,255,0.05))]" />
                <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/26 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">
                      Based in India
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-white">
                      Arjun C
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/28 bg-emerald-400/12 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-emerald-200">
                    Open to build
                  </div>
                </div>

                <div className="relative mt-6 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
                  <div className="relative grid gap-6 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
                    <div className="space-y-4">
                      <div className="relative aspect-[4/5] min-h-[20rem] overflow-hidden rounded-[26px] border border-white/10 bg-black/30 shadow-[0_18px_60px_rgba(2,6,23,0.45)]">
                        <Image
                          src="/images/profile-main.jpg"
                          alt="Arjun C profile"
                          fill
                          priority
                          unoptimized
                          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 36vw, 320px"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[24px] border border-white/10 bg-black/28 p-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">
                          Build focus
                        </p>
                        <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                          Hardware, motion, and product polish.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {["ESP32", "Arduino", "C++", "Next.js"].map((item, index) => (
                          <div
                            key={item}
                            className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs uppercase tracking-[0.24em] text-white/56"
                            style={{
                              boxShadow:
                                index % 2 === 0
                                  ? "inset 0 0 0 1px rgba(103,232,249,0.08)"
                                  : "inset 0 0 0 1px rgba(139,92,246,0.08)",
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {floatingBadges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className={`absolute ${badge.className} hidden rounded-full border border-white/10 bg-black/46 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/58 backdrop-blur-xl md:block`}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, index % 2 === 0 ? -10 : 10, 0],
                            x: [0, index % 2 === 0 ? 6 : -6, 0],
                          }
                    }
                    transition={{
                      duration: 7 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {badge.label}
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 flex flex-wrap gap-3">
                {techOrbit.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/52 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex justify-center lg:justify-start" delay={0.55}>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/48 backdrop-blur-xl transition-colors duration-300 hover:text-white"
            data-cursor="interactive"
          >
            Scroll to explore
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
