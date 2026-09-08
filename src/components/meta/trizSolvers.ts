export const TRIZ_BOT_URL = "https://t.me/productodel_bot";
export const TRIZ_KASSA_URL = "https://t.me/pm_kassa_bot";

export type TrizSolver = {
  id: "sava" | "il" | "max" | "ilona";
  name: string;
  roleLabel: string;
  roleText: string;
  tools: string;
  useWhen: string;
  imageSrc: string;
  imageAlt: string;
};

export const TRIZ_SOLVERS: TrizSolver[] = [
  {
    id: "sava",
    name: "Сава",
    roleLabel: "МУДРЕЦ",
    roleText: "Решает конфликты и находит запертые решения без компромиссов.",
    tools: "40 приёмов ТРИЗ",
    useWhen: "Когда система зашла в тупик противоречий и выхода не видно.",
    imageSrc: "/triz/sava.webp",
    imageAlt: "Сава — мудрец",
  },
  {
    id: "il",
    name: "Иль",
    roleLabel: "ВИЗИОНЕР",
    roleText: "Видит, как система может работать сама.",
    tools: "76 стандартов, модель идеальности ИКР «Идеальный конечный результат»",
    useWhen: "Когда нужно решение, которое работает «как по волшебству».",
    imageSrc: "/triz/il.webp",
    imageAlt: "Иль — визионер",
  },
  {
    id: "max",
    name: "Макс",
    roleLabel: "ХАКЕР",
    roleText: "Находит скрытые ресурсы, выжимает максимум из того, что есть.",
    tools: "Вещественно-полевые ресурсы, переход системы",
    useWhen: "Когда нет времени и бюджетов, но нужны результаты.",
    imageSrc: "/triz/max.webp",
    imageAlt: "Макс — хакер",
  },
  {
    id: "ilona",
    name: "Илона",
    roleLabel: "ИНТЕГРАТОР",
    roleText:
      "Собирает всё, что найдено ранее, в работающую механику и готовит к внедрению.",
    tools: "Шаблоны причинно-следственного анализа, критерии отбора решений",
    useWhen: "Когда нужно выбрать лучшее из сгенерированных решений.",
    imageSrc: "/triz/ilona.webp",
    imageAlt: "Илона — интегратор",
  },
];
