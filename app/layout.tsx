// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshan Pradhan - Software Engineer Portfolio",
  description:
    "Full-stack Software Engineer specializing in Node.js, React Native, and scalable web applications",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React Native",
    "Node.js",
    "GraphQL",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
