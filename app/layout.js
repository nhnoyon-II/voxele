import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Mindfulness Coaching & Lifestyle with ${site.owner}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mindfulness coaching",
    "women's coaching",
    "inner voice",
    "emotional clarity",
    "personal renewal",
    "luxury wellness",
    "life coach",
    "Voxelé",
  ],
  authors: [{ name: site.owner }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
};

export const viewport = {
  themeColor: "#F5E8E4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Nunito:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
