"use client";

import {
  Code2,
  Cpu,
  MonitorSmartphone,
  Palette,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import { skillCategories } from "@/lib/portfolio-data";

import { SectionHeading } from "../ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "../ui/reveal";

const icons = {
  programming: Code2,
  embedded: Cpu,
  development: MonitorSmartphone,
  tools: Wrench,
  creative: Palette,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A stack that moves between code, circuits, and creative execution."
            description="These are the tools and disciplines I keep returning to when building polished interfaces, practical hardware systems, and experimental product ideas."
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = icons[category.id as keyof typeof icons];

            return (
              <StaggerItem key={category.id}>
                <div className="glass-panel group h-full rounded-[32px] p-6 transition-transform duration-500 hover:-translate-y-1.5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]"
                        style={{
                          boxShadow: `0 0 0 1px ${category.accent}18 inset, 0 0 40px ${category.accent}18`,
                        }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: category.accent }}
                        />
                      </div>
                      <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/28 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/46">
                      {category.skills.length} Skills
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/56">
                    {category.description}
                  </p>

                  <div className="mt-8 space-y-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-4 text-sm">
                          <span className="text-white/72">{skill.name}</span>
                          <span className="text-white/38">{skill.level}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${category.accent}, rgba(255,255,255,0.82))`,
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{
                              duration: 1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
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
