import Image from "next/image";

import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { StudioCaseFlows } from "@/components/meta/StudioCaseFlows";
import type { StudioCaseDetails } from "@/components/meta/studioCases";
import { studioFontVars } from "@/components/meta/studioFonts";
import { STUDIO_TG_URL } from "@/components/meta/studioHome";
import { Eyebrow, GREEN, VIOLET, sans, serif, shell } from "@/components/meta/studioUi";

function screensLabel(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} экран`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} экрана`;
  return `${n} экранов`;
}

function BarTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[18px]">
      <span className="block h-[34px] w-[3px] flex-none bg-[#0a0a0a]" />
      <h2 className={`m-0 text-[30px] leading-[1.2] ${serif}`}>{children}</h2>
    </div>
  );
}

/** Страница кейса портфолио студии: галерея, проблема, что пробовали, решение по потокам. */
export function StudioCasePage({ item }: { item: StudioCaseDetails }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f1f1f1] text-[#0a0a0a] antialiased">
      <MetaSiteHeader wide />
      <main className={`${studioFontVars} ${sans}`}>
        <header className={`flex flex-col gap-[26px] bg-white pb-[88px] pt-[72px] ${shell}`}>
          <div className="flex flex-wrap items-center gap-[10px]">
            <span
              className="rounded-full px-[10px] py-1 text-[7.5px] font-bold uppercase leading-none tracking-[.16em] text-[#005522]"
              style={{ background: GREEN }}
            >
              AI-агенты
            </span>
            <span
              className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em]"
              style={{ color: VIOLET }}
            >
              {item.stack}
            </span>
          </div>
          <div className="flex items-start gap-4">
            <span className="block w-[3px] flex-none self-stretch bg-[#0a0a0a]" />
            <h1 className={`m-0 max-w-[22ch] text-[clamp(34px,4.4vw,58px)] leading-[1.12] text-balance ${serif}`}>
              {item.title}
            </h1>
          </div>
          <div className="mt-[26px] flex flex-col gap-3">
            <span className="text-[8px] font-medium uppercase leading-none tracking-[.24em] text-[#8a8a8a]">
              Галерея · {screensLabel(item.gallery.length)}
            </span>
            <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 lg:grid-cols-5">
              {item.gallery.map((shot, i) => (
                <figure
                  key={shot.src}
                  className="m-0 flex flex-col gap-2 transition-transform duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      // Широкие скриншоты в квадрате с object-cover сильно увеличиваются, ресайз Next их мылит — отдаём оригинал.
                      unoptimized
                      className={item.galleryFit === "cover" ? "object-cover" : "object-contain"}
                    />
                  </div>
                  <figcaption className="font-mono text-[9px] leading-[1.4] text-[#8a8a8a]">
                    {String(i + 1).padStart(2, "0")} · {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </header>

        <section className={`flex flex-wrap items-start gap-x-[6vw] gap-y-12 py-24 ${shell}`}>
          <div className="flex flex-[1_1_220px] flex-col gap-4">
            <Eyebrow>01 · В чём проблема</Eyebrow>
            <p className={`m-0 text-[clamp(30px,3.4vw,46px)] italic leading-[1.15] text-balance ${serif}`}>
              <span style={{ boxShadow: `inset 0 -.25em 0 ${GREEN}` }}>{item.quote}</span>
            </p>
          </div>
          <div className="flex max-w-[62ch] flex-[2_1_380px] flex-col gap-[18px]">
            {item.problem.map((text) => (
              <p key={text} className="m-0 text-[14px] leading-[1.9] text-pretty text-[#2a2a2a]">
                {text}
              </p>
            ))}
          </div>
        </section>

        <section className={`flex flex-col gap-10 bg-white py-24 ${shell}`}>
          <BarTitle>{item.triedTitle}</BarTitle>
          <ul className="m-0 ml-[21px] flex max-w-[760px] list-none flex-col border-t border-[#e2e2e2] p-0">
            {item.tried.map((t) => (
              <li
                key={t.title}
                className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 border-b border-[#e2e2e2] py-[18px]"
              >
                <span className="mt-[9px] size-2 rounded-full" style={{ background: VIOLET }} />
                <span className="text-[13.5px] leading-[1.8] text-pretty text-[#4a4a4a]">
                  <b className={`text-[20px] leading-[1.3] text-[#0a0a0a] ${serif}`}>{t.title}</b> — {t.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={`flex flex-col gap-10 py-24 ${shell}`}>
          <div className="flex flex-col gap-4">
            <BarTitle>Что придумали</BarTitle>
            <p className="m-0 ml-[21px] max-w-[56ch] text-[14px] leading-[1.9] text-pretty text-[#2a2a2a]">
              {item.solution}
            </p>
          </div>
          <StudioCaseFlows flows={item.flows} linked={item.linkedFlows} />
        </section>

        <section className={`flex flex-wrap items-center justify-between gap-[30px] pb-20 ${shell}`}>
          <a
            href={STUDIO_TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00e37a] px-[52px] py-[18px] text-[9px] font-bold uppercase leading-none tracking-[.24em] text-[#0a0a0a] transition-colors duration-[250ms] hover:bg-[#0a0a0a] hover:text-white"
          >
            {item.cta}
          </a>
        </section>
      </main>
      <MetaSiteFooter wide />
    </div>
  );
}
