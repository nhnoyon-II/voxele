import Reveal from "./Reveal";
import { Arrow } from "./Icons";
import { LogoSymbol } from "./Logo";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <span className="orb orb--cta" aria-hidden="true" />
      <div className="container cta-band__inner">
        <Reveal>
          <LogoSymbol tone="light" size={64} />
        </Reveal>
        <Reveal delay={90}>
          <h2 className="cta-band__title">
            Your voice has been <em>waiting for you.</em>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p>
            Take one soft step today. Book a complimentary discovery call and let’s begin the conversation you’ve
            been longing to have with yourself.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <a href="/book" className="btn btn--gold">
            Schedule Your Call <Arrow width={18} height={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
