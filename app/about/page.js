import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { Arrow, Check } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "About L. Reed",
  description:
    "Meet L. Reed, founder of Voxelé — a mindfulness coach guiding women back to their inner voice, emotional clarity and personal renewal.",
  alternates: { canonical: "/about" },
};

const forYou = [
  "You feel pulled between what you want and what is expected of you",
  "You are in a season of change and long for steadier ground",
  "You are successful on paper, yet quietly craving more calm",
  "You want to feel more confident, grounded and authentically yourself",
];

const expect = [
  "A warm, private space with zero judgment",
  "Mindful practices you can use in everyday life",
  "Honest reflection with gentle accountability",
  "Clear next steps that feel natural, not forced",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About L. Reed"
        crumb="About"
        title="Hello, I’m L. Reed —"
        accent="and I believe your voice matters."
        lead="Founder of Voxelé, mindfulness coach and guide for women returning to their inner voice."
      />

      <section className="section story">
        <div className="container about__grid">
          <Reveal className="about__visual">
            <Photo
              src={site.images.about}
              alt="Portrait of L. Reed"
              shape="arch"
              ratio="4 / 5.2"
              tone="champagne"
              label="Portrait of L. Reed"
            />
          </Reveal>

          <div className="about__copy">
            <Reveal>
              <p className="eyebrow">My story</p>
              <h2 className="h2">
                I learned to listen <em>the quiet way</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead">
                For a long time I believed that being strong meant being busy — that if I only did more, achieved
                more and asked for less, I would finally feel at peace.
              </p>
              <p>
                It was in the quiet that I discovered the truth: beneath all the noise was a calm, steady voice that
                had been trying to guide me all along. Learning to hear it — and to trust it — changed how I made
                decisions, how I loved, and how I lived.
              </p>
              <p>
                Voxelé was created to share that experience. It is a space where mindfulness meets modern elegance,
                where emotions are welcomed instead of managed, and where soft feminine energy is honoured as the
                powerful force it is.
              </p>
              <p>
                Today I guide women to reconnect with their own voice through thoughtful coaching, restorative
                rituals and honest, compassionate conversation. My promise is simple: you will be seen, heard and
                gently supported.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/book" className="btn btn--dark">
                Let’s talk <Arrow width={18} height={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--blush quote-band">
        <div className="container">
          <Reveal>
            <blockquote className="big-quote">
              “The most powerful voice you will ever follow is the one that lives within you.”
              <cite>— {site.owner}</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <Pillars />

      <section className="section fit">
        <div className="container fit__grid">
          <Reveal className="fit__card">
            <p className="eyebrow">Who I work with</p>
            <h2 className="h3">This may feel like home if…</h2>
            <ul className="checks">
              {forYou.map((t) => (
                <li key={t}>
                  <Check width={18} height={18} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="fit__card fit__card--dark" delay={120}>
            <p className="eyebrow">What to expect</p>
            <h2 className="h3">Working together</h2>
            <ul className="checks">
              {expect.map((t) => (
                <li key={t}>
                  <Check width={18} height={18} /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
