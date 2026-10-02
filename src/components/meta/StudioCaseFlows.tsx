"use client";

import { useState } from "react";

import type { StudioCaseFlow } from "@/components/meta/studioCases";
import { GREEN, VIOLET, lift, serif } from "@/components/meta/studioUi";

const MORE_LABEL = "Как это работает · результат · метрики";

function FlowCard({
  flow,
  open,
  onToggle,
  single,
}: {
  flow: StudioCaseFlow;
  open: boolean;
  onToggle: () => void;
  single: boolean;
}) {
  const dark = flow.dark;
  const line = dark ? "border-[#2a2a2a]" : "border-[#e2e2e2]";
  const muted = dark ? "text-[#bdbdbd]" : "text-[#4a4a4a]";
  const num = dark ? "text-[#8a8a8a]" : "text-[#a8a8a8]";
  const strong = dark ? "text-white" : "text-[#0a0a0a]";
  const heading = "text-[9px] font-bold uppercase leading-none tracking-[.24em]";
  const row = `border-b py-[10px] text-[12.5px] leading-[1.7] ${line}`;

  return (
    <article
      className={`flex min-w-0 flex-col gap-[26px] border-t-[3px] px-8 py-9 ${lift} hover:-translate-y-[6px] ${
        single ? "flex-[0_1_640px]" : "flex-[1_1_340px]"
      } ${
        dark
          ? "bg-[#0a0a0a] text-white hover:shadow-[0_30px_56px_rgba(0,0,0,.22)]"
          : "bg-white hover:shadow-[0_24px_48px_rgba(0,0,0,.10)]"
      }`}
      style={{ borderTopColor: dark ? VIOLET : GREEN }}
    >
      <div className="flex flex-col gap-3">
        <span
          className={`text-[8.5px] font-medium uppercase leading-[1.4] tracking-[.3em] ${
            dark ? "text-[#a8a8a8]" : "text-[#8a8a8a]"
          }`}
        >
          {flow.label}
        </span>
        <span className={`text-[28px] leading-[1.15] ${serif}`}>{flow.title}</span>
        <p className={`m-0 text-[13px] leading-[1.8] text-pretty ${dark ? "text-[#d8d8d8]" : "text-[#2a2a2a]"}`}>
          {flow.text}
        </p>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`mt-auto flex cursor-pointer items-center justify-between gap-3 border-y py-[14px] text-left ${line}`}
      >
        <span className={heading}>{open ? "Свернуть" : MORE_LABEL}</span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[16px] leading-none transition-transform duration-300 ${
            dark ? "bg-[#2a2a2a]" : "bg-[#f1f1f1]"
          } ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      {open ? (
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-col gap-[6px]">
            <span className={heading}>Как это работает</span>
            <ol className="m-0 flex list-none flex-col p-0">
              {flow.steps.map((step, i) => (
                <li key={step} className={`grid grid-cols-[28px_minmax(0,1fr)] gap-2 ${row} ${muted}`}>
                  <span className={`font-mono text-[9px] leading-[2.2] ${num}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className={heading}>Что получил клиент</span>
            <ul className="m-0 flex list-none flex-col p-0">
              {flow.results.map((result) => (
                <li key={result} className={`flex items-center gap-3 ${row}`}>
                  <span className="size-[6px] flex-none rounded-full" style={{ background: GREEN }} />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[6px]">
            <span className={heading}>На какие метрики влияет</span>
            <ul className="m-0 flex list-none flex-col p-0">
              {flow.metrics.map((metric) => (
                <li key={metric.title} className={`grid grid-cols-[28px_minmax(0,1fr)] gap-2 ${row} ${muted}`}>
                  <span className="text-[11px] font-semibold" style={{ color: dark ? GREEN : "#00b862" }}>
                    {metric.dir === "up" ? "↑" : "↓"}
                  </span>
                  <span>
                    <b className={`font-semibold ${strong}`}>{metric.title}</b> — {metric.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function StudioCaseFlows({ flows, linked }: { flows: StudioCaseFlow[]; linked?: boolean }) {
  const [open, setOpen] = useState<boolean[]>(() => flows.map(() => false));

  const toggle = (index: number) =>
    setOpen((prev) => {
      const next = !prev[index];
      return linked ? prev.map(() => next) : prev.map((value, i) => (i === index ? next : value));
    });

  return (
    <div className={`flex flex-wrap gap-6 ${linked ? "items-stretch" : "items-start"}`}>
      {flows.map((flow, i) => (
        <FlowCard
          key={flow.title}
          flow={flow}
          open={open[i]}
          onToggle={() => toggle(i)}
          single={flows.length === 1}
        />
      ))}
    </div>
  );
}
