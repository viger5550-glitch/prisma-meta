import { homeShell } from "./homeShell";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const WRITE_URL = "https://t.me/vigerman";

export function HomeAuthorSection() {
  return (
    <section className="bg-white">
      <div className={`${homeShell} py-16 md:py-24 lg:py-[120px]`}>
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-start md:gap-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar-vika.png"
            alt="Виктория Герман"
            width={160}
            height={160}
            decoding="async"
            className="size-32 shrink-0 rounded-full object-cover object-[center_28%] md:size-40"
          />

          <div className="min-w-0 max-w-[760px]">
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
              ОБ АВТОРЕ
            </p>
            <h2 className="mt-5 flex items-start font-serif text-[36px] leading-[0.95] tracking-[-0.03em] text-black md:text-[48px]">
              <span className="mr-1 -translate-x-[0.1em]">|</span>
              <span>Виктория Герман</span>
            </h2>
            <div
              className={`mt-8 space-y-5 text-[17px] leading-[1.8] text-zinc-800 ${interSans}`}
            >
              <p>
                Продуктолог с опытом более 6 лет в создании цифровых продуктов для бизнеса. Карьеру
                начинала как бизнес-аналитик, затем развивалась как продакт-менеджер в крупных
                компаниях — Luxoft, Professional, Ecom.tech (Мегамаркет, Самокат), где занималась
                разработкой и запуском продуктов для бизнес-сегмента.
              </p>
              <p>
                Сейчас — соло фаундер, делаю свои продукты и помогаю экспертам и фаундерам делать
                свои.
              </p>
            </div>
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
