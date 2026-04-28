import type { Metadata } from "next";
import "./global.css";
import { Inter, Merriweather } from "next/font/google";

import { Header } from "../components/layout/Header";

const serif = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "memHeap",
  description: "Notes I didn’t want to forget.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-screen px-6 py-10 flex flex-col bg-neutral-950 text-neutral-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
