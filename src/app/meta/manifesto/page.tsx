import type { Metadata } from "next";
import { BackButton } from "@/components/meta/BackButton";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

export const metadata: Metadata = {
  title: "Манифест продуктового автора | PRISMA",
  description:
    "Манифест для продуктовых авторов: гениальность, доход за любимое дело, авторство как стратегия.",
};

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

const SECTIONS: Array<{ num: string; title: string; body: string }> = [
  {
    num: "01",
    title: "Гениальность — не привилегия. Это точность.",
    body: "Твоя гениальность — это пересечение того, что ты любишь, того, что ты умеешь лучше других, и того, что ты не можешь не делать. Найди это пересечение и строй продукт именно там. Не рядом. Именно там.",
  },
  {
    num: "02",
    title: "Достойный доход за любимое дело — не мечта. Это цель.",
    body: "Получать хорошие деньги за то, что ты любишь — это не удача и не везение. Это результат честного авторства. Когда ты искренен в своём продукте, люди это чувствуют. И платят за это охотно.",
  },
  {
    num: "03",
    title: "Лучше сделать плохо, чем как у всех.",
    body: "«Плохо сделанное» авторское запоминается. «Отлично сделанное» безликое — нет. Несовершенство с характером живёт дольше идеальной пустоты. Твои шероховатости — это подпись. Не сглаживай её.",
  },
  {
    num: "04",
    title: "Авторство — лучшая стратегия уникальности.",
    body: "Можно скопировать продукт. Нельзя скопировать человека. Пока все ищут нишу, занимай позицию. Позиция автора защищена лучше любого патента — она внутри тебя, и её невозможно украсть.",
  },
  {
    num: "05",
    title: "Делай как видишь — и будь востребован.",
    body: "Это не противоречие. Когда ты делаешь честно и из себя, ты автоматически становишься интересным — потому что нет второго тебя. Рынок перенасыщен копиями. Оригинал всегда в дефиците.",
  },
  {
    num: "06",
    title: "Пользователи — соавторы, а не потребители.",
    body: "Каждый, кто пользуется твоим продуктом, привносит в него своё. Своё прочтение, своё использование, свой смысл. Автор задаёт направление — аудитория его достраивает. Хороший продукт всегда больше, чем задумал создатель.",
  },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <MetaSiteHeader />

      <main
        className={`mx-auto max-w-[720px] px-6 py-14 md:px-12 md:py-20 lg:px-[96px] lg:py-24 ${interSans}`}
      >
        <BackButton fallbackHref="/" />
        <h1
          className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-normal leading-[1.15] text-black"
          style={{ fontFamily: "var(--font-manifest-newsreader), ui-serif, Georgia, serif" }}
        >
          Манифест продуктового автора
        </h1>

        <p className="mt-10 text-[11px] font-normal uppercase tracking-[0.28em] text-zinc-500">
          Манифест · 2026
        </p>

        <div className="mt-10 space-y-8 text-[17px] font-normal leading-[1.75] text-zinc-800">
          <p className="text-xl leading-snug text-black md:text-2xl">
            Делай то, в чём твоя гениальность.
            <br />
            Остальное — стратегия.
          </p>

          <p>
            Есть особый тип создателей. Они не следуют трендам — они рождают их. Они не ищут формулу успеха —
            они сами становятся этой формулой. Это манифест для них. Для продуктовых авторов.
          </p>
        </div>

        <div className="mt-16 space-y-14">
          {SECTIONS.map(({ num, title, body }) => (
            <section key={num} className="scroll-mt-24">
              <p className="font-mono text-[11px] font-medium tabular-nums tracking-widest text-zinc-400">
                {num}
              </p>
              <h2 className="mt-3 text-[19px] font-semibold leading-snug tracking-tight text-black md:text-xl">
                {title}
              </h2>
              <p className="mt-4 text-[17px] font-normal leading-[1.75] text-zinc-800">{body}</p>
            </section>
          ))}
        </div>

        <div className="mt-20 space-y-8 border-t border-zinc-200 pt-16 text-[17px] font-normal leading-[1.75] text-zinc-800">
          <p>
            Мир не нуждается в ещё одном правильном продукте. Мир нуждается в продуктах, за которыми стоит живой
            человек со своей точкой зрения, своей любовью и своей гениальностью.
          </p>
          <p className="text-[15px] italic text-zinc-600">— Для тех, кто создаёт из себя</p>
        </div>
      </main>

      <MetaSiteFooter />
    </div>
  );
}
