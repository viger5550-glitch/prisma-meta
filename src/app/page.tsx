import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaHomePage } from "@/components/meta/MetaHomePage";

export const metadata: Metadata = {
  title: "PRISMA — AI-студия по разработке smart-агентов",
  description:
    "Соединяем методологию и технологию: проектируем и запускаем AI-агентов для продаж, маркетинга и контента.",
};

export default function Home() {
  return (
    <ManifestFontVars>
      <MetaHomePage />
    </ManifestFontVars>
  );
}
