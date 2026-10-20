"use client";

import { useEffect, useRef, useState } from "react";

/** Gentle fade-and-rise on scroll. Respects reduced-motion (handled in CSS). */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
