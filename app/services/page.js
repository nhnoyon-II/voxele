import Link from "next/link";
import PageHero from "@/components/PageHero";
import Programs from "@/components/Programs";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { Arrow, Check } from "@/components/Icons";

export const metadata = {
  title: "Services & Coaching Programs",
  description:
    "Explore Voxelé coaching programs: the Voice Discovery Session, the 12-week Inner Voice Journey and the restorative Renewal Intensive.",
  alternates: { canonical: "/services" },
};

const rightFor = [
  "You are ready to invest time and attention in yourself",
  "You value gentle, honest, mindful support",
  "You want lasting change rather than quick fixes",
  "You are open to reflection, ritual and rest",
];
const notFor = [
  "You are looking for therapy or treatment of a medical condition",
  "You want someone to make decisions for you",
  "You are not yet ready to explore your inner world",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumb="Services"
        title="Coaching designed to feel like"
        accent="an exhale."
        lead="Thoughtful, personal programs for women ready to hear their inner voice, find clarity and step into renewal."
      />

      <Programs head={false} />

      <section className="section section--blush fit">
        <div className="container">
          <Reveal className="section__head">
            <p className="eyebrow">Is coaching right for you?</p>
            <h2 className="h2">
              An honest look at <em>who this is for</em>
            </h2>
          </Reveal>
          <div className="fit__grid">
            <Reveal className="fit__card">
              <h3 className="h3">This is for you if…</h3>
              <ul className="checks">
                {rightFor.map((t) => (
                  <li key={t}>
                    <Check width={18} height={18} /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="fit__card fit__card--dark" delay={120}>
              <h3 className="h3">This may not be right if…</h3>
              <ul className="checks">
                {notFor.map((t) => (
                  <li key={t}>
                    <Check width={18} height={18} /> {t}
                  </li>
                ))}
              </ul>
              <p className="fit__note">
                Coaching is not a substitute for therapy or medical care. We are happy to point you toward the right
                support.
              </p>
            </Reveal>
          </div>
          <Reveal className="center-row" delay={100}>
            <p className="section__sub">Investment is shared warmly and transparently on your discovery call.</p>
          </Reveal>
        </div>
      </section>

      <Process />

      <section className="section">
        <div className="container center-row">
          <Reveal>
            <Link href="/faq" className="link-arrow">
              Read the frequently asked questions <Arrow width={18} height={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
