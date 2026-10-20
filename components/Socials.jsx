import { Instagram, TikTok, YouTube, Pinterest } from "./Icons";
import { site } from "@/lib/site";

const items = [
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "tiktok", label: "TikTok", Icon: TikTok },
  { key: "youtube", label: "YouTube", Icon: YouTube },
  { key: "pinterest", label: "Pinterest", Icon: Pinterest },
];

export default function Socials({ tone = "dark" }) {
  return (
    <ul className={`socials socials--${tone}`}>
      {items
        .filter((s) => site.social[s.key])
        .map(({ key, label, Icon }) => (
          <li key={key}>
            <a href={site.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`Voxelé on ${label}`}>
              <Icon width={20} height={20} />
            </a>
          </li>
        ))}
    </ul>
  );
}
