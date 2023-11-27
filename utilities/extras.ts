import { Roboto, Montserrat_Alternates, Bubblegum_Sans } from "next/font/google";

export const roboto = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--montserrat",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const bubblegum = Bubblegum_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--bubblegum",
  weight: "400",
});
