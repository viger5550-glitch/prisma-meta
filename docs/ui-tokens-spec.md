# UI Tokens Spec (Preparation Only)

## Статус

Этот документ фиксирует контракт токенов перед реализацией.
Код, файлы в `src/` и интеграция в компоненты на этом этапе не выполняются.

## 1) Формат токенов

Целевой формат для будущей реализации:
- единый источник токенов;
- плоские ключи `category.name.state`;
- значения в строках (`px`, hex, rgba).

Рекомендуемая структура ключей:
- `color.*`
- `font.family.*`
- `font.size.*`
- `font.line.*`
- `font.weight.*`
- `space.*`
- `radius.*`
- `shadow.*`
- `zIndex.*`
- `motion.*`

## 2) Контракт токенов (MVP)

```json
{
  "color.bg.base": "#FFFFFF",
  "color.bg.surface": "#F6F6F6",
  "color.bg.inverse": "#111111",
  "color.text.primary": "#111111",
  "color.text.secondary": "#5C5C5C",
  "color.text.inverse": "#FFFFFF",
  "color.border.default": "#D9D9D9",
  "color.border.strong": "#B3B3B3",
  "color.action.primary.bg": "#111111",
  "color.action.primary.text": "#FFFFFF",
  "color.action.secondary.bg": "#FFFFFF",
  "color.action.secondary.text": "#111111",
  "color.action.secondary.border": "#111111",
  "color.state.hover.overlay": "rgba(0,0,0,0.04)",
  "color.state.disabled.bg": "#EDEDED",
  "color.state.disabled.text": "#9A9A9A",
  "color.focus.ring": "#111111",

  "font.family.base": "Inter, Arial, sans-serif",
  "font.family.heading": "Inter, Arial, sans-serif",
  "font.size.h1": "48px",
  "font.line.h1": "56px",
  "font.size.h2": "36px",
  "font.line.h2": "44px",
  "font.size.h3": "28px",
  "font.line.h3": "36px",
  "font.size.h4": "22px",
  "font.line.h4": "30px",
  "font.size.body.lg": "18px",
  "font.line.body.lg": "28px",
  "font.size.body.md": "16px",
  "font.line.body.md": "24px",
  "font.size.body.sm": "14px",
  "font.line.body.sm": "20px",
  "font.weight.regular": 400,
  "font.weight.medium": 500,
  "font.weight.semibold": 600,
  "font.weight.ui.label": 500,

  "space.1": "8px",
  "space.2": "16px",
  "space.3": "24px",
  "space.4": "32px",
  "space.5": "40px",
  "space.6": "48px",
  "space.8": "64px",
  "space.10": "80px",
  "space.12": "96px",

  "radius.sm": "8px",
  "radius.md": "12px",
  "radius.lg": "16px",

  "shadow.card.default": "0 1px 2px rgba(0,0,0,0.06)",
  "shadow.card.hover": "0 6px 20px rgba(0,0,0,0.10)",

  "zIndex.base": 1,
  "zIndex.header": 10,
  "zIndex.overlay": 100,

  "motion.fast": "120ms",
  "motion.base": "180ms",
  "motion.slow": "240ms",
  "motion.easing.standard": "ease"
}
```

## 3) Правила применения

- один токен — одна роль, без дублирующих алиасов на MVP;
- компоненты используют токены, а не хардкод-значения;
- контраст текста и фона не ниже уровня, подходящего для читаемости;
- интерактивные состояния (`hover`, `focus`, `disabled`) обязательны.
- кнопочные лейблы и короткие CTA-label используют `font.weight.ui.label` (`500`, medium);
- `semibold/bold` не применяются для текстов кнопок в базовой теме Prisma.

## 4) Definition of Ready для старта реализации

- токены согласованы продуктом и фронтендом;
- подтверждено, что текущая визуальная модель остается черно-белой;
- утвержден список компонентов первой волны: `Button`, `Card`, `Header`, `Section`, `Layout`;
- подтвержден целевой способ хранения токенов (например, `tokens.ts` или `ui_tokens.json`).
