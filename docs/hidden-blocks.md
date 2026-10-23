# Скрытые блоки на сайте

Блоки, которые временно убраны со страниц, но не удалены из кода. Чтобы вернуть блок, поменять флаг на `true`.

| Блок | Страница | Где флаг | Что внутри | Скрыт |
|---|---|---|---|---|
| SMART | Главная `/` | `SHOW_SMART` в [StudioBusinessPage.tsx](../src/components/meta/StudioBusinessPage.tsx) | Карточки SMART, данные в `STUDIO_SMART` ([studioHome.ts](../src/components/meta/studioHome.ts)) | 2026-10-23 |
| Команда | Главная `/` | `SHOW_TEAM` в [StudioBusinessPage.tsx](../src/components/meta/StudioBusinessPage.tsx) | Блок команды (`Team`) | — |

Когда скрываешь новый блок, добавь его в эту таблицу.
