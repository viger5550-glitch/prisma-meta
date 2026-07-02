import type { Metadata } from "next";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MentorshipFormatsSection } from "@/components/meta/MentorshipFormatsSection";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export const metadata: Metadata = {
  title: "Персональный трек — mentorship | PRISMA",
  description:
    "Персональный трек на 3 месяца: вместе проходим путь Search → Create → Sale → Lean и собираем твой продукт. Автор и ведущая — Виктория Герман.",
};

export default function MentorshipPage() {
  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-white text-black antialiased">
        <MetaSiteHeader />

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[110px]">
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
              MENTORSHIP
            </p>
            <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
              <span className="flex items-start">
                <span className="mr-1 -translate-x-[0.1em]">|</span>
                <span>Персональный трек</span>
              </span>
            </h1>
            <p
              className={`mt-8 max-w-[546px] p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
              style={{ color: "rgba(95, 94, 94, 0.6)" }}
            >
              программа индивидуального продуктового сопровождения
            </p>

            <div
              className={`mt-10 max-w-[760px] text-[17px] leading-[1.65] text-zinc-800 md:mt-12 ${interSans}`}
            >
              <p>Большинство соло-фаундеров сталкиваются с такими проблемами:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>Много делаю продуктов, но они никому не нужны.</li>
                <li>Много идей, но не знаю как их валидировать.</li>
                <li>Как вообще двигаться, а не топтаться на месте.</li>
                <li>Упс, нечайно изобрел велосипед.</li>
                <li>Как справляться с одиночеством путника.</li>
                <li>Непонятно когда остановиться — нет критерия &quot;хватит или продолжать&quot;.</li>
              </ul>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Почему я могу с этим помочь
              </h2>
              <div className="mt-4 space-y-3">
                <p>
                  Я продакт с шестилетним опытом в IT: делала продукты для больших компаний. Но когда начинаешь делать
                  продукт для себя, это совсем другая история.
                </p>
                <p>
                  Год назад я ушла из найма и прошла, кажется, все возможные грабли соло-фаундерства.
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-black/80">
                  <li>
                    Разработала собственную{" "}
                    <a
                      href="https://knowledge.productodel.ru/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline decoration-black/30 underline-offset-2 transition-colors hover:decoration-black"
                    >
                      методологию
                    </a>
                    , адаптированную именно под собственные проекты.
                  </li>
                  <li>
                    Провела 4 сезона продуктовых{" "}
                    <a
                      href="https://www.prisma-meta.ru/challenge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline decoration-black/30 underline-offset-2 transition-colors hover:decoration-black"
                    >
                      челленджей
                    </a>{" "}
                    — групповые 3-месячные треки для соло-фаундеров и понимаю, как держать трек и формировать навык, а
                    не просто хаотично делать.
                  </li>
                  <li>
                    Вне найма научилась зарабатывать на собственных продуктах и вышла на доход вне найма, но без
                    стресса и выгорания и с кайфом от создания &quot;своего&quot;.
                  </li>
                </ul>
              </div>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Что мы делаем вместе
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-black/80">
                <li>
                  Встраиваем работу над проектом в твою реальную жизнь — не «когда появится время», а в конкретных
                  слотах с конкретным ритмом.
                </li>
                <li>
                  Настраиваем цикл быстрой валидации — находим самое рискованное допущение и проверяем его самым
                  дешёвым способом до того, как строить. Находим первых людей под тест, заранее договариваемся о
                  критериях «работает / не работает».
                </li>
                <li>
                  Строим бэклог и учимся с ним работать — живой инструмент приоритетов. Знаешь, что делать сейчас и
                  почему именно это.
                </li>
                <li>
                  Собираем продуктовую карту — по авторской методологии: аудитории, гипотезы, приоритеты.
                </li>
              </ul>
              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Что остаётся
              </h2>
              <p className="mt-4">После 1-3 месяцев знаешь, что делать и как делать.</p>
              <p className="mt-4 text-black">С тобой остаётся:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>
                  <span className="text-black">Встроенный продуктовый процесс</span> — работа над
                  продуктом живёт в реальности, не на энтузиазме.
                </li>
                <li>
                  <span className="text-black">Продуктовая карта</span> — видно, что делать сейчас и что
                  потом.
                </li>
                <li>
                  <span className="text-black">Навык тестировать гипотезы</span> — быстро, дёшево, с
                  чёткими критериями.
                </li>
                <li>
                  <span className="text-black">База знаний</span> — методологии в виде статей и
                  практических скиллов.
                </li>
              </ul>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Как мы работаем
              </h2>
              <p className="mt-4">
                Первая встреча проходит до начала программы: разбираемся в ситуации и проверяем совместимость. Если
                оба чувствуем, что сработаемся, — стартуем.
              </p>
              <p className="mt-3">
                Стоимость онбординга 5000 руб. — идёт в зачёт первого месяца.
              </p>
              <p className="mt-4 text-black">В каждом месяце — 5 встреч:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>
                  <span className="text-black">Трекшн — 4 раза в месяц.</span> Что сделано, что
                  получилось, какой фокус на неделю.
                </li>
                <li>Ретро — 1 раз в месяц глубокий разбор месяца и корректировка курса.</li>
              </ul>
            </div>
          </div>
        </section>

        <MentorshipFormatsSection interSansClassName={interSans} />

        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
