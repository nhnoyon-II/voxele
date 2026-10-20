import Photo from "./Photo";
import Reveal from "./Reveal";
import Newsletter from "./Newsletter";
import { site } from "@/lib/site";

export default function Resources() {
  return (
    <section className="section section--sand resources" id="resources">
      <div className="container resources__card">
        <Reveal className="resources__visual">
          <Photo
            src={site.images.resources}
            alt="The Morning Voice Ritual guide"
            shape="soft"
            ratio="1 / 1"
            tone="champagne"
            label="Free guide cover"
            sizes="(max-width: 800px) 90vw, 420px"
          />
        </Reveal>

        <div className="resources__copy">
          <Reveal>
            <p className="eyebrow">Free Resource</p>
            <h2 className="h2">
              The Morning <em>Voice Ritual</em>
            </h2>
            <p className="lead">
              A calming 7-day guide to begin each morning with intention — gentle prompts, breathwork and affirmations
              to help you hear your inner voice before the world gets loud.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Newsletter source="resource-guide" buttonLabel="Send me the guide" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
