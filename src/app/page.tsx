import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { StudioBusinessPage } from "@/components/meta/StudioBusinessPage";

export const metadata: Metadata = {
  title: "PRISMA — студия по разработке smart agents & apps",
  description:
    "Превращаю авторские методологии в AI native продукты: smart agents для бизнеса, companion apps для health tech и упаковка методологий для EdTech.",
};

export default function Home() {
  return (
    <ManifestFontVars>
      <StudioBusinessPage />
    </ManifestFontVars>
  );
}
