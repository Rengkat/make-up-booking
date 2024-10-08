import type { Metadata } from "next";
import "./globals.css";
import Providers from "../../redux/Provider";
import dynamic from "next/dynamic";
import { bubblegum, dancingScript, montserrat, roboto } from "../../utilities/extras";

export const metadata: Metadata = {
  title: "Fullbeauty",
  description: "Your good looking is our concern",
};
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={
            (roboto.variable, montserrat.variable, bubblegum.variable, dancingScript.variable)
          }>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
