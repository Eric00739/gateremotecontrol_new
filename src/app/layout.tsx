import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { siteUrl } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// `subsets` only controls which files are preloaded; every subset (including
// Cyrillic for /ru) is still self-hosted and loaded on demand via unicode-range.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Used only for small decorative labels: never worth a preload on the critical path.
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

const syncDocumentLanguage = `
(() => {
  const match = window.location.pathname.match(/^\\/(en|it|pt|es|ru|fr)(?:\\/|$)/);
  document.documentElement.lang = match ? match[1] : 'en';
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#062748]">
        <script dangerouslySetInnerHTML={{ __html: syncDocumentLanguage }} />
        {children}
      </body>
    </html>
  );
}
