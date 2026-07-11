import type { Metadata } from "next";
import "./globals.css";
import { inter, fraunces } from "@/app/components/ui/fonts";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "MoodFlix",
  description:
    "MoodFlix is a movie streaming platform that allows users to discover movies that match their mood and not just genre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}