import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Journal from "@/components/Journal";
import Resources from "@/components/Resources";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import { site } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    founder: { "@type": "Person", name: site.owner },
    sameAs: Object.values(site.social).filter(Boolean),
    serviceType: "Mindfulness and life coaching",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Marquee />
      <About />
      <Pillars />
      <Programs />
      <Process />
      <Testimonials />
      <CtaBand />
      <Journal />
      <Resources />
      <Faq />
      <Contact />
    </>
  );
}
