import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { Quote } from "@/components/Icons";
import { testimonials } from "@/lib/content";

export const metadata = {
  title: "Testimonials",
  description: "Kind words from women who found their inner voice, clarity and calm with L. Reed and Voxelé.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Voices of women who"
        accent="found their own."
        lead="Real words from clients who chose to listen inward — and what changed when they did."
      />

      <section className="section">
        <div className="container">
          <div className="tgrid">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={t.name} delay={(i % 3) * 100} className="tcard">
                <Quote className="tcard__mark" width={30} height={30} />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="tcard__avatar" aria-hidden="true">
                    {t.name[0]}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
