# Стиль страниц-лендингов (PRISMA Meta)

Единый стилевой контракт для страниц-лендингов проекта (`/`, `/about`, `/challenge`, `/mentorship`, `/meta/manifesto`, будущие). Документ фиксирует, как должен выглядеть **заголовок страницы** и **контентная колонка**, какие используются **шрифты**, **отступы** и **фоны**. Любая новая страница лендинга обязана попадать в этот контракт; отклонения — только с явным обоснованием в PR.

## 1. Контейнер и текстовая колонка

### 1.1. Внешний контейнер секций

Все секции страницы оборачиваются в `section` с фоновым цветом и одним типом внешнего контейнера:

```tsx
<section className="bg-white">
  <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-[96px] ...">
    ...
  </div>
</section>
```

- **Максимальная ширина:** `max-w-[1280px]`.
- **Горизонтальные отступы:** `px-6 md:px-12 lg:px-[96px]`.
- **Вертикальные отступы** зависят от типа секции:
  - hero **без** `BackButton`: `pb-14 pt-12 md:pb-20 md:pt-16 lg:pb-24 lg:pt-[110px]`;
  - hero **с** `BackButton`: верхний padding уменьшается до `pt-3 md:pt-3 lg:pt-4`, чтобы кнопка «← НАЗАД» прижалась к шапке и читалась как навигация, а не как часть заголовка. Расстояние от кнопки до eyebrow добирается уже margin-ом на eyebrow (см. § 3.5);
  - рядовые секции — `py-16 md:py-24 lg:py-[120px]`.

  Конкретные числа можно подобрать ближе к контексту, но шаг и логика отступов сохраняются.

### 1.2. Внутренняя колонка с текстом

Текстовый контент (абзацы, списки, описания) внутри секции **ограничивается отдельной колонкой**, чтобы строки оставались читаемыми:

```tsx
<div className="max-w-[760px] text-[17px] leading-[1.8] text-zinc-800 font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]">
  <p>...</p>
  <h2 className="mt-16 font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
    ...
  </h2>
</div>
```

- **Колонка текста:** `max-w-[760px]`.
- **Основной текст:** `text-[17px] leading-[1.8] text-zinc-800` + sans-serif из переменной `--font-manifest-inter`.
- **Заголовки внутри секций (`h2`):** `font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]`. Между заголовком и предыдущим контентом — `mt-16` на десктопе.
- **Списки:** `mt-6`–`mt-8`, элементы `space-y-4`–`space-y-5`.

Допустимый альтернативный размер колонки — `max-w-[720px]` (как в [`/meta/manifesto`](../src/app/meta/manifesto/page.tsx)) для строго текстовых страниц. Не делайте колонок уже `max-w-[640px]` — это уже типографика для отдельной статьи, не лендинг.

## 2. Шрифты и токены

| Назначение | Tailwind/CSS |
|---|---|
| Sans-serif (UI, абзацы, eyebrow) | `font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]` (константа `interSans` в коде) |
| Serif (заголовки, цены) | `font-serif` (Tailwind) или CSS `font-family: var(--font-lora), ui-serif, Georgia, serif` |
| Цвет основного текста | `text-zinc-800` или `text-black/85` |
| Цвет приглушённой подписи | `text-black/50` / `rgba(95,94,94,0.6)` |
| Серый фон контентной полосы | `bg-[#F2F2F2]` (как в `ChallengeOffersSection`) |
| Светло-серый фон описательного блока | `bg-[#F7F7F7]` (избегать на лендингах, использовать только при намеренном делении) |
| Чёрный CTA-кнопка | `bg-black text-white hover:bg-zinc-900` |

## 3. Заголовок страницы (hero)

Заголовок страницы состоит из **трёх элементов**: **тег**, **заголовок**, **подзаголовок**. Из них **обязательным является только заголовок**.

### 3.1. Структура

```
[ Тег (eyebrow) ]      ← опционально
[ Заголовок          ] ← обязательно
[ Подзаголовок       ] ← опционально
```

Все три элемента живут внутри hero-секции на белом фоне и общего контейнера `max-w-[1280px]`.

### 3.2. Тег (eyebrow) — опционально

Короткое слово в верхнем регистре над заголовком. Показывает раздел или категорию страницы.

- Содержимое: одно слово или короткая фраза, кириллицей или латиницей (`AUTHOR`, `MENTORSHIP`, `CHALLENGE 4.0`).
- Класс:

```tsx
<p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
  AUTHOR
</p>
```

Когда не использовать: на технических страницах без отнесения к разделу. На лендингах продукта рекомендуется ставить.

### 3.3. Заголовок — обязательно

Серифный, крупный, с фирменной вертикальной палкой `|` слева. Палка чуть выдвигается влево оптической коррекцией `-translate-x-[0.1em]`, чтобы визуально не «провисала».

```tsx
<h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
  <span className="flex items-start">
    <span className="mr-1 -translate-x-[0.1em]">|</span>
    <span>Заголовок</span>
  </span>
</h1>
```

Опционально внутри `h1` рядом с заголовком можно поставить **мелкий sans-serif суффикс** (бывшее название, alias и т.п.):

```tsx
<span
  className={`text-[11px] font-normal normal-case tracking-[0.06em] text-black/45 md:text-[13px] ${interSans}`}
>
  ex. Продуктоделы
</span>
```

Запрещено: цветной gradient, иконки внутри `h1`, замена палки `|` на другие символы. Палка остаётся фирменной маркой PRISMA.

### 3.4. Подзаголовок — опционально

Короткая поясняющая строчка под заголовком в стиле eyebrow (uppercase, `tracking-[0.4em]`, мелкий шрифт), приглушённого цвета.

```tsx
<p
  className={`mt-8 max-w-[546px] p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
  style={{ color: "rgba(95, 94, 94, 0.6)" }}
>
  3 месяца совместной работы один на один с автором
</p>
```

Длина: одна строка на десктопе, до двух на мобайле. Если в подзаголовок просится больше двух строк — это уже первый абзац контента, а не подзаголовок.

### 3.5. BackButton

Страницы, на которые ссылается [`MetaSiteHeader`](../src/components/meta/MetaSiteHeader.tsx) — `AUTHOR (/about)` и `THE MANIFESTO (/meta/manifesto)` — обязаны содержать `BackButton` **над** тегом/заголовком. Детали: [docs/navigation-from-header.md](./navigation-from-header.md).

**Расположение по вертикали:** `BackButton` должен сидеть **близко к шапке** — это навигационный элемент, а не часть hero. Поэтому верхний padding hero-секции уменьшается (`pt-6 md:pt-7 lg:pt-8`), а отступ между кнопкой и eyebrow добирается уже margin-ом на eyebrow:

```tsx
<BackButton fallbackHref="/" />
<p className={`mt-12 text-[10px] uppercase tracking-[0.4em] text-black/50 md:mt-16 lg:mt-[88px] ${interSans}`}>
  THE MANIFESTO
</p>
```

Антипаттерн: BackButton, висящий в ~100 px от хедера и почти впритык к eyebrow — он читается как маркер раздела, а не как ссылка «назад».

## 4. Чередование фонов

Лендинги собираются из секций с чередованием фона, чтобы читался ритм:

1. `bg-white` — hero, контентная полоса.
2. `bg-[#F2F2F2]` — секция офферов / тарифов / диаграмм.
3. `bg-white` — CTA или дополнительный контент.

Избегайте трёх белых секций подряд — добавьте серую разделительную секцию, либо горизонтальный сепаратор.

## 5. Готовый шаблон hero

```tsx
<section className="bg-white">
  <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[110px]">
    {/* (1) Тег — опционально */}
    <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSans}`}>
      MENTORSHIP
    </p>

    {/* (2) Заголовок — обязательно */}
    <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
      <span className="flex items-start">
        <span className="mr-1 -translate-x-[0.1em]">|</span>
        <span>Персональный трек</span>
      </span>
    </h1>

    {/* (3) Подзаголовок — опционально */}
    <p
      className={`mt-8 max-w-[546px] p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
      style={{ color: "rgba(95, 94, 94, 0.6)" }}
    >
      3 месяца совместной работы один на один с автором
    </p>
  </div>
</section>
```

## 6. Чек-лист для новой страницы

- [ ] Hero на белом фоне внутри `max-w-[1280px]` с `lg:px-[96px]`.
- [ ] Заголовок страницы — серифный, с вертикальной палкой `|`.
- [ ] Тег (eyebrow) и подзаголовок добавлены, если страница «продуктовая».
- [ ] Текстовая колонка контента ограничена `max-w-[760px]` (или `max-w-[720px]` для статьи).
- [ ] Основной текст — `text-[17px] leading-[1.8] text-zinc-800` на `interSans`.
- [ ] Между секциями чередуются фоны `bg-white` ↔ `bg-[#F2F2F2]`.
- [ ] Для страниц, на которые ведёт `MetaSiteHeader`, добавлен `BackButton`.

## 7. Ссылки

- Реализации с актуальной разметкой: [`/challenge`](../src/app/challenge/page.tsx), [`/mentorship`](../src/app/mentorship/page.tsx), [`/about`](../src/app/about/page.tsx), [`/meta/manifesto`](../src/app/meta/manifesto/page.tsx).
- Компонент карточек: [`ManifestOfferCard`](../src/components/meta/ManifestOfferCard.tsx).
- Глобальный футер и шапка: [`MetaSiteFooter`](../src/components/meta/MetaSiteFooter.tsx), [`MetaSiteHeader`](../src/components/meta/MetaSiteHeader.tsx).
