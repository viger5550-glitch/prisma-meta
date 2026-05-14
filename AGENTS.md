<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Навигация: страницы из хедера

Страницы по ссылкам из `MetaSiteHeader` (**AUTHOR** → `/about`, **THE MANIFESTO** → `/meta/manifesto`) должны содержать [`BackButton`](src/components/meta/BackButton.tsx) над заголовком: `router.back()` + осмысленный `fallbackHref`. Подробнее: [docs/navigation-from-header.md](docs/navigation-from-header.md).

## Стиль страниц-лендингов

Все лендинги (`/`, `/about`, `/challenge`, `/mentorship`, `/meta/manifesto`, новые) должны попадать в единый стилевой контракт: контейнер `max-w-[1280px]` с `lg:px-[96px]`, текстовая колонка `max-w-[760px]`, серифный заголовок страницы с фирменной вертикальной палкой `|`, опциональные тег (eyebrow) и подзаголовок, чередование фонов `bg-white` ↔ `bg-[#F2F2F2]`. Полный контракт и готовый шаблон hero: [docs/page-style-guide.md](docs/page-style-guide.md).
