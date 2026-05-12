import Link from "next/link";

const PRIVACY_URL = "https://knowledge.productodel.ru/legal/privacy";
const OFFER_URL = "https://knowledge.productodel.ru/legal/offer";
const SUPPORT_TG_URL = "https://t.me/vigerman";
const INSTAGRAM_URL = "https://www.instagram.com/viger_on";
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

function InstagramIcon({ className = "" }: { className?: string }) {
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
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MetaSiteFooter() {
  return (
    <footer className={`border-t border-black/5 bg-white ${interSans}`}>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12 lg:px-[96px]">
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
            написать в поддержку
          </a>
          <Link href="/" className="text-black hover:opacity-70">
            PRISMA
          </Link>
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
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-500 hover:text-black"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
