import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import PostCard from "@/components/PostCard";
import CtaBand from "@/components/CtaBand";
import { Arrow } from "@/components/Icons";
import { posts, getPost, formatDate } from "@/lib/posts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const index = posts.findIndex((p) => p.slug === slug);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.owner },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="page-hero page-hero--post">
          <div className="page-hero__bg" aria-hidden="true">
            <span className="orb orb--1" />
            <span className="orb orb--2" />
          </div>
          <div className="container page-hero__inner">
            <Reveal>
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog">Blog</Link>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <p className="eyebrow">{post.category}</p>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="page-hero__title page-hero__title--post">{post.title}</h1>
            </Reveal>
            <Reveal delay={230}>
              <p className="post__meta post__meta--hero">
                By {site.owner} · {formatDate(post.date)} · {post.readTime}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="container article">
          <Reveal className="article__cover">
            <Photo
              src={post.image || site.images.journal[index % site.images.journal.length]}
              alt=""
              shape="soft"
              ratio="16 / 8"
              label="Article cover"
              priority
              sizes="(max-width: 900px) 92vw, 820px"
            />
          </Reveal>

          <div className="prose">
            <p className="prose__lead">{post.excerpt}</p>
            {post.content.map((b, i) => {
              if (b.t === "h") return <h2 key={i}>{b.text}</h2>;
              if (b.t === "quote") return <blockquote key={i}>{b.text}</blockquote>;
              if (b.t === "list")
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{b.text}</p>;
            })}

            <div className="prose__sign">
              <span>With love,</span>
              <strong>{site.owner}</strong>
            </div>
          </div>
        </div>
      </article>

      <section className="section section--blush">
        <div className="container">
          <Reveal className="section__head section__head--split">
            <div>
              <p className="eyebrow">Continue reading</p>
              <h2 className="h2">
                More from <em>the Journal</em>
              </h2>
            </div>
            <Link href="/blog" className="link-arrow">
              All articles <Arrow width={18} height={18} />
            </Link>
          </Reveal>
          <div className="journal__grid">
            {related.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i + 1} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
