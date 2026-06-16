"use client";

import { useState } from "react";
import { BlobbyExcited } from "./pixel/Blobby";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Registration() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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
    <section className="register" id="register">
      <div className="register__inner">
        <h2 className="register__title">Blobby is almost ready.</h2>
        <p className="register__sub">
          Bond is launching soon. leave your email and we&rsquo;ll tell you the moment the egg
          appears.
        </p>

        {status === "success" ? (
          <div className="register__success" role="status">
            <BlobbyExcited pixel={6} />
            <p className="register__success-text">
              you&rsquo;re on the list. Blobby can&rsquo;t wait to meet you.
            </p>
          </div>
        ) : (
          <form className="register__form" onSubmit={onSubmit} noValidate>
            <label className="sr-only" htmlFor="email">
              your email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              className="register__input"
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
              className="btn btn--primary register__submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "adding you…" : "notify me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="register__error" role="alert">
            {error}
          </p>
        )}

        {status !== "success" && (
          <p className="register__fine">
            no spam. no marketing fluff. just one email when Bond launches.
          </p>
        )}
      </div>
    </section>
  );
}
