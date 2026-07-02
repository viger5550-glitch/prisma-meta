import type { Metadata } from "next";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { ManifestOfferCard } from "@/components/meta/ManifestOfferCard";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const MENTORSHIP_INTRO_URL = "https://cal.com/vika-german/1-1-встречи";

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
              <div className="mt-4 space-y-3">
                <p>
                  Я продакт с шестилетним опытом в IT: делала продукты для больших компаний. Но когда начинаешь делать
                  продукт для себя, это совсем другая история.
                </p>
                <p>
                  Год назад я ушла из найма и прошла, кажется, все возможные грабли соло-фаундерства.
                </p>
                <p>
                  Теперь помогу вам пройти этот путь быстрее и спокойнее — без лишних &quot;граблей&quot;.
                </p>
                <p>Я буду вашим внешним фактором и партнёром по движению.</p>
              </div>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Что делаем вместе
              </h2>
              <ul className="mt-4 list-disc space-y-4 pl-6 marker:text-black/80">
                <li>
                  <h3 className="font-semibold text-black">Встраиваем работу над проектом в твою реальную жизнь</h3>
                  <p className="mt-1">
                    У тебя уже есть фулл-тайм, клиенты или другие проекты. Выстраиваем процессы работы над продуктом
                    так, чтобы он двигался в реальных условиях — не «когда появится время», а в конкретных слотах с
                    конкретным ритмом.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-black">Настраиваем цикл быстрой валидации</h3>
                  <p className="mt-1">
                    Каждая гипотеза — это вопрос с ценой ошибки. Находим самое рискованное допущение — то, разрушение
                    которого убивает всё остальное, — и проверяем его самым дешёвым способом до того, как строить.
                    Ищем первых людей под тест, договариваемся о критериях «работает / не работает» до теста, а не
                    после. Потому что после всегда найдётся объяснение, почему результат «почти считается».
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-black">Строим бэклог и учимся с ним работать</h3>
                  <p className="mt-1">
                    Это живой инструмент приоритетов, а не список задач. Понятно, что делать сейчас и почему именно
                    это, а не другое. Можно добавлять, убирать и двигать приоритеты самостоятельно — без меня.
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-black">Собираем продуктовую карту</h3>
                  <p className="mt-1">
                    По авторской методологии соло-фаундера: аудитории, гипотезы, приоритеты — всё в одном месте.
                    Встраиваем первые традиции продуктовых исследований — практики, которые потом работают
                    самостоятельно.
                  </p>
                </li>
              </ul>
              <p className="mt-4">
                Это не коучинг. Работа идёт не с мотивацией и убеждениями, а с проектом, гипотезами и задачами. Не
                делаю за тебя — делаем вместе.
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
              <p className="mt-4 font-medium text-black">С тобой остаётся:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>
                  <span className="font-medium text-black">Встроенный продуктовый процесс</span> — работа над
                  продуктом живёт в реальности, не на энтузиазме.
                </li>
                <li>
                  <span className="font-medium text-black">Продуктовая карта</span> — видно, что делать сейчас и что
                  потом.
                </li>
                <li>
                  <span className="font-medium text-black">Навык тестировать гипотезы</span> — быстро, дёшево, с
                  чёткими критериями.
                </li>
                <li>
                  <span className="font-medium text-black">База знаний</span> — методологии в виде статей и
                  практических скиллов.
                </li>
              </ul>

              <h2 className="mt-10 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
                Как мы работаем
              </h2>
              <p className="mt-4">
                Первая встреча проходит до начала программы: разбираемся в ситуации и проверяем совместимость. Если
                оба чувствуем, что сработаемся, — стартуем. Стоимость онбординга идёт в зачёт первого месяца.
              </p>
              <p className="mt-4 font-medium text-black">В каждом месяце — 5 встреч:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-black/80">
                <li>
                  <span className="font-medium text-black">Трекшн — 4 раза в месяц.</span> Что сделано, что
                  получилось, какой фокус на неделю.
                </li>
                <li>
                  <span className="font-medium text-black">Ретро — 1 раз в месяц.</span> Глубокий разбор месяца и
                  корректировка курса.
                </li>
              </ul>
              <p className="mt-4">В конце каждого месяца решаем: продолжаем или нет.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
            <h2 className="text-center font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
              Подписка на месяц
            </h2>
            <div className="mt-10 flex flex-wrap items-start justify-center gap-8 md:gap-12">
              <ManifestOfferCard
                variant="dark"
                titlePrimary="ПОДПИСКА"
                titleSecondary="НА МЕСЯЦ"
                priceAmount="30k"
                pricePeriod="/3mo"
                moreHref={MENTORSHIP_INTRO_URL}
              />
              <ManifestOfferCard
                variant="light"
                titlePrimary="ДОПОЛНИТЕЛЬНЫЕ"
                titleSecondary="ВОРКШОПЫ"
                priceAmount="5k"
                pricePeriod="/1 session"
                moreHref={MENTORSHIP_INTRO_URL}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#F2F2F2]">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-20 text-center md:px-12 md:py-24 lg:px-[96px] lg:py-28">
            <h2 className="font-serif text-[30px] leading-[0.98] tracking-[-0.02em] text-black md:text-[34px]">
              Сметчимся?
            </h2>
            <p
              className={`mt-6 max-w-[520px] text-[15px] leading-[1.7] text-black/60 ${interSans}`}
            >
              Чтобы пойти в работу — давайте сначала встретимся и поймём, что подходим друг другу.
            </p>
            <a
              href={MENTORSHIP_INTRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex h-11 min-w-[200px] items-center justify-center bg-black px-7 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-zinc-900 ${interSans}`}
            >
              Записаться на встречу-знакомство
            </a>
          </div>
        </section>

        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
