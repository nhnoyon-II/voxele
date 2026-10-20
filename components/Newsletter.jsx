"use client";

import { useState } from "react";
import { Arrow, Check } from "./Icons";
import { site } from "@/lib/site";

/**
 * Email capture.
 *  • If site.formEndpoint is set (Formspree, Getform, etc.) → POSTs there.
 *  • Otherwise → opens the visitor's email app addressed to site.email,
 *    so it works instantly with no backend.
 */
export default function Newsletter({ buttonLabel = "Send me the guide", source = "newsletter" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;

    if (!site.formEndpoint) {
      const subject = encodeURIComponent("Please add me to the Voxelé list");
      const body = encodeURIComponent(`Hello, please send me the free guide and updates.\n\nMy email: ${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("done");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source }),
      });
      setStatus(res.ok ? "done" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="form-success" role="status">
        <Check width={20} height={20} /> Thank you — something beautiful is on its way to your inbox.
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate={false}>
      <label htmlFor={`email-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-${source}`}
        type="email"
        name="email"
        required
        placeholder="Your email address"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn--dark" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : buttonLabel} <Arrow width={18} height={18} />
      </button>
      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong — please try again, or email us directly.
        </p>
      )}
      <p className="newsletter__fine">No spam, ever. Unsubscribe whenever you like.</p>
    </form>
  );
}
