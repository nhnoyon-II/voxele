"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import Link from "next/link";
import { Quote, Arrow } from "./Icons";
import { testimonials } from "@/lib/content";

/* Homepage slider shows the first three — all of them live on /testimonials */
const items = testimonials.slice(0, 3);

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n) => setI((n + items.length) % items.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="section section--blush testimonials" id="testimonials">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Kind words</p>
          <h2 className="h2">
            Voices of women who <em>found their own</em>
          </h2>
        </Reveal>

        <Reveal
          className="tslider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Quote className="tslider__mark" width={44} height={44} />

          <div className="tslider__viewport" aria-live="polite">
            {items.map((t, idx) => (
              <figure key={t.name} className={`tslide ${idx === i ? "tslide--active" : ""}`} aria-hidden={idx !== i}>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="tslider__controls">
            <button type="button" className="round-btn round-btn--flip" onClick={() => go(i - 1)} aria-label="Previous testimonial">
              <Arrow width={18} height={18} />
            </button>
            <div className="dots" role="tablist" aria-label="Choose testimonial">
              {items.map((t, idx) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Testimonial ${idx + 1}`}
                  className={`dot ${idx === i ? "dot--active" : ""}`}
                  onClick={() => go(idx)}
                />
              ))}
            </div>
            <button type="button" className="round-btn" onClick={() => go(i + 1)} aria-label="Next testimonial">
              <Arrow width={18} height={18} />
            </button>
          </div>
        </Reveal>

        <Reveal className="center-row">
          <Link href="/testimonials" className="link-arrow">
            Read more stories <Arrow width={18} height={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
