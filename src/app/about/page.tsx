import type { Metadata } from "next";
import Link from "next/link";
import { BackButton } from "@/components/meta/BackButton";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

export const metadata: Metadata = {
  title: "Об авторе | PRISMA",
  description: "Об авторе проекта Prisma.",
};

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <MetaSiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-3 sm:px-8 sm:pt-3 lg:pt-4">
        <BackButton fallbackHref="/challenge" />
        <p
          className={`mt-12 text-[10px] uppercase tracking-[0.4em] text-black/50 sm:mt-16 lg:mt-[88px] ${interSans}`}
        >
          AUTHOR
        </p>
        <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
          <span className="flex items-start">
            <span className="mr-1 -translate-x-[0.1em]">|</span>
            <span>Об авторе</span>
          </span>
        </h1>

        <section className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="relative aspect-[3/4] w-full max-w-[430px] overflow-hidden bg-zinc-100 lg:h-[573px] lg:aspect-auto">
            <video
              src="/author-portrait.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Виктория Герман"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div
            className={`flex w-full flex-1 flex-col text-[15px] leading-[1.7] text-black/85 sm:text-[16px] lg:h-[573px] ${interSans}`}
          >
            <div className="flex flex-1 flex-col items-start gap-4 lg:overflow-y-auto">
              <p>Осознание того, что я автор, пришло ко мне через работу с продуктами.</p>
              <p>
                У меня 6 лет опыта в IT как продуктолога и бэкграунд предпринимателя в ритейле. Я
                пробовала разные роли, но в какой-то момент стало понятно: мне важно не просто делать
                продукты, а создавать своё.
              </p>
              <p>
                Сейчас я ушла из найма и строю продукты из своей экспертизы, опыта и интереса. За это
                время я запустила несколько потоков челленджа «Продуктовые авторы» и разработала свою
                методологию Prisma.
              </p>
              <p>
                Она строится на простой идее: продукт можно создавать из себя — из своего опыта,
                мышления и того, как ты видишь мир.
              </p>
              <p>
                Моя задача — помочь другим прийти к этому же: делать свои продукты, выстраивать из
                них систему и зарабатывать на этом, не копируя чужие модели, а опираясь на своё
                авторство.
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.22em] text-black/60">
                @ Виктория Герман
              </p>
            </div>
            <Link
              href="https://cal.com/vika-german/консультация"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex h-11 w-fit items-center justify-center bg-black px-8 text-[15px] font-medium text-white transition-opacity hover:opacity-90 sm:text-[16px] ${interSans}`}
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
