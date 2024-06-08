import type { Metadata } from "next";
import SFPro from "next/font/local";
import "./globals.css";

const sfPro = SFPro({
  src: "../public/assets/SF-Pro.ttf",
});

export const metadata: Metadata = {
  title: "Sam F-Harrison",
  description: "Carefully crafted by Sam F-Harrison",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sfPro.className}>{children}</body>
    </html>
  );
}
