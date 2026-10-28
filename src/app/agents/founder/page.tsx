import type { Metadata } from "next";
import { FounderPage } from "@/components/meta/FounderPage";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export const metadata: Metadata = {
  title: "Виктория Герман — архитектор AI-агентов | PRISMA",
  description:
    "Бизнес- и системный аналитик, 7 лет в разработке цифровых продуктов: ФНС, Мегамаркет. Проектирую архитектуру AI-агентов под процессы бизнеса.",
};

/** Профиль основателя для лендинга агентов: упор на анализ и архитектуру агентов. */
export default function AgentsFounderRoute() {
  return (
    <ManifestFontVars>
      <FounderPage variant="agents" />
    </ManifestFontVars>
  );
}
