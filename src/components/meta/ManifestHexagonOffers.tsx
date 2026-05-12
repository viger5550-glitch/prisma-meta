import { ManifestAuthorHub } from "./ManifestAuthorHub";
import { ManifestOfferCard, type ManifestOfferCardProps } from "./ManifestOfferCard";
import { RadialCardsLayout, type RadialLayoutItem } from "./RadialCardsLayout";
import {
  cardRotationDegForAzimuth,
  HEX_AZIMUTHS_DEG,
} from "./hexagonLayout";

const MENTORSHIP_URL = "https://t.me/vigerman";
const TRIZ_URL = "https://aitriz.figma.site/";
const BACKSTAGE_URL = "https://t.me/tribute/app?startapp=sIPX";
const GAME_URL = "https://t.me/zzzzzzz5550bot";
const KNOWLEDGE_PRODUCTODEL_URL = "https://knowledge.productodel.ru/";

/** Контент карточек в том же порядке, что и `HEX_AZIMUTHS_DEG` */
const HEX_CARD_PROPS: ManifestOfferCardProps[] = [
  {
    variant: "dark",
    titlePrimary: "ГРУППОВОЙ ТРЕК",
    titleSecondary: "challenge 4.0",
    priceAmount: "30k",
    pricePeriod: "/3mo",
    moreHref: "/challenge",
    newBadge: true,
  },
  {
    variant: "light",
    titlePrimary: "ПЕРСОНАЛЬНЫЙ ТРЕК",
    titleSecondary: "MENTORSHIP",
    priceAmount: "60k",
    pricePeriod: "/3mo",
    moreHref: MENTORSHIP_URL,
  },
  {
    variant: "dark",
    titlePrimary: "ТРИЗ",
    titleSecondary: "design solution",
    priceAmount: "2k",
    pricePeriod: "/test",
    moreHref: TRIZ_URL,
  },
  {
    variant: "light",
    titlePrimary: "МЕТОДОЛОГИЯ",
    titleSecondary: "KNOWLEDGE",
    priceAmount: "5k",
    pricePeriod: "/3mo",
    moreHref: KNOWLEDGE_PRODUCTODEL_URL,
  },
  {
    variant: "dark",
    titlePrimary: "ЗАКРЫТЫЙ КАНАЛ",
    titleSecondary: "backstage",
    priceAmount: "1k",
    pricePeriod: "/mo",
    moreHref: BACKSTAGE_URL,
  },
  {
    variant: "light",
    titlePrimary: "СОЛО ТРЕК",
    titleSecondary: "GAME",
    priceAmount: "5k",
    pricePeriod: "/2mo",
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
  const sourceCards = cards ?? HEX_CARD_PROPS;
  const radialCards: RadialLayoutItem<ManifestOfferCardProps>[] = HEX_AZIMUTHS_DEG.map((azimuthDeg, i) => ({
    id: `hex-${azimuthDeg}`,
    angleDeg: azimuthDeg,
    rotationDeg: cardRotationDegForAzimuth(azimuthDeg),
    data: sourceCards[i]!,
  }));
  const cardReach = Math.hypot(170 / 2, 250 / 2);
  const boxSize = Math.ceil(2 * (radiusPx + cardReach) + 24);

  return (
    <section className="bg-[#F2F2F2]">
      <div className="mx-auto box-border w-full max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[160px]">
        {/* Десктоп: шестиугольник по окружности; центр (0,0) — середина квадрата */}
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

        {/* Узкие экраны: сетка без геометрического шестиугольника */}
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
