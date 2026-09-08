import type { Metadata } from "next";
import Link from "next/link";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { TrizSolversSection } from "@/components/meta/TrizSolversSection";
import { TRIZ_BOT_URL } from "@/components/meta/trizSolvers";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export const metadata: Metadata = {
  title: "ТРИЗ-решатели | PRISMA",
  description:
    "Четыре AI-ассистента, которые помогут решить продуктовый кейс.",
};

export default function TrizPage() {
  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-white text-black antialiased">
        <MetaSiteHeader />

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[110px]">
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
              AI АГЕНТЫ
            </p>
            <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
              <span className="flex items-start">
                <span className="mr-1 -translate-x-[0.1em]">|</span>
                <span>ТРИЗ-решатели</span>
              </span>
            </h1>
            <p
              className={`mt-8 max-w-[546px] p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
              style={{ color: "rgba(95, 94, 94, 0.6)" }}
            >
              четыре AI-ассистента, которые помогут решить продуктовый кейс
            </p>
            <Link href="/about" className="mt-8 flex items-center gap-3.5">
              <span
                className="block size-[34px] shrink-0 rounded-full"
                style={{ backgroundColor: "#0CDA76" }}
              />
              <span
                className={`text-[10px] font-normal uppercase leading-[15px] tracking-[0.3em] ${interSans}`}
                style={{ color: "rgba(95, 94, 94, 0.6)" }}
              >
                Автор адаптированной методологии Виктория Герман
              </span>
            </Link>
            <div className="mt-11 flex flex-wrap items-center gap-6">
              <a
                href={TRIZ_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center bg-black px-10 py-3.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:bg-zinc-900 ${interSans}`}
              >
                Начать работу
              </a>
              <p className="flex items-baseline gap-1 text-black">
                <span className="font-serif text-[30px] font-normal leading-none tracking-tight">
                  1K
                </span>
                <span className={`text-[11px] font-normal leading-none tracking-wide ${interSans}`}>
                  /one-time
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
              ЧТО ТАКОЕ ТРИЗ
            </p>
            <h2 className="mt-5 flex items-start font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
              <span className="mr-1 -translate-x-[0.1em]">|</span>
              <span>Изобретать системно, а не случайно</span>
            </h2>
            <p
              className={`mt-8 max-w-[760px] text-[17px] leading-[1.8] text-zinc-800 ${interSans}`}
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

        <section className="border-t border-black/5 bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-16 text-center md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
            <h2 className="mx-auto max-w-[640px] font-serif text-[32px] leading-[1.15] tracking-[-0.02em] text-black md:text-[40px]">
              Готовы решать задачи по-новому?
            </h2>
            <a
              href={TRIZ_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center justify-center bg-black px-10 py-3.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white transition-colors hover:bg-zinc-900 ${interSans}`}
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
