import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import {
  STUDIO_HERO_AGENTS,
  STUDIO_MARQUEE,
  STUDIO_SMART,
  STUDIO_TEAM,
  STUDIO_TG_URL,
} from "@/components/meta/studioHome";
import { studioFontVars } from "@/components/meta/studioFonts";
import { StudioPortfolio } from "@/components/meta/StudioPortfolio";
import { Dot, Eyebrow, GREEN, SectionTitle, VIOLET, lift, sans, serif, shell } from "@/components/meta/studioUi";

function Hero() {
  const [sales, content, marketing] = STUDIO_HERO_AGENTS;
  const card = `absolute flex w-[62%] flex-col gap-[14px] px-[22px] py-6 transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:z-[5] hover:-translate-y-[10px] hover:rotate-0`;
  const facts = (role: string, kpi: string, strong: string) => (
    <>
      <span>
        <b className={`font-semibold ${strong}`}>Роль</b> — {role}
      </span>
      <span>
        <b className={`font-semibold ${strong}`}>KPI</b> — {kpi}
      </span>
    </>
  );

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
          <p className="m-0 text-[11px] uppercase leading-[1.4] tracking-[.36em] text-[#a8a8a8]">
            AI-студия по разработке smart агентов
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-7">
          <h2 className={`m-0 max-w-[15ch] text-[clamp(38px,4.6vw,68px)] leading-[1.08] text-balance ${serif}`}>
            Соединяем методологию и{" "}
            <span className="italic" style={{ boxShadow: `${GREEN} 0 -0.28em 0 inset` }}>
              технологию
            </span>
          </h2>
          <div className="mt-[6px] flex flex-wrap gap-[10px]">
            <a
              href="#contact"
              className="bg-[#0a0a0a] px-10 py-4 text-[9px] font-bold leading-none tracking-[.24em] text-white transition-colors duration-[250ms] hover:bg-[#00e37a] hover:text-[#0a0a0a]"
            >
              ОБСУДИТЬ АГЕНТА
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] w-full max-w-[480px] justify-self-center">
        <article
          className={`${card} left-0 top-[10px] z-[1] -rotate-6 bg-[#f1f1f1] hover:shadow-[0_24px_48px_rgba(0,0,0,.12)]`}
        >
          <span className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em]" style={{ color: VIOLET }}>
            {sales.tag}
          </span>
          <span className={`text-[22px] leading-[1.2] ${serif}`}>{sales.title}</span>
          <div className="flex flex-col gap-2 border-t border-[#dcdcdc] pt-3 text-[11px] leading-[1.6] text-[#4a4a4a]">
            {facts(sales.role, sales.kpi, "text-[#0a0a0a]")}
          </div>
        </article>

        <article
          className={`${card} right-0 top-[130px] z-[2] rotate-[4deg] bg-[#0a0a0a] text-white shadow-[0_20px_44px_rgba(0,0,0,.16)] hover:shadow-[0_30px_60px_rgba(0,0,0,.24)]`}
        >
          <div className="flex items-center justify-between gap-[10px]">
            <span className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em] text-[#f1f1f1]">
              {content.tag}
            </span>
            <span
              className="flex items-center gap-[6px] rounded-full px-[10px] py-1 text-[7.5px] font-bold uppercase leading-none tracking-[.16em] text-[#052]"
              style={{ background: GREEN }}
            >
              <span className="studio-motion h-[5px] w-[5px] rounded-full bg-[#052] animate-[studio-pulse_1.6s_ease-in-out_infinite]" />
              в работе
            </span>
          </div>
          <span className={`text-[22px] leading-[1.2] ${serif}`}>{content.title}</span>
          <div className="flex flex-col gap-2 border-t border-[#2a2a2a] pt-3 text-[11px] leading-[1.6] text-[#bdbdbd]">
            {facts(content.role, content.kpi, "text-white")}
          </div>
        </article>

        <article
          className={`${card} left-[8%] top-[290px] z-[3] -rotate-2 border-t-[3px] bg-white shadow-[0_14px_34px_rgba(0,0,0,.09)] hover:shadow-[0_24px_48px_rgba(0,0,0,.14)]`}
          style={{ borderTopColor: GREEN }}
        >
          <span className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em]" style={{ color: VIOLET }}>
            {marketing.tag}
          </span>
          <span className={`text-[22px] leading-[1.2] ${serif}`}>{marketing.title}</span>
          <div className="flex flex-col gap-2 border-t border-[#e2e2e2] pt-3 text-[11px] leading-[1.6] text-[#4a4a4a]">
            {facts(marketing.role, marketing.kpi, "text-[#0a0a0a]")}
          </div>
        </article>
      </div>
    </header>
  );
}

function Marquee() {
  const row = (
    <div
      className={`flex items-center gap-10 whitespace-nowrap pr-10 text-[34px] italic leading-none ${serif}`}
    >
      {STUDIO_MARQUEE.map((word) => (
        <span key={word} className="contents">
          <span>{word}</span>
          <Dot size={10} />
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden className="overflow-hidden border-b border-[#e2e2e2] py-[30px]">
      <div className="flex w-max animate-[studio-marquee_38s_linear_infinite]">
        {row}
        {row}
      </div>
    </div>
  );
}

function Smart() {
  return (
    <section id="smart" className={`flex flex-col gap-12 pb-[110px] pt-[88px] ${shell}`}>
      <div className="flex flex-wrap items-end justify-end gap-6">
        <span className={`text-[clamp(56px,9vw,120px)] leading-[.8] tracking-[.06em] text-[#e2e2e2] ${serif}`}>
          SMART
        </span>
      </div>
      <div className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        {STUDIO_SMART.map((item) => (
          <article
            key={item.letter}
            className={`flex flex-col gap-4 border-t-[3px] px-6 pb-[30px] pt-7 hover:-translate-y-[10px] ${lift} ${
              item.dark
                ? "border-[#00e37a] bg-[#0a0a0a] text-white hover:shadow-[0_30px_56px_rgba(0,0,0,.22)]"
                : "border-transparent bg-white hover:border-[#00e37a] hover:shadow-[0_24px_48px_rgba(0,0,0,.10)]"
            }`}
          >
            <span className={`text-[64px] leading-none ${serif}`} style={item.dark ? { color: GREEN } : undefined}>
              {item.letter}
            </span>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[.17em]">{item.title}</span>
              <span
                className="text-[9.5px] font-semibold uppercase leading-[1.4] tracking-[.19em]"
                style={{ color: item.dark ? "#f1f1f1" : VIOLET }}
              >
                {item.label}
              </span>
            </div>
            <p className={`m-0 text-[11.5px] leading-[1.75] text-pretty ${item.dark ? "text-[#bdbdbd]" : "text-[#4a4a4a]"}`}>
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const profileLabel = "text-[8px] font-medium uppercase leading-none tracking-[.24em] text-[#8a8a8a]";
const profileText = "m-0 text-[11.5px] leading-[1.75] text-pretty text-[#2a2a2a]";

function Team() {
  return (
    <section id="team" className={`flex flex-col gap-12 bg-white py-[100px] ${shell}`}>
      <SectionTitle eyebrow="Команда" title="Практики, чей опыт становится агентом" />
      {/* subgrid выравнивает имя, био и «отвечает за» по строкам между карточками.
          Фон — у ячеек, а строка профиля self-start: раскрытый профиль не тянет соседние карточки. */}
      <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(max(200px,calc((100%_-_4*20px)/5)),1fr))]">
        {STUDIO_TEAM.map((member) => (
          <article key={member.name} className="row-span-5 grid grid-rows-subgrid gap-y-0">
            <div className="aspect-[4/5] overflow-hidden bg-[#e2e2e2]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={member.name}
                className="block h-full w-full object-cover grayscale"
                style={{ objectPosition: member.objectPosition }}
              />
            </div>
            <div className="flex flex-col gap-[6px] bg-[#f1f1f1] px-[22px] pt-6">
              <span className="text-[11px] font-bold uppercase leading-[1.4] tracking-[.17em]">{member.name}</span>
              <span className="text-[9.5px] font-semibold uppercase leading-[1.4] tracking-[.19em]" style={{ color: VIOLET }}>
                {member.role}
              </span>
            </div>
            <div className="bg-[#f1f1f1] px-[22px] pt-4">
              <p className="m-0 text-[11.5px] leading-[1.75] text-pretty text-[#4a4a4a]">{member.bio}</p>
            </div>
            <div className="bg-[#f1f1f1] px-[22px] pt-4">
              <div className="flex flex-col gap-2 border-t border-[#e2e2e2] pt-4">
                <span className={profileLabel}>В агентах отвечает за</span>
                <p className={profileText}>{member.responsibility}</p>
              </div>
            </div>
            <div className="self-start bg-[#f1f1f1] px-[22px] pb-[26px] pt-4">
              <details name="studio-team" className="group border-t border-[#e2e2e2]">
                <summary className="flex cursor-pointer list-none items-center justify-between pt-[14px] text-[9px] font-bold uppercase leading-none tracking-[.24em] text-[#0a0a0a] [&::-webkit-details-marker]:hidden">
                  Полный профиль
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[14px] font-normal leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="flex flex-col gap-[14px] pt-4">
                  {member.profile.map((block) => (
                    <div key={block.label} className="flex flex-col gap-[6px]">
                      <span className={profileLabel}>{block.label}</span>
                      {block.text ? <p className={profileText}>{block.text}</p> : null}
                      {block.items ? (
                        <ul className="m-0 flex list-none flex-col p-0">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-baseline gap-[10px] py-[6px] text-[11.5px] leading-[1.7] text-[#2a2a2a]">
                              <span
                                className="h-[6px] w-[6px] flex-none -translate-y-px rounded-full"
                                style={{ background: VIOLET }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </details>
            </div>
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
        <Eyebrow>Аудит процессов</Eyebrow>
        <h2 className={`m-0 text-[30px] leading-[1.2] ${serif}`}>Чек-ап: где вашему бизнесу нужен агент</h2>
        <div className="flex items-baseline gap-[10px]">
          <span className="text-[72px] font-light leading-none" style={{ boxShadow: `inset 0 -.18em 0 ${GREEN}` }}>
            60
          </span>
          <span className="text-[10px] font-medium leading-none tracking-[.05em] text-[#8a8a8a]">
            минут · разбор процессов
          </span>
        </div>
        <p className="m-0 max-w-[46ch] text-[12px] leading-[1.8] text-pretty text-[#4a4a4a]">
          Разберём ваши процессы, найдём, где агент даст эффект, и сформулируем его цель в метриках.
        </p>
        <div className="flex max-w-[46ch] flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-[#e2e2e2] pt-[14px]">
          <span className={`text-[26px] leading-none ${serif}`}>7 000 ₽</span>
          <span className="text-[11px] leading-[1.6] text-[#4a4a4a]">
            Засчитаем в стоимость проекта, если пойдём в работу
          </span>
        </div>
      </div>
      <a
        href={STUDIO_TG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whitespace-nowrap bg-[#00e37a] px-[60px] py-5 text-[9px] font-bold leading-none tracking-[.24em] text-[#0a0a0a] transition-[background-color,color,transform] duration-300 hover:-translate-y-[3px] hover:bg-[#0a0a0a] hover:text-white"
      >
        ЗАПИСАТЬСЯ
      </a>
    </section>
  );
}

/** Главная студии: hero, бегущая строка, SMART, команда, кейсы, чек-ап. */
export function MetaHomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <Hero />
        <Marquee />
        <Smart />
        <Team />
        <StudioPortfolio />
        <Contact />
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
