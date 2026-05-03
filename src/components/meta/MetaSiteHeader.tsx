import Link from "next/link";

const PRODUCTODELS_URL = "https://productodels.figma.site/";
const CAL_MENTORSHIP = "https://cal.com/vika-german/консультация";
const KNOWLEDGE_PRODUCTODEL_URL = "https://knowledge.productodel.ru/";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export function MetaSiteHeader() {
  return (
    <header className="bg-white">
      <div
        className={`mx-auto flex max-w-[1280px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-[96px] lg:py-6 ${interSans}`}
      >
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-normal uppercase leading-[15px] tracking-[4px] text-black lg:gap-x-10">
          <Link href="/meta/manifesto" className="hover:opacity-70">
            THE MANIFESTO
          </Link>
          <Link href="/about" className="hover:opacity-70">
            AUTHOR
          </Link>
        </nav>
        <nav className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-[10px] font-normal uppercase leading-[15px] tracking-[4px] text-black sm:justify-end lg:gap-x-10">
          <Link href={PRODUCTODELS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            COMMUNITY
          </Link>
          <Link href={CAL_MENTORSHIP} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            MENTORSHIP
          </Link>
          <Link href={PRODUCTODELS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            GAME
          </Link>
          <Link href={KNOWLEDGE_PRODUCTODEL_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            KNOWLEDGE
          </Link>
          <Link href={PRODUCTODELS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            DESIGN SOLUTION
          </Link>
        </nav>
      </div>
    </header>
  );
}
