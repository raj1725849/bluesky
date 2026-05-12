import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Noto_Serif_Devanagari, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const hindi = Noto_Serif_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari", "latin"],
  weight: ["400", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Blue-Sky Realtech | Premium Real Estate in Noida, Delhi NCR",
  description: "Discover luxury properties in Noida, Delhi, and Greater Noida with Blue-Sky Realtech. Expert guidance, premium listings, and 24/7 support.",
  keywords: ["real estate Noida", "luxury flats Noida", "property in Delhi NCR", "Blue-Sky Realtech"],
  openGraph: {
    title: "Blue-Sky Realtech | Premium Real Estate",
    description: "Find your dream home in NCR with Blue-Sky Realtech",
    url: "https://blueskyrealtech.com",
    siteName: "Blue-Sky Realtech",
    images: [{ url: "/antigravity/hero-image.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${hindi.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-dm-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
