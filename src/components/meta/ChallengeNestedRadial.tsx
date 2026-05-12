import Link from "next/link";

import type { ChallengeTrack } from "./challengeTracks";
import { mapChallengeTracksToRadialItems } from "./challengeRadialGeometry";
import hoverStyles from "./manifestRadialHoverScale.module.css";
import { RadialCardsLayout } from "./RadialCardsLayout";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

type ChallengeNestedRadialProps = {
  tracks: ChallengeTrack[];
  activeSlug: string;
};

export function ChallengeNestedRadial({ tracks, activeSlug }: ChallengeNestedRadialProps) {
  const cards = mapChallengeTracksToRadialItems(tracks);

  return (
    <section className="mt-8 bg-[#F2F2F2] p-6 md:p-8">
      <RadialCardsLayout
        items={cards}
        radiusPx={260}
        className="w-[min(720px,92vmin)]"
        style={{ height: "min(720px, 92vmin)" }}
        center={
          <div
            className={`flex size-[160px] items-center justify-center rounded-full border border-[rgb(198_198_198)] bg-black p-4 text-center text-white shadow-[0_20px_40px_rgba(26,28,28,0.22)] ${hoverStyles.scaleWrap}`}
          >
            <p className={`text-[10px] uppercase leading-[1.45] tracking-[0.2em] ${interSans}`}>
              КТО ТАКИЕ ПРОДУКТОВЫЕ АВТОРЫ
            </p>
          </div>
        }
        renderCard={(item, index) => {
          const track = item.data;
          const isActive = track.slug === activeSlug;
          const isDark = index % 2 === 0;
          return (
            <div className={hoverStyles.scaleWrap}>
              <article
                className={`box-border flex h-[230px] w-[160px] flex-col justify-between rounded-[2px] p-5 ${isDark ? "bg-black text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]" : "border border-black/[0.06] bg-white text-black shadow-[0_8px_28px_rgba(0,0,0,0.08)]"} ${isActive ? "ring-1 ring-black/70" : ""}`}
              >
                <div className="flex w-full flex-col items-start text-left">
                  <p
                    className={`w-full text-[10px] font-medium uppercase leading-[1.25] tracking-[0.16em] ${interSans} ${isDark ? "text-white/85" : "text-zinc-500"}`}
                  >
                    {track.label}
                  </p>
                  <p
                    className={`mt-1 w-full text-[10px] font-medium uppercase leading-[1.3] tracking-[0.18em] ${interSans} ${isDark ? "text-white" : "text-black"}`}
                  >
                    {track.teaser}
                  </p>
                </div>

                <Link
                  href={`/challenge/${track.slug}`}
                  className={`flex h-9 w-full items-center justify-center text-[10px] font-medium uppercase tracking-[0.22em] transition-colors ${isDark ? "bg-white text-black hover:bg-zinc-100" : "bg-black text-white hover:bg-zinc-900"}`}
                >
                  MORE
                </Link>
              </article>
            </div>
          );
        }}
      />

      <div className="grid grid-cols-1 gap-6 lg:hidden">
        {tracks.map((track, index) => {
          const isDark = index % 2 === 0;
          const isActive = track.slug === activeSlug;
          return (
            <article
              key={`detail-m-${track.slug}`}
              className={`box-border flex min-h-[220px] flex-col justify-between rounded-[2px] p-6 ${isDark ? "bg-black text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]" : "border border-black/[0.06] bg-white text-black shadow-[0_8px_28px_rgba(0,0,0,0.08)]"} ${isActive ? "ring-1 ring-black/70" : ""}`}
            >
              <div>
                <p
                  className={`text-[10px] font-medium uppercase leading-[1.25] tracking-[0.16em] ${interSans} ${isDark ? "text-white/85" : "text-zinc-500"}`}
                >
                  {track.label}
                </p>
                <h3 className={`mt-1 text-[13px] font-medium uppercase leading-[1.4] tracking-[0.14em] ${interSans}`}>
                  {track.teaser}
                </h3>
              </div>
              <Link
                href={`/challenge/${track.slug}`}
                className={`mt-6 flex h-10 items-center justify-center text-[10px] font-medium uppercase tracking-[0.22em] ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
              >
                MORE
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
