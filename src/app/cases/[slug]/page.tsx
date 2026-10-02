import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { StudioCasePage } from "@/components/meta/StudioCasePage";
import { STUDIO_CASE_DETAILS, getStudioCaseBySlug } from "@/components/meta/studioCases";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getStudioCaseBySlug(slug);

  if (!item) {
    return { title: "Кейс не найден | PRISMA" };
  }

  return {
    title: `${item.title} | PRISMA`,
    description: item.solution,
  };
}

export async function generateStaticParams() {
  return STUDIO_CASE_DETAILS.map((item) => ({ slug: item.slug }));
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = getStudioCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <ManifestFontVars>
      <StudioCasePage item={item} />
    </ManifestFontVars>
  );
}
