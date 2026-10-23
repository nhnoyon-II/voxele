import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Resources from "@/components/Resources";
import CtaBand from "@/components/CtaBand";
import Newsletter from "@/components/Newsletter";
import { Sparkle } from "@/components/Icons";
import { freebies } from "@/lib/content";
import Books from "@/components/Books";
export const metadata = {
  title: "Free Resources",
  description:
    "Free mindfulness guides, journal prompts, audio resets and rituals from Voxelé to help you hear your inner voice.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Small rituals,"
        accent="beautifully shared."
        lead="Free tools to help you pause, breathe and reconnect with your inner voice between sessions."
      />
   <Books />
      <Resources />

      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">The Voxelé library</p>
            <h2 className="h2">
              More to <em>explore</em>
            </h2>
            <p className="section__sub">Join the list and receive new resources as they are released.</p>
          </Reveal>

          <div className="rgrid">
            {freebies.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90} className="rcard">
                <span className="rcard__tag">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="subscribe">
            <h3 className="h3">Receive new resources by email</h3>
            <Newsletter source="resources-library" buttonLabel="Join the list" />
          </Reveal>
        </div>
      </section>

      <section className="section section--blush">
        <div className="container">
          <Reveal className="soon">
            <Sparkle width={26} height={26} />
            <p className="eyebrow">Coming soon</p>
            <h2 className="h2">
              The Voxelé <em>Boutique</em>
            </h2>
            <p>
              Journals, rituals and keepsakes designed to bring a little calm to your everyday. Join the list to be
              the first to know.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
