import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="word" tone="light" wave size="lg" />
          <p>{site.tagline}</p>
          <Socials tone="light" />
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h4>Explore</h4>
          {site.nav.slice(1, 5).map((n) => (
            <Link key={n.label} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>

        <nav className="footer__col" aria-label="More">
          <h4>More</h4>
          {site.nav.slice(5).map((n) => (
            <Link key={n.label} href={n.href}>
              {n.label}
            </Link>
          ))}
          <a href="/book">
            Book a Call
          </a>
        </nav>

        <div className="footer__col">
          <h4>Say hello</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span className="footer__note">Mon – Fri · Replies within 2 business days</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="footer__fine">Coaching is not a substitute for medical or psychological care.</p>
      </div>
    </footer>
  );
}
