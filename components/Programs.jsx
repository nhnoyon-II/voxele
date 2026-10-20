import Photo from "./Photo";
import Reveal from "./Reveal";
import { Arrow, Check } from "./Icons";
import { site } from "@/lib/site";

const programs = [
  {
    tag: "Begin here",
    title: "Voice Discovery Session",
    format: "1:1 · 90 minutes",
    text: "A calm, focused first step to name what you are carrying, hear what your inner voice is asking for, and leave with a clear, gentle direction.",
    points: ["Guided mindful reflection", "Personal clarity map", "Your next three soft steps"],
    cta: "Reserve a session",
  },
  {
    tag: "Signature",
    title: "The Inner Voice Journey",
    format: "1:1 · 12 weeks",
    text: "Our signature coaching experience for deep emotional clarity, renewed confidence and an elevated sense of self — supported week by week.",
    points: ["Weekly private coaching", "Rituals & guided practices", "Voice-note support between sessions"],
    cta: "Apply for the Journey",
    featured: true,
  },
  {
    tag: "Immersive",
    title: "Renewal Intensive",
    format: "Half-day · In person or online",
    text: "A restorative, spa-like intensive to release what is heavy and reset your rhythm — ideal for seasons of change and new beginnings.",
    points: ["Breathwork & journaling", "Identity & intention design", "A take-home renewal ritual"],
    cta: "Enquire about dates",
  },
];

export default function Programs({ head = true }) {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        {head && (
          <Reveal className="section__head">
            <p className="eyebrow">Services &amp; Coaching Programs</p>
            <h2 className="h2">
              Choose the way you’d like to <em>be supported</em>
            </h2>
            <p className="section__sub">
              Every program is designed to feel like an exhale — thoughtful, personal and beautifully paced.
            </p>
          </Reveal>
        )}

        <div className="programs__grid">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className={`program ${p.featured ? "program--featured" : ""}`}>
              <Photo
                src={site.images.programs[i]}
                alt={p.title}
                shape="soft"
                ratio="16 / 10"
                tone={i === 1 ? "champagne" : "blush"}
                label={p.title}
                sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 380px"
              />
              <div className="program__body">
                <span className="program__tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p className="program__format">{p.format}</p>
                <p>{p.text}</p>
                <ul className="checks">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <Check width={18} height={18} /> {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="/book"
                  className={`btn btn--block ${p.featured ? "btn--dark" : "btn--outline"}`}
                >
                  {p.cta} <Arrow width={18} height={18} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
