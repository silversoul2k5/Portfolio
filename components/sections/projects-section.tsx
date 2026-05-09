"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";

import { projects } from "@/lib/portfolio-data";

import { ProjectPreview } from "../project-preview";
import { MagneticButton } from "../ui/magnetic-button";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="A premium reel of work across interfaces, intelligence, and embedded thinking."
            description="This section is built like a horizontal showcase so the projects feel curated instead of stacked. Each card carries its own visual identity, motion language, and project context."
          />
        </Reveal>

        <div className="mt-10 flex items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">
            Scroll horizontally to browse
          </p>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/46 sm:block">
            Featured builds from web, embedded systems, mobile concepts, and automation
          </div>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="project-rail flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="glass-panel group min-w-[min(85vw,34rem)] snap-start rounded-[34px] p-5 sm:p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -10 }}
              >
                <div className="relative aspect-[16/13] overflow-hidden rounded-[30px]">
                  <ProjectPreview
                    title={project.title}
                    preview={project.preview}
                    images={project.images}
                    mediaLayout={project.mediaLayout}
                    colors={project.colors}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                      {project.status}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/48">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 text-base leading-8 text-white/56">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/52"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <MagneticButton
                    href={project.githubUrl}
                    variant="secondary"
                    external
                    className="sm:flex-1"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </MagneticButton>
                  {project.liveUrl ? (
                    <MagneticButton
                      href={project.liveUrl}
                      external
                      className="sm:flex-1"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </MagneticButton>
                  ) : (
                    <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium tracking-[0.02em] text-white/38 sm:flex-1">
                      Preview Soon
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
