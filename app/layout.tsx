import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "../components/smooth-scrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OUTLIO | Book Qualified Sales Calls in 7 Days. Guaranteed.",
  description:
    "Performance-based outbound sprint for B2B agencies. 200+ personalized DMs in 7 days. Qualified calls or you pay nothing.",
  metadataBase: new URL("https://outlio.co"),
  openGraph: {
    title: "OUTLIO | Book Qualified Sales Calls in 7 Days. Guaranteed.",
    description:
      "Performance-based outbound sprint for B2B agencies. 200+ DMs in 7 days. Or you pay nothing.",
    url: "https://outlio.co",
    siteName: "OUTLIO",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OUTLIO | Book Qualified Sales Calls in 7 Days",
    description:
      "Performance-based outbound sprint for B2B agencies. 200+ DMs in 7 days. Or you pay nothing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
