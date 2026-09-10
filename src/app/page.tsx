import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueBar } from "@/components/ValueBar";
import { AboutSection } from "@/components/AboutSection";
import { UnitTypes } from "@/components/UnitTypes";
import { Partnership } from "@/components/Partnership";
import { Gallery } from "@/components/Gallery";
import { Amenities } from "@/components/Amenities";
import { PaymentPlan } from "@/components/PaymentPlan";
import { Location } from "@/components/Location";
import { Developer } from "@/components/Developer";
import { FAQ } from "@/components/FAQ";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { RegisterSection } from "@/components/RegisterSection";
import { Footer } from "@/components/Footer";
import { TrackingProvider } from "@/components/TrackingProvider";
import { MobileCTA } from "@/components/MobileCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateListing",
      name: "Modon Avenew",
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
          name: "What types of properties are available at Modon Avenew?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modon Avenew offers 4-bedroom, 5-bedroom, and 6-bedroom luxury villas, as well as elegant townhouses.",
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
          name: "Can foreign nationals purchase property at Modon Avenew?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Modon Avenew is located in a designated freehold area where foreign nationals can purchase property with full ownership rights.",
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
          <AboutSection />
          <UnitTypes />
          <Partnership />
          <Gallery />
          <Amenities />
          <PaymentPlan />
          <Location />
          <Developer />
          <FAQ />
          <FeaturedArticles />
          <RegisterSection />
        </main>
        <Footer />
        <MobileCTA />
      </TrackingProvider>
    </>
  );
}
