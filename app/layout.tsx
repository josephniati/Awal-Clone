import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira_Extra_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sairaExtraCondensed = Saira_Extra_Condensed({
  variable: "--font-saira-extra-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "musicXchange",
  description: "Fund your favorite artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sairaExtraCondensed.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
