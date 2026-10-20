import Reveal from "./Reveal";
import { Arrow, Calendar, Mail } from "./Icons";
import Socials from "./Socials";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section className="section section--blush contact" id="contact">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Contact</p>
          <h2 className="h2">
            Let’s begin <em>the conversation</em>
          </h2>
          <p className="section__sub">Choose whichever feels most natural — we’d love to hear from you.</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__card" delay={0}>
            <span className="contact__icon">
              <Calendar width={26} height={26} />
            </span>
            <h3>Schedule a call</h3>
            <p>Book a complimentary 30-minute discovery call at a time that suits you.</p>
            <a href="/book" className="btn btn--dark">
              Book a time <Arrow width={18} height={18} />
            </a>
          </Reveal>

          <Reveal className="contact__card" delay={120}>
            <span className="contact__icon">
              <Mail width={26} height={26} />
            </span>
            <h3>Send a message</h3>
            <p>Prefer to write? Email us and expect a warm reply within two business days.</p>
            <a href={`mailto:${site.email}`} className="btn btn--outline">
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal className="contact__social" delay={200}>
          <p>Follow along for daily calm &amp; inspiration</p>
          <Socials />
        </Reveal>
      </div>
    </section>
  );
}
