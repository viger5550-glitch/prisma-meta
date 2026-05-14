import type { Metadata } from "next";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { ManifestOfferCard } from "@/components/meta/ManifestOfferCard";
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

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-2 md:px-12 md:pb-20 md:pt-4 lg:px-[96px] lg:pb-24 lg:pt-6">
            <div
              className={`max-w-[760px] text-[17px] leading-[1.8] text-zinc-800 ${interSans}`}
            >
              <p>
                Я по себе знаю, как сложно быть соло-предпринимателем и соло-автором. Очень легко сбиться с пути или
                вовсе остановиться. Персональный трек — это возможность пройти авторский путь и гарантированно
                сделать продукт с человеком, который не раз это проходил (то есть со мной).
              </p>

              <h2 className="mt-16 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Почему я могу так говорить о себе
              </h2>
              <ul className="mt-8 space-y-5">
                <li>
                  <span className="font-medium text-black">Предприниматель и продакт.</span>{" "}
                  Предпринимательское и продуктовое мышление дают мне особую призму, через которую помогу вам
                  собрать ваши продукты.
                </li>
                <li>
                  <span className="font-medium text-black">Системный аналитик в IT.</span>{" "}
                  Я проектировала сложные системы — у меня системный взгляд, который поможет создать не просто один
                  продукт, а целую продуктовую экосистему.
                </li>
                <li>
                  <span className="font-medium text-black">Внешний фактор и партнёр по движению.</span>{" "}
                  Я буду тем человеком, который аккуратно «пристаёт» с вопросами: что сделано, что делаем дальше.
                  Вместе решаем задачи и разблокируем затыки.
                </li>
              </ul>

              <h2 className="mt-16 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Как мы работаем
              </h2>
              <p className="mt-8">
                Это большая совместная работа, которая выходит за рамки одной консультации. Мы встречаемся 1 раз в
                неделю на 1,5 часа и общаемся асинхронно в чате. Длительность трека — 3 месяца.
              </p>

              <h2 className="mt-16 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                4 этапа трека
              </h2>
              <ol className="mt-8 space-y-5">
                {STAGES.map((stage, i) => (
                  <li key={stage.name} className="flex gap-3">
                    <span className="shrink-0 font-medium text-black">{i + 1}.</span>
                    <span>
                      <span className="font-medium text-black">{stage.name}</span> — {stage.text}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-8">
                Вы уйдёте с продуктом, а главное — с воспроизводимым навыком создавать свои продукты.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
            <h2 className="text-center font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
              Подписка на 1-1 трек
            </h2>

            <div className="mt-12 flex flex-wrap items-start justify-center gap-8 md:gap-12">
              <ManifestOfferCard
                variant="dark"
                titlePrimary="1-1 ТРЕК"
                titleSecondary="CHALLENGE"
                priceAmount="80k"
                pricePeriod="/3mo"
              />
              <ManifestOfferCard
                variant="light"
                titlePrimary="1-1 ТРЕК"
                titleSecondary="CHALLENGE"
                priceAmount="30k"
                pricePeriod="/1mo"
              />
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
