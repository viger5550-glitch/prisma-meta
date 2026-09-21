export type HomeOfferCategory = "products" | "outsource";
export type HomeOfferFilter = "all" | HomeOfferCategory;

export type HomeOffer = {
  id: string;
  category: HomeOfferCategory;
  variant: "dark" | "light";
  title: string;
  subtitle: string;
  description: string;
  actionLabel: string;
  href: string;
  startLabel?: string;
};

export const HOME_FILTERS: { id: HomeOfferFilter; label: string }[] = [
  { id: "all", label: "ВСЕ" },
  { id: "products", label: "ПРОДУКТЫ" },
  { id: "outsource", label: "АУТСОРС" },
];

const KNOWLEDGE_URL = "https://www.prisma-knowledge.ru/";

export const HOME_OFFERS: HomeOffer[] = [
  {
    id: "challenge",
    category: "products",
    variant: "dark",
    title: "Кати на prod",
    subtitle: "ИДЕИ НА ПРОД",
    description: "Челлендж по затаскиванию идей на прод",
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
    actionLabel: "MORE",
    href: "/triz",
  },
  {
    id: "knowledge",
    category: "products",
    variant: "dark",
    title: "README",
    subtitle: "Методология создания продуктов для экспертов и солофаундеров",
    description: "Основана на реальных событиях",
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
    actionLabel: "MORE",
    href: "/apps",
  },
];

/** Какие карточки показывает каждый тег. */
export const HOME_FILTER_OFFER_IDS: Record<
  Exclude<HomeOfferFilter, "all">,
  readonly HomeOffer["id"][]
> = {
  products: ["challenge", "triz", "knowledge"],
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
