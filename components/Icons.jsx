/* Small, thin-line icon set (stroke = currentColor) */

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Arrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const Sparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
  </svg>
);
export const Heart = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.4-9-9.2C1.8 7.6 3.7 4.5 6.8 4.5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.1 0 5 3.1 3.8 6.3C19 15.6 12 20 12 20z" />
  </svg>
);
export const Leaf = (p) => (
  <svg {...base} {...p}>
    <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c3-5 6-8 10-10" />
  </svg>
);
export const Wave = (p) => (
  <svg {...base} {...p}>
    <path d="M3 12h2l2-6 3 12 3-9 2 5 2-2h4" />
  </svg>
);
export const Moon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
  </svg>
);
export const Calendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);
export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);
export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
export const Plus = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Quote = (p) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M9.5 6C6.5 7 4 9.8 4 14v4h6v-6H7c0-2 1-3.4 3-4l-.5-2zm9 0c-3 1-5.5 3.8-5.5 8v4h6v-6h-3c0-2 1-3.4 3-4l-.5-2z" />
  </svg>
);
export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

/* Social */
export const Instagram = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
);
export const TikTok = (p) => (
  <svg {...base} {...p}>
    <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.3 2.3 1.8 3.8 4 4" />
  </svg>
);
export const YouTube = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="18" height="12" rx="4" />
    <path d="M10.5 9.5v5l4-2.5-4-2.5z" fill="currentColor" />
  </svg>
);
export const Pinterest = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M11 16.5l1.5-6M9.5 12.5c0-2 1.5-3 3-3s2.5 1 2.5 2.4c0 1.7-1 3-2.4 3-.8 0-1.3-.4-1.5-1" />
  </svg>
);
