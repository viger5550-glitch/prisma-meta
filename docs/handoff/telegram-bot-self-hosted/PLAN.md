# План реализации: свой Telegram-бот (фаза 1)

> Для агента в **новом** репозитории. Код в `prisma_meta` не писать.  
> Полное ТЗ: [TZ.md](./TZ.md)

**Goal:** Задеплоенный Telegram-бот с базой контактов, импортом из LEADTEX и админ-рассылкой по `chat_id`.

**Architecture:** HTTP-сервер принимает webhook Telegram. Слой бота обрабатывает `/start` и админ-команды. PostgreSQL хранит контакты и факты отправки. Рассылка — очередь `sendMessage` с паузой и записью receipts.

**Tech stack:** TypeScript, Node 20+, grammY, PostgreSQL, webhook, деплой Railway.

## Global Constraints

- Новый репозиторий, не монолит Prisma Meta.
- Один боевой токен не использовать одновременно с LEADTEX.
- Секреты только в env; выгрузку контактов не коммитить.
- Рассылка только `ADMIN_TELEGRAM_IDS` и только после подтверждения.
- Telegram лимит: очередь, ретраи 429, 403 → status `blocked`.
- Фаза 1 без LLM, оплат и копии воронки LEADTEX.

---

### Task 1: Каркас репозитория

**Files:** `package.json`, `tsconfig.json`, `.gitignore`, `.env.example`, `README.md`, `src/config.ts`

- [ ] Node-проект с `start` / `dev` / `import`.
- [ ] `.env.example` со всеми ключами из ТЗ §7.3.
- [ ] README: запуск локально, webhook, импорт, миграция LEADTEX (порядок из ТЗ §6).
- [ ] `.gitignore`: `.env`, `*.csv`, `*.xlsx`, `data/`.

**Done when:** `npm install` проходит, README можно отдать владельцу.

---

### Task 2: База контактов и рассылок

**Files:** `src/db.ts`, миграция SQL или drizzle/kysely — на выбор, зафиксировать в README

- [ ] Таблицы `contacts`, `broadcasts`, `broadcast_receipts` как в ТЗ §7.1.
- [ ] Функции: `upsertContactFromStart`, `importContact`, `listActiveIds`, `markBlocked`, `createBroadcast`, `saveReceipt`.
- [ ] Уникальность по `telegram_id`.

**Done when:** локально создаётся схема, upsert дважды с одним id даёт одну строку.

---

### Task 3: Бот `/start` + webhook

**Files:** `src/bot.ts`, `src/index.ts`

- [ ] grammY, webhook path `/webhook`.
- [ ] `/start` пишет контакт `source=start`, отвечает заглушкой из ТЗ.
- [ ] Health `GET /health` → 200.
- [ ] Локально: тестовый токен; для отладки допустим polling **только** в `dev`, прод — webhook.

**Done when:** тестовый Start виден в БД, повтор не дублирует.

---

### Task 4: Админ `/stats` и `/broadcast`

**Files:** `src/bot.ts`, `src/broadcast.ts`

- [ ] Доступ только если id в `ADMIN_TELEGRAM_IDS`.
- [ ] `/stats` — счётчики active/blocked/total.
- [ ] `/broadcast` → ждать текст → превью + N получателей → ждать `ДА`.
- [ ] Очередь sendMessage: пауза, retry 429, 403 → blocked.
- [ ] Писать broadcast + receipts.
- [ ] Текст длиннее 4096 — отказ или нарезка, зафиксировать в README (предпочтительно отказ с просьбой укоротить).

**Done when:** админ шлёт себе и второму тестовому аккаунту; не-админ получает отказ.

---

### Task 5: Импорт LEADTEX

**Files:** `scripts/import-leadtex.ts` или `src/import-contacts.ts`

- [ ] Читать CSV (и xlsx, если не раздувает зависимость — иначе инструкция «сохранить как CSV»).
- [ ] Колонка Telegram ID обязательна; пустые/нечисловые строки — в отчёт ошибок, не валят весь импорт.
- [ ] `source=leadtex_import`; если контакт уже есть — обновить имя/username, **не** затирать `status=blocked` без нужды (status не трогать, если уже blocked).
- [ ] Итог в консоль: imported / updated / skipped.

**Done when:** прогон на фиктивном CSV из 3 строк даёт 3 контакта; повтор — updated, не дубли.

---

### Task 6: Деплой Railway

**Files:** `Procfile` или nixpack start, README секция Deploy

- [ ] `npm start` слушает `PORT`.
- [ ] После деплоя: `setWebhook` на `PUBLIC_BASE_URL/webhook`.
- [ ] Переменные те же, что `.env.example`.
- [ ] Отдельный сервис, не сайт Prisma.

**Done when:** с телефона Start доходит до продовой БД.

---

### Task 7: Чеклист миграции с владельцем (без кода)

Не автоматизировать отвязку LEADTEX. Пройти руками по ТЗ §12.

- [ ] Файл выгрузки у владельца есть.
- [ ] Стейдж/тест зелёный.
- [ ] Импорт на прод.
- [ ] Отвязка LEADTEX → боевой токен → webhook → контрольная рассылка на 1 человека.

**Done when:** владелец подтвердил, что сообщения приходят старым контактам.

---

## Вне этого плана

Фаза 2: воронки, кнопки, оплаты, теги/сегменты, отписка командой `/stop`, веб-админка.
