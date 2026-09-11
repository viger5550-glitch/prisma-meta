import type { Metadata } from "next";

import {
  APPS_CASES,
  APPS_THINGS,
  APPS_WRITE_URL,
  type AppsCase,
  type AppsCaseField,
} from "@/components/meta/appsLanding";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const BRAND_GREEN = "#00e37a";

const ctaClass = `inline-flex items-center justify-center bg-[#0a0a0a] text-[9px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#00e37a] hover:text-[#0a0a0a] ${interSans}`;

export const metadata: Metadata = {
  title: "Разработка мини-аппов | PRISMA",
  description:
    "Собираю мини-аппы в Telegram для экспертов и сообществ: там, где нужен не разговор, а экран.",
};

export default function AppsPage() {
  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-[#F2F2F2] text-[#0a0a0a] antialiased">
        <MetaSiteHeader />

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-6 pb-16 pt-12 md:px-12 md:pb-20 lg:px-[96px] lg:pb-[100px] lg:pt-[70px]">
            <span
              className={`rounded-full px-4 py-[7px] text-[8px] font-bold uppercase tracking-[0.2em] text-[#0a0a0a] ${interSans}`}
              style={{ backgroundColor: BRAND_GREEN }}
            >
              Аутсорс
            </span>

            <h1 className="flex max-w-[22ch] items-start gap-[26px] font-serif text-[34px] font-normal leading-[1.05] tracking-[0.01em] text-[#0a0a0a] md:text-[48px] lg:text-[64px]">
              <span
                className="mt-1 block h-[80px] w-[3px] shrink-0 bg-[#0a0a0a] md:h-[120px] lg:h-[160px]"
                aria-hidden
              />
              <span>Ваш метод — как приложение, которым человек пользуется сам</span>
            </h1>

            <p
              className={`m-0 max-w-[66ch] text-[12.5px] leading-[1.9] text-[#4a4a4a] [text-wrap:pretty] ${interSans}`}
            >
              Собираю мини-аппы в Telegram для экспертов и сообществ: там, где нужен не разговор, а
              экран — заполнить, увидеть прогресс, вернуться через неделю.
            </p>

            <a href="#cta" className={`${ctaClass} mt-[22px] px-[52px] py-4`}>
              Обсудить метод
            </a>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[22px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <p
              className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.32em] text-[#a8a8a8] ${interSans}`}
            >
              В чём идея
            </p>
            <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-[1.2] text-[#0a0a0a] md:text-[34px]">
              <span className="block h-[34px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
              <span>Мини-апп как помощник</span>
            </h2>
            <p
              className={`m-0 max-w-[70ch] text-[12.5px] leading-[1.9] text-[#2a2a2a] [text-wrap:pretty] ${interSans}`}
            >
              Мини-апп живёт в Telegram: без установки, без регистрации, открывается из чата за
              секунду. Для сообществ и клиентских потоков это решает главное — люди доходят.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[22px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <p
              className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.32em] text-[#a8a8a8] ${interSans}`}
            >
              Что получаете
            </p>
            <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-[1.2] text-[#0a0a0a] md:text-[34px]">
              <span className="block h-[34px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
              <span>Три вещи</span>
            </h2>
            <div className="mt-2.5 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {APPS_THINGS.map((item) => (
                <article
                  key={item.n}
                  className="flex flex-col gap-3 bg-[#F2F2F2] px-6 py-[26px]"
                >
                  <span
                    className={`text-[10px] font-semibold tracking-[0.19em] text-[#5a5ad6] ${interSans}`}
                  >
                    {item.n}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase leading-[1.4] tracking-[0.17em] text-[#0a0a0a] ${interSans}`}
                  >
                    {item.title}
                  </span>
                  <p
                    className={`m-0 text-[11.5px] leading-[1.8] text-[#4a4a4a] [text-wrap:pretty] ${interSans}`}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[22px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <p
              className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.32em] text-[#a8a8a8] ${interSans}`}
            >
              Что на практике
            </p>
            <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-[1.2] text-[#0a0a0a] md:text-[34px]">
              <span className="block h-[34px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
              <span>Кейсы</span>
            </h2>
            <div className="mt-2.5 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {APPS_CASES.map((item) => (
                <AppsCaseCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-10 px-6 py-16 md:px-12 md:py-[70px] lg:px-[96px]">
            <div className="flex flex-col gap-2.5">
              <p
                className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.3em] text-[#a8a8a8] ${interSans}`}
              >
                Разбор метода
              </p>
              <div className="flex items-baseline gap-2">
                <span className={`text-[52px] font-light leading-none ${interSans}`}>60</span>
                <span
                  className={`text-[10px] font-medium tracking-[0.05em] text-[#8a8a8a] ${interSans}`}
                >
                  минут · бесплатная сессия
                </span>
              </div>
              <p
                className={`m-0 max-w-[46ch] text-[12px] leading-[1.8] text-[#4a4a4a] [text-wrap:pretty] ${interSans}`}
              >
                Расскажите про свой метод или сообщество — покажу, как это ложится в мини-апп.
              </p>
            </div>
            <a
              href={APPS_WRITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} px-[52px] py-4 whitespace-nowrap`}
            >
              Написать
            </a>
          </div>
        </section>

        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}

function AppsCaseCard({ item }: { item: AppsCase }) {
  return (
    <article className="flex flex-col gap-3.5 bg-white px-[26px] py-7">
      <span
        className={`text-[10px] font-semibold tracking-[0.19em] text-[#5a5ad6] ${interSans}`}
      >
        {item.label}
      </span>
      <h3 className="font-serif text-[22px] font-normal leading-[1.2] text-[#0a0a0a]">
        {item.title}
      </h3>
      {item.fields.map((field) => (
        <CaseField key={field.label} field={field} />
      ))}
      <div className="flex flex-col gap-1.5 border-t border-[#e0e0e0] pt-4">
        <CaseField field={item.outcome} emphasis />
      </div>
    </article>
  );
}

function CaseField({
  field,
  emphasis = false,
}: {
  field: AppsCaseField;
  emphasis?: boolean;
}) {
  const bodyClass = emphasis ? "text-[#2a2a2a]" : "text-[#4a4a4a]";

  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={`text-[8.5px] font-bold uppercase leading-none tracking-[0.24em] text-[#0a0a0a] ${interSans}`}
      >
        {field.label}
      </span>
      <p className={`m-0 text-[11.5px] leading-[1.8] [text-wrap:pretty] ${bodyClass} ${interSans}`}>
        {field.text}
      </p>
    </div>
  );
}
