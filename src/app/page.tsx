import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { StudioStartPage } from "@/components/meta/StudioStartPage";

export const metadata: Metadata = {
  title: "PRISMA — студия по разработке smart agents & apps",
  description:
    "Соединяем методологию и технологию: smart agents для бизнеса и companion apps для health tech.",
};

export default function Home() {
  return (
    <ManifestFontVars>
      <StudioStartPage />
    </ManifestFontVars>
  );
}
