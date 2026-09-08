# Постановка: доступ к prisma-knowledge.ru через Cloudflare CDN

Дата: 28 августа 2026.  
Публичный адрес: **https://www.prisma-knowledge.ru**  
Сайт: Next.js, «База знаний» (MVP).  
Хостинг приложения: **Railway** (заголовки ответа: `x-railway-edge`, `x-railway-request-id`).  
Cloudflare: зона уже делегирована (те же NS, что планировали для меты: `aarav` / `melissa`).

Это **та же задача**, что для `www.prisma-meta.ru`: спрятать IP Railway за прокси Cloudflare, чтобы сайт открывался с мобильного интернета РФ без VPN. Голый адрес без www **не входит** в работу: людям дают ссылку с www.

Отличие от меты: у knowledge Cloudflare **уже виден снаружи**. Не переделывать NS «с нуля», если они уже Cloudflare. Сверить настройки и не сломать рабочий www.

## 1. Проблема (root cause)

Та же, что у Prisma Meta: origin Railway сидит на shared edge. Прямой заход на IP Railway (подсеть вроде `69.46.46.0/24`) с МТС / Мегафон / Билайн / Tele2 часто даёт timeout. VPN не гарантия.

Лечение: пользователь → IP Cloudflare → Cloudflare → Railway.

## 2. Цель работ

- Стабильный доступ к **https://www.prisma-knowledge.ru** с мобилок РФ без VPN.
- Railway остаётся хостингом.
- SSL без цикла редиректов.
- Верификация домена в Railway не ломается.

Не делать в этой постановке: переезд хостинга на Рег.ру, канонический адрес без www, правки кода базы знаний.

## 3. Что уже есть снаружи (проверка 28.08.2026)

| Что | Факт |
|-----|------|
| NS | `aarav.ns.cloudflare.com`, `melissa.ns.cloudflare.com` |
| `www.prisma-knowledge.ru` | A **104.21.1.104**, **172.67.129.8** (IP Cloudflare, не Railway) |
| HTTPS www | **200**, `Server: cloudflare`, origin Railway + Next.js |
| TXT `_railway-verify.www` | `railway-verify=d083d3d397599e71fd02f5f5c96306679b10ad965cbc7351082c38630bb3db53` |
| `prisma-knowledge.ru` без www | те же IP Cloudflare, но ответ **404** + `x-railway-fallback: true` (в Railway нет кастомного домена на корень) |
| TXT `_railway-verify` на корне | нет |

Точный CNAME origin (`*.up.railway.app`) из публичного DNS не виден: при Proxied Cloudflare отдаёт свои A. Значение взять из панели Railway → Custom Domain → `www.prisma-knowledge.ru`.

## 4. Шаги (чеклист, как у меты)

Повторить **проверку** настроек. Менять только то, что не совпадает.

### Шаг 1. Зона Cloudflare

Домен `prisma-knowledge.ru` в том же аккаунте Cloudflare, тариф Free.

DNS:

- **CNAME** `www` → hostname Railway из панели (`….up.railway.app`), без `https://`.
- **TXT** `_railway-verify.www` → значение из Railway для www (сейчас `railway-verify=d083d3d397599e71fd02f5f5c96306679b10ad965cbc7351082c38630bb3db53`), режим **DNS only** (серое облако). Прокси на TXT ломает проверку Railway.

### Шаг 2. NS у регистратора

Должны быть (и снаружи уже такие):

- NS1: `aarav.ns.cloudflare.com`
- NS2: `melissa.ns.cloudflare.com`

Если в кабинете регистратора всё ещё `ns1.reg.ru` / `ns2.reg.ru` — заменить. Если уже Cloudflare — **не трогать**.

### Шаг 3. SSL/TLS

Cloudflare → **SSL/TLS → Overview → Full (strict)**.  
Flexible даёт `ERR_TOO_MANY_REDIRECTS`.

### Шаг 4. Прокси на www

CNAME `www` — **Proxied** (оранжевое облако).  
Серое облако вернёт IP Railway и снова сломает мобилки.

## 5. Критерий готовности

- `nslookup www.prisma-knowledge.ru` → IP Cloudflare (`104.x` / `172.x` / `162.x`), не `69.46.46.x`.
- С телефона LTE/5G без VPN открывается **https://www.prisma-knowledge.ru**.
- В Railway кастомный домен www подтверждён (зелёный).
- Нет `ERR_TOO_MANY_REDIRECTS`.

Сейчас публичный DNS и HTTPS www этому уже соответствуют. Остаётся ручная сверка SSL Full (strict) и оранжевого облака в панели + тест с мобилки.

## 6. Чего не трогать

- Корень `prisma-knowledge.ru` без www: сейчас 404 с Railway fallback. Для ссылок с www это не блокер. Чинить корень — отдельная задача (добавить apex в Railway и записи в Cloudflare).
- Не включать прокси на TXT `_railway-verify.www`.
- Не откатывать NS на Рег.ру «для проверки» — это вернёт прямые IP Railway.

## 7. Откат

Вернуть NS регистратора на `ns1.reg.ru` / `ns2.reg.ru` (если зона DNS жила там). Сайт снова пойдёт напрямую на Railway.

## Связанные документы

- Та же процедура для меты: [cloudflare-cdn-mobile-access.md](./cloudflare-cdn-mobile-access.md)
