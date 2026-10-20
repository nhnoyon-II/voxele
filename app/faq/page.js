import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Arrow } from "@/components/Icons";
import { faqGroups } from "@/lib/content";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Voxelé coaching programs, discovery calls, booking, privacy and what to expect.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="FAQ"
        title="Questions,"
        accent="answered softly."
        lead="Everything you may be wondering before you begin — in one calm place."
      />

      <section className="section faq faq--page">
        <div className="container faq__stack">
          {faqGroups.map((g, gi) => (
            <div key={g.title} className="faq__group">
              <Reveal>
                <h2 className="h3 faq__group-title">{g.title}</h2>
              </Reveal>
              <FaqList items={g.items} id={`faq-${gi}`} />
            </div>
          ))}

          <Reveal className="faq__more">
            <p>Still have a question?</p>
            <Link href="/contact" className="link-arrow">
              Get in touch <Arrow width={18} height={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
