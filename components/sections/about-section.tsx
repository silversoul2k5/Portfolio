"use client";

import { CircuitBoard, Code2, Cpu, Sparkles } from "lucide-react";
import Image from "next/image";

import { aboutHighlights } from "@/lib/portfolio-data";

import { SectionHeading } from "../ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "../ui/reveal";

const floatingIcons = [
  { icon: Cpu, label: "Embedded", className: "left-5 top-6" },
  { icon: Code2, label: "Frontend", className: "right-6 top-20" },
  { icon: CircuitBoard, label: "Hardware", className: "left-10 bottom-10" },
  { icon: Sparkles, label: "Creative", className: "right-12 bottom-8" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineering practical systems with a premium product eye."
            description="I am an Electrical and Electronics Engineering student passionate about embedded systems, modern web development, AI-driven projects, and system optimization. I enjoy building practical hardware-software solutions using Arduino, ESP32, Python, and web technologies. I also experiment with Android system optimization, custom ROM development, and interactive UI/UX experiences."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_40%)]" />
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/44">
                    What drives me
                  </p>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
                    I like things that work elegantly in the real world.
                  </h3>
                  <p className="text-base leading-8 text-white/58">
                    Whether it&apos;s an embedded prototype, an AI workflow, or a
                    highly polished website, I care about systems feeling smooth,
                    intentional, and useful from the inside out.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/42">
                      Current direction
                    </div>
                    <div className="mt-4 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                      Embedded x AI x Motion UI
                    </div>
                  </div>
                  <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.28em] text-white/42">
                      Experimental side
                    </div>
                    <div className="mt-4 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                      Android ROMs and system tuning
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/28">
                  <div className="grid gap-0 sm:grid-cols-[0.82fr_1.18fr]">
                    <div className="relative min-h-72 overflow-hidden">
                      <Image
                        src="/images/profile-secondary.jpg"
                        alt="Arjun C secondary profile portrait"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-7">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                        Personal edge
                      </p>
                      <h4 className="font-display text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl">
                        Discipline from training carries over into how I build.
                      </h4>
                      <p className="text-sm leading-7 text-white/56">
                        The same consistency I bring to workouts shows up in how
                        I iterate on hardware, polish interfaces, and push
                        projects toward a cleaner final result.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {floatingIcons.map(({ icon: Icon, label, className }) => (
                <div
                  key={label}
                  className={`absolute ${className} hidden items-center gap-2 rounded-full border border-white/10 bg-black/42 px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-white/56 backdrop-blur-xl md:flex`}
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-300" />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>

          <Stagger className="relative pl-8 sm:pl-10">
            <div className="absolute left-0 top-2 h-[calc(100%-0.75rem)] w-px bg-gradient-to-b from-cyan-300/60 via-white/12 to-transparent" />
            {aboutHighlights.map((item, index) => (
              <StaggerItem key={item.title} className="relative pb-8 last:pb-0">
                <div className="absolute -left-[2.1rem] top-6 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/12 text-[10px] uppercase tracking-[0.2em] text-cyan-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="glass-panel rounded-[30px] p-6 sm:p-7">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Focus area
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/56">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/52"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
