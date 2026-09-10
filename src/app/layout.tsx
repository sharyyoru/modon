import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        
        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "AQWkCjBL_dl8ryxOKV9-fRIx3-6oOp8zEIyW3jUMw6anRdSmTc3LwB_30gUg8OhQE2tDJMeIHwQCeYkNRrQ4kdzTmhQBDj4-FgbUfrEzajd6LcSoBgqBrvojPn_RI8g0l5BUGFeO9sO3t5Eh6KFRhNCjZdKMf-mGylZtSaAhq0vdcZr3nNivJ1qhj11hcISKwOBKrT9G7aCz70debjK-oM-_t8g0SvBJQVbN49hRJAgvLjKJk5lIFdV3VOm8579uBgP0SF7nNQKH8_oCQ8xCk5oLzHrRPsDAaMTcVtenOR4eD2OOoL30_F0WsFYuHNxYV-YtLvBWhs6XLuuQuAyZmsGcDnBEEA";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script
          src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=AQWkCjBL_dl8ryxOKV9-fRIx3-6oOp8zEIyW3jUMw6anRdSmTc3LwB_30gUg8OhQE2tDJMeIHwQCeYkNRrQ4kdzTmhQBDj4-FgbUfrEzajd6LcSoBgqBrvojPn_RI8g0l5BUGFeO9sO3t5Eh6KFRhNCjZdKMf-mGylZtSaAhq0vdcZr3nNivJ1qhj11hcISKwOBKrT9G7aCz70debjK-oM-_t8g0SvBJQVbN49hRJAgvLjKJk5lIFdV3VOm8579uBgP0SF7nNQKH8_oCQ8xCk5oLzHrRPsDAaMTcVtenOR4eD2OOoL30_F0WsFYuHNxYV-YtLvBWhs6XLuuQuAyZmsGcDnBEEA&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
