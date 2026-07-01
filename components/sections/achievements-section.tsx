"use client";

import { Award, BriefcaseBusiness, Cpu, Microscope } from "lucide-react";

import { achievements } from "@/lib/portfolio-data";

import { SectionHeading } from "../ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "../ui/reveal";

const icons = [Award, BriefcaseBusiness, Cpu, Microscope];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Signals that show up beyond the projects themselves."
            description="A few milestones that reflect initiative, technical curiosity, and the willingness to lead or explain complex things clearly."
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];

            return (
              <StaggerItem key={achievement.title}>
                <div className="glass-panel h-full rounded-[30px] p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-6 w-6 text-cyan-200" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.28em] text-white/36">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/56">
                    {achievement.description}
                  </p>
                  <div className="mt-6 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/48">
                    {achievement.detail}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
