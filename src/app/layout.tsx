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
  description: "Ropa interior femenina y lencería Yas",
  openGraph: {
    url: "https://lenceriayas.shop", // Replace with your actual website URL
    title: "Yasmin Lencería", // Consistent with title
    description: "Ropa interior femenina y lencería Yas", // Consistent with description
    images: [
      {
        url: "/src/components/assets/images/hero/logoresponsive.png", // Replace with URL of a high-quality product image
        width: 768, // Adjust width based on image dimensions
        height: 660, // Adjust height based on image dimensions
        alt: "Yas Lencería" // Descriptive alternative text
      }
    ],
  },
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
