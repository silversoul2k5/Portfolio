import { socials } from "@/lib/portfolio-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="font-display text-2xl font-semibold tracking-[-0.06em] text-white">
            Built to feel deliberate.
          </p>
          <p className="max-w-xl text-sm leading-7 text-white/46">
            Designed and developed with Next.js, Tailwind CSS, Framer Motion,
            and a lot of attention to motion, spacing, and visual rhythm.
          </p>
        </div>
        <div className="space-y-2 text-sm text-white/46">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="block transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {social.label}: {social.value}
            </a>
          ))}
          <p>© {year} Arjun C. Built with motion and systems thinking.</p>
        </div>
      </div>
    </footer>
  );
}
