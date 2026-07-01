import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-white">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
