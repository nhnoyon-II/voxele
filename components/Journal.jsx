import Link from "next/link";
import Reveal from "./Reveal";
import PostCard from "./PostCard";
import { Arrow } from "./Icons";
import { posts } from "@/lib/posts";

export default function Journal() {
  return (
    <section className="section journal" id="journal">
      <div className="container">
        <Reveal className="section__head section__head--split">
          <div>
            <p className="eyebrow">The Journal</p>
            <h2 className="h2">
              Gentle reading for <em>your inner world</em>
            </h2>
          </div>
          <Link href="/blog" className="link-arrow">
            View all articles <Arrow width={18} height={18} />
          </Link>
        </Reveal>

        <div className="journal__grid">
          {posts.slice(0, 3).map((p, i) => (
            <PostCard key={p.slug} post={p} index={i} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
