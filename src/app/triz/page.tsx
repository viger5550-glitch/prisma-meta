import type { Metadata } from "next";
import Link from "next/link";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { TrizSolversSection } from "@/components/meta/TrizSolversSection";
import { TRIZ_BOT_URL } from "@/components/meta/trizSolvers";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const BRAND_GREEN = "#00e37a";

const ctaClass = `inline-flex items-center justify-center bg-[#0a0a0a] text-[9px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:bg-[#00e37a] hover:text-[#0a0a0a] ${interSans}`;

export const metadata: Metadata = {
  title: "ТРИЗ-решатели | PRISMA",
  description:
    "Четыре AI-ассистента, которые помогут решить продуктовый кейс.",
};

export default function TrizPage() {
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
              AI-агенты
            </span>

            <h1 className="flex items-center gap-[26px] font-serif text-[48px] font-normal leading-[0.9] tracking-[0.01em] text-[#0a0a0a] md:text-[62px] lg:text-[74px]">
              <span className="block h-16 w-[3px] shrink-0 bg-[#0a0a0a] lg:h-20" aria-hidden />
              <span className="uppercase">ТРИЗ-решатели</span>
            </h1>

            <Link href="/about" className="mt-1.5 flex items-center gap-3.5">
              <span
                className="block size-[30px] shrink-0 rounded-full"
                style={{ backgroundColor: BRAND_GREEN }}
              />
              <span
                className={`text-[9px] font-medium uppercase leading-[1.5] tracking-[0.26em] text-[#4a4a4a] ${interSans}`}
              >
                Автор адаптированной методологии — Виктория Герман
              </span>
            </Link>

            <a
              href={TRIZ_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} mt-[22px] px-[34px] py-[15px]`}
            >
              Начать работу
            </a>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[22px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
            <p
              className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.32em] text-[#a8a8a8] ${interSans}`}
            >
              Что такое ТРИЗ
            </p>
            <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-[1.2] text-[#0a0a0a] md:text-[34px]">
              <span className="block h-[34px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
              <span>Изобретать системно, а не случайно</span>
            </h2>
            <p
              className={`m-0 max-w-[70ch] text-[12.5px] leading-[1.9] text-[#4a4a4a] [text-wrap:pretty] ${interSans}`}
            >
              Теория решения изобретательских задач — методология, созданная советским инженером
              Генрихом Альтшуллером в середине XX века. Её цель — научить людей изобретать
              системно, используя набор логичных шагов, принципов и инструментов. У
              соло-предпринимателя — сплошные изобретательские задачи. Решатели помогают находить
              выход, когда стандартные решения либо слишком дорогие, либо слишком сложные.
            </p>
          </div>
        </section>

        <TrizSolversSection interSansClassName={interSans} />

        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-10 px-6 py-16 md:px-12 md:py-[70px] lg:px-[96px]">
            <div className="flex flex-col gap-2.5">
              <p
                className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.3em] text-[#a8a8a8] ${interSans}`}
              >
                Доступ в телеграм-боте
              </p>
              <div className="flex items-baseline gap-2">
                <span className={`text-[52px] font-light leading-none ${interSans}`}>1.9k</span>
                <span
                  className={`text-[10px] font-medium tracking-[0.05em] text-[#8a8a8a] ${interSans}`}
                >
                  ₽ · донат
                </span>
              </div>
              <p
                className={`m-0 max-w-[46ch] text-[12px] leading-[1.8] text-[#4a4a4a] [text-wrap:pretty] ${interSans}`}
              >
                Четыре решателя разбирают ваш кейс по ТРИЗ — от противоречия до готовой механики.
              </p>
            </div>
            <a
              href={TRIZ_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaClass} px-[52px] py-4 whitespace-nowrap`}
            >
              Попробовать решателей
            </a>
          </div>
        </section>

        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
