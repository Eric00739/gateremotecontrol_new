import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}
