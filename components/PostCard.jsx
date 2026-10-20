import Link from "next/link";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/posts";

const tones = ["blush", "clay", "champagne"];

export default function PostCard({ post, index = 0, delay = 0 }) {
  const fallback = site.images.journal[index % site.images.journal.length];
  return (
    <Reveal as="article" delay={delay} className="post">
      <Link href={`/blog/${post.slug}`} className="post__link" aria-label={post.title}>
        <Photo
          src={post.image || fallback}
          alt=""
          shape="soft"
          ratio="4 / 3"
          tone={tones[index % tones.length]}
          label="Journal image"
          sizes="(max-width: 700px) 92vw, 360px"
        />
        <p className="post__cat">{post.category}</p>
        <h3>{post.title}</h3>
        <p className="post__excerpt">{post.excerpt}</p>
        <span className="post__meta">
          {formatDate(post.date)} · {post.readTime}
        </span>
      </Link>
    </Reveal>
  );
}
