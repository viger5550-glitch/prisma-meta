import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ChallengeNestedRadial } from "@/components/meta/ChallengeNestedRadial";
import { ManifestFontVars } from "@/components/meta/ManifestFontVars";
import { MetaSiteFooter } from "@/components/meta/MetaSiteFooter";
import { MetaSiteHeader } from "@/components/meta/MetaSiteHeader";
import { CHALLENGE_TRACKS, getChallengeTrackBySlug } from "@/components/meta/challengeTracks";

const interSans = "font-[family-name:var(--font-manifest-inter),system-ui,sans-serif]";

type ChallengeDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ChallengeDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const track = getChallengeTrackBySlug(slug);

  if (!track) {
    return {
      title: "Трек не найден | PRISMA",
    };
  }

  return {
    title: `${track.title} | Продуктоделы`,
    description: track.description,
  };
}

export async function generateStaticParams() {
  return CHALLENGE_TRACKS.map((track) => ({ slug: track.slug }));
}

export default async function ChallengeDetailsPage({ params }: ChallengeDetailsPageProps) {
  const { slug } = await params;
  const track = getChallengeTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  return (
    <ManifestFontVars>
      <div className="min-h-screen bg-white text-black antialiased">
        <MetaSiteHeader />
        <main className="mx-auto w-full max-w-[1280px] px-6 pb-20 pt-12 md:px-12 lg:px-[96px] lg:pt-20">
          <Link
            href="/challenge"
            className={`inline-flex text-[10px] uppercase tracking-[0.25em] text-black/55 transition-opacity hover:opacity-70 ${interSans}`}
          >
            ← назад к challenge
          </Link>

          <ChallengeNestedRadial tracks={CHALLENGE_TRACKS} activeSlug={track.slug} />

          <section className="mt-8 border border-black/10 bg-[#F3F3F3] p-8 md:p-12">
            <p className={`text-[10px] uppercase tracking-[0.28em] text-black/55 ${interSans}`}>{track.label}</p>
            <h1 className="mt-4 font-serif text-[40px] leading-[1.02] tracking-[-0.02em] md:text-[56px]">
              {track.title}
            </h1>
            <p className={`mt-8 max-w-[700px] text-[16px] leading-[1.8] text-black/75 ${interSans}`}>
              {track.description}
            </p>

            <ul className={`mt-8 space-y-3 text-[14px] leading-[1.7] text-black/80 ${interSans}`}>
              {track.points.map((point) => (
                <li key={point}>— {point}</li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={track.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 items-center justify-center bg-black px-7 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-opacity hover:opacity-90 ${interSans}`}
              >
                {track.ctaLabel}
              </Link>
              <Link
                href="/"
                className={`inline-flex h-11 items-center justify-center border border-black bg-white px-7 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition-colors hover:bg-black hover:text-white ${interSans}`}
              >
                Вся экосистема prisma
              </Link>
            </div>
          </section>
        </main>
        <MetaSiteFooter />
      </div>
    </ManifestFontVars>
  );
}
