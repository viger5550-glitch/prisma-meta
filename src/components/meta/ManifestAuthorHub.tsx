import Link from "next/link";

import hoverStyles from "./manifestRadialHoverScale.module.css";

/**
 * Центральный круг: без поворота контейнера; подпись горизонтальная.
 * Размеры: 220×220, padding 16, рамка rgb(198,198,198), тень по макету.
 */
export function ManifestAuthorHub({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative z-[15] hover:z-[45] ${hoverStyles.scaleWrap} ${className}`}
    >
      <Link
        href="/about"
        className="box-border flex size-[220px] shrink-0 items-center justify-center rounded-full border border-[rgb(198_198_198)] bg-black p-4 font-sans text-white shadow-[0_20px_40px_rgba(26,28,28,0.22)]"
        aria-label="Об авторе"
      >
        <span className="block text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.24em]">
          ОБ АВТОРЕ
        </span>
      </Link>
    </div>
  );
}
