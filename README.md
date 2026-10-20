# Voxelé — Website

Next.js (App Router) · No backend · Static & fast · Mobile-responsive.

## Run locally (VS Code)

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check: `npm run build` then `npm start`.
Requires Node.js 18.18+ (20+ recommended). Fonts (Cormorant Garamond + Nunito) load from Google Fonts, so you need internet when previewing.

## Pages

| URL              | What it is                                              |
| ---------------- | ------------------------------------------------------- |
| `/`              | Home                                                    |
| `/about`         | About L. Reed                                           |
| `/services`      | Coaching programs                                       |
| `/testimonials`  | Client words                                            |
| `/blog`          | Blog list · `/blog/[slug]` article pages (6 samples)    |
| `/resources`     | Free resources + email capture                          |
| `/faq`           | Grouped FAQ (with FAQ schema for SEO)                   |
| `/contact`       | Contact form + booking + socials                        |
| `/book`          | "Schedule a Call" page with Calendly embed              |

## Everyday edits → `lib/site.js`

| What                | Where in `lib/site.js`                      |
| ------------------- | ------------------------------------------- |
| Calendly / booking  | `bookingUrl`                                |
| Email               | `email`                                     |
| Social links        | `social`                                    |
| Domain (SEO)        | `url`                                       |
| Photos              | `images` (files go in `public/images/`)     |
| Menu links          | `nav`                                       |
| Form delivery       | `formEndpoint` (Formspree / Getform URL)    |

### Contact form → your email
1. Create a free form at formspree.io (or Getform) using your email.
2. Paste the endpoint URL into `formEndpoint` in `lib/site.js`.

Submissions then arrive straight in your inbox (the newsletter forms use the same endpoint).
If `formEndpoint` is empty, the forms open the visitor's email app with the message pre-filled.

### Booking
Paste your Calendly link into `bookingUrl`. Every "Book a call" button goes to `/book`, which embeds your live calendar.

### Photos
Copy an image into `public/images/` (e.g. `hero.jpg`) and set `images.hero: "/images/hero.jpg"`.
Blog posts take their own image with `image: "/images/post-1.jpg"`. Until then, soft placeholders are shown.

### Content
- Blog posts: `lib/posts.js` (copy an entry to add a post)
- Testimonials, FAQ, free resources: `lib/content.js`
- Program details: `components/Programs.jsx`
- Brand colours & fonts: CSS variables at the top of `app/globals.css`
- Logo files: `public/logo-wordmark.svg`, `public/logo-symbol.svg`

## Adding more pages later
Create `app/<name>/page.js` and add it to `site.nav`. Also list it in `app/sitemap.js`.

**Client Portal (MemberStack):** add it later as `app/portal/` — nothing here blocks it.
**Store:** the Resources page has a "Boutique — coming soon" teaser; a shop can live in `app/shop/`.

## Placeholders to replace
Testimonials, blog articles, FAQ answers, program details and free-resource descriptions are sample copy in the Voxelé voice. Add L. Reed's real story, credentials and photos on `/about`.
