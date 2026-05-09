import type { CSSProperties } from "react";
import Image from "next/image";

import type {
  ProjectImage,
  ProjectMediaLayout,
  ProjectPreviewKind,
} from "@/lib/portfolio-data";

type ProjectPreviewProps = {
  title: string;
  preview?: ProjectPreviewKind;
  images?: ProjectImage[];
  mediaLayout?: ProjectMediaLayout;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

function chromeDots(color: string) {
  return (
    <div className="flex items-center gap-1.5">
      {[0.85, 0.65, 0.45].map((opacity) => (
        <span
          key={opacity}
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color, opacity }}
        />
      ))}
    </div>
  );
}

function line(width: string, opacity = 0.42, color = "rgba(255,255,255,0.18)") {
  return (
    <span
      className="block h-2 rounded-full"
      style={{ width, backgroundColor: color, opacity }}
    />
  );
}

function imageFrame({
  src,
  alt,
  contain = false,
}: {
  src: string;
  alt: string;
  contain?: boolean;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-black/34 shadow-[0_16px_50px_rgba(2,6,23,0.34)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_24%,transparent_76%,rgba(255,255,255,0.04))]" />
      <Image
        src={src}
        alt={alt}
        fill
        className={contain ? "object-contain p-3" : "object-cover"}
        sizes="(max-width: 768px) 80vw, 480px"
      />
    </div>
  );
}

function imageShowcase(
  layout: ProjectMediaLayout,
  images: ProjectImage[],
  colors: ProjectPreviewProps["colors"],
) {
  if (layout === "mobile-pair") {
    return (
      <div className="grid h-full gap-4 md:grid-cols-2">
        {images.slice(0, 2).map((image, index) => (
          <div
            key={image.src}
            className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/35 p-3"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  index === 0
                    ? `radial-gradient(circle at top, ${colors.primary}28, transparent 48%)`
                    : `radial-gradient(circle at top, ${colors.secondary}26, transparent 48%)`,
              }}
            />
            {imageFrame({ ...image, contain: true })}
          </div>
        ))}
      </div>
    );
  }

  if (layout === "stacked") {
    return (
      <div className="grid h-full gap-4 grid-rows-[1.15fr_0.85fr]">
        {imageFrame({
          src: images[0]?.src ?? "",
          alt: images[0]?.alt ?? "",
        })}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 3).map((image) => (
            <div key={image.src} className="relative">
              {imageFrame(image)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full gap-4 lg:grid-cols-[0.72fr_1.28fr]">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/35 p-3">
        <div
          className="absolute inset-0 opacity-42"
          style={{
            background: `radial-gradient(circle at top, ${colors.primary}2e, transparent 44%)`,
          }}
        />
        {imageFrame({
          src: images[0]?.src ?? "",
          alt: images[0]?.alt ?? "",
          contain: true,
        })}
      </div>
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/35 p-3">
        {imageFrame({
          src: images[1]?.src ?? images[0]?.src ?? "",
          alt: images[1]?.alt ?? images[0]?.alt ?? "",
        })}
        <div className="absolute inset-x-6 bottom-6 rounded-full border border-white/10 bg-black/45 px-4 py-3 text-[10px] uppercase tracking-[0.26em] text-white/60 backdrop-blur-xl">
          Live hardware + mobile monitoring
        </div>
      </div>
    </div>
  );
}

function previewBody(
  preview: ProjectPreviewKind,
  colors: ProjectPreviewProps["colors"],
) {
  switch (preview) {
    case "web":
      return (
        <>
          <div className="space-y-3 rounded-[22px] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                {line("7rem", 1, colors.primary)}
                {line("10rem")}
              </div>
              <div
                className="h-16 w-16 rounded-2xl border border-white/10"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02))",
                }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"
                >
                  {line("2.5rem", 1, item === 2 ? colors.secondary : colors.primary)}
                  <div className="mt-3 h-16 rounded-xl bg-white/[0.04]" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
            <div className="flex gap-2">
              {["Motion", "Responsive", "Glass UI"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/58"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.28em] text-white/48">
              Launch-ready
            </span>
          </div>
        </>
      );
    case "vision":
      return (
        <>
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <div className="relative h-56 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <div className="absolute inset-6 rounded-[22px] border border-dashed border-white/10" />
              <div
                className="absolute left-8 top-10 h-20 w-28 rounded-2xl border"
                style={{ borderColor: colors.primary }}
              />
              <div
                className="absolute right-10 top-20 h-24 w-24 rounded-full border"
                style={{ borderColor: colors.secondary }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex gap-2">
                {[52, 70, 44, 62].map((height, index) => (
                  <span
                    key={height}
                    className="flex-1 rounded-full"
                    style={{
                      height,
                      background:
                        index % 2 === 0
                          ? `${colors.primary}40`
                          : `${colors.secondary}55`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="space-y-2">
                {line("5rem", 1, colors.primary)}
                {line("7rem")}
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/58">
                Real-time monitoring
              </div>
            </div>
          </div>
          <div className="absolute right-4 top-16 w-40 rounded-[22px] border border-white/12 bg-black/44 p-4 backdrop-blur-xl">
            {line("4rem", 1, colors.secondary)}
            <div className="mt-4 space-y-2">
              {line("100%", 0.35)}
              {line("70%", 0.35)}
              {line("88%", 0.35)}
            </div>
          </div>
        </>
      );
    case "assistant":
      return (
        <>
          <div className="grid h-full gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3 rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
              <div className="flex justify-end">
                <div
                  className="max-w-[70%] rounded-[18px] rounded-br-md px-4 py-3 text-sm text-white/80"
                  style={{ backgroundColor: `${colors.primary}30` }}
                >
                  Intelligent workflows for everyday actions.
                </div>
              </div>
              <div className="max-w-[78%] rounded-[18px] rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/68">
                Automation, orchestration, and contextual responses.
              </div>
              <div className="grid grid-cols-4 gap-2 pt-3">
                {[18, 30, 44, 30].map((height) => (
                  <span
                    key={height}
                    className="rounded-full"
                    style={{
                      height,
                      background: `linear-gradient(180deg, ${colors.primary}, ${colors.secondary})`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <div
                className="absolute inset-x-8 top-8 h-28 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${colors.tertiary}, transparent 72%)`,
                }}
              />
              <div className="relative mx-auto mt-10 h-28 w-28 rounded-full border border-white/12 bg-black/28" />
              <div className="relative mt-10 space-y-2">
                {line("6rem", 1, colors.primary)}
                {line("8rem")}
                {line("5rem")}
              </div>
            </div>
          </div>
        </>
      );
    case "voice":
      return (
        <>
          <div className="relative h-full rounded-[22px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              {chromeDots(colors.primary)}
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/48">
                Voice flow
              </span>
            </div>
            <div className="mt-8 flex items-end justify-center gap-2">
              {[24, 42, 66, 84, 60, 32, 18].map((height, index) => (
                <span
                  key={height}
                  className="w-3 rounded-full"
                  style={{
                    height,
                    background:
                      index === 3
                        ? colors.tertiary
                        : `linear-gradient(180deg, ${colors.primary}, ${colors.secondary})`,
                  }}
                />
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                {line("4rem", 1, colors.primary)}
                <div className="mt-4 h-16 rounded-xl bg-white/[0.04]" />
              </div>
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                {line("5rem", 1, colors.secondary)}
                <div className="mt-4 h-16 rounded-xl bg-white/[0.04]" />
              </div>
            </div>
          </div>
        </>
      );
    case "emotion":
      return (
        <>
          <div className="grid h-full gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
              <div className="relative mx-auto mt-4 h-40 w-40 rounded-full border border-white/12 bg-white/[0.03]">
                <span className="absolute left-10 top-12 h-3 w-3 rounded-full bg-white/72" />
                <span className="absolute right-10 top-12 h-3 w-3 rounded-full bg-white/72" />
                <span
                  className="absolute bottom-12 left-1/2 h-10 w-20 -translate-x-1/2 rounded-b-full border-b-2"
                  style={{ borderColor: colors.primary }}
                />
              </div>
              <div className="mt-6 flex justify-center gap-2">
                {["Focus", "Calm", "Alert"].map((item, index) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/60"
                    style={{
                      backgroundColor:
                        index === 1 ? `${colors.tertiary}18` : "rgba(255,255,255,0.02)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              {[48, 39, 44, 27].map((width, index) => (
                <div key={width} className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/42">
                    <span>Signal {index + 1}</span>
                    <span>{width}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${width}%`,
                        background:
                          index % 2 === 0
                            ? `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`
                            : `linear-gradient(90deg, ${colors.secondary}, ${colors.tertiary})`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    case "crypto":
      return (
        <>
          <div className="rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              {line("6rem", 1, colors.primary)}
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/58">
                BTC / ETH
              </span>
            </div>
            <div className="relative mt-6 h-52 overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_40%)]" />
              <svg
                viewBox="0 0 420 220"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M 0 170 C 42 156 70 66 124 74 C 170 82 188 158 236 144 C 280 132 322 22 370 42 C 392 52 406 76 420 96"
                  stroke={colors.primary}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 194 C 38 186 74 136 126 142 C 176 146 190 198 238 196 C 276 194 312 142 352 132 C 382 124 398 132 420 146"
                  stroke={colors.tertiary}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 right-5 grid w-48 grid-cols-2 gap-3">
            {["24h", "Vol", "Cap", "Trend"].map((item, index) => (
              <div
                key={item}
                className="rounded-[18px] border border-white/10 bg-black/42 p-3 backdrop-blur-xl"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                  {item}
                </div>
                <div
                  className="mt-3 h-2 rounded-full"
                  style={{
                    width: `${58 + index * 8}%`,
                    background:
                      index % 2 === 0 ? colors.primary : colors.secondary,
                  }}
                />
              </div>
            ))}
          </div>
        </>
      );
    case "utility":
      return (
        <>
          <div className="grid h-full gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
              <div
                className="relative mx-auto mt-4 h-40 w-40 rounded-full border"
                style={{ borderColor: `${colors.primary}60` }}
              >
                <div
                  className="absolute inset-6 rounded-full border"
                  style={{ borderColor: `${colors.secondary}70` }}
                />
                <div
                  className="absolute inset-14 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${colors.tertiary}, transparent 72%)`,
                  }}
                />
              </div>
              <div className="mt-8 flex justify-center gap-2">
                {[1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="h-2 w-12 rounded-full"
                    style={{
                      backgroundColor: item === 2 ? colors.primary : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[18px] border border-white/10 bg-black/28 px-4 py-4"
                >
                  <div className="space-y-2">
                    {line(`${4 + item}rem`, 1, item === 2 ? colors.secondary : colors.primary)}
                    {line("5rem")}
                  </div>
                  <div
                    className="h-7 w-14 rounded-full p-1"
                    style={{
                      backgroundColor:
                        item === 2 ? `${colors.primary}30` : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="h-5 w-5 rounded-full"
                      style={{
                        marginLeft: item === 2 ? "auto" : "0",
                        backgroundColor:
                          item === 2 ? colors.primary : "rgba(255,255,255,0.22)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
  }
}

export function ProjectPreview({
  title,
  preview,
  images,
  mediaLayout,
  colors,
}: ProjectPreviewProps) {
  const backgroundStyle: CSSProperties = {
    background: `radial-gradient(circle at 20% 0%, ${colors.primary}26, transparent 32%), radial-gradient(circle at 82% 18%, ${colors.tertiary}1f, transparent 28%), linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02) 32%, rgba(3,6,10,0.8) 100%)`,
  };

  return (
    <div
      className="relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-black/34 p-5 shadow-[0_22px_80px_rgba(2,6,23,0.45)]"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div
          className="float-slow absolute -left-10 top-0 h-36 w-36 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary}55` }}
        />
        <div
          className="float-gentle absolute -right-6 bottom-8 h-32 w-32 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.tertiary}35` }}
        />
      </div>
      <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/34 px-4 py-3 backdrop-blur-xl">
        {chromeDots(colors.primary)}
        <span className="max-w-[60%] truncate text-[10px] uppercase tracking-[0.28em] text-white/46">
          {title}
        </span>
      </div>
      <div className="relative mt-5 h-[calc(100%-4.4rem)]">
        {images && mediaLayout
          ? imageShowcase(mediaLayout, images, colors)
          : preview
            ? previewBody(preview, colors)
            : null}
      </div>
    </div>
  );
}
