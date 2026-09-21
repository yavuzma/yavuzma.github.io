import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./data/cv";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Naval architect and ocean engineer (B.Sc. Shipbuilding and Ocean Engineering, ITU). CFD, comparison with experiments and engineering automation; research trainee at CENTEC, Instituto Superior Técnico.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website.url),
  title: { default: `${profile.name} - ${profile.title}`, template: `%s - ${profile.name}` },
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.website.url }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title: `${profile.name} - ${profile.title}`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}, ${profile.title}` }],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} - ${profile.title}`, description, images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1215" },
  ],
};

// Applies a theme the visitor chose earlier before first paint; with no choice stored, the OS setting wins.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: profile.website.url,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin.url, profile.github.url],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Istanbul Technical University" },
  address: { "@type": "PostalAddress", addressLocality: "Lisbon", addressCountry: "PT" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Static export: no HTTP headers, so the policy is set here. Inline scripts are Next's own bootstrap and the theme script. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline'",
            "style-src 'self' 'unsafe-inline'",
            "font-src 'self'",
            "img-src 'self' data:",
            "connect-src 'self'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join("; ")}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className={`${inter.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
