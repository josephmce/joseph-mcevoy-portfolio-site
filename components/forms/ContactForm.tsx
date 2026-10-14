"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
    };
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit the form.",
        );
      }

      setStatus("success");

      setMessage(
        result.message ||
          "Thanks — your message has been received.",
      );

      form.reset();

      // Turnstile tokens are single-use,
      // so reset the widget after a successful submission.
      window.turnstile?.reset();
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong.",
      );

      // Reset Turnstile so the user can try again.
      window.turnstile?.reset();
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        {/* Honeypot - hidden from real users */}
        <div className="honeypot" aria-hidden="true">
          <label>
            Website
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Name
            <input
              name="name"
              type="text"
              autoComplete="name"
              maxLength={100}
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>
        </div>

        <label>
          What would you like to discuss?
          <textarea
            name="message"
            rows={7}
            maxLength={5000}
            required
          />
        </label>

        {turnstileSiteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="dark"
          />
        ) : null}

        <button
          className="button"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Sending…"
            : "Send message"}
        </button>

        {message ? (
          <p
            className={`form-message ${status}`}
            role="status"
          >
            {message}
          </p>
        ) : null}
      </form>
    </>
  );
}