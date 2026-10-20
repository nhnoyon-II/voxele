"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, Close } from "./Icons";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <Logo variant="full" href="/" />

        <nav className="nav__links" aria-label="Main navigation">
          {site.nav.slice(1).map((item) => (
            <Link key={item.label} href={item.href} className="nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="/book" className="btn btn--dark btn--sm nav__cta">
            Book a Call
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation" className="mobile-menu__nav">
          {site.nav.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              className="mobile-menu__link"
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/book"
            onClick={close}
            className="btn btn--dark mobile-menu__cta"
            tabIndex={open ? 0 : -1}
          >
            Book a Discovery Call
          </a>
        </nav>
      </div>
    </header>
  );
}
