"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

import { MagneticButton } from "./ui/magnetic-button";

function isElement(section: HTMLElement | null): section is HTMLElement {
  return section !== null;
}

export function SiteHeader() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 28);
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter(isElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active?.target?.id) {
          setActiveSection(`#${active.target.id}`);
        }
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0.16, 0.32, 0.52, 0.72],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-500 sm:px-6",
          scrolled
            ? "border-white/12 bg-black/45 shadow-[0_18px_70px_rgba(2,6,23,0.4)]"
            : "border-white/10 bg-black/22",
        )}
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          data-cursor="interactive"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] font-display text-sm font-semibold text-white">
            AC
          </div>
          <div>
            <div className="font-display text-sm font-semibold tracking-[0.02em] text-white">
              Arjun C
            </div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/42">
              Embedded x Web
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] px-2 py-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors duration-300",
                activeSection === item.href
                  ? "bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "text-white/62 hover:text-white",
              )}
              data-cursor="interactive"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/72"
              data-cursor="interactive"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
          <div className="hidden sm:block">
            <MagneticButton href="#contact" variant="secondary">
              Let&apos;s Talk
            </MagneticButton>
          </div>
        </div>

        <motion.div
          className="absolute inset-x-6 bottom-0 h-px origin-left rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-violet-400/0"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[69] bg-[#030406]/88 px-4 pt-24 backdrop-blur-2xl sm:px-6 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between gap-8 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-6 shadow-[0_30px_100px_rgba(2,6,23,0.46)]"
              initial={{ y: 36, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/40">
                    Navigation
                  </p>
                  <p className="max-w-md font-display text-3xl font-semibold tracking-[-0.07em] text-white">
                    Explore the work, systems, and experiments behind the portfolio.
                  </p>
                </div>

                <nav className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-[24px] border px-5 py-4 text-lg transition-colors duration-300",
                        activeSection === item.href
                          ? "border-cyan-300/20 bg-cyan-300/[0.08] text-white"
                          : "border-white/10 bg-white/[0.03] text-white/72 hover:text-white",
                      )}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{
                        delay: 0.04 * index,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      data-cursor="interactive"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 rounded-[26px] border border-white/10 bg-black/26 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Let&apos;s build something ambitious
                </p>
                <p className="text-sm leading-7 text-white/58">
                  Open to internships, collaborations, and product-heavy builds
                  across embedded systems, modern frontend, and AI workflows.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <MagneticButton
                    href="#projects"
                    variant="secondary"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    View Projects
                  </MagneticButton>
                  <MagneticButton
                    href="#contact"
                    className="w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Me
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
