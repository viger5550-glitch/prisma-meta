import { homeShell } from "./homeShell";

const PRIVACY_URL = "https://knowledge.productodel.ru/legal/privacy";
const OFFER_URL = "https://knowledge.productodel.ru/legal/offer";
const SUPPORT_TG_URL = "https://t.me/vigerman";
const THREADS_URL = "https://www.threads.com/?hl=ru";
const CHANNEL_TG_URL = "https://t.me/viger_onn";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 4 3 11l6 2 2 6 4-4 5 4 1-15Z" />
      <path d="m9 13 8-6" />
    </svg>
  );
}

function ThreadsIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z" />
    </svg>
  );
}

export function MetaSiteFooter({ wide = false }: { wide?: boolean }) {
  return (
    <footer className={`border-t border-black/5 bg-white ${interSans}`}>
      <div
        className={`flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between ${wide ? homeShell : "mx-auto max-w-[1280px] px-6 md:px-12 lg:px-[96px]"}`}
      >
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">
            политика конфиденциальности
          </a>
          <a href={OFFER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">
            оферта
          </a>
        </nav>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
          <a
            href={SUPPORT_TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            контакт
          </a>
          <a
            href={CHANNEL_TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-zinc-500 hover:text-black"
          >
            <TelegramIcon className="h-4 w-4" />
          </a>
          <a
            href={THREADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="text-zinc-500 hover:text-black"
          >
            <ThreadsIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
