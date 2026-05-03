import type { Metadata } from "next";
import { ManifestHexagonOffers } from "@/components/meta/ManifestHexagonOffers";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";

export const metadata: Metadata = {
  title: "PRISMA — манифест",
  description:
    "Место, где мы делаем свои авторские продукты: сообщество, наставничество, игра, база знаний, решения.",
};

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

export default function MetaManifestPage() {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <MetaSiteHeader />

      {/*
        Hero: колонка flex-start, gap 32px; заголовок Liberation Serif (theme font-serif), до ~72px,
        lh 85%, tracking −3.6px; подзаголовок Inter 10px, rgba(95,94,94,.6), uppercase, tracking 4px.
      */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pb-14 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-[96px] lg:pb-24 lg:pt-[120px]">
          <div className="flex max-w-[995px] flex-col items-start gap-8">
            <h1
              className="font-serif self-stretch font-normal uppercase leading-[0.85] text-black"
              style={{
                fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                letterSpacing: "-0.05em",
              }}
            >
              |PRISMA
            </h1>
            <p
              className={`max-w-[546px] text-[10px] font-normal uppercase leading-[15px] tracking-[4px] ${interSans}`}
              style={{ color: "rgba(95, 94, 94, 0.6)" }}
            >
              МЕСТО, ГДЕ МЫ ДЕЛАЕМ СВОИ АВТОРСКИЕ ПРОДУКТЫ
            </p>
          </div>
        </div>
      </section>

      <ManifestHexagonOffers />

      <MetaSiteFooter />
    </div>
  );
}
