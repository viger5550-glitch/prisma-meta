import Link from "next/link";

const TELEGRAM_URL = "https://t.me/vigerman";
const INSTAGRAM_URL = "https://www.instagram.com/viger_on";

export function MetaSiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-[#F2F2F2]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10 lg:py-14">
        <div>
          <p className="font-serif text-lg tracking-tight text-black lg:text-xl">|PRISMA</p>
          <p className="mt-4 max-w-md text-[10px] uppercase leading-relaxed tracking-[0.12em] text-zinc-500">
            © {new Date().getFullYear()} Productodeli by Victoria German. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black">
          <Link href="/legal/privacy" className="hover:opacity-70">
            Privacy policy
          </Link>
          <Link href="/legal/offer" className="hover:opacity-70">
            Terms of service
          </Link>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            Contact
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
