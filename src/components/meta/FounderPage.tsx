import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { STUDIO_TEAM, STUDIO_TG_URL } from "@/components/meta/studioHome";
import { studioFontVars } from "@/components/meta/studioFonts";
import { Eyebrow, GREEN, SectionTitle, VIOLET, sans, serif, shell } from "@/components/meta/studioUi";

/** Профиль основателя студии — те же данные, что в карточке команды на /business. */
const FOUNDER = STUDIO_TEAM[0];

function Hero() {
  return (
    <header
      className={`grid items-center gap-x-[5vw] gap-y-12 bg-white pb-24 pt-12 ${shell} [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]`}
    >
      <div className="flex flex-col gap-[34px]">
        <div className="flex flex-col items-start gap-[22px]">
          <div className="flex items-center gap-[26px]">
            <span className="block h-[72px] w-[3px] bg-[#0a0a0a]" />
            <h1 className={`m-0 text-[clamp(44px,8vw,76px)] leading-[.95] tracking-[.01em] ${serif}`}>
              {FOUNDER.name}
            </h1>
          </div>
          <p className="m-0 text-[11px] uppercase leading-[1.4] tracking-[.36em]" style={{ color: VIOLET }}>
            {FOUNDER.role}
          </p>
        </div>
        <p className={`m-0 max-w-[26ch] text-[clamp(22px,2.2vw,28px)] leading-[1.3] text-balance ${serif}`}>
          {FOUNDER.bio}
        </p>
        <div className="flex max-w-[52ch] flex-col gap-4">
          {(FOUNDER.about ?? [FOUNDER.bio]).map((paragraph) => (
            <p key={paragraph} className="m-0 text-[14px] leading-[1.8] text-pretty text-[#4a4a4a]">
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

function Profile() {
  return (
    <section className={`flex flex-col gap-12 py-[100px] ${shell}`}>
      <SectionTitle eyebrow="Профиль" title="Опыт, который становится агентом" />
      <div className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        {FOUNDER.profile.map((block) => (
          <article
            key={block.label}
            className="flex flex-col gap-[14px] border-t-[3px] bg-white px-6 pb-[30px] pt-7"
            style={{ borderTopColor: GREEN }}
          >
            <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[.17em]">{block.label}</span>
            {block.text ? (
              <p className="m-0 text-[12px] leading-[1.8] text-pretty text-[#4a4a4a]">{block.text}</p>
            ) : null}
            {block.items ? (
              <ul className="m-0 flex list-none flex-col p-0">
                {block.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-[10px] py-[6px] text-[12px] leading-[1.7] text-[#4a4a4a]">
                    <span className="h-[6px] w-[6px] flex-none -translate-y-px rounded-full" style={{ background: VIOLET }} />
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
    <section id="contact" className={`flex flex-wrap items-center justify-between gap-10 bg-white py-[90px] ${shell}`}>
      <div className="flex flex-col gap-3">
        <Eyebrow>Связаться</Eyebrow>
        <h2 className={`m-0 text-[30px] leading-[1.2] ${serif}`}>Напишите мне в Telegram</h2>
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

/** Страница основателя: hero с фото, блоки профиля, контакт. */
export function FounderPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <Hero />
        <Profile />
        <Contact />
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
