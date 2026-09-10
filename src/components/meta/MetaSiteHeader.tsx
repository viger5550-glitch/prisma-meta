"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { homeShell } from "./homeShell";

const PRODUCTODELS_URL = "https://productodels.figma.site/";
const CAL_MENTORSHIP = "https://cal.com/vika-german/консультация";
const KNOWLEDGE_PRODUCTODEL_URL = "https://knowledge.productodel.ru/";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

function isRouteActive(pathname: string, href: string) {
  if (href.startsWith("http")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

const activeStyle = "underline decoration-[1px] underline-offset-[6px]";

function navLinkClass(active: boolean, extra?: string) {
  return [extra, "hover:opacity-70", active ? activeStyle : ""]
    .filter(Boolean)
    .join(" ");
}

export function MetaSiteHeader({ wide = false }: { wide?: boolean }) {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div
        className={`flex flex-col gap-4 py-6 ${wide ? homeShell : "mx-auto max-w-[1280px] px-6 md:px-12 lg:px-[96px]"} ${interSans}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link
            href="/"
            className="text-[12px] uppercase tracking-[0.22em] hover:opacity-70"
          >
            PRISMA
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-normal uppercase leading-[15px] tracking-[4px] text-black lg:gap-x-10">
            <Link href="/about" className={navLinkClass(isRouteActive(pathname, "/about"))}>
              AUTHOR
            </Link>
            {/* Временно скрыты пункты: THE MANIFESTO, CHALLENGE, MENTORSHIP, GAME, KNOWLEDGE, DESIGN SOLUTION — убрать `hidden` с ссылок, чтобы вернуть */}
            <Link href="/meta/manifesto" className={navLinkClass(isRouteActive(pathname, "/meta/manifesto"), "hidden")}>
              THE MANIFESTO
            </Link>
            <Link href="/challenge" className={navLinkClass(isRouteActive(pathname, "/challenge"), "hidden")}>
              challenge
            </Link>
            <Link href={CAL_MENTORSHIP} target="_blank" rel="noopener noreferrer" className="hidden hover:opacity-70">
              MENTORSHIP
            </Link>
            <Link href={PRODUCTODELS_URL} target="_blank" rel="noopener noreferrer" className="hidden hover:opacity-70">
              GAME
            </Link>
            <Link href={PRODUCTODELS_URL} target="_blank" rel="noopener noreferrer" className="hidden hover:opacity-70">
              DESIGN SOLUTION
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
