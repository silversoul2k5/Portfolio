"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  GitBranch,
  Mail,
  Send,
} from "lucide-react";

import { socials } from "@/lib/portfolio-data";

import { MagneticButton } from "../ui/magnetic-button";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../ui/reveal";

const socialIcons = {
  Email: Mail,
  GitHub: GitBranch,
  LinkedIn: BriefcaseBusiness,
  Instagram: Camera,
};

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:arjunc2k5@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="If the idea is ambitious, that usually makes it more interesting."
            description="I’m open to collaborations, internship opportunities, product conversations, and experimental builds that mix software with systems thinking."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="glass-panel rounded-[34px] p-6 sm:p-8">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Direct line
                </p>
                <a
                  href="mailto:arjunc2k5@gmail.com"
                  className="mt-4 block font-display text-3xl font-semibold tracking-[-0.06em] text-white transition-colors duration-300 hover:text-cyan-200 sm:text-4xl"
                  data-cursor="interactive"
                >
                  arjunc2k5@gmail.com
                </a>
                <p className="mt-4 text-base leading-8 text-white/56">
                  Best for opportunities, collaboration requests, portfolio
                  feedback, or product work.
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {socials.map((social) => {
                  const Icon = socialIcons[social.label as keyof typeof socialIcons];

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5 transition-colors duration-300 hover:border-white/18 hover:bg-white/[0.06]"
                      data-cursor="interactive"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/24">
                          <Icon className="h-5 w-5 text-cyan-200" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-[0.24em] text-white/38">
                            {social.label}
                          </div>
                          <div className="mt-1 text-sm text-white/72">
                            {social.value}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/38 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[28px] border border-cyan-300/14 bg-cyan-300/[0.05] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/62">
                  Current interests
                </p>
                <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                  Motion-rich websites, embedded prototypes, AI tooling, and
                  system-oriented experiments.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="glass-panel rounded-[34px] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/40">
                    Name
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Your name"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition-colors duration-300 placeholder:text-white/26 focus:border-cyan-300/40"
                  />
                </label>
                <label className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/40">
                    Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="you@example.com"
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition-colors duration-300 placeholder:text-white/26 focus:border-cyan-300/40"
                  />
                </label>
              </div>

              <label className="mt-5 block space-y-3">
                <span className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Project Type
                </span>
                <input
                  type="text"
                  value={form.projectType}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      projectType: event.target.value,
                    }))
                  }
                  placeholder="Portfolio, prototype, collaboration, internship..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition-colors duration-300 placeholder:text-white/26 focus:border-cyan-300/40"
                />
              </label>

              <label className="mt-5 block space-y-3">
                <span className="text-xs uppercase tracking-[0.24em] text-white/40">
                  Message
                </span>
                <textarea
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Tell me what you want to build."
                  rows={7}
                  className="w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition-colors duration-300 placeholder:text-white/26 focus:border-cyan-300/40"
                />
              </label>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-7 text-white/42">
                  Submitting opens your default mail client with everything
                  prefilled so you can send the message instantly.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_20px_80px_rgba(255,255,255,0.16)] transition-transform duration-300 hover:-translate-y-0.5"
                    data-cursor="interactive"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                  <MagneticButton href="mailto:arjunc2k5@gmail.com" variant="secondary">
                    Quick Email
                  </MagneticButton>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
