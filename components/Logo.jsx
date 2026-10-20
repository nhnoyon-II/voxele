import Link from "next/link";

/** Gold microphone mark — the Voxelé "inner voice" symbol */
export function MicIcon({ className = "", size = 40 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vx-gold" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F3E6C8" />
          <stop offset="0.45" stopColor="#D9BF8C" />
          <stop offset="1" stopColor="#B8935A" />
        </linearGradient>
      </defs>
      <rect x="23" y="5" width="18" height="32" rx="9" fill="url(#vx-gold)" />
      <g stroke="#FAF8F5" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round">
        <path d="M27 13h10M26 18.5h12M26 24h12M27 29.5h10" />
      </g>
      <path
        d="M15 29v2a17 17 0 0 0 34 0v-2"
        stroke="url(#vx-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M32 48v9M22 58h20" stroke="url(#vx-gold)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Soft sound-wave flourish that sits under the wordmark */
export function WaveLine({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h58M140 7h58"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M66 7h4l3-5 4 10 4-8 3 6 3-4 3 3 4-6 4 8 3-5 3 4h4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** VOXELÉ wordmark — spaced serif, gold feminine É */
export function Wordmark({ wave = false, tone = "dark", size = "md" }) {
  return (
    <span className={`wordmark wordmark--${tone} wordmark--${size}`} aria-label="Voxelé">
      <span className="wordmark__text" aria-hidden="true">
        VOXEL<span className="wordmark__e">É</span>
      </span>
      {wave && <WaveLine className="wordmark__wave" />}
    </span>
  );
}

/** Minimal symbol version: VÉ */
export function LogoSymbol({ tone = "dark", size = 44 }) {
  return (
    <span
      className={`logo-symbol logo-symbol--${tone}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      aria-label="Voxelé"
    >
      <span aria-hidden="true">
        V<span className="logo-symbol__e">É</span>
      </span>
    </span>
  );
}

/**
 * Logo
 *  variant: "full"  → mic + wordmark (header / hero)
 *           "word"  → wordmark only
 *           "symbol"→ VÉ monogram
 */
export default function Logo({ variant = "word", tone = "dark", wave = false, href = "/", size = "md" }) {
  const inner =
    variant === "symbol" ? (
      <LogoSymbol tone={tone} />
    ) : variant === "full" ? (
      <span className="logo-full">
        <MicIcon size={size === "lg" ? 54 : 34} />
        <Wordmark wave={wave} tone={tone} size={size} />
      </span>
    ) : (
      <Wordmark wave={wave} tone={tone} size={size} />
    );

  if (!href) return inner;
  return (
    <Link href={href} className="logo-link" aria-label="Voxelé — home">
      {inner}
    </Link>
  );
}
