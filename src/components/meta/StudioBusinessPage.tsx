import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import {
  STUDIO_MARQUEE,
  STUDIO_SMART,
  STUDIO_TEAM,
  STUDIO_TG_URL,
} from "@/components/meta/studioHome";
import { studioFontVars } from "@/components/meta/studioFonts";
import { StudioPortfolio } from "@/components/meta/StudioPortfolio";
import { Dot, Eyebrow, GREEN, SectionTitle, VIOLET, lift, sans, serif, shell } from "@/components/meta/studioUi";

function Hero() {
  return (
    <header
      className={`bg-white pb-24 pt-12 ${shell}`}
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
            Студия по разработке AI native продуктов
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-7">
          <h2 className={`m-0 max-w-[20ch] text-[clamp(38px,4.6vw,68px)] leading-[1.08] text-balance ${serif}`}>
            Соединяем авторские методологии и{" "}
            <span className="italic" style={{ boxShadow: `${GREEN} 0 -0.28em 0 inset` }}>
              технологии
            </span>
          </h2>
          <a href="/founder" className="group flex items-center gap-[14px] self-start text-[#0a0a0a]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STUDIO_TEAM[0].photo}
              alt={STUDIO_TEAM[0].name}
              className="h-11 w-11 flex-none rounded-full object-cover grayscale"
              style={{ objectPosition: STUDIO_TEAM[0].objectPosition }}
            />
            <span className="border-b border-[#0a0a0a]/30 text-[13px] font-semibold leading-[1.4] transition-colors group-hover:border-[#00e37a]">
              {STUDIO_TEAM[0].name}
            </span>
          </a>
          <div className="mt-[6px] flex flex-wrap gap-[10px]">
            <a
              href="#contact"
              className="bg-[#0a0a0a] px-10 py-4 text-[9px] font-bold leading-none tracking-[.24em] text-white transition-colors duration-[250ms] hover:bg-[#00e37a] hover:text-[#0a0a0a]"
            >
              ОБСУДИТЬ ПРОЕКТ
            </a>
          </div>
        </div>
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

/** Блок команды временно скрыт — чтобы вернуть, поставить true. */
const SHOW_TEAM = false;

/** Блок SMART временно скрыт — чтобы вернуть, поставить true. См. docs/hidden-blocks.md. */
const SHOW_SMART = false;

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
        <Eyebrow>Разбор методологии</Eyebrow>
        <h2 className={`m-0 text-[30px] leading-[1.2] ${serif}`}>Чек-ап: какой AI-продукт вырастет из вашей методологии</h2>
        <div className="flex items-baseline gap-[10px]">
          <span className="text-[72px] font-light leading-none" style={{ boxShadow: `inset 0 -.18em 0 ${GREEN}` }}>
            60
          </span>
          <span className="text-[10px] font-medium leading-none tracking-[.05em] text-[#8a8a8a]">
            минут · разбор методологии
          </span>
        </div>
        <p className="m-0 max-w-[46ch] text-[12px] leading-[1.8] text-pretty text-[#4a4a4a]">
          Разберём вашу методологию, найдём, что в ней можно передать агенту или приложению, и сформулируем, каким будет продукт и как измерить его результат.
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

/** Главная студии: hero, бегущая строка, SMART, команда, портфолио по направлениям, чек-ап. */
export function StudioBusinessPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <Hero />
        <Marquee />
        {SHOW_SMART ? <Smart /> : null}
        {SHOW_TEAM ? <Team /> : null}
        <StudioPortfolio />
        <Contact />
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
