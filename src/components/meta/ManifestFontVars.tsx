import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-manifest-newsreader",
  display: "block",
});

/**
 * Newsreader для цен. Inter уже висит на <html> из root layout —
 * второй Inter с display:swap здесь дёргал текст при гидрации.
 */
export function ManifestFontVars({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={newsreader.variable}>{children}</div>;
}
