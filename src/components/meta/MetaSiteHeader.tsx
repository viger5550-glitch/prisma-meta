"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HOME_OFFERS } from "./homeOffers";
import { shell as studioShell } from "./studioUi";

const README_HREF = HOME_OFFERS.find((offer) => offer.id === "knowledge")?.href ?? "/";

/** Меню шапки: якоря главной студии + README. */
const NAV_ITEMS = [
  { id: "team", title: "Dream team", href: "/#team" },
  { id: "portfolio", title: "Portfolio", href: "/#portfolio" },
  { id: "readme", title: "README", href: README_HREF },
];

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

function isRouteActive(pathname: string, href: string) {
  if (href.startsWith("http") || href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

const activeStyle = "underline decoration-[1px] underline-offset-[6px]";

function navLinkClass(active: boolean) {
  return ["hover:opacity-70", active ? activeStyle : ""].filter(Boolean).join(" ");
}

export function MetaSiteHeader({ wide = false }: { wide?: boolean }) {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div
        className={`flex flex-col gap-4 py-6 ${wide ? studioShell : "mx-auto max-w-[1280px] px-6 md:px-12 lg:px-[96px]"} ${interSans}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link
            href="/"
            className="text-[12px] uppercase tracking-[0.22em] hover:opacity-70"
          >
            PRISMA
          </Link>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-normal uppercase leading-[15px] tracking-[4px] text-black lg:gap-x-8">
            {NAV_ITEMS.map((item) => {
              const external = !item.href.startsWith("/");
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={navLinkClass(isRouteActive(pathname, item.href))}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
