"use client";

import { journey } from "@/lib/portfolio-data";

import { SectionHeading } from "../ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "../ui/reveal";

export function JourneySection() {
  return (
    <section id="journey" className="section-shell px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="The path so far has been equal parts experimentation, systems, and product curiosity."
            description="From studying electrical and electronics engineering to running a startup and exploring ROM optimization, the common thread is building things that feel thoughtful and alive."
          />
        </Reveal>

        <Stagger className="relative mt-16 space-y-6 pl-8 sm:pl-10">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-white/12 to-transparent" />
          {journey.map((item, index) => (
            <StaggerItem key={item.title}>
              <div className="relative">
                <div className="absolute -left-[2.08rem] top-8 h-7 w-7 rounded-full border border-cyan-300/30 bg-cyan-300/12 shadow-[0_0_20px_rgba(103,232,249,0.18)]" />
                <div className="glass-panel rounded-[32px] p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {item.year}
                      </div>
                      <div className="font-display text-2xl font-semibold tracking-[-0.06em] text-white sm:text-3xl">
                        Stage {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-white/56">
                        {item.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
