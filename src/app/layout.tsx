import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const Roboto = Roboto_Condensed({
  weight: "500",
  subsets: ['latin'],
});



export const metadata: Metadata = {
  title: "Yasmin Lencería",
  description: "Ropa interior femenina Yasmin Lencería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={Roboto.className}>{children}</body>
    </html>
  );
}
