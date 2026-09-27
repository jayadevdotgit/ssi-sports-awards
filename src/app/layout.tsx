import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteExperience } from "./components";
import { Header, Footer, WhatsAppButton } from "./site-shell";
import "./globals.css";

const display = localFont({ src: "../../public/fonts/BebasNeue-Regular.ttf", variable: "--font-display", display: "swap" });
const body = localFont({ src: "../../public/fonts/Manrope-Variable.ttf", variable: "--font-body", display: "swap", weight: "200 800" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ssisportsawards.com"),
  title: "SSI Sports National Awards | Every Champion Has a Journey",
  description: "Celebrating athletes, changemakers and the spirit of a stronger India. Explore moments from the SSI Sports National Awards.",
  applicationName: "SSI Sports National Awards",
  icons: { icon: "/icon.svg", apple: "/images/ssi-national-awards-icon.png" },
  openGraph: {
    title: "SSI Sports National Awards",
    siteName: "SSI Sports National Awards",
    description: "Every champion has a journey. Celebrating excellence in Indian sport.",
    type: "website",
    images: [{ url: "/images/ssi-national-awards-social.png", width: 1200, height: 630, alt: "SSI Sports National Awards — Every champion has a journey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSI Sports National Awards",
    description: "Every champion has a journey. Celebrating excellence in Indian sport.",
    images: ["/images/ssi-national-awards-social.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}><body id="top"><SiteExperience><a className="skip-link" href="#main">Skip to content</a><div className="site-shell"><Header />{children}<Footer /><WhatsAppButton /></div></SiteExperience></body></html>;
}
