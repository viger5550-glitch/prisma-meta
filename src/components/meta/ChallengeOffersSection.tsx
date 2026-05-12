"use client";

import { useState } from "react";

import { ChallengeDetailModal, type ChallengeDetail } from "./ChallengeDetailModal";
import { ManifestAuthorHub } from "./ManifestAuthorHub";
import { ManifestOfferCard, type ManifestOfferCardProps } from "./ManifestOfferCard";
import { RadialCardsLayout, type RadialLayoutItem } from "./RadialCardsLayout";
import { cardRotationDegForAzimuth, HEX_AZIMUTHS_DEG } from "./hexagonLayout";
import hoverStyles from "./manifestRadialHoverScale.module.css";

export type ChallengeOfferCard = ManifestOfferCardProps & {
  /** Если задано — кнопка MORE открывает модалку, а не href */
  detail?: ChallengeDetail;
};

type ChallengeOffersSectionProps = {
  cards: ChallengeOfferCard[];
  centerLabel?: string;
  centerHref?: string;
  centerDetail?: ChallengeDetail;
  radiusPx?: number;
};

export function ChallengeOffersSection({
  cards,
  centerLabel = "ОБ АВТОРЕ",
  centerHref = "/about",
  centerDetail,
  radiusPx = 290,
}: ChallengeOffersSectionProps) {
  const [activeDetail, setActiveDetail] = useState<ChallengeDetail | null>(null);

  const cardReach = Math.hypot(170 / 2, 250 / 2);
  const boxSize = Math.ceil(2 * (radiusPx + cardReach) + 24);

  const radialCards: RadialLayoutItem<ChallengeOfferCard>[] = HEX_AZIMUTHS_DEG.map((azimuthDeg, i) => ({
    id: `hex-${azimuthDeg}`,
    angleDeg: azimuthDeg,
    rotationDeg: cardRotationDegForAzimuth(azimuthDeg),
    data: cards[i]!,
  }));

  const renderCard = (data: ChallengeOfferCard) => {
    const { detail, ...cardProps } = data;
    return (
      <ManifestOfferCard
        {...cardProps}
        onMore={detail ? () => setActiveDetail(detail) : undefined}
      />
    );
  };

  const center = centerDetail ? (
    <div className={`relative z-[15] hover:z-[45] ${hoverStyles.scaleWrap}`}>
      <button
        type="button"
        onClick={() => setActiveDetail(centerDetail)}
        className="box-border flex size-[220px] shrink-0 items-center justify-center rounded-full border border-[rgb(198_198_198)] bg-black p-4 font-sans text-white shadow-[0_20px_40px_rgba(26,28,28,0.22)]"
        aria-label={centerLabel}
      >
        <span className="block text-center text-[11px] font-medium uppercase leading-tight tracking-[0.24em]">
          {centerLabel}
        </span>
      </button>
    </div>
  ) : (
    <ManifestAuthorHub label={centerLabel} href={centerHref} />
  );

  return (
    <>
      <section className="bg-[#F2F2F2]">
        <div className="mx-auto box-border w-full max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[160px]">
          <RadialCardsLayout
            items={radialCards}
            radiusPx={radiusPx}
            center={center}
            style={{
              width: `min(${boxSize}px, 92vmin, 920px)`,
              height: `min(${boxSize}px, 92vmin, 920px)`,
            }}
            renderCard={(item) => renderCard(item.data)}
          />

          <div className="flex flex-col items-center gap-10 lg:hidden">
            {center}
            <div className="grid w-full max-w-[380px] grid-cols-1 gap-6 sm:grid-cols-2">
              {radialCards.map((item) => (
                <div key={`m-${item.id}`}>{renderCard(item.data)}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChallengeDetailModal
        detail={activeDetail}
        onClose={() => setActiveDetail(null)}
        radialDiagramBoxPx={boxSize}
      />
    </>
  );
}
