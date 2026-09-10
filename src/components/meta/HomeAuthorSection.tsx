import { homeShell } from "./homeShell";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const WRITE_URL = "https://t.me/vigerman";

export function HomeAuthorSection() {
  return (
    <section className="bg-white">
      <div className={`${homeShell} py-16 md:py-24 lg:py-[120px]`}>
        <div className="flex max-w-[640px] items-start gap-6 md:gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar-vika.png"
            alt="Виктория Герман"
            width={96}
            height={96}
            decoding="async"
            className="size-24 shrink-0 rounded-full object-cover object-[center_28%]"
          />

          <div>
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
              ОБ АВТОРЕ
            </p>
            <h2 className="mt-5 flex items-start font-serif text-[36px] leading-[0.95] tracking-[-0.03em] text-black md:text-[48px]">
              <span className="mr-1 -translate-x-[0.1em]">|</span>
              <span>Виктория Герман</span>
            </h2>
            <p
              className={`mt-6 max-w-[420px] text-[15px] leading-[1.7] text-zinc-600 ${interSans}`}
            >
              6 лет в разработке AI продуктов
              <br />
              4 потока продуктовых трекшенов,
              <br />
              Авторская продуктовая методология по созданию авторских продуктов
            </p>
            <a
              href={WRITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex h-11 items-center justify-center bg-black px-8 text-[13px] font-medium text-white transition-colors hover:bg-zinc-900 ${interSans}`}
            >
              Написать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
