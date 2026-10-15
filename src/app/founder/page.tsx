import type { Metadata } from "next";
import { FounderPage } from "@/components/meta/FounderPage";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export const metadata: Metadata = {
  title: "Виктория Герман — основатель | PRISMA",
  description:
    "Основатель студии PRISMA: 7 лет в IT, бизнес-аналитик и продакт в проектах ФНС и Мегамаркета (Сбер). Собираю агентов с продуктовой логикой.",
};

export default function FounderRoute() {
  return (
    <ManifestFontVars>
      <FounderPage />
    </ManifestFontVars>
  );
}
