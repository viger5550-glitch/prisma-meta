export type HomeOfferCategory = "community" | "products" | "outsource";
export type HomeOfferFilter = "all" | HomeOfferCategory;

export type HomeOffer = {
  id: string;
  category: HomeOfferCategory;
  variant: "dark" | "light";
  title: string;
  subtitle: string;
  description: string;
  priceAmount: string;
  pricePeriod: string;
  actionLabel: string;
  href: string;
  startLabel?: string;
};

export const HOME_FILTERS: { id: HomeOfferFilter; label: string }[] = [
  { id: "all", label: "ВСЕ" },
  { id: "community", label: "КОМЬЮНИТИ" },
  { id: "products", label: "ПРОДУКТЫ" },
  { id: "outsource", label: "АУТСОРС" },
];

const KNOWLEDGE_URL = "https://www.prisma-knowledge.ru/";

export const HOME_OFFERS: HomeOffer[] = [
  {
    id: "challenge",
    category: "community",
    variant: "dark",
    title: "CHALLENGE",
    subtitle: "ИДЕИ НА ПРОД",
    description: "Челлендж по затаскиванию идей на прод",
    priceAmount: "30k",
    pricePeriod: "/3mo",
    actionLabel: "MORE",
    href: "/challenge",
    startLabel: "Старт 21.09.26",
  },
  {
    id: "triz",
    category: "products",
    variant: "light",
    title: "AI AGENTS",
    subtitle: "ТРИЗ-РЕШАТЕЛИ",
    description: "AI ассистенты разбирают продуктовый кейс по ТРИЗ",
    priceAmount: "1.9k",
    pricePeriod: "₽ /донат",
    actionLabel: "MORE",
    href: "/triz",
  },
  {
    id: "knowledge",
    category: "products",
    variant: "dark",
    title: "STORY BOOK",
    subtitle: "БАЗА ЗНАНИЙ",
    description: "Основана на реальных событиях",
    priceAmount: "5k",
    pricePeriod: "/6 mo",
    actionLabel: "MORE",
    href: KNOWLEDGE_URL,
  },
  {
    id: "agents-dev",
    category: "outsource",
    variant: "light",
    title: "AI AGENTS DEV",
    subtitle: "БЕСПЛАТНАЯ СЕССИЯ · 60 МИНУТ",
    description: "Разрабатываю AI агентов под ваши процессы и внедряю под ключ.",
    priceAmount: "30k+",
    pricePeriod: "/session",
    actionLabel: "MORE",
    href: "/agents",
  },
  {
    id: "apps-dev",
    category: "outsource",
    variant: "light",
    title: "APPS DEV",
    subtitle: "БЕСПЛАТНАЯ СЕССИЯ · 60 МИНУТ",
    description: "Разрабатываю приложения и мини аппы: от идеи до прода.",
    priceAmount: "50k+",
    pricePeriod: "/session",
    actionLabel: "MORE",
    href: "/apps",
  },
];

/** Какие карточки показывает каждый тег. */
export const HOME_FILTER_OFFER_IDS: Record<
  Exclude<HomeOfferFilter, "all">,
  readonly HomeOffer["id"][]
> = {
  community: ["challenge"],
  products: ["triz", "knowledge"],
  outsource: ["agents-dev", "apps-dev"],
};

export function filterHomeOffers(
  offers: readonly HomeOffer[],
  filter: HomeOfferFilter,
): HomeOffer[] {
  if (filter === "all") return [...offers];
  const ids = new Set(HOME_FILTER_OFFER_IDS[filter]);
  return offers.filter((offer) => ids.has(offer.id));
}
