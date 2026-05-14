import type { Metadata } from "next";

import { geistMono, geistSans } from "@/assets/fonts";

import "@/assets/globals.css";

import RevalidationComponent from "@/revalidation/RevalidationComponent";

export const metadata: Metadata = {
  title: "Webster's Villain Arc | WDCC",
  icons: {
    icon: "./favicon.ico",
  },
  description: "Introducing: Webster's Villain Arc by WDCC!!",
  keywords: [
    "Web Development & Consulting Club",
    "WDCC",
    "Yoyo's Amazing Bingo", // Hey, just in case people are still searching for this
    "Webster's Alternate Reality", // Hey, just in case people are still searching for this
    "Webster's Villain Arc",
    "Bingo",
    "Game",
  ],

  // description display for when you post the link on social media
  openGraph: {
    title: "Webster's Villain Arc | Web Development & Consulting Club",
    description: "Introducing: Webster's Villain Arc by WDCC!!",
    url: "https://bingo.wdcc.co.nz/",
    images: "https://wdcc.co.nz/images/og-image.png",
    siteName: "Webster's Villain Arc | Web Development & Consulting Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RevalidationComponent />
      <body
        className={`${geistSans.variable} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
