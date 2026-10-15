import Link from "next/link";

import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { studioFontVars } from "@/components/meta/studioFonts";
import { Dot, GREEN, VIOLET, sans, serif, shell } from "@/components/meta/studioUi";

const DIRECTIONS = [
  {
    href: "/business",
    word: "business tech",
    tags: "Smart agents",
    text: "Smart agents на опыте практиков, настроенные под процессы вашего бизнеса.",
    violet: false,
  },
  {
    href: "/health-tech",
    word: "health tech",
    tags: "Companion apps",
    text: "Companion apps для терапевтического процесса и смены привычек.",
    violet: true,
  },
];

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
            Студия по разработке смарт агентов и приложений
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-7">
          <h2 className={`m-0 max-w-[20ch] text-[clamp(38px,4.6vw,68px)] leading-[1.08] text-balance ${serif}`}>
            Соединяем авторские методологии и новые{" "}
            <span className="italic" style={{ boxShadow: `${GREEN} 0 -0.28em 0 inset` }}>
              технологии
            </span>
          </h2>
        </div>
      </div>
    </header>
  );
}

function Directions() {
  return (
    <section className={`flex flex-1 flex-col gap-10 pb-[110px] pt-[88px] ${shell}`}>
      <div className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        {DIRECTIONS.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex flex-col border-b-[3px] border-transparent bg-white text-[#0a0a0a] transition-[scale,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:z-[1] hover:scale-[1.1] hover:border-[#00e37a] hover:shadow-[0_24px_48px_rgba(0,0,0,.10)]"
          >
            <div
              className="flex aspect-[16/8] flex-col justify-between px-6 py-[22px] text-white"
              style={{ background: item.violet ? VIOLET : "#0a0a0a" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] leading-none" style={{ color: item.violet ? "#d8d8f4" : "#8a8a8a" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Dot size={8} />
              </div>
              <span className={`text-[clamp(34px,4.4vw,60px)] italic leading-none ${serif}`}>
                {item.word}
                <span style={{ color: GREEN }}>.</span>
              </span>
              <span
                className="text-[8.5px] font-semibold uppercase leading-[1.4] tracking-[.24em]"
                style={{ color: item.violet ? "#fff" : "#a8a8a8" }}
              >
                {item.tags}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 px-6 pb-[26px] pt-6">
              <p className="m-0 max-w-[46ch] text-[12px] leading-[1.75] text-pretty text-[#4a4a4a]">{item.text}</p>
              <span className="mt-auto pt-2 text-[9px] font-bold leading-none tracking-[.24em]">ПЕРЕЙТИ →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** Стартовая студии: hero и выбор направления — бизнес или health tech. */
export function StudioStartPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`flex flex-1 flex-col ${studioFontVars} ${sans}`}>
        <Hero />
        <Directions />
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
