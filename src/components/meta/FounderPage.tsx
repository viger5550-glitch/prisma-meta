import type { ReactNode } from "react";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import {
  AGENTS_FOUNDER,
  STUDIO_TEAM,
  STUDIO_TG_URL,
} from "@/components/meta/studioHome";
import { studioFontVars } from "@/components/meta/studioFonts";
import {
  Eyebrow,
  GREEN,
  SectionTitle,
  VIOLET,
  sans,
  serif,
  shell,
} from "@/components/meta/studioUi";

/** Профиль основателя студии — те же данные, что в карточке команды на /agents. */
const FOUNDER = STUDIO_TEAM[0];

/** Блок «Профиль» временно скрыт — чтобы вернуть, поставить true. См. docs/hidden-blocks.md. */
const SHOW_PROFILE = false;

type Variant = "studio" | "agents";

/** Тексты hero: /founder — про health-продукты, /agents/founder — про анализ и архитектуру агентов. */
function heroText(variant: Variant) {
  return variant === "agents"
    ? {
        role: AGENTS_FOUNDER.role,
        bio: AGENTS_FOUNDER.lead,
        about: AGENTS_FOUNDER.about,
      }
    : {
        role: FOUNDER.role,
        bio: FOUNDER.bio,
        about: FOUNDER.about ?? [FOUNDER.bio],
      };
}

function Hero({ variant }: { variant: Variant }) {
  const t = heroText(variant);
  return (
    <header
      className={`grid items-center gap-x-[5vw] gap-y-12 bg-white pb-24 pt-12 ${shell} [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]`}
    >
      <div className="flex flex-col gap-[34px]">
        <div className="flex flex-col items-start gap-[22px]">
          <div className="flex items-center gap-[26px]">
            <span className="block h-[72px] w-[3px] bg-[#0a0a0a]" />
            <h1
              className={`m-0 text-[clamp(44px,8vw,76px)] leading-[.95] tracking-[.01em] ${serif}`}
            >
              {FOUNDER.name}
            </h1>
          </div>
          <p
            className="m-0 text-[11px] uppercase leading-[1.4] tracking-[.36em]"
            style={{ color: VIOLET }}
          >
            {t.role}
          </p>
        </div>
        <p
          className={`m-0 max-w-[26ch] text-[clamp(22px,2.2vw,28px)] leading-[1.3] text-balance ${serif}`}
        >
          {t.bio}
        </p>
        <div className="flex max-w-[52ch] flex-col gap-4">
          {t.about.map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 text-[14px] leading-[1.8] text-pretty text-[#4a4a4a]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="aspect-[4/5] w-full max-w-[460px] justify-self-center overflow-hidden bg-[#e2e2e2]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FOUNDER.photo}
          alt={FOUNDER.name}
          className="block h-full w-full object-cover grayscale"
          style={{ objectPosition: FOUNDER.objectPosition }}
        />
      </div>
    </header>
  );
}

/** Текст «Опыт» в блоке основателя на главной (на /founder остаётся FOUNDER.about). */
const FOUNDER_ABOUT_ME: ReactNode[] = [
  "8 лет проектирую цифровые продукты. Оглядываясь назад, вижу: почти всегда я проектировала поведение, просто раньше это так не называлось.",
  "В екоме делала рейтинги для селлеров — систему, которая показывает продавцу, где он сейчас, и подталкивает работать лучше.",
  "Потом запустила свой челлендж для соло-фаундеров. Проводила людей через изменения в когорте и увидела, где именно они срываются.",
  <>
    Сейчас делаю{" "}
    <a
      href="/foody"
      className="border-b border-current text-[#0a0a0a] transition-colors hover:text-[#5a5ad6]"
    >
      Foody
    </a>{" "}
    — продукт длинного опыта для перехода к осознанному питанию в рамках
    Сеченовского акселератора.
  </>,
];

/** Пункты «Как я работаю» в блоке основателя на главной. */
const FOUNDER_PATH = [
  {
    title: "Дискавери",
    text: ["Разбираю путь вашего клиента: где он сходит с пути и почему."],
  },
  { title: "Гипотезы", text: ["Формулирую гипотезы для проверки."] },
  {
    title: "MVP",
    text: [
      "Делаю первую версию: companion-app для клиента и co-pilot для специалиста.",
    ],
  },
  {
    title: "Пилот",
    text: [
      "Запускаю на бета-пользователях, собираю аналитику и обратную связь, делаю выводы.",
    ],
  },
];

/** Блок основателя на главной: фото + имя и опыт. */
export function FounderSection() {
  return (
    <section id="founder" className={`bg-[#f1f1f1] py-[100px] ${shell}`}>
      <div className="flex flex-col gap-12">
        <SectionTitle eyebrow="Product Architect" title={FOUNDER.name} />
        <div className="grid items-start gap-x-[5vw] gap-y-10 md:grid-cols-[minmax(0,420px)_1fr]">
          <div className="aspect-[4/5] w-full max-w-[420px] overflow-hidden border-[6px] border-white bg-[#e2e2e2] shadow-[0_1px_6px_rgba(0,0,0,.08)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              className="block h-full w-full object-cover grayscale"
              style={{ objectPosition: FOUNDER.objectPosition }}
            />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex max-w-[60ch] flex-col gap-4">
              <span className={`text-[22px] italic leading-[1.15] ${serif}`}>
                Опыт
              </span>
              {FOUNDER_ABOUT_ME.map((paragraph, i) => (
                <p
                  key={i}
                  className="m-0 text-[14px] leading-[1.8] text-pretty text-[#4a4a4a]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex max-w-[60ch] flex-col gap-4">
              <span className={`text-[22px] italic leading-[1.15] ${serif}`}>
                Как я работаю
              </span>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {FOUNDER_PATH.map((step) => (
                  <li
                    key={step.title}
                    className="flex items-baseline gap-3 text-[14px] leading-[1.8] text-pretty text-[#4a4a4a]"
                  >
                    <span
                      className="h-[6px] w-[6px] flex-none -translate-y-px rounded-full"
                      style={{ background: VIOLET }}
                    />
                    <span>
                      <span className="font-semibold text-[#0a0a0a]">
                        {step.title}.
                      </span>{" "}
                      {step.text.join(" ")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className={`flex flex-col gap-12 py-[100px] ${shell}`}>
      <SectionTitle
        eyebrow="Профиль"
        title="Опыт, который становится агентом"
      />
      <div className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {FOUNDER.profile.map((block) => (
          <article
            key={block.label}
            className="flex flex-col gap-[14px] border-t-[3px] bg-white px-6 pb-[30px] pt-7"
            style={{ borderTopColor: GREEN }}
          >
            <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[.17em]">
              {block.label}
            </span>
            {block.text ? (
              <p className="m-0 text-[12px] leading-[1.8] text-pretty text-[#4a4a4a]">
                {block.text}
              </p>
            ) : null}
            {block.items ? (
              <ul className="m-0 flex list-none flex-col p-0">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-[10px] py-[6px] text-[12px] leading-[1.7] text-[#4a4a4a]"
                  >
                    <span
                      className="h-[6px] w-[6px] flex-none -translate-y-px rounded-full"
                      style={{ background: VIOLET }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className={`flex flex-wrap items-center justify-between gap-10 bg-white py-[90px] ${shell}`}
    >
      <div className="flex flex-col gap-3">
        <Eyebrow>Связаться</Eyebrow>
        <h2 className={`m-0 text-[30px] leading-[1.2] ${serif}`}>
          Напишите мне в Telegram
        </h2>
      </div>
      <a
        href={STUDIO_TG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap bg-[#00e37a] px-[60px] py-5 text-[9px] font-bold leading-none tracking-[.24em] text-[#0a0a0a] transition-[background-color,color,transform] duration-300 hover:-translate-y-[3px] hover:bg-[#0a0a0a] hover:text-white"
      >
        НАПИСАТЬ
      </a>
    </section>
  );
}

/** Страница основателя: hero с фото, блоки профиля, контакт. variant="agents" — версия для лендинга агентов. */
export function FounderPage({
  variant = "studio",
}: { variant?: Variant } = {}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <Hero variant={variant} />
        {SHOW_PROFILE ? <Profile /> : null}
        <Contact />
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
