import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import Resources from "@/components/Resources";
import { Arrow } from "@/components/Icons";
import { posts, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata = {
  title: "Blog — The Journal",
  description:
    "Gentle reading on mindfulness, emotional clarity, renewal and soft feminine energy from L. Reed at Voxelé.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        crumb="Blog"
        title="Gentle reading for"
        accent="your inner world."
        lead="Reflections, rituals and quiet encouragement on mindfulness, emotional clarity and personal renewal."
      />

      <section className="section blog">
        <div className="container">
          <Reveal>
            <ul className="chips" aria-label="Topics">
              {categories.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="featured">
            <Link href={`/blog/${featured.slug}`} className="featured__link">
              <Photo
                src={featured.image || site.images.journal[0]}
                alt=""
                shape="soft"
                ratio="4 / 3"
                label="Featured article"
                sizes="(max-width: 900px) 92vw, 560px"
              />
              <div className="featured__copy">
                <p className="post__cat">Featured · {featured.category}</p>
                <h2 className="h2">{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="post__meta">
                  {formatDate(featured.date)} · {featured.readTime}
                </span>
                <span className="link-arrow">
                  Read article <Arrow width={18} height={18} />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="journal__grid blog__grid">
            {rest.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i + 1} delay={(i % 3) * 100} />
            ))}
          </div>
        </div>
      </section>

      <Resources />
    </>
  );
}
