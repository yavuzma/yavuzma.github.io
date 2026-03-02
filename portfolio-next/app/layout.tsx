import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import VisitorTracker from "./components/VisitorTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Muhammet Ali Yavuz — Naval Architecture",
  description:
    "Naval Architecture & Ocean Engineering portfolio. CFD Engineer, Software Developer, and Naval Architect at Istanbul Technical University.",
  keywords: [
    "Naval Architecture",
    "CFD",
    "Ocean Engineering",
    "Istanbul Technical University",
    "Ship Design",
    "STAR-CCM+",
    "ANSYS Fluent",
  ],
  authors: [{ name: "Muhammet Ali Yavuz" }],
  openGraph: {
    title: "Muhammet Ali Yavuz — Naval Architecture",
    description:
      "Naval Architecture & Ocean Engineering portfolio. CFD Engineer, Software Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Security meta tags (static export — HTTP headers unavailable) ── */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https:",
            "connect-src 'self' https://ipapi.co https://script.google.com",
            "frame-ancestors 'none'",
          ].join("; ")}
        />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${ibmPlexMono.variable}`}>
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
