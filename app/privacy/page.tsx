import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bond",
  description: "How Bond handles the email address you share with us.",
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <a className="legal__back" href="/">
          ← back to Bond
        </a>
        <h1 className="legal__title">privacy policy</h1>
        <p className="legal__updated">Last updated: June 2025</p>

        <p>
          Bond is a shared virtual pet for couples, currently in development. This page explains
          what happens to the email address you give us on this site. We&rsquo;ve kept it short
          because what we collect is short.
        </p>

        <h2>what we collect</h2>
        <p>
          If you join the waitlist, we store the email address you enter, the rough date and time you
          joined, and basic technical information (such as your browser&rsquo;s user-agent string).
          That&rsquo;s all. We don&rsquo;t ask for your name, your phone number, or anything else.
        </p>

        <h2>why we collect it</h2>
        <p>
          We use your email for a single purpose: to tell you when Bond launches. We will not send
          you marketing fluff, sell your details, or share your email with third parties for their
          own marketing.
        </p>

        <h2>where it&rsquo;s stored</h2>
        <p>
          Your email is stored securely with our database provider (Supabase). Access is restricted
          and the list cannot be read by the public-facing website.
        </p>

        <h2>your choices</h2>
        <p>
          You can ask us to remove your email from the waitlist at any time, and we&rsquo;ll delete
          it. Once Bond launches and we&rsquo;ve let you know, we&rsquo;ll have no further need for
          the list.
        </p>

        <h2>contact</h2>
        <p>
          Questions, or want to be removed? Email{" "}
          <a href="mailto:rossdelport1998@gmail.com">rossdelport1998@gmail.com</a>.
        </p>
      </div>
    </main>
  );
}
