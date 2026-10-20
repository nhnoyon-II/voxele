import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";
import Reveal from "@/components/Reveal";
import { Arrow, Calendar, Mail } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with L. Reed at Voxelé — send a message or schedule a complimentary discovery call.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s begin"
        accent="the conversation."
        lead="Send a message, or choose a time to talk. Either way, you’ll be met with warmth."
      />

      <section className="section contact-page">
        <div className="container contact-page__grid">
          <Reveal>
            <ContactForm />
          </Reveal>

          <aside className="contact-page__side">
            <Reveal className="info-card">
              <span className="contact__icon">
                <Calendar width={26} height={26} />
              </span>
              <h3>Prefer to talk?</h3>
              <p>Book a complimentary 30-minute discovery call.</p>
              <a href="/book" className="btn btn--dark btn--block">
                Schedule a call <Arrow width={18} height={18} />
              </a>
            </Reveal>

            <Reveal className="info-card" delay={100}>
              <span className="contact__icon">
                <Mail width={26} height={26} />
              </span>
              <h3>Write to us</h3>
              <p>We reply personally within two business days.</p>
              <a href={`mailto:${site.email}`} className="info-card__mail">
                {site.email}
              </a>
            </Reveal>

            <Reveal className="info-card info-card--soft" delay={200}>
              <h3>Follow along</h3>
              <p>Daily calm and inspiration.</p>
              <Socials />
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
