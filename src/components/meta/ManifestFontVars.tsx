import { Inter, Newsreader } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manifest-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-manifest-newsreader",
  display: "swap",
});

/** Inter + Newsreader для /meta и страницы «Слово автора» (/about). */
export function ManifestFontVars({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${inter.variable} ${newsreader.variable}`}>{children}</div>
  );
}
