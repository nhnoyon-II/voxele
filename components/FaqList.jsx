"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Plus } from "./Icons";

/** Accessible accordion. `id` keeps element ids unique when used more than once. */
export default function FaqList({ items, id = "faq" }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq__list">
      {items.map((f, idx) => {
        const isOpen = open === idx;
        return (
          <Reveal key={f.q} delay={idx * 60} className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
            <h3>
              <button
                type="button"
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel-${idx}`}
                id={`${id}-btn-${idx}`}
                onClick={() => setOpen(isOpen ? -1 : idx)}
              >
                <span>{f.q}</span>
                <Plus className="faq__icon" width={20} height={20} />
              </button>
            </h3>
            <div id={`${id}-panel-${idx}`} role="region" aria-labelledby={`${id}-btn-${idx}`} className="faq__a">
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
