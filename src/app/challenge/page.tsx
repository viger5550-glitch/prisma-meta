import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const CHALLENGE_SIGNUP_URL = "https://t.me/+kImikjZiicphYmIy";
const BRAND_GREEN = "#00e37a";

const ctaClass = `inline-flex items-center justify-center bg-[#0a0a0a] text-[9px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#00e37a] hover:text-[#0a0a0a] ${interSans}`;

const INSIDE_CARDS = [
  {
    n: "01",
    title: "Коворкинги",
    text: "Бронируем время, чтобы железно заниматься продуктом.",
  },
  {
    n: "02",
    title: "Трекшен встречи",
    text: "Рассказываем, что сделали по продукту и что делаем дальше.",
  },
  {
    n: "03",
    title: "Демо-день",
    text: "Раз в две недели показываем, что успели сделать.",
  },
  {
    n: "04",
    title: "Чат участников",
    text: "Место, где мы взаимообмениваемся опытом, контактами и поддержкой.",
  },
  {
    n: "05",
    title: "Сторибук трека",
    text: "Веду сторибук по своему продукту и каждую неделю присылаю полезность.",
  },
  {
    n: "06",
    title: "Бот-трекер",
    text: "Собирает отчёты каждую неделю и демо раз в две недели. Нет отчёта — штраф; не отработал штраф — кик из дружной компании.",
    featured: true,
  },
] as const;

export const metadata: Metadata = {
  title: "Кати на прод — challenge | PRISMA",
  description:
    "Сезон 5: челлендж по затаскиванию идей в прод. Коворкинги, трекшен, демо-дни и бот-трекер — go с нами.",
};

export default function ChallengePage() {
  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-[#F2F2F2] text-[#0a0a0a] antialiased">
        <MetaSiteHeader />

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-11 px-6 pb-14 pt-3 md:px-12 md:pb-16 lg:px-[96px] lg:pb-[62px] lg:pt-4">
            <Link
              href="/"
              className={`text-[9px] font-bold uppercase tracking-[0.24em] text-[#a8a8a8] transition-colors hover:text-[#0a0a0a] ${interSans}`}
            >
              ← PRISMA
            </Link>

            <div className="flex flex-col items-start gap-[22px]">
              <span
                className={`rounded-full px-4 py-[7px] text-[8px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a] ${interSans}`}
                style={{ backgroundColor: BRAND_GREEN }}
              >
                Сезон 5 · набор открыт
              </span>

              <h1 className="flex items-center gap-[26px] font-serif text-[48px] font-normal leading-[0.9] tracking-[0.01em] text-[#0a0a0a] md:text-[62px] lg:text-[74px]">
                <span className="block h-16 w-[3px] shrink-0 bg-[#0a0a0a] lg:h-20" aria-hidden />
                <span>КАТИ НА ПРОД</span>
              </h1>

              <p
                className={`m-0 text-[11px] font-normal uppercase leading-[1.6] tracking-[0.36em] text-[#a8a8a8] ${interSans}`}
              >
                Челлендж по затаскиванию идей в прод
              </p>

              <a
                href={CHALLENGE_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaClass} mt-2.5 px-[34px] py-[15px]`}
              >
                Я в деле
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <div className="max-w-[820px]">
              <p className={`mb-[18px] text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.3em] text-[#a8a8a8] ${interSans}`}>
                Про меня
              </p>
              <h2 className="mb-[22px] flex items-center gap-[18px] font-serif text-[30px] font-normal leading-[1.25] text-[#0a0a0a] md:text-[32px]">
                <span className="block h-[34px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
                <span>Найти идею</span>
              </h2>

              <Image
                src="/avatar-vika.png"
                alt="Виктория Герман"
                width={240}
                height={240}
                className="mx-auto mb-8 block size-[200px] rounded-full object-cover object-[50%_30%] md:float-right md:mx-0 md:mb-[22px] md:ml-[34px] md:size-[240px]"
                style={{ shapeOutside: "circle(50%)" }}
              />

              <div className={`${interSans} text-[12.5px] leading-[1.9] [text-wrap:pretty]`}>
                <p className="mb-4 text-[#4a4a4a]">
                  Hi! Меня зовут Виктория Герман, и в любой непонятной ситуации я начинаю челлендж.
                  По количеству сезонов (а их уже четыре) вы поймёте, сколько у меня было непонятных
                  ситуаций 😅. И каждый раз меня вытаскивал челлендж.
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                  Понятный трекшен, люди, ритуальность — всё это давало каркас, который я потеряла с
                  выходом из найма.
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                  Последний челлендж был для меня тяжёлым. Я выгорела — отчасти от того, что не смогла
                  выстроить продукт, который нужен людям.
                </p>
                <p className="mb-4 text-[#2a2a2a]">
                  Выбиралась я из этого состояния почти месяц: переосмысливала всё и искала новые
                  идеи. Но оказалось, что всё это время идея искала меня. И вот нашла! Это пятый раз,
                  когда я запускаю челлендж, и первый, когда это происходит в понятной ситуации.
                </p>
                <p className="text-[#2a2a2a]">
                  Если у вас есть идея продукта, концепт или первые прототипы и вы хотите закатить эту
                  идею в прод — go с нами!
                </p>
              </div>
              <div className="clear-both" />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[34px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-none tracking-[0.04em] text-[#0a0a0a] md:text-[32px]">
              <span className="block h-[30px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
              <span>Что будет внутри</span>
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INSIDE_CARDS.map((card) => {
                const featured = "featured" in card && card.featured;
                return (
                  <article
                    key={card.n}
                    className={`flex flex-col gap-3 px-6 py-[26px] ${
                      featured ? "bg-[#0a0a0a] text-white" : "bg-[#F2F2F2] text-[#0a0a0a]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-semibold tracking-[0.19em] ${interSans}`}
                      style={{ color: featured ? BRAND_GREEN : "#5a5ad6" }}
                    >
                      {card.n}
                    </span>
                    <span
                      className={`text-[11px] font-bold uppercase leading-[1.4] tracking-[0.17em] ${
                        featured ? "text-[#00e37a]" : "text-[#0a0a0a]"
                      } ${interSans}`}
                    >
                      {card.title}
                    </span>
                    <p
                      className={`m-0 text-[11.5px] leading-[1.8] [text-wrap:pretty] ${
                        featured ? "text-[#e2e2e2]" : "text-[#4a4a4a]"
                      } ${interSans}`}
                    >
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-5 px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-none tracking-[0.04em] text-[#0a0a0a] md:text-[32px]">
              <span className="block h-[30px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
              <span>Для кого</span>
            </h2>
            <p className={`m-0 max-w-[58ch] text-[15px] leading-[1.8] text-[#2a2a2a] [text-wrap:pretty] ${interSans}`}>
              Для соло фаундеров, инди хакеров, мейкеров пет-проектов — для всех, кто хочет сделать
              свои авторские продукты.
            </p>
          </div>
        </section>

        <section id="buy" className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-10 px-6 py-16 md:px-12 md:py-[70px] lg:px-[96px]">
            <div className="flex flex-col gap-2.5">
              <p className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.3em] text-[#a8a8a8] ${interSans}`}>
                Старт 21.09.26
              </p>
              <div className="flex items-baseline gap-2">
                <span className={`text-[52px] font-light leading-none ${interSans}`}>30k</span>
                <span className={`text-[10px] font-medium tracking-[0.05em] text-[#8a8a8a] ${interSans}`}>
                  /сезон · 3 месяца
                </span>
              </div>
              <p className={`m-0 max-w-[46ch] text-[12px] leading-[1.8] text-[#4a4a4a] [text-wrap:pretty] ${interSans}`}>
                Первые 14 дней — пробный период.
                <br />
                При оплате сразу — 20 000 ₽,
                <br />
                при оплате после — 30 000 ₽.
              </p>
            </div>
            <a
              href={CHALLENGE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} px-[52px] py-4 whitespace-nowrap`}
            >
              Я в деле
            </a>
          </div>
        </section>

        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
