export type ChallengeTrack = {
  slug: string;
  title: string;
  label: string;
  teaser: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const CHALLENGE_TRACKS: ChallengeTrack[] = [
  {
    slug: "tracking",
    title: "ТРЕКИНГ",
    label: "challenge",
    teaser: "Скрипт-встречи, живая поддержка и режим: беру и делаю.",
    description:
      "Групповой ритм с регулярными встречами, где ты не зависаешь в размышлениях, а стабильно двигаешь продукт.",
    points: [
      "Еженедельная структура по шагам",
      "Обратная связь по твоему ходу",
      "Фокус на действии и результате",
    ],
    ctaLabel: "Перейти в трек",
    ctaHref: "https://productodels.figma.site/",
  },
  {
    slug: "navigation",
    title: "НАВИГАЦИЯ",
    label: "challenge",
    teaser: "Помогаем выстроить маршрут: от идеи к рабочему продукту.",
    description:
      "Навигационный слой челленджа: определяем точку старта, ограничения и следующий лучший шаг.",
    points: [
      "Карта твоего текущего этапа",
      "Понятный маршрут на 2-4 недели",
      "Критерии, по которым проверяем прогресс",
    ],
    ctaLabel: "Открыть маршрут",
    ctaHref: "https://productodels.figma.site/",
  },
  {
    slug: "author-position",
    title: "ПОЗИЦИЯ АВТОРА",
    label: "mindset",
    teaser: "Формируем внутреннюю опору: зачем ты это делаешь и как не сойти.",
    description:
      "Блок про авторство и управляемую дисциплину: чтобы продукт не разваливался при первой сложности.",
    points: [
      "Личное позиционирование продукта",
      "Работа с сопротивлением и прокрастинацией",
      "Решения, которые держат долгую дистанцию",
    ],
    ctaLabel: "Изучить модуль",
    ctaHref: "https://productodels.figma.site/",
  },
  {
    slug: "community",
    title: "КОМЬЮНИТИ",
    label: "challenge",
    teaser: "Живые встречи, коллаборации и окружение, которое ускоряет рост.",
    description:
      "Сообщество людей, которые делают свои продукты и делятся реальными кейсами, а не теорией.",
    points: [
      "Нетворк с похожими задачами",
      "Взаимная поддержка и сверка курса",
      "Совместные разборы решений",
    ],
    ctaLabel: "Войти в комьюнити",
    ctaHref: "https://productodels.figma.site/",
  },
  {
    slug: "showcase",
    title: "ВИТРИНА",
    label: "challenge",
    teaser: "Показываем результаты и собираем живую реакцию на продукт.",
    description:
      "Пространство для публикации и обратной связи: фиксируем рост и накапливаем социальное доказательство.",
    points: [
      "Публичные демо и презентации",
      "Сбор обратной связи от аудитории",
      "Следующие итерации на основе данных",
    ],
    ctaLabel: "Открыть витрину",
    ctaHref: "https://productodels.figma.site/",
  },
];

export function getChallengeTrackBySlug(slug: string): ChallengeTrack | undefined {
  return CHALLENGE_TRACKS.find((track) => track.slug === slug);
}
