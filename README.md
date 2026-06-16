# Bond — marketing site

The single-page marketing home page for **Bond**, a shared virtual pet for
couples. It explains the concept in five seconds, makes you feel something, and
captures one thing: your email, so we can tell you when Blobby's egg appears.

Warm cream palette, hand-authored pixel art (Blobby, the egg, the journey, the
notifications), clean modern typography. Built to look like the app feels —
cosy, a little nostalgic, genuinely warm.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- Plain CSS with custom properties (`app/globals.css`) — no UI framework
- Pixel art rendered as crisp SVG from hand-drawn grids (`components/pixel/`)
- Waitlist stored in **Supabase** via its REST endpoint — no client SDK needed
- Zero runtime dependencies beyond Next/React

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## The waitlist

Email signups POST to the `/api/register` route, which inserts a row into the
`bond_waitlist` table in Supabase. The table has row-level security: the
public key can **only insert** valid-looking emails — it cannot read the list
back. Duplicate emails (case-insensitive) are treated as success.

### Configuration

The Supabase URL and **publishable** key are baked into `lib/config.ts` as
defaults, so the deployed site works with **zero configuration**. Both values
are safe to be public (insert-only via RLS). To point the form at a different
Supabase project, set these environment variables (locally in `.env.local`, or
in your Vercel project settings):

| Variable                   | Purpose                            |
| -------------------------- | ---------------------------------- |
| `SUPABASE_URL`             | Your Supabase project URL          |
| `SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable/anon key |

See `.env.example`.

### Reading the signups

The list is intentionally not readable from the website. View signups in the
Supabase dashboard → Table editor → `bond_waitlist`, or export them there.

## Deploy to Vercel

1. Import this repo into Vercel.
2. Framework preset: **Next.js** (auto-detected). No build settings to change.
3. Deploy. The waitlist works out of the box; no env vars required unless you
   want to use a different Supabase project.

## Editing content

- **Copy & sections** — each section is a component in `components/`
  (`Hero`, `Pillars`, `EmotionalHook`, `JourneyPreview`, `NotificationsPreview`,
  `Registration`, `Footer`).
- **Pixel art** — sprites are defined as character grids in
  `components/pixel/sprites.ts` and rendered by `PixelSprite`. Each character
  maps to a colour in the sprite's palette; spaces and `.` are transparent.
- **Colours & type** — the palette and fonts live as CSS variables at the top
  of `app/globals.css`.

## What this page deliberately does not have

No autoplay video, no pricing, no app-store badges, no testimonials, no chat
widget, no takeover cookie banner, and exactly one form field: your email.
