"use client";

import Image from "next/image";
import { useEffect } from "react";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export type ChallengeDetailBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "numberedList";
      items: Array<{ text: string; badge?: string }>;
    }
  | { type: "speaker"; name: string; description: string; avatarSrc: string; href?: string };

export type ChallengeDetail = {
  eyebrow?: string;
  title: string;
  blocks: ChallengeDetailBlock[];
  /** Квадратная модалка размером с контейнер радиальной диаграммы (challenge) */
  modalLayout?: "radialCover";
};

type ChallengeDetailModalProps = {
  detail: ChallengeDetail | null;
  onClose: () => void;
  /** Совпадает с boxSize в ChallengeOffersSection / RadialCardsLayout */
  radialDiagramBoxPx?: number;
};

export function ChallengeDetailModal({
  detail,
  onClose,
  radialDiagramBoxPx,
}: ChallengeDetailModalProps) {
  useEffect(() => {
    if (!detail) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [detail, onClose]);

  if (!detail) return null;

  const isRadialCover =
    detail.modalLayout === "radialCover" && radialDiagramBoxPx != null && radialDiagramBoxPx > 0;

  const radialSquareStyle = isRadialCover
    ? ({
        width: `min(${radialDiagramBoxPx}px, 92vmin, 920px)`,
        height: `min(${radialDiagramBoxPx}px, 92vmin, 920px)`,
      } as const)
    : undefined;

  const mobileFullscreen = isRadialCover
    ? "max-sm:!h-[100dvh] max-sm:!w-full max-sm:!max-w-none"
    : "";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 ${
        isRadialCover ? "bg-black/45" : "bg-black/30"
      }`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={
          isRadialCover
            ? `relative box-border overflow-y-auto rounded-none bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.22)] sm:p-10 md:p-12 ${mobileFullscreen}`
            : "relative max-h-[88vh] w-full max-w-[460px] overflow-y-auto bg-white p-6 shadow-[0_30px_60px_rgba(0,0,0,0.18)] sm:p-8 md:p-10"
        }
        style={radialSquareStyle}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={detail.title}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className={`absolute flex h-8 w-8 items-center justify-center text-black/55 transition-colors hover:text-black ${
            isRadialCover ? "right-5 top-5 sm:right-6 sm:top-6" : "right-4 top-4"
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
          </svg>
        </button>

        <h2
          className={`font-serif tracking-[-0.02em] text-black ${
            isRadialCover
              ? "pr-10 text-[40px] leading-[1.02] sm:text-[46px] md:text-[52px]"
              : "text-[36px] leading-[1.05]"
          }`}
        >
          {detail.title}
        </h2>
        {detail.eyebrow ? (
          <p
            className={`mt-7 whitespace-pre-line text-[10px] font-medium uppercase tracking-[0.32em] text-black/35 ${interSans}`}
          >
            {detail.eyebrow}
          </p>
        ) : null}
        <div className={`h-0 border-t border-black/12 ${isRadialCover ? "mt-8 w-32" : "mt-7 w-24"}`} />

        <div
          className={`mt-6 space-y-4 leading-[1.7] text-black/85 ${interSans} ${
            isRadialCover ? "text-[15px] sm:text-[16px]" : "text-[14px]"
          }`}
        >
          {detail.blocks.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p key={`p-${index}`} className="whitespace-pre-line">
                  {block.text}
                </p>
              );
            }
            if (block.type === "numberedList") {
              return (
                <ol key={`ol-${index}`} className="space-y-1.5">
                  {block.items.map((item, i) => (
                    <li key={`oli-${index}-${i}`} className="flex flex-wrap items-baseline gap-x-2">
                      <span>
                        {i + 1}. {item.text}
                      </span>
                      {item.badge ? (
                        <span
                          className={`inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-[1px] text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600 ${interSans}`}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              );
            }
            if (block.type === "speaker") {
              const nameEl = block.href ? (
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-4 hover:opacity-70"
                >
                  {block.name}
                </a>
              ) : (
                <span className="font-medium text-black">{block.name}</span>
              );
              return (
                <div key={`s-${index}`} className="flex items-center gap-3 pt-2">
                  <Image
                    src={block.avatarSrc}
                    alt={block.name}
                    width={40}
                    height={40}
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <p className="text-[14px] leading-[1.5]">
                    {nameEl}
                    {" — "}
                    <span className="text-black/65">{block.description}</span>
                  </p>
                </div>
              );
            }
            return (
              <ul key={`l-${index}`} className="space-y-1.5">
                {block.items.map((item, i) => (
                  <li key={`li-${index}-${i}`}>— {item}</li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
