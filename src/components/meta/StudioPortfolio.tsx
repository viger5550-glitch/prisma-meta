"use client";

import Link from "next/link";
import { useState } from "react";

import { HEALTH_CASES } from "@/components/meta/healthTech";
import {
  AGENT_GROUPS,
  type AgentGroupId,
  STUDIO_CASE_TABS,
  STUDIO_CASES,
  type StudioCase,
  type StudioCaseTab,
} from "@/components/meta/studioHome";
import { Dot, GREEN, SectionTitle, VIOLET, lift, serif, shell } from "@/components/meta/studioUi";

export function CaseCard({ item, index }: { item: StudioCase; index: number }) {
  const body = (
    <>
      <div
        className="flex aspect-[16/10] flex-col justify-between px-6 py-[22px] text-white"
        style={{ background: item.violet ? VIOLET : "#0a0a0a" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] leading-none" style={{ color: item.violet ? "#d8d8f4" : "#8a8a8a" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.direction || item.status ? (
            <div className="flex items-center gap-[6px]">
              {item.status ? (
                <span className="rounded-full border border-white/60 px-[10px] py-1 text-[7.5px] font-bold uppercase leading-none tracking-[.16em] text-white">
                  {item.status}
                </span>
              ) : null}
              {item.direction ? (
                <span
                  className="rounded-full px-[10px] py-1 text-[7.5px] font-bold uppercase leading-none tracking-[.16em] text-[#0a0a0a]"
                  style={{ background: GREEN }}
                >
                  {item.direction}
                </span>
              ) : null}
            </div>
          ) : (
            <Dot size={8} />
          )}
        </div>
        <span className={`text-[clamp(34px,3.6vw,46px)] italic leading-none ${serif}`}>
          {item.word}
          <span style={{ color: GREEN }}>.</span>
        </span>
        <span
          className="text-[8.5px] font-semibold uppercase leading-[1.4] tracking-[.24em]"
          style={{ color: item.violet ? "#fff" : "#a8a8a8" }}
        >
          {item.tags}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[10px] px-6 pb-[26px] pt-6">
        <span className="text-[12px] font-medium leading-[1.6] text-pretty" style={{ color: VIOLET }}>
          {item.author ? (
            <span className="inline-flex items-center gap-2">
              Автор продукта
              <Dot />
              {item.author}
            </span>
          ) : (
            item.audience
          )}
        </span>
        <span className="text-[11.5px] leading-[1.7] text-pretty text-[#4a4a4a]">{item.text}</span>
        {item.price ? (
          <div className="flex items-baseline gap-[6px] pt-1">
            <span className="text-[34px] font-light leading-none text-[#0a0a0a]">{item.price.value}</span>
            <span className="text-[11px] leading-none text-[#8a8a8a]">{item.price.unit}</span>
          </div>
        ) : null}
        {item.href ? (
          <span className="mt-auto pt-2 text-[9px] font-bold leading-none tracking-[.24em]">ПОДРОБНЕЕ →</span>
        ) : null}
      </div>
    </>
  );

  const base = "flex flex-col border-b-[3px] border-transparent bg-white text-[#0a0a0a]";
  if (!item.href) return <div className={base}>{body}</div>;

  return (
    <Link
      href={item.href}
      className={`${base} ${lift} hover:-translate-y-2 hover:border-[#00e37a] hover:shadow-[0_24px_48px_rgba(0,0,0,.10)]`}
    >
      {body}
    </Link>
  );
}

/** Портфолио по направлениям: сначала Agents, потом Apps. */
const ALL_CASES = (["business", "health"] as const).flatMap((category) =>
  [...STUDIO_CASES, ...HEALTH_CASES].filter((item) => item.category === category),
);

function CaseGrid({ items }: { items: { item: StudioCase; index: number }[] }) {
  return (
    <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,360px),1fr))]">
      {items.map(({ item }, i) => (
        <CaseCard key={item.title} item={{ ...item, violet: i % 2 === 1 }} index={i} />
      ))}
    </div>
  );
}

/** only — показать одно направление без вкладок (главная — Apps, /agents — Agents). */
export function StudioPortfolio({ only }: { only?: StudioCase["category"] } = {}) {
  const [selected, setTab] = useState<StudioCaseTab>("all");
  const tab: StudioCaseTab = only ?? selected;
  const [group, setGroup] = useState<AgentGroupId>("process");
  // Цвет обложек чередуется по порядку в выбранной вкладке, а не задаётся в данных.
  const visible = ALL_CASES.map((item, index) => ({ item, index }))
    .filter(({ item }) => tab === "all" || item.category === tab)
    .map(({ item, index }, i) => ({ item: { ...item, violet: i % 2 === 1 }, index }));

  return (
    <section id="portfolio" className={`flex flex-col gap-12 py-[100px] ${shell}`}>
      {only === "business" ? (
        <SectionTitle eyebrow="Решение" title="Команда ИИ-помощников под ваши процессы" />
      ) : (
        <SectionTitle eyebrow="Портфолио" title="За каждым продуктом — авторский метод" />
      )}
      {only ? null : (
      <div className="-mt-4 flex flex-wrap gap-[10px]" role="tablist">
        {STUDIO_CASE_TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              className={`cursor-pointer px-[22px] py-[11px] text-[8.5px] font-bold uppercase leading-none tracking-[.22em] transition-colors duration-[250ms] ${
                active ? "bg-[#0a0a0a] text-white" : "bg-[#e6e6e6] text-[#0a0a0a]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      )}
      {only === "business" ? (
        <>
          <p className="-mt-4 m-0 max-w-[62ch] text-[14px] leading-[1.9] text-pretty text-[#2a2a2a]">
            В любом бизнесе есть две большие задачи: наладить внутренние процессы и улучшить клиентский опыт. Это
            позволяет минимальными усилиями достигать максимального результата.
          </p>
          <div className="flex flex-wrap gap-[10px]" role="tablist">
            {AGENT_GROUPS.map((g) => {
              const active = g.id === group;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setGroup(g.id)}
                  className={`cursor-pointer px-[22px] py-[13px] text-[8.5px] font-bold uppercase leading-none tracking-[.22em] transition-colors duration-[250ms] ${
                    active ? "bg-[#0a0a0a] text-white" : "bg-[#e6e6e6] text-[#0a0a0a] hover:bg-[#dadada]"
                  }`}
                >
                  {g.title}
                </button>
              );
            })}
          </div>
          <p className="-mt-6 m-0 max-w-[62ch] text-[12.5px] leading-[1.7] text-pretty text-[#4a4a4a]">
            {AGENT_GROUPS.find((g) => g.id === group)?.text}
          </p>
          <CaseGrid items={visible.filter(({ item }) => item.group === group)} />
        </>
      ) : (
        <CaseGrid items={visible} />
      )}
    </section>
  );
}
