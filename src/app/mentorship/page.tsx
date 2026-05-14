import type { Metadata } from "next";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const MENTORSHIP_INTRO_URL = "https://cal.com/vika-german/1-1-встречи";

export const metadata: Metadata = {
  title: "Персональный трек — mentorship | PRISMA",
  description:
    "Персональный трек на 3 месяца: вместе проходим путь Search → Create → Sale → Lean и собираем твой продукт. Автор и ведущая — Виктория Герман.",
};

const STAGES: Array<{ name: string; text: string }> = [
  {
    name: "Search",
    text: "Найдём и заточим идею.",
  },
  {
    name: "Create",
    text:
      "Создадим концепт и соберём первые версии продукта. Помогу с вайбкодингом, если он понадобится — а он 100 % понадобится.",
  },
  {
    name: "Sale",
    text:
      "Настроим систему продаж: процессы, каналы привлечения, а ещё проработаем психологические затыки, которые я сама проходила и научилась с ними справляться.",
  },
  {
    name: "Lean",
    text:
      "Интегрируем все этапы и примем решения о дальнейшей стратегии продукта.",
  },
];

const INCLUDED: string[] = [
  "Методология по созданию авторских продуктов",
  "Дизайн концепции продукта",
  "Сопровождение разработки продукта",
];

const VALUE: string[] = [
  "Получаешь фокус и ясность",
  "Внешняя оптика на проект",
];

export default function MentorshipPage() {
  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-white text-black antialiased">
        <MetaSiteHeader />

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[110px]">
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
              MENTORSHIP
            </p>
            <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
              <span className="flex items-start">
                <span className="mr-1 -translate-x-[0.1em]">|</span>
                <span>Персональный трек</span>
              </span>
            </h1>
            <p
              className={`mt-8 max-w-[546px] p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
              style={{ color: "rgba(95, 94, 94, 0.6)" }}
            >
              3 месяца совместной работы один на один с автором
            </p>
          </div>
        </section>

        <section className="bg-[#F7F7F7]">
          <div
            className={`mx-auto max-w-[820px] px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-[16px] leading-[1.75] text-black/85 ${interSans}`}
          >
            <p>
              Я по себе знаю, как сложно быть соло-предпринимателем и соло-автором. Очень легко сбиться с пути или
              вовсе остановиться. Персональный трек — это возможность пройти авторский путь и гарантированно сделать
              продукт с человеком, который не раз это проходил (то есть со мной).
            </p>

            <h2 className="mt-12 font-serif text-[28px] leading-[1.05] tracking-[-0.02em] text-black md:text-[32px]">
              Почему я могу так говорить о себе
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <span className="font-medium text-black">Предприниматель и продакт.</span>{" "}
                Предпринимательское и продуктовое мышление дают мне особую призму, через которую помогу вам собрать
                ваши продукты.
              </li>
              <li>
                <span className="font-medium text-black">Системный аналитик в IT.</span>{" "}
                Я проектировала сложные системы — у меня системный взгляд, который поможет создать не просто один
                продукт, а целую продуктовую экосистему.
              </li>
              <li>
                <span className="font-medium text-black">Внешний фактор и партнёр по движению.</span>{" "}
                Я буду тем человеком, который аккуратно «пристаёт» с вопросами: что сделано, что делаем дальше. Вместе
                решаем задачи и разблокируем затыки.
              </li>
            </ul>

            <h2 className="mt-14 font-serif text-[28px] leading-[1.05] tracking-[-0.02em] text-black md:text-[32px]">
              Как мы работаем
            </h2>
            <p className="mt-6">
              Это большая совместная работа, которая выходит за рамки одной консультации. Мы встречаемся 2 раза в
              неделю и общаемся асинхронно в чате. Длительность трека — 3 месяца.
            </p>

            <h2 className="mt-14 font-serif text-[28px] leading-[1.05] tracking-[-0.02em] text-black md:text-[32px]">
              4 этапа трека
            </h2>
            <ol className="mt-6 space-y-4">
              {STAGES.map((stage, i) => (
                <li key={stage.name} className="flex gap-3">
                  <span className="shrink-0 font-medium text-black">{i + 1}.</span>
                  <span>
                    <span className="font-medium text-black">{stage.name}</span> — {stage.text}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              Вы уйдёте с продуктом, а главное — с воспроизводимым навыком создавать свои продукты.
            </p>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <div>
                <h3
                  className={`text-[11px] font-medium uppercase tracking-[0.32em] text-black/55 ${interSans}`}
                >
                  Что входит
                </h3>
                <ul className="mt-5 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-[2px] text-[14px] text-emerald-600">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className={`text-[11px] font-medium uppercase tracking-[0.32em] text-black/55 ${interSans}`}
                >
                  Ценность
                </h3>
                <ul className="mt-5 space-y-3">
                  {VALUE.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-[2px] text-[14px] text-black/70">
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-20 text-center md:px-12 md:py-24 lg:px-[96px] lg:py-24">
            <h2 className="font-serif text-[30px] leading-[0.98] tracking-[-0.02em] text-black md:text-[34px]">
              Стоимость
            </h2>
            <p
              className={`mt-5 max-w-[520px] text-[13px] leading-[1.7] text-black/55 ${interSans}`}
            >
              3-месячный трек — по сути подписка на меня.
            </p>

            <div
              className={`mt-12 grid w-full max-w-[760px] grid-cols-1 gap-6 sm:grid-cols-2 ${interSans}`}
            >
              <div className="flex flex-col items-start bg-black px-8 py-10 text-left text-white">
                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/75">
                  Весь трек
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.24em] text-white/55">
                  3 месяца
                </p>
                <p className="mt-8 font-serif text-[40px] leading-none tracking-tight text-white">
                  60 000 ₽
                </p>
                <p className="mt-4 text-[12px] text-white/70">оплата одним платежом</p>
              </div>
              <div className="flex flex-col items-start border border-black/[0.08] bg-white px-8 py-10 text-left">
                <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/55">
                  Помесячно
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.24em] text-black/40">
                  за месяц
                </p>
                <p className="mt-8 font-serif text-[40px] leading-none tracking-tight text-black">
                  25 000 ₽
                </p>
                <p className="mt-4 text-[12px] text-black/55">удобный вход в работу</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-20 text-center md:px-12 md:py-24 lg:px-[96px] lg:py-28">
            <h2 className="font-serif text-[30px] leading-[0.98] tracking-[-0.02em] text-black md:text-[34px]">
              Сметчимся?
            </h2>
            <p
              className={`mt-6 max-w-[520px] text-[15px] leading-[1.7] text-black/60 ${interSans}`}
            >
              Чтобы пойти в работу — давайте сначала встретимся и поймём, что подходим друг другу.
            </p>
            <a
              href={MENTORSHIP_INTRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex h-11 min-w-[200px] items-center justify-center bg-black px-7 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-zinc-900 ${interSans}`}
            >
              Записаться на встречу-знакомство
            </a>
          </div>
        </section>

        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
