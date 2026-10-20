import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Book your call",
    text: "Choose a time that feels easy. We begin with a warm, no-pressure conversation about where you are and where you’d love to be.",
  },
  {
    n: "02",
    title: "Hear your voice",
    text: "Together we create space to listen — through guided reflection, mindful practice and honest, supportive coaching.",
  },
  {
    n: "03",
    title: "Step into renewal",
    text: "Gentle rituals and clear next steps help your clarity become confidence, and your confidence become a way of living.",
  },
];

export default function Process() {
  return (
    <section className="section section--sand process" id="process">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">
            A <em>soft, simple</em> path forward
          </h2>
        </Reveal>

        <ol className="process__list">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 120} className="step">
              <span className="step__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
