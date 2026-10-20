import Image from "next/image";
import { MicIcon } from "./Logo";

/**
 * Photo — shows your real image when `src` is set, otherwise a soft,
 * spa-like placeholder so the layout always looks finished.
 *
 *  shape: "arch" | "soft" | "round" | "wide"
 */
export default function Photo({
  src,
  alt = "",
  shape = "soft",
  ratio = "4 / 5",
  tone = "blush",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  label = "Your photo here",
  className = "",
}) {
  return (
    <div
      className={`photo photo--${shape} photo--${tone} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="photo__img" />
      ) : (
        <div className="photo__placeholder" role="img" aria-label={alt || label}>
          <span className="photo__glow" />
          <MicIcon size={44} className="photo__icon" />
          <span className="photo__label">{label}</span>
        </div>
      )}
      <span className="photo__sheen" aria-hidden="true" />
    </div>
  );
}
