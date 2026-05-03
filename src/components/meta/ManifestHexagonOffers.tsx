import { ManifestAuthorHub } from "./ManifestAuthorHub";
import { ManifestOfferCard, type ManifestOfferCardProps } from "./ManifestOfferCard";
import {
  cardRotationDegForAzimuth,
  HEX_AZIMUTHS_DEG,
  hexPixelOffsets,
} from "./hexagonLayout";

const PRODUCTODELS_URL = "https://productodels.figma.site/";
const TELEGRAM_URL = "https://t.me/vigerman";
const CAL_MENTORSHIP = "https://cal.com/vika-german/консультация";

/** Контент карточек в том же порядке, что и `HEX_AZIMUTHS_DEG` */
const HEX_CARD_PROPS: ManifestOfferCardProps[] = [
  {
    variant: "dark",
    titlePrimary: "ГРУППОВОЙ ТРЕК",
    titleSecondary: "COMMUNITY",
    priceAmount: "35k",
    pricePeriod: "/3mo",
    moreHref: PRODUCTODELS_URL,
  },
  {
    variant: "light",
    titlePrimary: "ПЕРСОНАЛЬНЫЙ ТРЕК",
    titleSecondary: "MENTORSHIP",
    priceAmount: "60k",
    pricePeriod: "/3mo",
    moreHref: CAL_MENTORSHIP,
  },
  {
    variant: "dark",
    titlePrimary: "TRIZ design solution",
    titleSecondary: "",
    priceAmount: "2k",
    pricePeriod: "/test",
    moreHref: PRODUCTODELS_URL,
  },
  {
    variant: "light",
    titlePrimary: "БАЗА ЗНАНИЙ",
    titleSecondary: "KNOWLEDGE",
    priceAmount: "5k",
    pricePeriod: "/3mo",
    moreHref: "/kb",
  },
  {
    variant: "dark",
    titlePrimary: "ЗАКРЫТЫЙ КАНАЛ",
    titleSecondary: "COMMUNITY",
    priceAmount: "1k",
    pricePeriod: "/mo",
    moreHref: TELEGRAM_URL,
  },
  {
    variant: "light",
    titlePrimary: "СОЛО ТРЕК",
    titleSecondary: "GAME",
    priceAmount: "5k",
    pricePeriod: "/2mo",
    moreHref: PRODUCTODELS_URL,
  },
];

const HEX_CARDS = HEX_AZIMUTHS_DEG.map((azimuthDeg, i) => ({
    azimuthDeg,
    props: HEX_CARD_PROPS[i]!,
  }));

type ManifestHexagonOffersProps = {
  /** Радиус R: расстояние от центра композиции до центра каждой карточки */
  radiusPx?: number;
};

export function ManifestHexagonOffers({ radiusPx = 290 }: ManifestHexagonOffersProps) {
  const cardReach = Math.hypot(170 / 2, 250 / 2);
  const boxSize = Math.ceil(2 * (radiusPx + cardReach) + 24);

  return (
    <section className="bg-[#F2F2F2]">
      <div className="mx-auto box-border w-full max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[160px]">
        {/* Десктоп: шестиугольник по окружности; центр (0,0) — середина квадрата */}
        <div
          className="relative mx-auto hidden aspect-square lg:block"
          style={{
            width: `min(${boxSize}px, 92vmin, 920px)`,
            height: `min(${boxSize}px, 92vmin, 920px)`,
          }}
        >
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <ManifestAuthorHub />
          </div>

          {HEX_CARDS.map(({ azimuthDeg, props }) => {
            const { x, y } = hexPixelOffsets(azimuthDeg, radiusPx);
            const rot = cardRotationDegForAzimuth(azimuthDeg);
            return (
              <div
                key={azimuthDeg}
                className="absolute left-1/2 top-1/2 z-[5] hover:z-[35]"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rot}deg)`,
                }}
              >
                <ManifestOfferCard {...props} />
              </div>
            );
          })}
        </div>

        {/* Узкие экраны: сетка без геометрического шестиугольника */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <ManifestAuthorHub />
          <div className="grid w-full max-w-[380px] grid-cols-1 gap-6 sm:grid-cols-2">
            {HEX_CARDS.map(({ azimuthDeg, props }) => (
              <ManifestOfferCard key={`m-${azimuthDeg}`} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
