import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import {
  HEALTH_CASES,
  HEALTH_HERO_CARDS,
  HEALTH_PRINCIPLES,
  HEALTH_WHY,
} from "@/components/meta/healthTech";
import { STUDIO_TG_URL } from "@/components/meta/studioHome";
import { studioFontVars } from "@/components/meta/studioFonts";
import { StudioHeroCards } from "@/components/meta/StudioHeroCards";
import { CaseCard } from "@/components/meta/StudioPortfolio";
import { Eyebrow, GREEN, SectionTitle, lift, sans, serif, shell } from "@/components/meta/studioUi";

const btnDark =
  "bg-[#0a0a0a] px-10 py-4 text-[9px] font-bold leading-none tracking-[.24em] text-white transition-colors duration-[250ms] hover:bg-[#00e37a] hover:text-[#0a0a0a]";
const btnOutline =
  "border border-[#0a0a0a] px-[39px] py-[15px] text-[9px] font-bold leading-none tracking-[.24em] text-[#0a0a0a] transition-colors duration-[250ms] hover:border-[#00e37a] hover:bg-[#00e37a]";

function Hero() {
  return (
    <header
      className={`grid items-center gap-x-[5vw] gap-y-14 bg-white pb-24 pt-12 ${shell} [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]`}
    >
      <div className="flex flex-col gap-[34px]">
        <div className="flex flex-col items-start gap-[22px]">
          <div className="flex items-center gap-[26px]">
            <span className="block h-[72px] w-[3px] bg-[#0a0a0a]" />
            <h1 className={`m-0 text-[clamp(52px,12vw,76px)] leading-[.9] tracking-[.01em] ${serif}`}>
              PRISMA
            </h1>
          </div>
          <p className="m-0 text-[11px] uppercase leading-[1.4] tracking-[.36em] text-[#a8a8a8]">Health tech</p>
        </div>

        <div className="flex flex-col gap-6 pt-7">
          <h2 className={`m-0 max-w-[16ch] text-[clamp(36px,4.3vw,62px)] leading-[1.08] text-balance ${serif}`}>
            Компаньон между{" "}
            <span className="italic" style={{ boxShadow: `${GREEN} 0 -0.28em 0 inset` }}>
              сессиями
            </span>
          </h2>
          <p className="m-0 max-w-[46ch] text-[13px] leading-[1.8] text-pretty text-[#4a4a4a]">
            Разрабатываем приложения, которые помогают пройти терапию или изменить привычки.
          </p>
          <div className="mt-[6px] flex flex-wrap gap-[10px]">
            <a href="#contact" className={btnDark}>
              ОБСУДИТЬ ПРОДУКТ
            </a>
            <a href="#cases" className={btnOutline}>
              КЕЙСЫ
            </a>
          </div>
        </div>
      </div>

      <StudioHeroCards cards={HEALTH_HERO_CARDS} />
    </header>
  );
}

function Why() {
  return (
    <section className={`flex flex-col gap-12 pb-[100px] pt-[88px] ${shell}`}>
      <SectionTitle title="Зачем нужен компаньон" />
      <div className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {HEALTH_WHY.map((item, index) => (
          <article
            key={item.title}
            className={`flex flex-col gap-4 border-t-[3px] px-6 pb-[30px] pt-7 hover:-translate-y-[10px] ${lift} ${
              item.dark
                ? "border-[#00e37a] bg-[#0a0a0a] text-white hover:shadow-[0_30px_56px_rgba(0,0,0,.22)]"
                : "border-transparent bg-white hover:border-[#00e37a] hover:shadow-[0_24px_48px_rgba(0,0,0,.10)]"
            }`}
          >
            <span className={`text-[64px] leading-none ${serif}`} style={item.dark ? { color: GREEN } : undefined}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[.17em]">{item.title}</span>
            <p className={`m-0 text-[11.5px] leading-[1.75] text-pretty ${item.dark ? "text-[#bdbdbd]" : "text-[#4a4a4a]"}`}>
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className={`flex flex-col gap-12 py-[100px] ${shell}`}>
      <SectionTitle eyebrow="Кейсы" title="Что уже делаем" />
      <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr))]">
        {HEALTH_CASES.map((item, index) => (
          <CaseCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className={`flex flex-col gap-12 py-[100px] ${shell}`}>
      <SectionTitle title="Рамки, в которых мы работаем" />
      <div className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        {HEALTH_PRINCIPLES.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-[14px] border-t-[3px] bg-white px-6 pb-[30px] pt-7"
            style={{ borderTopColor: GREEN }}
          >
            <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[.17em]">{item.title}</span>
            <p className="m-0 text-[11.5px] leading-[1.75] text-pretty text-[#4a4a4a]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={`flex flex-wrap items-center justify-between gap-10 bg-white py-[90px] ${shell}`}>
      <div className="flex flex-col gap-3">
        <Eyebrow>Обсудить продукт</Eyebrow>
        <h2 className={`m-0 text-[30px] leading-[1.2] ${serif}`}>Расскажите о своей идее</h2>
        <p className="m-0 max-w-[46ch] text-[12px] leading-[1.8] text-pretty text-[#4a4a4a]">
          Обсудим идею, аудиторию и формат — и прикинем, каким будет первый релиз.
        </p>
      </div>
      <a
        href={STUDIO_TG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap bg-[#00e37a] px-[60px] py-5 text-[9px] font-bold leading-none tracking-[.24em] text-[#0a0a0a] transition-[background-color,color,transform] duration-300 hover:-translate-y-[3px] hover:bg-[#0a0a0a] hover:text-white"
      >
        ОБСУДИТЬ ПРОДУКТ
      </a>
    </section>
  );
}

/** Направление Health tech: hero, зачем компаньон, кейсы, рамки работы, CTA. */
export function HealthTechPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <Hero />
        <Why />
        <Cases />
        <Principles />
        <Contact />
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
