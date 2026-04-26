import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { siteUrl } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${outfit.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#062748]">
        {children}
      </body>
    </html>
  );
}
