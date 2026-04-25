import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GateRemoteSource | OEM/ODM Compatible RF Remote Solutions",
  description: "Independent aftermarket manufacturer of compatible replacement remotes, receivers, controllers, and RF solutions for gate, garage door, roller shutter, and access control systems. Wholesale, OEM, Private Label.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${jetBrainsMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}
