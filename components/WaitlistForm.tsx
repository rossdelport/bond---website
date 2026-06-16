"use client";

import { useId, useState } from "react";
import { BlobbyExcited } from "./pixel/Blobby";

type Variant = "hero" | "full";
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  variant?: Variant;
  submitLabel?: string;
  fineprint?: string;
};

export function WaitlistForm({ variant = "full", submitLabel, fineprint }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const inputId = useId();

  const label = submitLabel ?? (variant === "hero" ? "get early access" : "notify me");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_RE.test(trimmed)) {
      setError("that doesn't look like an email. mind checking it?");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "something went wrong. try again in a moment?");
      }

      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "something went wrong. try again?");
      setStatus("error");
    }
  }

  return (
    <div className={`waitlist waitlist--${variant}`}>
      {status === "success" ? (
        <div className="waitlist__success" role="status">
          <BlobbyExcited pixel={variant === "hero" ? 5 : 6} />
          <p className="waitlist__success-text">
            you&rsquo;re on the list. Blobby can&rsquo;t wait to meet you.
          </p>
        </div>
      ) : (
        <form className="waitlist__form" onSubmit={onSubmit} noValidate>
          <label className="sr-only" htmlFor={inputId}>
            your email
          </label>
          <input
            id={inputId}
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            className="waitlist__input"
            placeholder="your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            disabled={status === "submitting"}
            aria-invalid={status === "error"}
            required
          />
          <button
            type="submit"
            className="btn btn--primary waitlist__submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "adding you…" : label}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="waitlist__error" role="alert">
          {error}
        </p>
      )}

      {status !== "success" && fineprint && <p className="waitlist__fine">{fineprint}</p>}
    </div>
  );
}
