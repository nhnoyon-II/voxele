const words = [
  "Inner Voice",
  "Emotional Clarity",
  "Personal Renewal",
  "Elevated Self-Identity",
  "Soft Feminine Energy",
  "Mindful Living",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((w, i) => (
          <span key={i} className="marquee__item">
            {w}
            <i>✦</i>
          </span>
        ))}
        {row.map((w, i) => (
          <span key={`b-${i}`} className="marquee__item">
            {w}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
