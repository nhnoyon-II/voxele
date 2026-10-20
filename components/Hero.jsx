import Photo from "./Photo";
import Reveal from "./Reveal";
import { Arrow, Sparkle, Wave } from "./Icons";
import { MicIcon } from "./Logo";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
        <span className="sparkle sparkle--1" />
        <span className="sparkle sparkle--2" />
        <span className="sparkle sparkle--3" />
        <span className="sparkle sparkle--4" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <Reveal>
            <p className="eyebrow">
              <Sparkle width={16} height={16} /> Mindfulness · Coaching · Lifestyle
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="hero__title">
              Voice your journey,
              <br />
              <em>embrace wellness.</em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="hero__lead">
              A quiet, luxurious space for women ready to hear their inner voice, find emotional clarity and step
              softly into the most elevated version of themselves — guided by {site.owner}.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="hero__actions">
              <a href="/book" className="btn btn--dark">
                Book a Discovery Call <Arrow width={18} height={18} />
              </a>
              <a href="#programs" className="btn btn--ghost">
                Explore Programs
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <ul className="hero__notes">
              <li>
                <Wave width={18} height={18} /> Complimentary 30-minute call
              </li>
              <li>
                <Sparkle width={18} height={18} /> Private &amp; judgment-free
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={200}>
          <div className="hero__frame">
            <Photo
              src={site.images.hero}
              alt="L. Reed smiling softly in warm natural light"
              shape="arch"
              ratio="4 / 5.2"
              priority
              label="Hero portrait"
              sizes="(max-width: 900px) 90vw, 520px"
            />
          </div>

          <div className="float-card float-card--quote">
            <MicIcon size={26} />
            <p>
              Breathe in peace,
              <br />
              <em>exhale stress.</em>
            </p>
          </div>

          <div className="float-card float-card--badge">
            <span className="float-card__dot" />
            <div>
              <strong>Your voice matters</strong>
              <span>Begin with one soft step</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
