import Link from "next/link";
import Reveal from "./Reveal";

/** Elegant header used at the top of every inner page */
export default function PageHero({ eyebrow, title, accent, lead, crumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="sparkle sparkle--1" />
        <span className="sparkle sparkle--4" />
      </div>
      <div className="container page-hero__inner">
        <Reveal>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb || eyebrow}</span>
          </nav>
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="page-hero__title">
            {title} {accent && <em>{accent}</em>}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={230}>
            <p className="page-hero__lead">{lead}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
