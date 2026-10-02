import { Montserrat, Playfair_Display } from "next/font/google";

/** Шрифты студии: главная и страницы кейсов. Классы-переменные вешаются на обёртку страницы. */

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-studio-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-studio-montserrat",
  display: "swap",
});

export const studioFontVars = `${playfair.variable} ${montserrat.variable}`;
