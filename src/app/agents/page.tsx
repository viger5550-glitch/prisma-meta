import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { StudioBusinessPage } from "@/components/meta/StudioBusinessPage";

export const metadata: Metadata = {
  title: "Agents | PRISMA",
  description:
    "AI-агенты для бизнеса: проектируем и запускаем ассистентов для продаж, маркетинга и контента по вашей методологии.",
};

/** Самостоятельный лендинг агентов: витрина Store, демо-встреча. */
export default function AgentsRoute() {
  return (
    <ManifestFontVars>
      <StudioBusinessPage variant="agents" />
    </ManifestFontVars>
  );
}
