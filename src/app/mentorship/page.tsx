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
              совместная работа над вашим проектом
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-2 md:px-12 md:pb-20 md:pt-4 lg:px-[96px] lg:pb-24 lg:pt-6">
            <div
              className={`max-w-[760px] text-[17px] leading-[1.65] text-zinc-800 ${interSans}`}
            >
              <p>Большинство соло-фаундеров сталкиваются с такими проблемами:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>Строю, а вдруг никому не нужно.</li>
                <li>Хожу по кругу: пробую, не получается, возвращаюсь к началу.</li>
                <li>Не знаю где взять первых людей под тест.</li>
                <li>Получаю обратную связь, но не знаю что с ней делать.</li>
                <li>Непонятно когда остановиться — нет критерия &quot;хватит или продолжать&quot;.</li>
              </ul>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Почему я могу говорить об этом
              </h2>
              <p className="mt-4">
                Я продакт с шестилетним опытом в IT: делала продукты для больших компаний. Но когда начинаешь делать
                продукт для себя, это совсем другая история. Год назад я ушла из найма и прошла, кажется, все
                возможные грабли соло-фаундерства. Теперь помогу вам пройти этот путь быстрее и спокойнее — без лишних
                &quot;граблей&quot;. Я буду вашим внешним фактором и партнёром по движению.
              </p>

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
                  Собираем продуктовую карту — по авторской методологии: аудитории, гипотезы, приоритеты. Встраиваем
                  первые традиции продуктовых исследований — практики, которые потом работают без меня.
                </li>
              </ul>
              <p className="mt-4">
                Это не коучинг. Я не работаю с мотивацией и убеждениями — работаю с твоим проектом, гипотезами и
                задачами. Не делаю за тебя — делаем вместе.
              </p>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Что остаётся
              </h2>
              <p className="mt-4">
                Как у персонального тренера — остаётся не тренер, а практика.
              </p>
              <p className="mt-3">
                После 1-3 месяцев знаешь, что делать и как делать, — не из теории, а из реальной практики рядом с
                кем-то, кто видит проект насквозь. Первые трассы пройдены вместе — дальше путь самостоятельный.
              </p>
              <p className="mt-3">
                Можно вернуться — для глубокой стратегической сессии или когда нужно перенастроить программу. Но
                фундамент уже твой.
              </p>
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
                оба чувствуем, что сработаемся, — стартуем. Стоимость онбординга (5000) идёт в зачёт первого месяца.
              </p>
              <p className="mt-4 text-black">В каждом месяце — 5 встреч:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>
                  <span className="text-black">Трекшн — 4 раза в месяц.</span> Что сделано, что
                  получилось, какой фокус на неделю.
                </li>
                <li>
                  <span className="text-black">Ретро — 1 раз в месяц.</span> Глубокий разбор месяца и
                  корректировка курса.
                </li>
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
