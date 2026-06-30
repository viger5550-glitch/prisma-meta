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
    title: "Гениальность — это не привилегия, а навигатор.",
    body: "Он помогает найти пересечение того, что мы любим, того, что мы умеем лучше других, и того, что мы не можем не делать.",
  },
  {
    num: "02",
    title: "Достойный доход за любимое дело — не мечта, а цель.",
    body: "Получать хорошие деньги за то, что мы любим, — это не удача и не везение. Это результат честного авторства. Когда мы искренны в своём продукте, люди это чувствуют. И платят за это охотно.",
  },
  {
    num: "03",
    title: "Лучше сделать плохо, чем как у всех.",
    body: "«Плохо сделанное» авторское запоминается. «Отлично сделанное» безликое — нет. Несовершенство с характером живёт дольше идеальной пустоты. Наши шероховатости — это подпись. Мы её не сглаживаем.",
  },
  {
    num: "04",
    title: "Авторство — лучшая стратегия уникальности.",
    body: "Можно скопировать продукт. Нельзя скопировать человека. Пока все ищут нишу, мы занимаем позицию. Позиция автора защищена лучше любого патента — она внутри нас, и её невозможно украсть.",
  },
  {
    num: "05",
    title: "Мы включаем изобретательское мышление, чтобы строить идеальные системы.",
    body: "",
  },
  {
    num: "06",
    title: "Пользователи — соавторы, а не потребители.",
    body: "Каждый, кто пользуется нашим продуктом, привносит в него своё. Своё прочтение, своё использование, свой смысл. Автор задаёт направление — аудитория его достраивает. Хороший продукт всегда больше, чем задумал создатель.",
  },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <MetaSiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-3 md:px-12 md:pb-20 md:pt-3 lg:px-[96px] lg:pb-24 lg:pt-4">
          <BackButton fallbackHref="/" />
          <p
            className={`mt-12 text-[10px] uppercase tracking-[0.4em] text-black/50 md:mt-16 lg:mt-[88px] ${interSans}`}
          >
            THE MANIFESTO · 2026
          </p>
          <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[48px] leading-[0.95] tracking-[-0.03em] text-black md:text-[62px]">
            <span className="flex items-start">
              <span className="mr-1 -translate-x-[0.1em]">|</span>
              <span>Манифест продуктового автора</span>
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-20 md:px-12 md:pb-24 lg:px-[96px] lg:pb-28">
          <div
            className={`max-w-[720px] text-[17px] font-normal leading-[1.8] text-zinc-800 ${interSans}`}
          >
            <p
              className="text-[24px] leading-snug text-black md:text-[28px]"
              style={{ fontFamily: "var(--font-manifest-newsreader), ui-serif, Georgia, serif" }}
            >
              Любая система стремится к идеальности: когда минимальными ресурсами мы достигаем
              максимального результата.
            </p>
            <p
              className="mt-6 text-[24px] leading-snug text-black md:text-[28px]"
              style={{ fontFamily: "var(--font-manifest-newsreader), ui-serif, Georgia, serif" }}
            >
              Тут мы делаем продукты из своей гениальности, опираясь на свой опыт и интерес, и зарабатываем на
              них.
            </p>

            <div className="mt-16 space-y-14">
              {SECTIONS.map(({ num, title, body }) => (
                <section key={num} className="scroll-mt-24">
                  <p className="font-mono text-[11px] font-medium tabular-nums tracking-widest text-zinc-400">
                    {num}
                  </p>
                  <h2 className="mt-3 text-[19px] font-semibold leading-snug tracking-tight text-black md:text-xl">
                    {title}
                  </h2>
                  {body ? (
                    <p className="mt-4 text-[17px] font-normal leading-[1.8] text-zinc-800">{body}</p>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-20 space-y-8 border-t border-zinc-200 pt-16 text-[17px] font-normal leading-[1.8] text-zinc-800">
              <p>
                Мир не нуждается в ещё одном правильном продукте. Мир нуждается в продуктах, за которыми стоит
                живой человек со своей точкой зрения, своей любовью и своей гениальностью.
              </p>
              <p className="text-[15px] italic text-zinc-600">— Для тех, кто создаёт из себя</p>
            </div>
          </div>
        </div>
      </section>

      <MetaSiteFooter />
    </div>
  );
}
