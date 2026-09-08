# ТРИЗ-решатели: карточка и лендинг Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Заменить левую карточку GAME на оффер «ТРИЗ-решатели» и добавить лендинг `/triz` по спеке.

**Architecture:** Данные четырёх решателей и URL бота живут в `trizSolvers.ts`. Карточка и секция команды — отдельные компоненты. Страница `/triz` собирает hero, серый блок ТРИЗ, команду и CTA в контракте page-style-guide. Главная меняет только последний слот `CROSS_CARD_PROPS`.

**Tech Stack:** Next.js App Router 16, React 19, Tailwind 4, `next/image`, существующие `ManifestFontVars` / `MetaSiteHeader` / `MetaSiteFooter` / `ManifestOfferCard`.

## Global Constraints

- Стиль лендинга: [docs/page-style-guide.md](../../page-style-guide.md) — контейнер `max-w-[1280px]`, `lg:px-[96px]`, колонка `max-w-[760px]`, сериф + `|`, фоны `bg-white` ↔ `bg-[#F2F2F2]`.
- Шапка и подвал сайта, шрифты Lora/Inter через `ManifestFontVars`. Не копировать Playfair и цветной хедер макета.
- Карточка GAME удаляется, никуда не переносится. Пункт в хедер не добавлять. `BackButton` не ставить.
- Оплата на сайте не делается. CTA → `https://t.me/productodel_bot` с `target="_blank"` и `rel="noopener noreferrer"`.
- Цена карточки: `1K` + `/one-time`, бейдж `New`.
- Опечатки макета исправлены: «помогут», «продуктовый».
- Спека: [docs/superpowers/specs/2026-09-08-triz-solvers-landing-design.md](../specs/2026-09-08-triz-solvers-landing-design.md).
- Тестового раннера в репо нет: проверка — `npx tsc --noEmit`, `npm run lint`, `npm run build`, ручной проход `/` и `/triz` на `http://localhost:3055`.
- Коммиты только если пользователь явно попросил; иначе шаги Commit пропускать.

---

## File structure

| File | Role |
|---|---|
| `public/triz/sava.webp` | Портрет Сава |
| `public/triz/il.webp` | Портрет Иль |
| `public/triz/max.webp` | Портрет Макс |
| `public/triz/ilona.webp` | Портрет Илона |
| `src/components/meta/trizSolvers.ts` | URL бота + массив решателей |
| `src/components/meta/TrizSolverCard.tsx` | Одна карточка решателя |
| `src/components/meta/TrizSolversSection.tsx` | Секция «Команда решателей» |
| `src/app/triz/page.tsx` | Лендинг: metadata, hero, ТРИЗ, команда, CTA |
| `src/components/meta/ManifestHexagonOffers.tsx` | Левая карточка креста |

Не трогать `MetaSiteHeader.tsx`. Макет `макеты/AI TRIZ.html` только как источник портретов, в git его не менять.

---

### Task 1: Портреты из макета

**Files:**
- Create: `public/triz/sava.webp`
- Create: `public/triz/il.webp`
- Create: `public/triz/max.webp`
- Create: `public/triz/ilona.webp`

**Interfaces:**
- Consumes: data-URI `img[alt=solver-*]` внутри JSON `__bundler/template` в `макеты/AI TRIZ.html`
- Produces: четыре webp по путям `/triz/{sava,il,max,ilona}.webp`

- [ ] **Step 1: Создать папку и вырезать webp**

Из корня репозитория выполнить Node-скрипт (не сохранять файл скрипта — одноразовый `-e` / stdin). На Windows удобнее положить временный `scripts/_extract-triz-portraits.cjs` и удалить после успеха:

```js
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync("макеты/AI TRIZ.html", "utf8");
const start = '<script type="__bundler/template">';
const i = html.indexOf(start);
if (i < 0) throw new Error("template tag not found");
const j = html.indexOf("</script>", i);
const template = JSON.parse(html.slice(i + start.length, j));

const alts = {
  "solver-sava": "sava.webp",
  "solver-il": "il.webp",
  "solver-max": "max.webp",
  "solver-ilona": "ilona.webp",
};

fs.mkdirSync("public/triz", { recursive: true });

for (const [alt, filename] of Object.entries(alts)) {
  const re = new RegExp(
    `src="data:image/webp;base64,([A-Za-z0-9+/=\\s]+)" alt="${alt}"`,
  );
  const m = template.match(re);
  if (!m) throw new Error("missing portrait " + alt);
  const buf = Buffer.from(m[1].replace(/\s/g, ""), "base64");
  if (buf.slice(0, 4).toString() !== "RIFF") {
    throw new Error(filename + " is not webp (no RIFF header)");
  }
  const out = path.join("public/triz", filename);
  fs.writeFileSync(out, buf);
  console.log(filename, buf.length);
}
```

Run: `node scripts/_extract-triz-portraits.cjs`

Expected: четыре строки вида `sava.webp <bytes>`, `il.webp`, `max.webp`, `ilona.webp`; exit 0.

- [ ] **Step 2: Проверить файлы и убрать скрипт**

Run:

```
Get-ChildItem public/triz | Format-Table Name, Length
Remove-Item scripts/_extract-triz-portraits.cjs
```

Expected: четыре `.webp`, каждый больше ~5 KB. Скрипт удалён. Если `scripts/` стал пустым — не оставлять пустую папку без нужды.

- [ ] **Step 3: Commit** (только если пользователь просил коммиты)

```bash
git add public/triz/sava.webp public/triz/il.webp public/triz/max.webp public/triz/ilona.webp
git commit -m "feat(triz): add solver portraits from design mockup"
```

---

### Task 2: Данные решателей

**Files:**
- Create: `src/components/meta/trizSolvers.ts`

**Interfaces:**
- Consumes: пути `/triz/*.webp` из Task 1
- Produces:
  - `export const TRIZ_BOT_URL = "https://t.me/productodel_bot"`
  - `export type TrizSolver = { id: "sava" | "il" | "max" | "ilona"; name: string; roleLabel: string; roleText: string; tools: string; useWhen: string; imageSrc: string; imageAlt: string }`
  - `export const TRIZ_SOLVERS: TrizSolver[]` — ровно 4 элемента в порядке Сава, Иль, Макс, Илона

- [ ] **Step 1: Создать модуль**

```ts
export const TRIZ_BOT_URL = "https://t.me/productodel_bot";

export type TrizSolver = {
  id: "sava" | "il" | "max" | "ilona";
  name: string;
  roleLabel: string;
  roleText: string;
  tools: string;
  useWhen: string;
  imageSrc: string;
  imageAlt: string;
};

export const TRIZ_SOLVERS: TrizSolver[] = [
  {
    id: "sava",
    name: "Сава",
    roleLabel: "МУДРЕЦ",
    roleText: "Решает конфликты и находит запертые решения без компромиссов.",
    tools: "40 приёмов ТРИЗ",
    useWhen: "Когда система зашла в тупик противоречий и выхода не видно.",
    imageSrc: "/triz/sava.webp",
    imageAlt: "Сава — мудрец",
  },
  {
    id: "il",
    name: "Иль",
    roleLabel: "ВИЗИОНЕР",
    roleText: "Видит, как система может работать сама.",
    tools: "76 стандартов, модель идеальности ИКР «Идеальный конечный результат»",
    useWhen: "Когда нужно решение, которое работает «как по волшебству».",
    imageSrc: "/triz/il.webp",
    imageAlt: "Иль — визионер",
  },
  {
    id: "max",
    name: "Макс",
    roleLabel: "ХАКЕР",
    roleText: "Находит скрытые ресурсы, выжимает максимум из того, что есть.",
    tools: "Вещественно-полевые ресурсы, переход системы",
    useWhen: "Когда нет времени и бюджетов, но нужны результаты.",
    imageSrc: "/triz/max.webp",
    imageAlt: "Макс — хакер",
  },
  {
    id: "ilona",
    name: "Илона",
    roleLabel: "ИНТЕГРАТОР",
    roleText:
      "Собирает всё, что найдено ранее, в работающую механику и готовит к внедрению.",
    tools: "Шаблоны причинно-следственного анализа, критерии отбора решений",
    useWhen: "Когда нужно выбрать лучшее из сгенерированных решений.",
    imageSrc: "/triz/ilona.webp",
    imageAlt: "Илона — интегратор",
  },
];
```

- [ ] **Step 2: Проверить порядок и URL**

Run: `npx tsc --noEmit`

Expected: exit 0. В файле ровно четыре `id` и `TRIZ_BOT_URL` указывает на `productodel_bot`.

- [ ] **Step 3: Commit** (если просили)

```bash
git add src/components/meta/trizSolvers.ts
git commit -m "feat(triz): add solver copy and bot URL"
```

---

### Task 3: Карточка и секция команды

**Files:**
- Create: `src/components/meta/TrizSolverCard.tsx`
- Create: `src/components/meta/TrizSolversSection.tsx`

**Interfaces:**
- Consumes: `TrizSolver`, `TRIZ_SOLVERS` из `./trizSolvers`
- Produces: `TrizSolverCard({ solver: TrizSolver })`, `TrizSolversSection({ interSansClassName: string })`

- [ ] **Step 1: Карточка решателя**

Паттерн картинки как `/avatar-vika.png` на challenge: `next/image`, локальный `/public`. Фон `#E6E6E6`, `rounded-[2px]`, тень как у оффера.

```tsx
import Image from "next/image";

import type { TrizSolver } from "./trizSolvers";

type TrizSolverCardProps = {
  solver: TrizSolver;
  interSansClassName: string;
};

export function TrizSolverCard({ solver, interSansClassName }: TrizSolverCardProps) {
  return (
    <article className="flex h-full flex-col bg-[#E6E6E6] p-[22px] pt-[26px] shadow-[0_8px_28px_rgba(0,0,0,0.09)] rounded-[2px]">
      <Image
        src={solver.imageSrc}
        alt={solver.imageAlt}
        width={136}
        height={136}
        className="mx-auto aspect-square size-full max-w-[136px] rounded-[18px] object-cover object-center"
      />
      <h3 className="mt-[18px] text-center font-serif text-[26px] leading-[1.1] text-black">
        {solver.name}
      </h3>
      <p
        className={`mt-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-black ${interSansClassName}`}
      >
        {solver.roleLabel}
      </p>
      <div className="mt-5 flex flex-col gap-4 border-t border-[#D2D2D2] pt-5">
        <SolverField
          label="РОЛЬ"
          text={solver.roleText}
          interSansClassName={interSansClassName}
        />
        <SolverField
          label="ОРУДИЯ"
          text={solver.tools}
          interSansClassName={interSansClassName}
        />
        <SolverField
          label="ИСПОЛЬЗУЙ"
          text={solver.useWhen}
          interSansClassName={interSansClassName}
        />
      </div>
    </article>
  );
}

function SolverField({
  label,
  text,
  interSansClassName,
}: {
  label: string;
  text: string;
  interSansClassName: string;
}) {
  return (
    <div>
      <p
        className={`text-[9px] font-bold uppercase tracking-[0.24em] text-black ${interSansClassName}`}
      >
        {label}
      </p>
      <p className={`mt-1.5 text-[12.5px] leading-[1.8] text-zinc-600 ${interSansClassName}`}>
        {text}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Секция команды**

```tsx
import { TrizSolverCard } from "./TrizSolverCard";
import { TRIZ_SOLVERS } from "./trizSolvers";

type TrizSolversSectionProps = {
  interSansClassName: string;
};

export function TrizSolversSection({ interSansClassName }: TrizSolversSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
        <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSansClassName}`}>
          КОМАНДА РЕШАТЕЛЕЙ
        </p>
        <h2 className="mt-5 flex items-start font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
          <span className="mr-1 -translate-x-[0.1em]">|</span>
          <span>Команда решателей</span>
        </h2>
        <p
          className={`mt-4 max-w-[760px] text-[17px] leading-[1.8] text-zinc-800 ${interSansClassName}`}
        >
          Четыре AI-ассистента с разными экспертизами для комплексного решения ваших задач.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TRIZ_SOLVERS.map((solver) => (
            <TrizSolverCard
              key={solver.id}
              solver={solver}
              interSansClassName={interSansClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`

Expected: PASS (exit 0).

- [ ] **Step 4: Commit** (если просили)

```bash
git add src/components/meta/TrizSolverCard.tsx src/components/meta/TrizSolversSection.tsx
git commit -m "feat(triz): add solver cards section"
```

---

### Task 4: Страница `/triz`

**Files:**
- Create: `src/app/triz/page.tsx`
- Modify: `docs/page-style-guide.md` — в список лендингов добавить `/triz`

**Interfaces:**
- Consumes: `TRIZ_BOT_URL`, `TrizSolversSection`, `ManifestFontVars`, `MetaSiteHeader`, `MetaSiteFooter`
- Produces: маршрут `/triz` с metadata `title: "ТРИЗ-решатели | PRISMA"`

- [ ] **Step 1: Страница**

Ориентир разметки — `src/app/mentorship/page.tsx`. Hero **без** `BackButton`. Между командой и CTA — `border-t border-black/5`. Зелёный кружок автора `#0CDA76`, не фото.

```tsx
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
```

- [ ] **Step 2: Дописать `/triz` в список лендингов**

В `docs/page-style-guide.md` в первом абзаце и в §7 список страниц: добавить `/triz` рядом с `/mentorship`.

- [ ] **Step 3: Lint + typecheck**

Run:

```
npx tsc --noEmit
npm run lint
```

Expected: exit 0. Если lint ругается на `text-[12.5px]` — оставить, это размер из макета; чинить только реальные ошибки.

- [ ] **Step 4: Commit** (если просили)

```bash
git add src/app/triz/page.tsx docs/page-style-guide.md
git commit -m "feat(triz): add solvers landing page"
```

---

### Task 5: Карточка на главной

**Files:**
- Modify: `src/components/meta/ManifestHexagonOffers.tsx` — константа `GAME_URL` и последний элемент `CROSS_CARD_PROPS`

**Interfaces:**
- Consumes: маршрут `/triz` из Task 4
- Produces: левая карточка креста с полями из спеки

- [ ] **Step 1: Заменить соло-трек**

Удалить `const GAME_URL = "https://t.me/zzzzzzz5550bot";`

Последний объект `CROSS_CARD_PROPS` заменить на:

```ts
  {
    variant: "light",
    titlePrimary: "ТРИЗ-РЕШАТЕЛИ",
    titleSecondary: "AI АГЕНТЫ",
    priceAmount: "1K",
    pricePeriod: "/one-time",
    moreHref: "/triz",
    newBadge: true,
  },
```

Остальные три карточки не менять. `BACKSTAGE_URL` оставить.

- [ ] **Step 2: Grep — GAME больше не на главной**

Run: поискать `GAME_URL`, `СОЛО ТРЕК`, `zzzzzzz5550bot` в `src/components/meta/ManifestHexagonOffers.tsx`

Expected: совпадений нет.

- [ ] **Step 3: Commit** (если просили)

```bash
git add src/components/meta/ManifestHexagonOffers.tsx
git commit -m "feat(home): replace GAME card with TRIZ solvers"
```

---

### Task 6: Сборка и визуальная проверка

**Files:** нет новых файлов

**Interfaces:**
- Consumes: Tasks 1–5
- Produces: зелёный `npm run build`; проверенные `/` и `/triz`

- [ ] **Step 1: Production build**

Run: `npm run build`

Expected: успешный билд App Router, маршрут `/triz` в списке, без ошибок image.

- [ ] **Step 2: Dev-сервер и браузер**

Если `next dev -p 3055` ещё не запущен — запустить. Открыть:

1. `http://localhost:3055/` — левая карточка: ТРИЗ-РЕШАТЕЛИ / AI АГЕНТЫ / New / 1K /one-time; MORE ведёт на `/triz`. GAME нет.
2. `http://localhost:3055/triz` — шапка сайта, hero с `|`, авторская зелёная точка ведёт на `/about`, «Начать работу» открывает Telegram, цена 1K /one-time.
3. Серый блок ТРИЗ, 2×2 решатели с портретами, нижняя кнопка «Попробовать решателей».
4. Узкий viewport (~390px): карточки столбиком, текст не вылезает из контейнера.
5. Широкий viewport: контейнер с `lg:px-[96px]`, сетка 2×2.

Если что-то сломано — починить в том же файле, не открывая новый скоуп.

- [ ] **Step 3: Commit** (если просили и остались правки после проверки)

---

## Spec coverage (self-review)

| Спека | Задача |
|---|---|
| Карточка главной, поля, удаление GAME | Task 5 |
| `/triz`, metadata, оболочка без BackButton | Task 4 |
| Hero, опечатки, автор, CTA + цена | Task 4 |
| Серый блок ТРИЗ | Task 4 |
| Портреты webp | Task 1 |
| Данные и карточки решателей | Task 2–3 |
| Финальный CTA без цены | Task 4 |
| Ссылки internal vs Telegram | Task 4 |
| page-style-guide контракт | Task 3–4 |
| Проверка | Task 6 |
| Хедер не трогаем | ни одна задача не меняет `MetaSiteHeader` |
