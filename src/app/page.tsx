import type { Metadata } from "next";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaHomePage } from "@/components/meta/MetaHomePage";

export const metadata: Metadata = {
  title: "PRISMA — мета",
  description:
    "Место, где мы делаем свои авторские продукты: сообщество, наставничество, игра, база знаний, решения.",
};

export default function Home() {
  return (
    <ManifestFontVars>
      <MetaHomePage />
    </ManifestFontVars>
  );
}
