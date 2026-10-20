import Link from "next/link";
import Reveal from "./Reveal";
import FaqList from "./FaqList";
import { Arrow } from "./Icons";
import { homeFaqs } from "@/lib/content";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq__grid">
        <Reveal className="faq__intro">
          <p className="eyebrow">Questions, answered softly</p>
          <h2 className="h2">
            Frequently <em>asked</em>
          </h2>
          <p>
            Can’t find what you’re looking for? Reach out anytime — we’re always happy to help you feel at ease
            before you begin.
          </p>
          <Link href="/faq" className="link-arrow">
            See all questions <Arrow width={18} height={18} />
          </Link>
        </Reveal>

        <FaqList items={homeFaqs} id="home-faq" />
      </div>
    </section>
  );
}
