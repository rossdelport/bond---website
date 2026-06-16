import { NextResponse } from "next/server";
import {
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  WAITLIST_TABLE,
} from "@/lib/config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ error: "invalid request." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "please enter a valid email." }, { status: 400 });
  }

  const userAgent = request.headers.get("user-agent")?.slice(0, 400) ?? null;

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${WAITLIST_TABLE}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        source: "website",
        user_agent: userAgent,
      }),
      // never cache a write
      cache: "no-store",
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    // A duplicate email is a success from the visitor's point of view — they're
    // already on the list. The unique index returns Postgres error 23505.
    const detail = await res.text();
    if (res.status === 409 || detail.includes("23505")) {
      return NextResponse.json({ ok: true, already: true });
    }

    console.error("waitlist insert failed", res.status, detail);
    return NextResponse.json(
      { error: "we couldn't save that just now. try again in a moment?" },
      { status: 502 },
    );
  } catch (err) {
    console.error("waitlist insert error", err);
    return NextResponse.json(
      { error: "we couldn't save that just now. try again in a moment?" },
      { status: 502 },
    );
  }
}
