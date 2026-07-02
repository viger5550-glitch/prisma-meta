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
            <ManifestOfferCard
              variant="dark"
              titlePrimary="ПОДПИСКА"
              titleSecondary="НА МЕСЯЦ"
              priceAmount="40k"
              pricePeriod="/первый месяц"
              onMore={openModal}
              actionLabel="Записаться"
            />
            <ManifestOfferCard
              variant="light"
              titlePrimary="ПОДПИСКА"
              titleSecondary="НА МЕСЯЦ"
              priceAmount="30k"
              pricePeriod="/второй месяц"
              onMore={openModal}
              actionLabel="Записаться"
            />
            <ManifestOfferCard
              variant="dark"
              titlePrimary="ПОДПИСКА"
              titleSecondary="НА МЕСЯЦ"
              priceAmount="20k"
              pricePeriod="/третий месяц"
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
              className={`mt-8 inline-flex h-11 min-w-[260px] items-center justify-center bg-black px-7 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-zinc-900 ${interSansClassName}`}
            >
              Записаться на первую встречу
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
