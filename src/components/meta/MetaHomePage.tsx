import { ManifestHexagonOffers } from "@/components/meta/ManifestHexagonOffers";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

/** Главная мета-страница: hero |PRISMA, офферы, шапка/подвал. */
export function MetaHomePage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <MetaSiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[120px]">
          <div className="grid max-w-[995px] grid-cols-[auto_minmax(0,1fr)] gap-x-0 gap-y-8">
            <h1
              className="col-span-2 m-0 grid gap-x-0 font-serif font-normal uppercase leading-[0.85] text-black [grid-template-columns:subgrid]"
            >
              <span
                className="inline-block min-w-0 shrink-0 -translate-x-[0.22em] transform-gpu"
                style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)" }}
              >
                |
              </span>
              <span
                className="min-w-0"
                style={{
                  fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.05em",
                }}
              >
                PRISMA
              </span>
            </h1>
            <p
              className={`col-span-2 m-0 max-w-[546px] justify-self-start p-0 text-left text-[10px] font-normal uppercase leading-[15px] tracking-[0.4em] ${interSans}`}
              style={{ color: "rgba(95, 94, 94, 0.6)" }}
            >
              Сообщество продуктовых авторов, которые делают свои продукты
            </p>
          </div>
        </div>
      </section>

      <ManifestHexagonOffers />

      <MetaSiteFooter />
    </div>
  );
}
