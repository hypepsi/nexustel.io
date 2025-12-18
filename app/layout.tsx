import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexus Telecom LLC - 5G Mobile, Fiber Internet & Business Solutions",
  description: "Experience blazing fast 5G and fiber optic internet with Nexus Telecom. Unlimited mobile plans, home fiber, and enterprise connectivity solutions.",
  keywords: ["5G mobile", "fiber internet", "business telecom", "unlimited data", "enterprise connectivity"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
