import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "smfandcompany | Premium Creative Production Studio",
  description: "smfandcompany is a high-end creative studio specializing in videography, cinematography, portrait photography, and full-scale media production. We tell stories through art.",
  keywords: "videography studio, cinematography services, professional video production, creative studio, music videos, commercial video production, portrait photography",
  openGraph: {
    title: "smfandcompany | Premium Creative Production Studio",
    description: "End-to-End Creative Production",
    url: "https://smfandcompany.com",
    siteName: "smfandcompany",
    images: [
      {
        url: "/og-image.jpg", // Will be added to public later
        width: 1200,
        height: 630,
        alt: "smfandcompany Studio Reel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} dark antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        {/* We'll add Navbar here later */}
        <main className="flex-1 flex flex-col">{children}</main>
        {/* We'll add Footer here later */}
      </body>
    </html>
  );
}
