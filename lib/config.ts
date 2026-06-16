// Supabase connection for the Bond waitlist.
//
// Both values below are public-safe: the publishable key can only INSERT into
// the `bond_waitlist` table (enforced by row-level security) and cannot read
// it back. They are baked in as defaults so the deployed site works with zero
// configuration, while still allowing an override via environment variables.

export const SUPABASE_URL =
  process.env.SUPABASE_URL ?? "https://rulvofxdcyojtzpxnoru.supabase.co";

export const SUPABASE_PUBLISHABLE_KEY =
  process.env.SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_L62hdz-9-HijQA2P6TWQPA_H_ZOvxL9";

export const WAITLIST_TABLE = "bond_waitlist";

// Optional: email yourself when someone joins the waitlist (via Resend).
// Leave RESEND_API_KEY unset to disable notifications entirely — signups still
// save to Supabase. The API key is a secret, so it has NO baked-in default.
export const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";

// Who gets the "new signup" email, and the address it's sent from.
export const NOTIFY_TO = process.env.NOTIFY_TO ?? "rossdelport1998@gmail.com";
export const NOTIFY_FROM =
  process.env.NOTIFY_FROM ?? "Bond waitlist <onboarding@resend.dev>";
