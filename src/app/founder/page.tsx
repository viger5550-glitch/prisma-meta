import type { Metadata } from "next";
import { FounderPage } from "@/components/meta/FounderPage";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export const metadata: Metadata = {
  title: "Виктория Герман — основатель | PRISMA",
  description:
    "Основатель PRISMA, продакт: 8 лет в цифровых продуктах — ФНС, Мегамаркет, Самокат. Запускаю AI-продукты, которые поддерживают человека между встречами со специалистом.",
};

export default function FounderRoute() {
  return (
    <ManifestFontVars>
      <FounderPage />
    </ManifestFontVars>
  );
}
