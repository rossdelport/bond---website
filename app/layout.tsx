import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bond — a pet you raise together",
  description:
    "Bond is a shared virtual pet for couples. Care for it together. Watch it grow. Leave your email and we'll tell you the moment Blobby's egg appears.",
  applicationName: "Bond",
  authors: [{ name: "Bond" }],
  keywords: ["Bond", "virtual pet", "couples", "Blobby", "shared pet", "relationship app"],
  openGraph: {
    title: "Bond — a pet you raise together",
    description:
      "A shared virtual pet for couples. Care for it together. Watch it grow.",
    siteName: "Bond",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bond — a pet you raise together",
    description: "A shared virtual pet for couples. Care for it together. Watch it grow.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
