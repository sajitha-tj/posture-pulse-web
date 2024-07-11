import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PosturePulse",
  description: "computer vision-based AI physiotherapy assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`main-body-content ${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
