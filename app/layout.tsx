import type {Metadata} from "next";
import {Inter, Manrope} from "next/font/google";
import "./globals.css";

import Nav from "@/components/dan/layout/Nav";
import Footer from "@/components/dan/layout/Footer";
import { Toaster } from "../ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LKSW DAN – Taekwon-do i Kickboxing",
  description: "LKSW DAN – Taekwon-do i Kickboxing w regionie Lublina.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pl" className="bg-black">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-black text-white`}
      >
        <Nav />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
