import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hackJersey - a high school hackathon in NJ for anyone",
  description:
    "hackJersey is a winter in-person high school hackathon, ran with 💖 by students. For 24 hours, you will get to build exciting new tech with a bunch of other high school programmers, engineers, designers, and innovators. Do you have what it takes to join in on the 24 hours of fun and learning?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
