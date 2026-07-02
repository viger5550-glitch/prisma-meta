"use client";

import { ManifestOfferCard } from "@/components/meta/ManifestOfferCard";
import styles from "@/components/meta/manifestRadialHoverScale.module.css";

const TELEGRAM_URL = "https://t.me/vigerman";

type MentorshipFormatsSectionProps = {
  interSansClassName: string;
};

export function MentorshipFormatsSection({ interSansClassName }: MentorshipFormatsSectionProps) {
  return (
    <section className="bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
        <h2 className="text-center font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
          Форматы
        </h2>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-8 md:gap-10">
          <div className={styles.scaleWrap}>
            <article className="box-border flex h-[250px] w-[170px] flex-col justify-between rounded-[2px] bg-black p-6 text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]">
              <div className="w-full">
                <p className="text-[10px] font-medium uppercase leading-[1.25] tracking-[0.16em]">Подписка</p>
                <p className="mt-1 text-[9px] font-medium uppercase leading-[1.25] tracking-[0.2em]">на месяц</p>
              </div>

              <div className="flex w-full flex-1 flex-col justify-center">
                <ul className="space-y-2 text-left">
                  <li className="text-[12px] leading-[1.25]">
                    <span className="text-[26px] leading-none tracking-tight">40 K</span>
                    <span className="ml-1 text-[10px] text-white/90">/ 1st mo</span>
                  </li>
                  <li className="text-[12px] leading-[1.25]">
                    <span className="text-[26px] leading-none tracking-tight">30 K</span>
                    <span className="ml-1 text-[10px] text-white/90">/ 2d mo</span>
                  </li>
                  <li className="text-[12px] leading-[1.25]">
                    <span className="text-[26px] leading-none tracking-tight">20 K</span>
                    <span className="ml-1 text-[10px] text-white/90">/ 3d mo</span>
                  </li>
                </ul>
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-9 w-full items-center justify-center bg-white text-[10px] font-medium uppercase tracking-[0.22em] text-black transition-colors hover:bg-zinc-100 ${interSansClassName}`}
              >
                Записаться
              </a>
            </article>
          </div>
          <ManifestOfferCard
            variant="light"
            titlePrimary="ДОПОЛНИТЕЛЬНЫЕ"
            titleSecondary="ВОРКШОПЫ"
            priceAmount="5k"
            pricePeriod="/1 session"
            moreHref={TELEGRAM_URL}
            actionLabel="Записаться"
          />
        </div>
      </div>
    </section>
  );
}
