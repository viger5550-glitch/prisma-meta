import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

export const metadata: Metadata = {
  title: "Слово автора | PRISMA",
  description: "Слово автора проекта Prisma.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <MetaSiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14 sm:px-8 lg:pt-20">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-[56px]">
          Слово автора
        </h1>

        <section className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="relative aspect-[3/4] w-full max-w-[430px] overflow-hidden bg-zinc-100 lg:h-[573px] lg:aspect-auto">
            <Image
              src="/avatar-author.png"
              alt="Виктория Герман"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 430px"
            />
          </div>
          <div className="flex w-full flex-1 flex-col items-start gap-6 border-l border-black pl-10 text-[18px] font-light leading-[1.85] tracking-[0.2em] text-zinc-500 sm:pl-10 lg:h-[573px]">
            <p>
              Впервые осознание того, что я автор, пришло ко мне в проекте «Продуктоделы», в
              котором мы создаём «своё». Именно там я написала свою базу знаний. Она основана на
              простой идее: продукты можно создавать из своего опыта и интереса.
            </p>
            <p>
              В этой базе знаний нет ни одной статьи, которую бы я не прожила на собственном опыте.
              А опыт у меня разнообразный — от предпринимателя в ритейле до продакта в IT. Сейчас я
              ушла из найма, чтобы делать своё. И это оказалось для меня большой радостью. Эта база
              знаний создана для того, чтобы поделиться радостью создания своего.
            </p>
            <p className="text-[18px] tracking-[0.22em] text-zinc-500">@ Виктория Герман</p>
          </div>
        </section>

        <section className="mt-16 w-full border border-zinc-200 bg-zinc-100/40 px-6 py-12 sm:px-10">
          <div className="flex flex-col items-center gap-5">
            <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 4h16v11H8l-4 5V4z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
              Индивидуальный разбор
            </p>
            <Link
              href="https://cal.com/vika-german/консультация"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center bg-black px-8 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Записаться на консультацию
            </Link>
          </div>
        </section>
      </main>
      <MetaSiteFooter />
    </div>
  );
}
