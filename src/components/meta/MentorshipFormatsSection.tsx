"use client";

import { useState } from "react";

import { ManifestOfferCard } from "@/components/meta/ManifestOfferCard";

const TELEGRAM_URL = "https://t.me/vigerman";

type MentorshipFormatsSectionProps = {
  interSansClassName: string;
};

export function MentorshipFormatsSection({ interSansClassName }: MentorshipFormatsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="bg-[#F2F2F2]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
          <h2 className="text-center font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
            Форматы
          </h2>
          <div className="mt-10 flex flex-wrap items-start justify-center gap-8 md:gap-10">
            <article className="box-border flex h-[250px] w-[170px] flex-col justify-between rounded-[2px] bg-black p-6 text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)]">
              <div className="w-full">
                <p className="text-[10px] font-medium uppercase leading-[1.25] tracking-[0.16em]">Подписка</p>
                <p className="mt-1 text-[9px] font-medium uppercase leading-[1.25] tracking-[0.2em]">на месяц</p>
              </div>

              <div className="flex w-full flex-1 flex-col justify-center">
                <ul className="space-y-2 text-left">
                  <li className="text-[12px] leading-[1.25]">
                    <span className="text-[26px] leading-none tracking-tight">40 K</span>
                    <span className="ml-1 text-[10px] text-white/90">/ 1-ый месяц</span>
                  </li>
                  <li className="text-[12px] leading-[1.25]">
                    <span className="text-[26px] leading-none tracking-tight">30 K</span>
                    <span className="ml-1 text-[10px] text-white/90">/ 2-ый месяц</span>
                  </li>
                  <li className="text-[12px] leading-[1.25]">
                    <span className="text-[26px] leading-none tracking-tight">20 K</span>
                    <span className="ml-1 text-[10px] text-white/90">/ 3-ый месяц</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={openModal}
                className={`flex h-9 w-full items-center justify-center bg-white text-[10px] font-medium uppercase tracking-[0.22em] text-black transition-colors hover:bg-zinc-100 ${interSansClassName}`}
              >
                Записаться
              </button>
            </article>
            <ManifestOfferCard
              variant="light"
              titlePrimary="ДОПОЛНИТЕЛЬНЫЕ"
              titleSecondary="ВОРКШОПЫ"
              priceAmount="5k"
              pricePeriod="/1 session"
              onMore={openModal}
              actionLabel="Записаться"
            />
          </div>
        </div>
      </section>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 px-6"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Запись на первую встречу"
            className="w-full max-w-[520px] bg-white p-8 shadow-[0_14px_50px_rgba(0,0,0,0.28)] md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className={`text-[18px] leading-[1.6] text-zinc-800 ${interSansClassName}`}>
              Чтобы пойти в работу — давайте сначала встретимся и поймём, что подходим друг другу.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-auto mt-8 inline-flex h-11 min-w-[260px] items-center justify-center bg-black px-7 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-900 ${interSansClassName}`}
            >
              Записаться на первую встречу
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
