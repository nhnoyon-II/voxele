import { site } from "@/lib/site";
import { posts } from "@/lib/posts";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/testimonials", "/blog", "/resources", "/faq", "/contact", "/book"];
  const now = new Date();

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: p === "/blog" ? "weekly" : "monthly",
      priority: p === "" ? 1 : 0.8,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
