/** Контент направления Health tech (макет «PRISMA Health Tech»). */

import type { StudioHeroCard } from "@/components/meta/StudioHeroCards";
import type { StudioCase } from "@/components/meta/studioHome";

export const HEALTH_HERO_CARDS: [StudioHeroCard, StudioHeroCard] = [
  {
    tag: "Companion app · Питание",
    title: "Foody",
    facts: [
      ["Задача", "менять пищевые привычки"],
      ["Формат", "mini app"],
    ],
  },
  {
    tag: "Companion app · Терапия",
    title: "Дневники пациентов",
    facts: [
      ["Задача", "не терять нить между сессиями"],
      ["Формат", "mini app"],
    ],
    live: true,
  },
];

export const HEALTH_WHY: { title: string; text: string; dark?: boolean }[] = [
  {
    title: "Документ не сопровождает",
    text: "Выписка или рекомендации объясняют, но не напомнят, не покажут динамику и не вернут команде обратную связь.",
  },
  {
    title: "Каждый день — понятный шаг",
    text: "Человек и его близкие видят, что сделать сегодня и зачем, получают напоминания и отмечают, что получилось.",
  },
  {
    title: "Обратная связь — сама",
    text: "Команда видит, как идёт программа дома, и подключается вовремя — без отдельных расспросов семьи.",
    dark: true,
  },
];

/** Карточка Collaborative Care в портфолио главной. Скрыта, см. docs/hidden-blocks.md; страница /cases/collaborative-care работает. */
const SHOW_COLLABORATIVE_CARE = false;

/** Портфолио Apps на главной. */
export const HEALTH_CASES: StudioCase[] = [
  ...(SHOW_COLLABORATIVE_CARE ? [{
    category: "health",
    direction: "Health",
    word: "Collaborative Care",
    tags: "Companion app + Co-pilot",
    audience: "Для авторов программ, коучей и терапевтов, которые ведут людей к изменениям",
    title: "Collaborative Care",
    text: "Два AI-помощника на одной базе данных: companion ведёт участника по вашей программе, co-pilot показывает вам динамику и сигналы.",
    href: "/cases/collaborative-care",
  } satisfies StudioCase] : []),
  {
    category: "health",
    direction: "Health",
    status: "В разработке",
    word: "Приложение по питанию Foody",
    tags: "Companion app · Питание",
    audience: "Для тех, кто хочет наладить отношения с едой без диет и срывов",
    title: "Foody",
    text: "Mini app без весов, калорий и целей по килограммам: маленький шаг каждый день и поддержка в момент, когда хочется сорваться. Макеты готовы, идёт исследование.",
    href: "/foody",
  },
  {
    category: "health",
    direction: "Education",
    word: "Соло-трекер",
    tags: "Companion app · Обучение",
    audience: "Для участников группы, которые создают свой авторский продукт",
    title: "Соло-трекер",
    text: "Ведёт по методологии в личном ритме: присылает статьи с инструментами, собирает рефлексию, показывает прогресс и в конце даёт рекомендацию по продуктовой концепции.",
    href: "/cases/solo-tracker",
  },
  {
    category: "health",
    direction: "Education",
    word: "ТРИЗ-решатели",
    tags: "Симулятор · АРИЗ",
    audience: "Для тех, кто хочет применять ТРИЗ к своим задачам, а не только читать о нём",
    title: "ТРИЗ-решатели",
    text: "AI-решатели прогоняют ваш кейс по классическому АРИЗ — по книге-первоисточнику Генриха Альтшуллера. Пример того, как сложную методологию превратить в протокол и симулятор.",
    href: "/cases/triz",
  },
];

/** Блок «Мой метод» на главной (скрыт флагом SHOW_METHOD в StudioPortfolio). */
export const HEALTH_METHOD: StudioCase[] = [
  {
    category: "health",
    direction: "Health",
    word: "Companion-app",
    tags: "Companion app · Питание",
    audience: "Для человека, который внедряет новый навык, привычку или находится в терапии или коучинге",
    title: "Foody",
    text: "Companion-app ведёт между сессиями: отвечает в моменте, подстраивается под его состояние и ситуацию, помогает не сойти с пути и вовремя скорректировать курс.",
    href: "/foody",
    violet: true,
  },
  {
    category: "health",
    direction: "Health",
    word: "Co-pilot",
    tags: "Care Platforms",
    audience: "Для помогающих практиков",
    title: "Дневники пациентов в терапевтическом процессе",
    text: "Co-pilot помогает специалисту проанализировать данные, увидеть тренды, паттерны, динамику, сигналы и триггеры и скорректировать план.",
  },
];

export const HEALTH_PRINCIPLES: { title: string; text: string }[] = [
  {
    title: "План утверждает врач",
    text: "Продукт показывает назначенное, ничего не рекомендует, не интерпретирует и не меняет назначений.",
  },
  {
    title: "Данные под защитой",
    text: "Письменное согласие, хостинг в России, в программе нет фамилии и диагноза.",
  },
  {
    title: "Не экстренная связь",
    text: "Сводка помогает связаться вовремя, но не заменяет контакт с клиникой при ухудшении.",
  },
  {
    title: "Удобно для всех возрастов",
    text: "Проверяем интерфейс на реальных семьях: зрение, моторика и внимание у пользователей и ухаживающих бывают разными.",
  },
];
