import Link from "next/link";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <Photo
            src={site.images.about}
            alt="Portrait of L. Reed, mindfulness coach and founder of Voxelé"
            shape="soft"
            ratio="4 / 5"
            tone="champagne"
            label="Portrait of L. Reed"
          />
          <div className="about__badge">
            <span>Founder &amp; Coach</span>
            <strong>{site.owner}</strong>
          </div>
        </Reveal>

        <div className="about__copy">
          <Reveal>
            <p className="eyebrow">Meet {site.owner}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2">
              You were never meant to be quiet.
              <br />
              <em>You were meant to be heard — by yourself first.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Voxelé was born from a simple truth: the most powerful voice you will ever follow is the one that
              lives within you. Beneath the noise, the pressure and the expectations, it is still there — soft,
              steady and waiting.
            </p>
            <p>
              As a coach, {site.owner} guides women back to that voice through mindful practice, honest
              reflection and gentle accountability — so that clarity feels natural, confidence feels calm, and
              your everyday life begins to reflect who you truly are.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <ul className="tags">
              <li>Inner voice</li>
              <li>Emotional clarity</li>
              <li>Personal renewal</li>
              <li>Soft power</li>
            </ul>
            <Link href="/about" className="link-arrow">
              Read my story <Arrow width={18} height={18} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
