import Image from "next/image";

import {
  FOODY_AUDIENCE,
  FOODY_HERO,
  FOODY_PAINS,
  FOODY_PAINS_NOTE,
  FOODY_PHASES,
  FOODY_SCREENS,
  FOODY_STATUS,
  FOODY_SUPPORT_URL,
  FOODY_TOOLS,
  type FoodyCard,
} from "@/components/meta/foodyLanding";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { studioFontVars } from "@/components/meta/studioFonts";
import { STUDIO_TG_URL } from "@/components/meta/studioHome";
import { GREEN, VIOLET, sans, serif, shell } from "@/components/meta/studioUi";

const btn = "px-[52px] py-4 text-[9px] font-bold uppercase leading-none tracking-[.24em] whitespace-nowrap transition-colors duration-[250ms]";
const cardLabel = "text-[10px] font-semibold leading-none tracking-[.19em]";
const cardText = "m-0 text-[11.5px] leading-[1.8] text-pretty text-[#4a4a4a]";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-4 py-[7px] text-[8px] font-bold uppercase leading-none tracking-[.2em] text-[#0a0a0a]"
      style={{ background: GREEN }}
    >
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <>
      <p className="m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[.32em] text-[#a8a8a8]">{eyebrow}</p>
      <div className="flex flex-wrap items-center gap-[18px]">
        <span className="block h-[34px] w-[3px] flex-none bg-[#0a0a0a]" />
        <h2 className={`m-0 text-[clamp(22px,3.4vw,34px)] leading-[1.2] text-balance ${serif}`}>{title}</h2>
        {children}
      </div>
    </>
  );
}

function NumberedCards({ items, cardBg }: { items: FoodyCard[]; cardBg: string }) {
  return (
    <div className="mt-[10px] grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,240px),1fr))]">
      {items.map((item, i) => (
        <article key={item.title} className={`flex flex-col gap-3 px-6 py-[26px] ${cardBg}`}>
          <span className={cardLabel} style={{ color: VIOLET }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[11px] font-bold uppercase leading-[1.4] tracking-[.17em]">{item.title}</span>
          <p className={cardText}>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function PhaseRow({ label, text, last }: { label: string; text: string; last?: boolean }) {
  return (
    <div className={`flex flex-col gap-[6px] ${last ? "border-t border-[#e0e0e0] pt-4" : ""}`}>
      <span className="text-[8.5px] font-bold uppercase leading-none tracking-[.24em]">{label}</span>
      <span className={`text-[11.5px] leading-[1.8] text-pretty ${last ? "text-[#2a2a2a]" : "text-[#4a4a4a]"}`}>
        {text}
      </span>
    </div>
  );
}

/** Лендинг продукта Foody: проблема, аудитория, четыре фазы, инструменты, статус разработки. */
export function FoodyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <section className={`flex flex-col items-start gap-6 bg-white pb-[100px] pt-[70px] ${shell}`}>
          <Pill>{FOODY_HERO.tag}</Pill>
          <div className="flex items-start gap-[26px]">
            <span className="block w-[3px] flex-none self-stretch bg-[#0a0a0a]" />
            <h1 className={`m-0 max-w-[22ch] text-[clamp(34px,5.6vw,64px)] leading-[1.05] tracking-[.01em] ${serif}`}>
              {FOODY_HERO.title}
            </h1>
          </div>
          <p className="m-0 max-w-[66ch] text-[12.5px] leading-[1.9] text-pretty text-[#4a4a4a]">{FOODY_HERO.lead}</p>
          <div className="mt-[22px] flex flex-wrap gap-3">
            <a href="#status" className={`${btn} bg-[#0a0a0a] text-white hover:bg-[#00e37a] hover:text-[#0a0a0a]`}>
              Помочь проекту
            </a>
            <a href="#approach" className={`${btn} border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#f1f1f1]`}>
              Как работает программа
            </a>
          </div>
          <div className="mt-[14px] flex max-w-[68ch] flex-col gap-2 border-l-[3px] pl-[18px]" style={{ borderColor: GREEN }}>
            {FOODY_HERO.method.map((text) => (
              <p key={text} className={cardText}>
                {text}
              </p>
            ))}
          </div>
        </section>

        <section className={`flex flex-col gap-[22px] py-[76px] ${shell}`}>
          <SectionHead eyebrow="Знакомство с проблемой" title="Вам знакомо это чувство?" />
          <NumberedCards items={FOODY_PAINS} cardBg="bg-white" />
          <p className="m-0 mt-4 max-w-[70ch] border-l-[3px] border-[#0a0a0a] pl-[18px] text-[12.5px] leading-[1.9] text-pretty text-[#2a2a2a]">
            {FOODY_PAINS_NOTE}
          </p>
        </section>

        <section className={`flex flex-col gap-[22px] bg-white py-[76px] ${shell}`}>
          <SectionHead eyebrow="Для кого" title={FOODY_AUDIENCE.title} />
          <div className="flex max-w-[70ch] flex-col gap-4">
            {FOODY_AUDIENCE.text.map((text) => (
              <p key={text} className="m-0 text-[12.5px] leading-[1.9] text-pretty text-[#2a2a2a]">
                {text}
              </p>
            ))}
            <p className="m-0 text-[11.5px] leading-[1.8] text-pretty text-[#a8a8a8]">{FOODY_AUDIENCE.note}</p>
          </div>
        </section>

        <section id="approach" className={`flex scroll-mt-24 flex-col gap-[22px] py-[76px] ${shell}`}>
          <SectionHead eyebrow="Наш подход" title="Почему это работает, когда диеты бессильны" />
          <p className="m-0 max-w-[70ch] text-[12.5px] leading-[1.9] text-pretty text-[#2a2a2a]">
            Никаких готовых меню, весов и подсчёта калорий. Вместо жёсткого контроля — система бережной адаптации из
            четырёх фаз.
          </p>
          <div className="mt-[10px] grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,270px),1fr))]">
            {FOODY_PHASES.map((phase) => (
              <article key={phase.title} className="flex flex-col gap-[14px] bg-white px-[26px] py-7">
                <span className="h-[3px] w-[22px]" style={{ background: phase.accent }} />
                <span className={cardLabel} style={{ color: VIOLET }}>
                  {phase.label}
                </span>
                <span className={`text-[22px] leading-[1.2] ${serif}`}>{phase.title}</span>
                <PhaseRow label="Цель" text={phase.goal} />
                <PhaseRow label="Как работает" text={phase.how} />
                <PhaseRow label="Результат" text={phase.result} last />
              </article>
            ))}
          </div>
        </section>

        <section className={`flex flex-col gap-[22px] bg-white py-[76px] ${shell}`}>
          <SectionHead eyebrow="Инструменты приложения" title="Обучение через действие" />
          <NumberedCards items={FOODY_TOOLS} cardBg="bg-[#f1f1f1]" />
        </section>

        <section id="status" className={`flex scroll-mt-24 flex-col gap-[22px] pb-[90px] pt-[76px] ${shell}`}>
          <SectionHead eyebrow="Статус продукта" title={FOODY_STATUS.title}>
            <Pill>{FOODY_STATUS.badge}</Pill>
          </SectionHead>
          <p className="m-0 max-w-[70ch] text-[12.5px] leading-[1.9] text-pretty text-[#2a2a2a]">{FOODY_STATUS.text}</p>
          <div className="-mr-[6vw] flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 pr-[6vw]">
            {FOODY_SCREENS.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Макет Foody, экран ${i + 1}`}
                width={320}
                height={640}
                unoptimized
                className="block h-[440px] w-auto flex-none snap-start"
              />
            ))}
          </div>

          <div className="mt-[14px] grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
            <article className="flex flex-col gap-[14px] bg-white px-[26px] py-7">
              <span className={cardLabel} style={{ color: VIOLET }}>
                Исследование
              </span>
              <span className={`text-[22px] leading-[1.2] ${serif}`}>Помогите сделать продукт нужным</span>
              <p className={cardText}>
                Продукт в активной фазе исследования. Будем рады, если поможете и ответите на вопросы — 30–40 минут
                разговора про ваш опыт с едой и привычками.
              </p>
              <a
                href={STUDIO_TG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block bg-[#0a0a0a] py-[13px] text-center text-[9px] font-bold uppercase leading-none tracking-[.24em] text-white transition-colors duration-[250ms] hover:bg-[#00e37a] hover:text-[#0a0a0a]"
              >
                Записаться на интервью
              </a>
            </article>
            <article className="flex flex-col gap-[14px] bg-[#0a0a0a] px-[26px] py-7 text-white">
              <span className={cardLabel} style={{ color: GREEN }}>
                Поддержка
              </span>
              <span className={`text-[22px] leading-[1.2] ${serif}`}>Закрытая кухня продукта</span>
              <p className="m-0 text-[11.5px] leading-[1.8] text-pretty text-[#bdbdbd]">
                Поддержать проект можно подпиской на закрытый канал: там я рассказываю изнутри, как делается продукт —
                решения, ошибки, цифры и то, что обычно не показывают.
              </p>
              <p className="m-0 text-[11.5px] leading-[1.8] text-pretty" style={{ color: GREEN }}>
                Все вырученные средства идут на развитие проекта.
              </p>
              <a
                href={FOODY_SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block bg-white py-[13px] text-center text-[9px] font-bold uppercase leading-none tracking-[.24em] text-[#0a0a0a] transition-colors duration-[250ms] hover:bg-[#00e37a]"
              >
                Поддержать проект
              </a>
            </article>
          </div>
        </section>
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
