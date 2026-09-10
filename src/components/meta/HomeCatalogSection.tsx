"use client";

import { useMemo, useState } from "react";

import { HomeCatalogCard } from "./HomeCatalogCard";
import {
  filterHomeOffers,
  HOME_FILTERS,
  HOME_OFFERS,
  type HomeOfferFilter,
} from "./homeOffers";
import { homeShell } from "./homeShell";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export function HomeCatalogSection() {
  const [filter, setFilter] = useState<HomeOfferFilter>("all");
  const offers = useMemo(() => filterHomeOffers(HOME_OFFERS, filter), [filter]);

  return (
    <section className="bg-[#F2F2F2]">
      <div className={`${homeShell} py-16 md:py-24 lg:py-[120px]`}>
        <div
          className={`flex flex-wrap items-center gap-x-8 gap-y-3 ${interSans}`}
          role="tablist"
          aria-label="Категории офферов"
        >
          {HOME_FILTERS.map((item) => {
            const active = item.id === filter;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={
                  active
                    ? "cursor-pointer bg-black px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white"
                    : "cursor-pointer text-[10px] font-medium uppercase tracking-[0.16em] text-black/40 transition-colors hover:text-black"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="w-full sm:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-5rem)/5)]"
            >
              <HomeCatalogCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
