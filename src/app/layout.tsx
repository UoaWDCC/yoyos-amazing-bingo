import type { Metadata } from "next";

import { geistMono, geistSans } from "@/assets/fonts";

import "@/assets/globals.css";

import RevalidationComponent from "@/revalidation/RevalidationComponent";

export const metadata: Metadata = {
  title: "Yoyo's Amazing Bingo | WDCC",
  icons: {
    icon: "./favicon.ico",
  },
  description: "Introducing: Yoyo's Amazing Bingo by WDCC!!",
  keywords: [
    "Web Development & Consulting Club",
    "WDCC",
    "Yoyo's Amazing Bingo",
    "YAB",
    "Bingo",
    "Game",
  ],

  // description display for when you post the link on social media
  openGraph: {
    title: "Yoyo's Amazing Bingo | Web Development & Consulting Club",
    description: "Introducing: Yoyo's Amazing Bingo by WDCC!!",
    url: "https://bingo.wdcc.co.nz/",
    images: "https://wdcc.co.nz/images/og-image.png",
    siteName: "Yoyo's Amazing Bingo | Web Development & Consulting Club",
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
