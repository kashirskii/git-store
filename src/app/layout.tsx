import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { Header } from "./_components/Header/Header";

export const metadata: Metadata = {
  title: "Sonos: Pre-order Arc Ultra, Our Latest Premium Soundbar",
  description: "Sonos is the ultimate wireless home sound system: a whole-house WiFi network that fills your home with brilliant sound, room by room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
