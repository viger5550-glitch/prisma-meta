"use client";

import { useRouter } from "next/navigation";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export function BackButton({ fallbackHref = "/" }: { fallbackHref?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
      className={`inline-flex text-[10px] uppercase tracking-[0.25em] text-black/55 transition-opacity hover:opacity-70 ${interSans}`}
    >
      ← назад
    </button>
  );
}
