import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ChallengeOffersSection,
  type ChallengeOfferCard,
} from "@/components/meta/ChallengeOffersSection";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";
const CHALLENGE_SIGNUP_URL = "https://t.me/productodel_bot";

const CHALLENGE_HEX_CARDS: ChallengeOfferCard[] = [
  {
    variant: "dark",
    titlePrimary: "Трекшен",
    titleSecondary: "Чтобы держать фокус и темп",
    priceAmount: "",
    pricePeriod: "",
    hidePrice: true,
    detail: {
      modalLayout: "radialCover",
      eyebrow: "Чтобы держать фокус и темп",
      title: "Трекшен",
      blocks: [
        {
          type: "paragraph",
          text:
            "За 6 лет в IT я поняла, насколько важны процессы и ритуалы. Я адаптировала Scrum-процессы под создание авторских продуктов, чтобы задать групповую динамику. У нас будет:",
        },
        {
          type: "list",
          items: [
            "комьюнити встречи (подробнее в карточке «Комьюнити встречи»)",
            "а ещё у нас есть милый бот от Content Hero, который помогает не слиться: принимает отчёты по понедельникам, начисляет штрафы тем, кто не сдал отчёт вовремя.",
          ],
        },
        {
          type: "paragraph",
          text: "Что нужно от вас:",
        },
        {
          type: "list",
          items: [
            "3 часа в неделю на встречи",
            "3 часа в неделю на продукт (минимум)",
            "внутренняя мотивация сделать свой продукт (внешнюю обеспечит трекшен)",
          ],
        },
      ],
    },
  },
  {
    variant: "light",
    titlePrimary: "AI модуль",
    titleSecondary: "Чтобы ускорить разработку",
    priceAmount: "",
    pricePeriod: "",
    hidePrice: true,
    newBadge: true,
    detail: {
      modalLayout: "radialCover",
      eyebrow: "Чтобы ускорить разработку",
      title: "AI модуль",
      blocks: [
        {
          type: "paragraph",
          text: "Как сделать AI частью процесса создания продукта и начать использовать его системно.",
        },
        {
          type: "paragraph",
          text: "Что внутри:",
        },
        {
          type: "paragraph",
          text: "1. Вайбкодинг для авторов",
        },
        {
          type: "speaker",
          name: "Андрей Погорелый",
          description: "вайбкодер и техно-предприниматель",
          avatarSrc: "/avatar-andrey.png",
          href: "https://t.me/toolatetolearn",
        },
        {
          type: "paragraph",
          text: "Про то, как вайбкодить так, чтобы оставаться автором, а не превращаясь в менеджера разработки.\n\nРазберём:",
        },
        {
          type: "list",
          items: [
            "как быстро собирать первые версии продуктов",
            "где реальные возможности вайбкодинга, а где хайп",
            "как строить разработку так, чтобы продукт можно было поддерживать",
            "как делегировать разработку AI и людям",
            "как сохранять авторский контроль над продуктом",
          ],
        },
        {
          type: "paragraph",
          text: "Также тестируем новый формат: возможность отдавать задачи в аутсорс команде вайбкодеров Андрея с моим авторским контролем.",
        },
        {
          type: "paragraph",
          text: "2. Агенты и AI-ассистенты",
        },
        {
          type: "speaker",
          name: "Саша Кочанова",
          description: "AI продакт и эдвайзер техно-предпринимателей",
          avatarSrc: "/avatar-sasha.png",
          href: "https://t.me/product_and_life",
        },
        {
          type: "paragraph",
          text: "Про то, как перестать делать всё руками и собрать вокруг себя AI-систему.\n\nРазберём:",
        },
        {
          type: "list",
          items: [
            "как передавать часть задач AI",
            "как настраивать процессы через Cowork",
            "как кастомизировать агентов под себя",
            "как использовать AI для контента, аналитики, ресерча и сборки лендингов",
            "где границы AI и когда всё-таки нужен человек",
          ],
        },
        {
          type: "paragraph",
          text: "В итоге AI становится не \"прикольной игрушкой\", а частью процесса создания продукта.",
        },
      ],
    },
  },
  {
    variant: "dark",
    titlePrimary: "1-1 продуктовые консультации",
    titleSecondary: "Чтобы увидеть картину шире и выйти из затыков",
    priceAmount: "",
    pricePeriod: "",
    hidePrice: true,
    detail: {
      modalLayout: "radialCover",
      eyebrow: "Чтобы увидеть картину шире и выйти из затыков",
      title: "1-1 продуктовые консультации",
      blocks: [
        {
          type: "paragraph",
          text: "В трек входят 2 мои личные консультации, я подключаюсь:",
        },
        {
          type: "list",
          items: [
            "в самом начале, чтобы сформулировать запрос",
            "в завершении, чтобы сформулировать, что дальше",
          ],
        },
        {
          type: "paragraph",
          text:
            "Моя консультация стоит 10 000 ₽, а в трекшене они входят бесплатно.",
        },
      ],
    },
  },
  {
    variant: "light",
    titlePrimary: "Комьюнити встречи",
    titleSecondary: "Чтобы переопыляться и использовать коллективный разум",
    priceAmount: "",
    pricePeriod: "",
    hidePrice: true,
    detail: {
      modalLayout: "radialCover",
      eyebrow: "Чтобы переопыляться и использовать коллективный разум",
      title: "Комьюнити встречи",
      blocks: [
        {
          type: "paragraph",
          text:
            "Регулярные комьюнити встречи создают среду, которая помогает совместно решать задачи, поддерживать друг друга, заражаться идеями и просто неформально общаться.",
        },
        {
          type: "paragraph",
          text: "Всего 3 секции встреч:",
        },
        {
          type: "paragraph",
          text: "1. Комьюнити встречи — чтобы переопылиться опытом:",
        },
        {
          type: "list",
          items: [
            "Мастермайнды — приносим свои кейсы и решаем их вместе.",
            "Митапы — делимся своим опытом, инструментами, инсайтами. А ещё к нам приходят приглашённые эксперты и рассказывают что-нибудь интересное.",
          ],
        },
        {
          type: "paragraph",
          text: "2. Трековые встречи:",
        },
        {
          type: "list",
          items: [
            "Викли-синк — раз в неделю обсуждаем, что сделано и что планируем на неделю.",
            "Демо — раз в две недели показываем, что сделали. Не обязательно готовый продукт — можно показать и концепцию, и просто свою доску в Miro.",
            "Ретро — раз в месяц.",
          ],
        },
        {
          type: "paragraph",
          text: "3. Просто встреча «Как дела»:",
        },
        {
          type: "list",
          items: [
            "раз в неделю встречаемся за онлайн-кофе.",
          ],
        },
        {
          type: "paragraph",
          text: "Расписание согласуем внутри группы.",
        },
      ],
    },
  },
  {
    variant: "light",
    titlePrimary: "Методология «Prisma»",
    titleSecondary: "Чтобы не сойти с авторского пути",
    priceAmount: "",
    pricePeriod: "",
    hidePrice: true,
    detail: {
      modalLayout: "radialCover",
      eyebrow: "Чтобы не сойти с авторского пути",
      title: "Методология «Prisma»",
      blocks: [
        {
          type: "paragraph",
          text: "Авторская методология Prisma помогает создавать продукты «из себя» и выстраивать из них целостную систему.",
        },
        {
          type: "paragraph",
          text: "Важно понимать, с чем мы имеем дело.",
        },
        {
          type: "paragraph",
          text:
            "Создание авторских продуктов — это особый путь, в котором тесно связаны три слоя:",
        },
        {
          type: "list",
          items: [
            "автор со своей картиной мира",
            "пользователь со своей картиной мира",
            "поле, в котором автор и пользователь взаимодействуют через продукт",
          ],
        },
        {
          type: "paragraph",
          text:
            "В основе методологии лежит триединая концепция: любой продукт рождается трижды — на уровне идеи, на уровне создания и на уровне продаж. Затем мы интегрируем эти три этапа в единый опыт.",
        },
        {
          type: "paragraph",
          text: "Поэтому вся методология включает четыре этапа:",
        },
        {
          type: "numberedList",
          items: [
            { text: "Search" },
            { text: "Create" },
            { text: "Sale", badge: "new" },
            { text: "Lean" },
          ],
        },
      ],
    },
  },
  {
    variant: "dark",
    titlePrimary: "Модуль «Автор и деньги»",
    titleSecondary: "Начнём монетизировать свои продукты",
    priceAmount: "",
    pricePeriod: "",
    hidePrice: true,
    newBadge: true,
    detail: {
      modalLayout: "radialCover",
      eyebrow: "Начнём монетизировать свои продукты",
      title: "Модуль «Автор и деньги»",
      blocks: [
        {
          type: "paragraph",
          text:
            "Как начать монетизировать свои продукты и сделать их источником дохода — на цифрах и в реальности.",
        },
        {
          type: "paragraph",
          text: "Что внутри:",
        },
        {
          type: "paragraph",
          text: "1. Мат-часть",
        },
        {
          type: "speaker",
          name: "Диана Зрячева",
          description:
            "математик-практик, к.ф.-м.н., специалист по финансовому моделированию",
          avatarSrc: "/avatar-diana.png",
          href: "https://t.me/ActuarialExam",
        },
        {
          type: "paragraph",
          text:
            "Вместе с Дианой разберёмся с юнит-экономикой и моделями монетизации.\n\nРазберём:",
        },
        {
          type: "list",
          items: [
            "юнит-экономику авторских продуктов",
            "модели монетизации под твой формат",
            "простой расчёт, во что превращается идея в цифрах",
          ],
        },
        {
          type: "paragraph",
          text: "2. Психологическая часть",
        },
        {
          type: "speaker",
          name: "Юля Москвитина",
          description:
            "телесный терапевт и автор, которая зарабатывает на своих продуктах",
          avatarSrc: "/avatar-yulia.png",
          href: "https://t.me/moskvitinajuli",
        },
        {
          type: "paragraph",
          text:
            "Даже если в таблицах всё сходится, психологические установки могут мешать превращать план в факт. С Юлей разберём, что мешает по-настоящему зарабатывать на своём.\n\nРазберём:",
        },
        {
          type: "list",
          items: [
            "установки, которые тормозят при попытке зарабатывать на своём",
            "«потолок дохода» — как его замечать и как с ним работать",
            "как соединять тело, чувства и цифры, чтобы план превращался в факт",
          ],
        },
        {
          type: "paragraph",
          text:
            "В итоге деньги перестают быть абстракцией: видно, где у продукта реальные точки роста, и снимаются установки, которые мешали на этот рост выйти.",
        },
      ],
    },
  },
];

const AUTHORS_DETAIL = {
  modalLayout: "radialCover" as const,
  title: "Кто такие авторы",
  blocks: [
    {
      type: "paragraph" as const,
      text:
        "Авторы — это люди, которые создают продукты не по шаблону, а из своего опыта, мышления и интереса.",
    },
    {
      type: "paragraph" as const,
      text:
        "— Мейкеры pet-проектов\nПродакты, дизайнеры, разработчики и мейкеры, которые делают свои продукты в свободное от работы время. Есть желание уйти из найма, но без риска потерять доход.\nКакую задачу решают: как из pet-проекта вырастить своё дело.",
    },
    {
      type: "paragraph" as const,
      text:
        "— Соло-эксперты с методологией и практикой\nЭксперты с опытом, клиентами и своей методологией, но всё держится на личном участии.\nКакую задачу решают: как перестать быть у себя же «бутылочным горлышком» и масштабировать свои мозги в интеллектуальный продукт.",
    },
    {
      type: "paragraph" as const,
      text:
        "— Фаундеры и соло-предприниматели\nЛюди, которые уже сделали много продуктов, но они не складываются в систему и не приносят стабильный доход.\nКакую задачу решают: как превратить этот продуктовый поток в систему, которая начинает приносить доход.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Продуктовые авторы — challenge | PRISMA",
  description:
    "Авторская концепция создания продуктов из себя. Челлендж для тех, кто хочет авторствовать, создавать свои смыслы и искать независимость.",
};

export default function ChallengePage() {
  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-white text-black antialiased">
        <MetaSiteHeader />

        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[110px]">
            <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>CHALLENGE 4.0</p>
            <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
              <span className="flex items-start">
                <span className="mr-1 -translate-x-[0.1em]">|</span>
                <span>Продуктовые авторы</span>
              </span>
              <span
                className={`text-[11px] font-normal normal-case tracking-[0.06em] text-black/45 md:text-[13px] ${interSans}`}
              >
                ex. Продуктоделы
              </span>
            </h1>
            <p
              className={`mt-8 max-w-[546px] p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
              style={{ color: "rgba(95, 94, 94, 0.6)" }}
            >
              Челлендж, в котором мы создаем своё
            </p>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-3"
            >
              <span className="relative inline-block size-9 overflow-hidden rounded-full bg-zinc-200">
                <Image
                  src="/avatar-vika.png"
                  alt="Виктория Герман"
                  fill
                  sizes="36px"
                  className="object-cover object-[center_30%]"
                />
              </span>
              <span
                className={`text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
                style={{ color: "rgba(95, 94, 94, 0.6)" }}
              >
                Автор и ведущая челленджа Виктория Герман
              </span>
            </Link>
          </div>
        </section>

        <ChallengeOffersSection
          cards={CHALLENGE_HEX_CARDS}
          centerLabel="Кто такие авторы?"
          centerHref="/about"
          centerDetail={AUTHORS_DETAIL}
        />
        <section className="bg-white">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-20 text-center md:px-12 md:py-24 lg:px-[96px] lg:py-28">
            <h2 className="font-serif text-[30px] leading-[0.98] tracking-[-0.02em] text-black md:text-[34px]">
              Начать создавать своё
            </h2>
            <p className={`mt-8 text-[20px] leading-[1.65] text-black/55 sm:whitespace-nowrap ${interSans}`}>
              3 месяца совместной работы над своим продуктом
            </p>
            <p className={`mt-2 text-[20px] leading-[1.65] text-black/55 ${interSans}`}>
              30 000 ₽
            </p>
            <a
              href={CHALLENGE_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex h-10 min-w-[176px] items-center justify-center bg-black px-7 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition-colors hover:bg-zinc-900 ${interSans}`}
            >
              Я в деле
            </a>
            <p className={`mt-3 text-[12px] text-black/40 ${interSans}`}>
              возможна частичная оплата
            </p>
          </div>
        </section>
        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
