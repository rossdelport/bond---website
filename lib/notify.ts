import { NOTIFY_FROM, NOTIFY_TO, RESEND_API_KEY } from "./config";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Best-effort: emails NOTIFY_TO that a new person joined the waitlist.
 * No-ops silently when RESEND_API_KEY isn't configured, and never throws —
 * a failed notification must not break the signup itself.
 */
export async function notifyNewSignup(email: string): Promise<void> {
  if (!RESEND_API_KEY) return;

  const safe = escapeHtml(email);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        subject: "new sign up for Bond!",
        html:
          `<div style="font-family:system-ui,sans-serif;font-size:16px;color:#2a2218">` +
          `new sign up for Bond from <strong>${safe}</strong>!` +
          `</div>`,
        text: `new sign up for Bond from ${email}!`,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("resend notify failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("resend notify error", err);
  }
}
