import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Arrow, Calendar, Check } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Schedule a Call",
  description: "Book a complimentary 30-minute discovery call with L. Reed at Voxelé.",
  alternates: { canonical: "/book" },
};

const steps = [
  "Choose a time that feels easy",
  "Receive your confirmation and a gentle reminder",
  "Join from anywhere — no preparation needed",
];

export default function BookPage() {
  const isPlaceholder = site.bookingUrl.includes("your-link");
  const embedUrl = `${site.bookingUrl}${
    site.bookingUrl.includes("?") ? "&" : "?"
  }hide_gdpr_banner=1&background_color=faf8f5&text_color=3b2a28&primary_color=a07c45`;

  return (
    <>
      <PageHero
        eyebrow="Schedule a Call"
        crumb="Book"
        title="Your discovery call,"
        accent="at a time that suits you."
        lead="A warm, no-pressure 30-minute conversation to explore where you are and what you’d love next."
      />

      <section className="section booking">
        <div className="container booking__grid">
          <Reveal className="booking__info">
            <h2 className="h3">What to expect</h2>
            <ul className="checks">
              {steps.map((s) => (
                <li key={s}>
                  <Check width={18} height={18} /> {s}
                </li>
              ))}
            </ul>
            <p className="booking__fine">
              Prefer email? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Reveal>

          <Reveal className="booking__panel" delay={100}>
            {isPlaceholder ? (
              <div className="booking__placeholder">
                <span className="contact__icon">
                  <Calendar width={28} height={28} />
                </span>
                <h3>Your calendar appears here</h3>
                <p>
                  Add your Calendly link in <code>lib/site.js</code> (<code>bookingUrl</code>) and your live booking
                  calendar will load in this space.
                </p>
              </div>
            ) : (
              <>
                <iframe
                  title="Schedule a call with L. Reed"
                  src={embedUrl}
                  className="booking__frame"
                  loading="lazy"
                />
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="link-arrow booking__alt">
                  Open scheduling in a new tab <Arrow width={18} height={18} />
                </a>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
