import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

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
  title: "Muhammet Ali Yavuz - Naval Architect and Ocean Engineer",
  description:
    "Portfolio of Muhammet Ali Yavuz, Naval Architect and Ocean Engineer (B.Sc. Shipbuilding and Ocean Engineering, ITU): CFD, experimental hydrodynamics and engineering automation.",
  keywords: [
    "Naval Architecture",
    "CFD",
    "Ocean Engineering",
    "Istanbul Technical University",
    "Ship Design",
    "OpenFOAM",
    "STAR-CCM+",
    "ANSYS Fluent",
  ],
  authors: [{ name: "Muhammet Ali Yavuz" }],
  openGraph: {
    title: "Muhammet Ali Yavuz - Naval Architect and Ocean Engineer",
    description:
      "Portfolio of Muhammet Ali Yavuz, Naval Architect and Ocean Engineer (B.Sc. Shipbuilding and Ocean Engineering, ITU): CFD, experimental hydrodynamics and engineering automation.",
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
        {/* ── Security meta tags (static export - HTTP headers unavailable) ── */}
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            // unsafe-eval and wasm-unsafe-eval are required by @react-pdf/renderer
            // (fontkit/yoga internals) for client-side PDF generation.
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob: https://cdnjs.cloudflare.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' data: https://fonts.gstatic.com",
            "img-src 'self' data: blob: https:",
            "worker-src 'self' blob:",
            "connect-src 'self' blob: data:",
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
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
