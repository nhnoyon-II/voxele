/**
 * ─────────────────────────────────────────────────────────────
 *  VOXELÉ — Central site settings
 *  Change links, email, photos and copy here. No need to touch
 *  the components for everyday updates.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Voxelé",
  owner: "L. Reed",
  tagline: "Voice your journey. Embrace wellness.",
  description:
    "Voxelé is a luxury mindfulness coaching and lifestyle brand with L. Reed — for women ready to hear their inner voice, find emotional clarity and step into a softer, more elevated self.",
  url: "https://www.voxele.com", // ← replace with your real domain

  // ── Contact & booking ──────────────────────────────────────
  email: "hello@voxele.com", // ← replace with your real email
  bookingUrl: "https://calendly.com/your-link/discovery-call", // ← replace with your Calendly link

  // Newsletter / form endpoint (optional).
  // Paste a Formspree / Getform / ConvertKit-style endpoint here and the
  // newsletter form will POST to it. Leave empty and the form falls back
  // to opening an email to the address above.
  formEndpoint: "",

  // ── Social ─────────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/voxele", // ← replace
    tiktok: "https://tiktok.com/@voxele", // ← replace
    youtube: "https://youtube.com/@voxele", // ← replace
    pinterest: "https://pinterest.com/voxele", // ← replace
  },

  // ── Photos ─────────────────────────────────────────────────
  // Drop your photos into /public/images and set the path here,
  // e.g.  hero: "/images/hero.jpg".  While a value is null a
  // luxurious placeholder is shown instead.
  images: {
    hero: null,
    about: null,
    programs: [null, null, null],
    resources: null,
    journal: [null, null, null],
  },

  // ── Navigation ─────────────────────────────────────────────
  // To add a page: create app/<name>/page.js and add it here.
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};
