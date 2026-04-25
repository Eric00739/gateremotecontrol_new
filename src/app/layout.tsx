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
  title: "Remote Controls and Receivers for Gate Operators, Garage Doors and Roller Shutters",
  description: "Find compatible remote controls and receivers for gate operators, garage doors, and roller shutters. Wholesale supply, sample testing, and OEM logo or packaging options available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${jetBrainsMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#062748]">
        {children}
      </body>
    </html>
  );
}
