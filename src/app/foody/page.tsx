import type { Metadata } from "next";

import { FoodyPage } from "@/components/meta/FoodyPage";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export const metadata: Metadata = {
  title: "Foody | PRISMA",
  description:
    "Мини-приложение для мягкого перехода к интуитивному питанию: без диет, подсчёта калорий и чувства вины.",
};

export default function FoodyRoute() {
  return (
    <ManifestFontVars>
      <FoodyPage />
    </ManifestFontVars>
  );
}
