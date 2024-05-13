import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-inter",
});
const bodoniModaInit = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-bodoni-moda",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoniModaInit.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
