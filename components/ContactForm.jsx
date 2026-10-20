"use client";

import { useState } from "react";
import { Arrow, Check } from "./Icons";
import { site } from "@/lib/site";

const interests = [
  "Voice Discovery Session",
  "The Inner Voice Journey",
  "Renewal Intensive",
  "Not sure yet — I’d love guidance",
  "Speaking / collaboration",
  "Something else",
];

/**
 * Contact form → delivered to your email.
 *  • With site.formEndpoint (Formspree etc.) set → submitted in the background
 *    and delivered straight to your inbox.
 *  • Without it → opens the visitor's email app with the message pre-filled
 *    and addressed to site.email (works with zero setup).
 */
export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.company) return; // honeypot — bots fill this in

    if (!site.formEndpoint) {
      const subject = encodeURIComponent(`Voxelé enquiry — ${data.interest || "Hello"}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "-"}\nInterested in: ${
          data.interest
        }\n\n${data.message}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("done");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Voxelé enquiry — ${data.interest}` }),
      });
      if (res.ok) {
        form.reset();
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-card form-card--done" role="status">
        <span className="contact__icon">
          <Check width={28} height={28} />
        </span>
        <h3>Thank you — your message is on its way.</h3>
        <p>
          {site.formEndpoint
            ? "We’ll reply personally within two business days."
            : "Your email app should now be open with your message ready to send. If it didn’t open, please write to us at " +
              site.email +
              "."}
        </p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Full name" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email address</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cf-phone">
            Phone <span>(optional)</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 000 000 0000" />
        </div>
        <div className="field">
          <label htmlFor="cf-interest">I’m interested in</label>
          <select id="cf-interest" name="interest" defaultValue={interests[0]}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Your message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a little about where you are and what you’re hoping for…"
        />
      </div>

      {/* honeypot — hidden from people */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn--dark btn--block" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <Arrow width={18} height={18} />
      </button>

      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong — please try again, or email us at {site.email}.
        </p>
      )}
      <p className="form-fine">Your details stay private and are only used to reply to you.</p>
    </form>
  );
}
