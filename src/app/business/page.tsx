import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { StudioBusinessPage } from "@/components/meta/StudioBusinessPage";

export const metadata: Metadata = {
  title: "Business tech | PRISMA",
  description:
    "Соединяем методологию и технологию: проектируем и запускаем AI-агентов для продаж, маркетинга и контента.",
};

export default function BusinessRoute() {
  return (
    <ManifestFontVars>
      <StudioBusinessPage />
    </ManifestFontVars>
  );
}
