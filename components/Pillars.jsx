import Reveal from "./Reveal";
import { Wave, Moon, Leaf, Heart } from "./Icons";

const pillars = [
  {
    icon: Wave,
    title: "Inner Voice",
    text: "Learn to hear your own wisdom beneath the noise — and trust it enough to speak and live by it.",
  },
  {
    icon: Moon,
    title: "Emotional Clarity",
    text: "Soften overwhelm, understand what you feel and respond with grace instead of reaction.",
  },
  {
    icon: Leaf,
    title: "Personal Renewal",
    text: "Release what is heavy. Create gentle rituals that restore your energy, season after season.",
  },
  {
    icon: Heart,
    title: "Elevated Identity",
    text: "Step into a refined, grounded sense of self — soft, confident and unmistakably yours.",
  },
];

export default function Pillars() {
  return (
    <section className="section section--blush pillars" id="philosophy">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">The Voxelé Philosophy</p>
          <h2 className="h2">
            Four quiet pillars for a <em>life that feels like yours</em>
          </h2>
        </Reveal>

        <div className="pillars__grid">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className="pillar">
              <span className="pillar__icon">
                <Icon width={26} height={26} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
