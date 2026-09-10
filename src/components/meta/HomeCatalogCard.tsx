import Link from "next/link";

import type { HomeOffer } from "./homeOffers";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const serif = {
  fontFamily: "var(--font-manifest-newsreader), var(--font-serif), ui-serif, Georgia, serif",
} as const;

function CoverPlaceholder({ variant }: { variant: HomeOffer["variant"] }) {
  const stripes =
    variant === "dark"
      ? "bg-[repeating-linear-gradient(-45deg,#141414_0px,#141414_10px,#2a2a2a_10px,#2a2a2a_20px)]"
      : "bg-[repeating-linear-gradient(-45deg,#e6e6e6_0px,#e6e6e6_10px,#f3f3f3_10px,#f3f3f3_20px)]";

  return <div className={`aspect-[4/3] w-full ${stripes}`} />;
}

export function HomeCatalogCard({ offer }: { offer: HomeOffer }) {
  const isDark = offer.variant === "dark";
  const shell = isDark
    ? "bg-black text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
    : "border border-black/[0.06] bg-white text-black shadow-[0_8px_28px_rgba(0,0,0,0.08)]";
  const titleCls = isDark ? "text-white" : "text-[#5B5BD6]";
  const subtitleCls = isDark ? "text-white/85" : "text-[#5B5BD6]";
  const descriptionCls = isDark ? "text-white/75" : "text-zinc-600";
  const periodCls = isDark ? "text-white/80" : "text-black/55";
  const moreSurface = isDark
    ? "bg-white text-black hover:bg-zinc-100"
    : "bg-black text-white hover:bg-zinc-900";
  const external = !offer.href.startsWith("/");

  return (
    <article className={`flex h-full w-full flex-col p-4 ${shell} ${interSans}`}>
      <CoverPlaceholder variant={offer.variant} />

      <div className="mt-4 flex flex-1 flex-col">
        <h3
          className={`min-h-[2.6em] text-[11px] font-medium uppercase leading-[1.3] tracking-[0.14em] ${titleCls}`}
        >
          {offer.title}
        </h3>
        <p
          className={`mt-1 min-h-[2.7em] text-[10px] font-medium uppercase leading-[1.35] tracking-[0.12em] ${subtitleCls}`}
        >
          {offer.subtitle}
        </p>
        <div className="mt-2 flex h-5 items-center">
          {offer.startLabel ? (
            <span
              className="inline-flex rounded-sm px-2 py-0.5 text-[8px] font-semibold uppercase leading-none tracking-[0.14em] text-black"
              style={{ backgroundColor: "#0CDA76" }}
            >
              {offer.startLabel}
            </span>
          ) : null}
        </div>
        <p
          className={`mt-3 line-clamp-3 min-h-[3.9em] text-[12px] font-normal leading-[1.45] ${descriptionCls}`}
        >
          {offer.description}
        </p>

        <div className="mt-auto pt-6">
          <p className="flex h-10 items-end gap-1.5">
            <span
              className="text-[32px] font-normal leading-none tracking-normal [font-variant-numeric:lining-nums_tabular-nums]"
              style={serif}
            >
              {offer.priceAmount}
            </span>
            <span
              className={`mb-[3px] text-[11px] font-normal leading-none tracking-[0.04em] [font-variant-numeric:lining-nums_tabular-nums] ${periodCls}`}
            >
              {offer.pricePeriod}
            </span>
          </p>
          <Link
            href={offer.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`mt-4 flex h-9 w-full items-center justify-center text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${moreSurface}`}
          >
            {offer.actionLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
