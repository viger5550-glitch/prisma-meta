import { GREEN, VIOLET, serif } from "@/components/meta/studioUi";

export type StudioHeroCard = {
  tag: string;
  title: string;
  /** Две строки «метка — значение» под чертой. */
  facts: [label: string, value: string][];
  /** Плашка «в работе» на тёмной карточке. */
  live?: boolean;
};

const card = `absolute flex w-[62%] flex-col gap-[14px] px-[22px] py-6 transition-[transform,box-shadow] duration-[450ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:z-[5] hover:-translate-y-[10px] hover:rotate-0`;

function Facts({ facts, strong }: { facts: StudioHeroCard["facts"]; strong: string }) {
  return facts.map(([label, value]) => (
    <span key={label}>
      <b className={`font-semibold ${strong}`}>{label}</b> — {value}
    </span>
  ));
}

/** Веер карточек справа в hero: светлая, тёмная и опционально белая с зелёной кромкой. */
export function StudioHeroCards({ cards }: { cards: [StudioHeroCard, StudioHeroCard, StudioHeroCard?] }) {
  const [first, second, third] = cards;

  return (
    <div className={`relative w-full max-w-[480px] justify-self-center ${third ? "h-[500px]" : "h-[360px]"}`}>
      <article
        className={`${card} left-0 top-[10px] z-[1] -rotate-6 bg-[#f1f1f1] hover:shadow-[0_24px_48px_rgba(0,0,0,.12)]`}
      >
        <span className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em]" style={{ color: VIOLET }}>
          {first.tag}
        </span>
        <span className={`text-[22px] leading-[1.2] ${serif}`}>{first.title}</span>
        <div className="flex flex-col gap-2 border-t border-[#dcdcdc] pt-3 text-[11px] leading-[1.6] text-[#4a4a4a]">
          <Facts facts={first.facts} strong="text-[#0a0a0a]" />
        </div>
      </article>

      <article
        className={`${card} right-0 top-[130px] z-[2] rotate-[4deg] bg-[#0a0a0a] text-white shadow-[0_20px_44px_rgba(0,0,0,.16)] hover:shadow-[0_30px_60px_rgba(0,0,0,.24)]`}
      >
        <div className="flex items-center justify-between gap-[10px]">
          <span className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em] text-[#f1f1f1]">
            {second.tag}
          </span>
          {second.live ? (
            <span
              className="flex items-center gap-[6px] rounded-full px-[10px] py-1 text-[7.5px] font-bold uppercase leading-none tracking-[.16em] text-[#052]"
              style={{ background: GREEN }}
            >
              <span className="studio-motion h-[5px] w-[5px] rounded-full bg-[#052] animate-[studio-pulse_1.6s_ease-in-out_infinite]" />
              в работе
            </span>
          ) : null}
        </div>
        <span className={`text-[22px] leading-[1.2] ${serif}`}>{second.title}</span>
        <div className="flex flex-col gap-2 border-t border-[#2a2a2a] pt-3 text-[11px] leading-[1.6] text-[#bdbdbd]">
          <Facts facts={second.facts} strong="text-white" />
        </div>
      </article>

      {third ? (
        <article
          className={`${card} left-[8%] top-[290px] z-[3] -rotate-2 border-t-[3px] bg-white shadow-[0_14px_34px_rgba(0,0,0,.09)] hover:shadow-[0_24px_48px_rgba(0,0,0,.14)]`}
          style={{ borderTopColor: GREEN }}
        >
          <span className="text-[9px] font-semibold uppercase leading-[1.4] tracking-[.2em]" style={{ color: VIOLET }}>
            {third.tag}
          </span>
          <span className={`text-[22px] leading-[1.2] ${serif}`}>{third.title}</span>
          <div className="flex flex-col gap-2 border-t border-[#e2e2e2] pt-3 text-[11px] leading-[1.6] text-[#4a4a4a]">
            <Facts facts={third.facts} strong="text-[#0a0a0a]" />
          </div>
        </article>
      ) : null}
    </div>
  );
}
