import { ManifestFontVars } from "@/components/meta/ManifestFontVars";

export default function MetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ManifestFontVars>{children}</ManifestFontVars>;
}
