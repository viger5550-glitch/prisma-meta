# Отчёт: доступ к сайту через Cloudflare CDN

Дата отчёта: 28 августа 2026.  
Публичный адрес: **https://www.prisma-meta.ru**  
Хостинг приложения: Railway (`s4ihkmsr.up.railway.app`).  
Регистратор домена: Рег.ру (домен остаётся там, меняются только NS).

## Проблема (root cause)

Пользователи российских мобильных операторов (МТС, Мегафон, Билайн, Tele2) не могли открыть **www.prisma-meta.ru** без VPN (и часто с VPN тоже).

Причина: прямой CNAME на Railway (`s4ihkmsr.up.railway.app`) резолвится в IP подсети **`69.46.46.0/24`**. Эта подсеть у части сетей РФ не маршрутизируется (timeout, сайт «не открывается»). Это не баг Next.js и не «домен в чёрном списке».

## Цель

Стабильный доступ с мобильного интернета в РФ без VPN. Railway остаётся хостингом. Cloudflare — промежуточный прокси (CDN): пользователь ходит на IP Cloudflare, Cloudflare уже стучится на Railway.

Голый адрес **prisma-meta.ru без www** в эту работу **не входит**: публичные ссылки остаются на **www**.

## Выполненные шаги (по отчёту настройки)

### 1. Зона в Cloudflare

- Домен `prisma-meta.ru` добавлен в Cloudflare, тариф **Free**.
- DNS-записи:
  - **CNAME** `www` → `s4ihkmsr.up.railway.app`
  - **TXT** `_railway-verify.www` → `railway-verify=4806a212693f22f2017cb855fdfa4ecc5e1a2fef891a22e6939baf1b78f4935c` в режиме **DNS only** (серое облако). Прокси на TXT ломает проверку Railway.

### 2. Делегирование NS в Рег.ру

Заменить стандартные `ns1.reg.ru` / `ns2.reg.ru` на NS Cloudflare:

- NS1: `aarav.ns.cloudflare.com`
- NS2: `melissa.ns.cloudflare.com`

### 3. SSL/TLS

В Cloudflare: **SSL/TLS → Overview → Full (strict)**.  
Режим Flexible даёт цикл редиректов (`ERR_TOO_MANY_REDIRECTS`) между Cloudflare и HTTPS Railway.

### 4. Прокси на www

У CNAME `www` статус **Proxied** (оранжевое облако).  
Серое облако (DNS only) оставляет IP Railway и мобилки не чинит.

## Как понять, что фикс живой

`www.prisma-meta.ru` должен резолвиться в **IP Cloudflare** (часто `104.x` / `172.x` / `162.x`), а не в **`69.46.46.0`**.  
NS домена: `aarav.ns.cloudflare.com` и `melissa.ns.cloudflare.com`, не `ns1.reg.ru`.

Проверка с телефона: LTE/5G без VPN → открывается `https://www.prisma-meta.ru`.

## Проверка снаружи (28.08.2026, утро)

С резолверов `8.8.8.8` и `1.1.1.1` на момент записи в репозиторий:

- NS всё ещё **`ns1.reg.ru` / `ns2.reg.ru`**
- `www` → CNAME `s4ihkmsr.up.railway.app` → **`69.46.46.0`**

То есть зона в Cloudflare могла быть настроена, но **делегирование NS ещё не видно интернету** (запись в Рег.ру не сохранилась, не подтверждена, либо TTL NS до ~24 часов). Пока NS не сменятся, оранжевое облако на посетителей не действует.

После смены NS перепроверить: `nslookup www.prisma-meta.ru` не должен показывать `69.46.46.0`.

## Откат

В Рег.ру вернуть NS на `ns1.reg.ru` и `ns2.reg.ru`. Домен и Railway при этом остаются как были.

## Связанные документы

- Предыстория DNS / www vs корень: [dorabotka-domena.md](./dorabotka-domena.md)
- Та же постановка для базы знаний: [prisma-knowledge-cloudflare-mobile.md](./prisma-knowledge-cloudflare-mobile.md)
