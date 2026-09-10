import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteExperience } from "./components";
import { Header, Footer } from "./site-shell";
import "./globals.css";

const display = localFont({ src: "../../public/fonts/BebasNeue-Regular.ttf", variable: "--font-display", display: "swap" });
const body = localFont({ src: "../../public/fonts/Manrope-Variable.ttf", variable: "--font-body", display: "swap", weight: "200 800" });

export const metadata: Metadata = {
  title: "SSI Sports Awards 2025 | Every Champion Has a Journey",
  description: "Celebrating athletes, changemakers and the spirit of a stronger India. Explore moments from the SSI Sports Awards 2025.",
  applicationName: "SSI Sports Awards",
  icons: { icon: "/icon.svg", apple: "/images/ssi-logo.jpg" },
  openGraph: { title: "SSI Sports Awards 2025", description: "Every champion has a journey. Celebrating excellence in Indian sport.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body id="top"><SiteExperience><a className="skip-link" href="#main">Skip to content</a><div className="site-shell"><Header />{children}<Footer /></div></SiteExperience></body></html>;
}
