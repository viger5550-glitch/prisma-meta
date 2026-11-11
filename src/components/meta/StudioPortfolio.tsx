"use client";

import Link from "next/link";
import { useState } from "react";

import { HEALTH_CASES, HEALTH_METHOD } from "@/components/meta/healthTech";
import {
  AGENT_GROUPS,
  type AgentGroupId,
  STUDIO_CASE_TABS,
  STUDIO_CASES,
  type StudioCase,
  type StudioCaseTab,
} from "@/components/meta/studioHome";
import {
  Dot,
  GREEN,
  SectionTitle,
  VIOLET,
  lift,
  serif,
  shell,
} from "@/components/meta/studioUi";

/** onWhite — карточка стоит на белой секции: подложка серая, чтобы не сливалась. */
export function CaseCard({
  item,
  index,
  onWhite,
}: {
  item: StudioCase;
  index: number;
  onWhite?: boolean;
}) {
  const body = (
    <>
      <div
        className="flex aspect-[16/10] flex-col justify-between px-6 py-[22px] text-white"
        style={{ background: item.violet ? VIOLET : "#0a0a0a" }}
      >
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[10px] leading-none"
            style={{ color: item.violet ? "#d8d8f4" : "#8a8a8a" }}
          >
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
        <span
          className={`text-[clamp(34px,3.6vw,46px)] italic leading-none ${serif}`}
        >
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
        <span
          className="text-[12px] font-medium leading-[1.6] text-pretty"
          style={{ color: VIOLET }}
        >
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
        <span className="text-[11.5px] leading-[1.7] whitespace-pre-line text-pretty text-[#4a4a4a]">
          {item.text}
        </span>
        {item.price ? (
          <div className="flex items-baseline gap-[6px] pt-1">
            <span className="text-[34px] font-light leading-none text-[#0a0a0a]">
              {item.price.value}
            </span>
            <span className="text-[11px] leading-none text-[#8a8a8a]">
              {item.price.unit}
            </span>
          </div>
        ) : null}
        {item.href ? (
          <span className="mt-auto pt-2 text-[9px] font-bold leading-none tracking-[.24em]">
            ПОДРОБНЕЕ →
          </span>
        ) : null}
      </div>
    </>
  );

  const base = `flex flex-col border-b-[3px] border-transparent text-[#0a0a0a] ${onWhite ? "bg-[#F2F2F2]" : "bg-white"}`;
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
  [...STUDIO_CASES, ...HEALTH_CASES].filter(
    (item) => item.category === category,
  ),
);

function CaseGrid({
  items,
  onWhite,
}: {
  items: { item: StudioCase; index: number }[];
  onWhite?: boolean;
}) {
  return (
    <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,360px),1fr))]">
      {items.map(({ item }, i) => (
        <CaseCard
          key={item.title}
          item={{ ...item, violet: i % 2 === 1 }}
          index={i}
          onWhite={onWhite}
        />
      ))}
    </div>
  );
}

/** Тона компактных карточек главной — чередуются по порядку. Секция на главной белая, поэтому светлая карточка серая. */
const COMPACT_TONES = [
  { bg: "#0a0a0a", fg: "#fff", muted: "rgba(255,255,255,.72)", accent: GREEN },
  { bg: "#f1f1f1", fg: "#0a0a0a", muted: "#4a4a4a", accent: VIOLET },
  { bg: VIOLET, fg: "#fff", muted: "rgba(255,255,255,.82)", accent: "#fff" },
] as const;

/** Компактная карточка кейса для главной: сетка 3 в ряд, вся карточка — цветная плашка. */
function CompactCaseCard({ item, index }: { item: StudioCase; index: number }) {
  const tone = COMPACT_TONES[index % COMPACT_TONES.length];
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className={`text-[clamp(24px,2.2vw,30px)] italic leading-[1.05] ${serif}`}
        >
          {item.word}
          <span style={{ color: GREEN }}>.</span>
        </span>
        {item.direction ? (
          <span
            className="flex-none rounded-full px-[10px] py-1 text-[7.5px] font-bold uppercase leading-none tracking-[.16em] text-[#0a0a0a]"
            style={{ background: GREEN }}
          >
            {item.direction}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-[10px]">
        <span
          className="text-[12px] font-medium leading-[1.6] text-pretty"
          style={{ color: tone.accent }}
        >
          {item.audience}
        </span>
        <span
          className="text-[11.5px] leading-[1.7] whitespace-pre-line text-pretty"
          style={{ color: tone.muted }}
        >
          {item.text}
        </span>
      </div>
    </>
  );

  const base = "flex flex-col gap-6 px-7 py-7";
  const style = { background: tone.bg, color: tone.fg };
  if (!item.href)
    return (
      <div className={base} style={style}>
        {body}
      </div>
    );
  return (
    <Link
      href={item.href}
      className={`${base} ${lift} hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,.10)]`}
      style={style}
    >
      {body}
    </Link>
  );
}

function CompactCaseGrid({
  items,
}: {
  items: { item: StudioCase; index: number }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ item }, i) => (
        <CompactCaseCard key={item.title} item={item} index={i} />
      ))}
    </div>
  );
}

/** Блок «Мой метод» (Companion-app / Co-pilot) на главной вместо портфолио. Скрыт, см. docs/hidden-blocks.md. */
const SHOW_METHOD = false;

/** only — показать одно направление без вкладок (главная — Apps, /agents — Agents). */
export function StudioPortfolio({
  only,
}: { only?: StudioCase["category"] } = {}) {
  const [selected, setTab] = useState<StudioCaseTab>("all");
  const tab: StudioCaseTab = only ?? selected;
  const [group, setGroup] = useState<AgentGroupId>("process");
  // Цвет обложек чередуется по порядку в выбранной вкладке, а не задаётся в данных.
  const visible = ALL_CASES.map((item, index) => ({ item, index }))
    .filter(({ item }) => tab === "all" || item.category === tab)
    .map(({ item, index }, i) => ({
      item: { ...item, violet: i % 2 === 1 },
      index,
    }));

  return (
    <section
      id="portfolio"
      className={`flex flex-col gap-12 py-[100px] ${only === "health" ? "bg-white" : ""} ${shell}`}
    >
      {only === "business" ? (
        <SectionTitle
          eyebrow="Решение"
          title="Команда ИИ-помощников под ваши процессы"
        />
      ) : only === "health" && SHOW_METHOD ? (
        <SectionTitle
          eyebrow="Мой метод"
          title="Маленькими шагами к большой цели"
        />
      ) : (
        <SectionTitle
          eyebrow="Портфолио"
          title="За каждым продуктом — авторский метод"
        />
      )}
      {only === "health" && SHOW_METHOD ? (
        <p className="-mt-4 m-0 max-w-[62ch] text-[14px] leading-[1.9] text-pretty text-[#2a2a2a]">
          Работаю в подходе Behavioral Change Design (проектирование изменения
          поведения). Мои продукты рассчитаны на командную работу в изменениях:
          companion-app для человека, который меняет поведение, и co-pilot
          для специалиста, который его ведёт.
        </p>
      ) : null}
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
                  active
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-[#e6e6e6] text-[#0a0a0a]"
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
            В любом бизнесе есть две большие задачи: наладить внутренние
            процессы и улучшить клиентский опыт. Это позволяет минимальными
            усилиями достигать максимального результата.
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
                    active
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-[#e6e6e6] text-[#0a0a0a] hover:bg-[#dadada]"
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
          <CaseGrid
            items={visible.filter(({ item }) => item.group === group)}
          />
        </>
      ) : only === "health" && SHOW_METHOD ? (
        <CompactCaseGrid
          items={HEALTH_METHOD.map((item, index) => ({ item, index }))}
        />
      ) : (
        <CaseGrid items={visible} onWhite={only === "health"} />
      )}
    </section>
  );
}
