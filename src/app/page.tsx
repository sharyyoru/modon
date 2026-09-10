import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueBar } from "@/components/ValueBar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { TrackingProvider } from "@/components/TrackingProvider";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      name: "Modon Wadeem",
      description:
        "Exclusive 4, 5 & 6 bedroom luxury villas and townhouses in Abu Dhabi by Modon Properties with ADIB financing.",
      url: "https://modon-avenew.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressRegion: "Abu Dhabi",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "24.4539",
        longitude: "54.3773",
      },
    },
    {
      "@type": "Organization",
      name: "Modon Properties",
      description: "Leading real estate developer in Abu Dhabi",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of properties are available at Modon Wadeem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modon Wadeem offers 4-bedroom, 5-bedroom, and 6-bedroom luxury villas, as well as elegant townhouses.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum downpayment required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through our exclusive partnership with ADIB, you can secure your home with just a 5% downpayment.",
          },
        },
        {
          "@type": "Question",
          name: "What financing options are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer up to 75% financing through Abu Dhabi Islamic Bank (ADIB) with Sharia-compliant solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Can foreign nationals purchase property at Modon Wadeem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Modon Wadeem is located in a designated freehold area where foreign nationals can purchase property with full ownership rights.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TrackingProvider>
        <Header />
        <main>
          <Hero />
          <ValueBar />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppWidget />
      </TrackingProvider>
    </>
  );
}
