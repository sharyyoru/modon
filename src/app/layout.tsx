import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Modon Wadeem | Luxury Villas in Abu Dhabi",
  description: "Discover exclusive 4, 5 & 6 bedroom luxury villas and townhouses in Abu Dhabi by Modon. 5% downpayment with up to 75% ADIB financing. Register for pricing.",
  keywords: ["Modon", "Wadeem", "Abu Dhabi villas", "luxury homes", "ADIB financing", "UAE real estate"],
  authors: [{ name: "Modon Properties" }],
  openGraph: {
    title: "Modon Wadeem | Luxury Villas in Abu Dhabi",
    description: "Exclusive luxury villas and townhouses with 5% downpayment and ADIB financing.",
    url: "https://modon-avenew.com",
    siteName: "Modon Wadeem",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modon Wadeem | Luxury Villas in Abu Dhabi",
    description: "Exclusive luxury villas and townhouses with 5% downpayment and ADIB financing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
