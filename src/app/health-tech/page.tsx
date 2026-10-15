import type { Metadata } from "next";
import { HealthTechPage } from "@/components/meta/HealthTechPage";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export const metadata: Metadata = {
  title: "Health tech | PRISMA",
  description:
    "Companion apps, которые помогают пройти терапию или изменить привычки.",
};

export default function HealthTechRoute() {
  return (
    <ManifestFontVars>
      <HealthTechPage />
    </ManifestFontVars>
  );
}
