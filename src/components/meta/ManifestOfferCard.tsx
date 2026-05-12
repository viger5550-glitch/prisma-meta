"use client";

import Link from "next/link";

import styles from "./manifestRadialHoverScale.module.css";

const serif = { fontFamily: "var(--font-lora), ui-serif, Georgia, serif" } as const;

export type ManifestOfferCardProps = {
  /** Тёмная (чёрная) или светлая (белая) заливка; типографика и кнопка зеркалятся */
  variant: "dark" | "light";
  titlePrimary: string;
  titleSecondary: string;
  priceAmount: string;
  pricePeriod: string;
  moreHref?: string;
  hidePrice?: boolean;
  /** Если передано — кнопка MORE становится button и вызывает обработчик вместо перехода */
  onMore?: () => void;
};

/**
 * Карточка оффера по макету Figma: 170×250, padding 24, колонка space-between,
 * заголовки sans caps, сумма serif + период sans, MORE на всю ширину контента.
 */
export function ManifestOfferCard({
  variant,
  titlePrimary,
  titleSecondary,
  priceAmount,
  pricePeriod,
  moreHref,
  hidePrice = false,
  onMore,
}: ManifestOfferCardProps) {
  const isDark = variant === "dark";

  const shell = isDark
    ? "bg-black text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
    : "border border-black/[0.06] bg-white text-black shadow-[0_8px_28px_rgba(0,0,0,0.08)]";

  const titlePrimaryCls = isDark ? "text-white" : "text-black";
  const titleSecondaryCls = isDark ? "text-white/85" : "text-zinc-500";
  const periodCls = isDark ? "text-white/90" : "text-black/80";
  const amountCls = isDark ? "text-white" : "text-black";

  const moreSurface = isDark
    ? "bg-white text-black hover:bg-zinc-100"
    : "bg-black text-white hover:bg-zinc-900";

  return (
    <div className={styles.scaleWrap}>
      <article
        className={`box-border flex h-[250px] w-[170px] flex-col justify-between rounded-[2px] p-6 ${shell}`}
      >
        <div className="flex w-full flex-col items-start text-left">
          <p
            className={`w-full text-[10px] font-medium uppercase leading-[1.25] tracking-[0.16em] ${titlePrimaryCls}`}
          >
            {titlePrimary}
          </p>
          {titleSecondary ? (
            <p
              className={`mt-1 w-full whitespace-pre-line text-[9px] font-medium uppercase leading-[1.25] tracking-[0.2em] ${titleSecondaryCls}`}
            >
              {titleSecondary}
            </p>
          ) : null}
        </div>

        <div className="flex w-full flex-1 flex-col items-center justify-center">
          {!hidePrice ? (
            <p className={`flex items-baseline justify-center gap-1 ${amountCls}`}>
              <span className="text-[30px] font-normal leading-none tracking-tight" style={serif}>
                {priceAmount}
              </span>
              <span className={`text-[11px] font-normal leading-none tracking-wide ${periodCls}`}>
                {pricePeriod}
              </span>
            </p>
          ) : null}
        </div>

        {onMore ? (
          <button
            type="button"
            onClick={onMore}
            className={`flex h-9 w-full items-center justify-center text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${moreSurface}`}
          >
            MORE
          </button>
        ) : moreHref ? (
          <Link
            href={moreHref}
            target={moreHref.startsWith("/") ? undefined : "_blank"}
            rel={moreHref.startsWith("/") ? undefined : "noopener noreferrer"}
            className={`flex h-9 w-full items-center justify-center text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${moreSurface}`}
          >
            MORE
          </Link>
        ) : null}
      </article>
    </div>
  );
}
