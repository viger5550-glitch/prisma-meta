import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ManifestFontVars>{children}</ManifestFontVars>;
}
