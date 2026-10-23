import Photo from "./Photo";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";
import { books } from "@/lib/books";

const tones = ["blush", "champagne", "clay"];

export default function Books() {
  return (
    <section className="section books" id="books">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">The Books</p>
          <h2 className="h2">
            Words to keep <em>close to your heart</em>
          </h2>
          <p className="section__sub">
            Written to accompany you on your journey — available on Amazon.
          </p>
        </Reveal>

        <div className="books__grid">
          {books.map((b, i) => (
            <Reveal as="article" key={b.title} delay={i * 110} className="book">
              <div className="book__cover">
                <Photo
                  src={b.image}
                  alt={`Cover of ${b.title}`}
                  shape="wide"
                  ratio="2 / 3"
                  tone={tones[i % tones.length]}
                  label={b.title}
                  sizes="(max-width: 700px) 70vw, 320px"
                />
              </div>
              <div className="book__body">
                <h3>{b.title}</h3>
                <p className="book__subtitle">{b.subtitle}</p>
                <p className="book__text">{b.description}</p>
                <a
                  href={b.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="btn btn--dark btn--block"
                  aria-label={`Buy ${b.title} on Amazon`}
                >
                  Buy on Amazon <Arrow width={18} height={18} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}