import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { StudioBusinessPage } from "@/components/meta/StudioBusinessPage";

export const metadata: Metadata = {
  title: "PRISMA — AI native продукты для помогающих практиков",
  description:
    "Помогаем вашим клиентам идти к большой цели маленькими шагами: copilot platforms, companion apps, behavior change products.",
};

export default function Home() {
  return (
    <ManifestFontVars>
      <StudioBusinessPage />
    </ManifestFontVars>
  );
}
