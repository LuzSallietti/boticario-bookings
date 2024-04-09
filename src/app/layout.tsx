import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Espacio Boticario",
  description: "Vení, este es tu lugar. Multiespacio para profesionales de salud, estética, cultura, en Villa Fontana - Córdoba - Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
