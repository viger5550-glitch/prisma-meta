# Скрытые блоки на сайте

Блоки, которые временно убраны со страниц, но не удалены из кода. Чтобы вернуть блок, поменять флаг на `true`.

| Блок | Страница | Где флаг | Что внутри | Скрыт |
|---|---|---|---|---|
| SMART | Главная `/` | `SHOW_SMART` в [StudioBusinessPage.tsx](../src/components/meta/StudioBusinessPage.tsx) | Карточки SMART, данные в `STUDIO_SMART` ([studioHome.ts](../src/components/meta/studioHome.ts)) | 2026-10-23 |
| Профиль («Опыт, который становится агентом») | `/founder` | `SHOW_PROFILE` в [FounderPage.tsx](../src/components/meta/FounderPage.tsx) | Четыре карточки из `STUDIO_TEAM[0].profile` ([studioHome.ts](../src/components/meta/studioHome.ts)) | 2026-10-23 |
| Бегущая строка (Copilot Platforms · Companion app · …) | Главная `/` | `SHOW_HOME_MARQUEE` в [StudioBusinessPage.tsx](../src/components/meta/StudioBusinessPage.tsx) | Компонент `Marquee`, слова в `STUDIO_MARQUEE` ([studioHome.ts](../src/components/meta/studioHome.ts)); на `/agents` лента осталась | 2026-11-06 |
| Команда | Главная `/` | `SHOW_TEAM` в [StudioBusinessPage.tsx](../src/components/meta/StudioBusinessPage.tsx) | Блок команды (`Team`) | — |
| «Мой метод» (Companion-app / Co-pilot, Behavioral Change Design) | Главная `/` | `SHOW_METHOD` в [StudioPortfolio.tsx](../src/components/meta/StudioPortfolio.tsx) | Компактные карточки, данные в `HEALTH_METHOD` ([healthTech.ts](../src/components/meta/healthTech.ts)); на его месте — «Портфолио» | 2026-11-11 |
| Backstage продукта (Threads + «Задонатить») | `/foody` | `SHOW_BACKSTAGE` в [FoodyPage.tsx](../src/components/meta/FoodyPage.tsx) | Тёмная карточка в блоке «Статус продукта», ссылки `FOODY_THREADS_URL`, `FOODY_DONATE_URL` | 2026-11-11 |

Когда скрываешь новый блок, добавь его в эту таблицу.
