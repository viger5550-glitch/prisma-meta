import { ManifestAuthorHub } from "./ManifestAuthorHub";
import { ManifestOfferCard, type ManifestOfferCardProps } from "./ManifestOfferCard";
import { RadialCardsLayout, type RadialLayoutItem } from "./RadialCardsLayout";

const BACKSTAGE_URL = "https://t.me/tribute/app?startapp=sIPX";
const GAME_URL = "https://t.me/zzzzzzz5550bot";

/**
 * Раскладка четырёх карточек по сторонам света (top, right, bottom, left).
 * Центр композиции: (0, 0); ось X — вправо, ось Y — вниз (как в CSS).
 *
 *   top    = (0, −R) → θ = −90°
 *   right  = (R,  0) → θ =   0°
 *   bottom = (0,  R) → θ =  90°
 *   left   = (−R, 0) → θ = 180°
 *
 * Все карточки рисуются без поворота, чтобы текст читался слева направо.
 */
const CROSS_AZIMUTHS_DEG = [-90, 0, 90, 180] as const;

/** Контент карточек в том же порядке, что и `CROSS_AZIMUTHS_DEG`: top → right → bottom → left. */
const CROSS_CARD_PROPS: ManifestOfferCardProps[] = [
  {
    variant: "dark",
    titlePrimary: "ГРУППОВОЙ ТРЕК",
    titleSecondary: "challenge 4.0",
    priceAmount: "30k",
    pricePeriod: "/3mo",
    moreHref: "/challenge",
    startLabel: "Старт 25.05.2026",
  },
  {
    variant: "light",
    titlePrimary: "1-1 ТРЕК",
    titleSecondary: "MENTORSHIP",
    priceAmount: "80k",
    pricePeriod: "/3mo",
    moreHref: "/mentorship",
  },
  {
    variant: "dark",
    titlePrimary: "БЕКСТЕЙДЖ ТРЕК",
    titleSecondary: "Закрытый канал с отчётами челленджа",
    priceAmount: "3k",
    pricePeriod: "/3mo",
    moreHref: BACKSTAGE_URL,
  },
  {
    variant: "light",
    titlePrimary: "СОЛО ТРЕК",
    titleSecondary: "GAME",
    priceAmount: "3k",
    pricePeriod: "/3mo",
    moreHref: GAME_URL,
  },
];

type ManifestHexagonOffersProps = {
  /** Радиус R: расстояние от центра композиции до центра каждой карточки */
  radiusPx?: number;
  cards?: ManifestOfferCardProps[];
  centerLabel?: string;
  centerHref?: string;
};

export function ManifestHexagonOffers({
  radiusPx = 290,
  cards,
  centerLabel = "ОБ АВТОРЕ",
  centerHref = "/about",
}: ManifestHexagonOffersProps) {
  const sourceCards = cards ?? CROSS_CARD_PROPS;
  const radialCards: RadialLayoutItem<ManifestOfferCardProps>[] = CROSS_AZIMUTHS_DEG.map(
    (azimuthDeg, i) => ({
      id: `cross-${azimuthDeg}`,
      angleDeg: azimuthDeg,
      rotationDeg: 0,
      data: sourceCards[i]!,
    }),
  );
  const cardReach = Math.hypot(170 / 2, 250 / 2);
  const boxSize = Math.ceil(2 * (radiusPx + cardReach) + 24);

  return (
    <section className="bg-[#F2F2F2]">
      <div className="mx-auto box-border w-full max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[160px]">
        {/* Десктоп: четыре карточки по top/right/bottom/left, центр (0,0) — середина квадрата */}
        <RadialCardsLayout
          items={radialCards}
          radiusPx={radiusPx}
          center={<ManifestAuthorHub label={centerLabel} href={centerHref} />}
          style={{
            width: `min(${boxSize}px, 92vmin, 920px)`,
            height: `min(${boxSize}px, 92vmin, 920px)`,
          }}
          renderCard={(item) => <ManifestOfferCard {...item.data} />}
        />

        {/* Узкие экраны: сетка без геометрической раскладки */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <ManifestAuthorHub label={centerLabel} href={centerHref} />
          <div className="grid w-full max-w-[380px] grid-cols-1 gap-6 sm:grid-cols-2">
            {radialCards.map((item) => (
              <ManifestOfferCard key={`m-${item.id}`} {...item.data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
