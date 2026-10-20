import Link from "next/link";
import { LogoSymbol } from "@/components/Logo";
import { Arrow } from "@/components/Icons";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <LogoSymbol size={84} />
        <h1 className="h2">
          This page has <em>quietly wandered off.</em>
        </h1>
        <p>Let’s guide you back to somewhere calm.</p>
        <Link href="/" className="btn btn--dark">
          Return home <Arrow width={18} height={18} />
        </Link>
      </div>
    </section>
  );
}
