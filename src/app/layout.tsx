import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fredrick Makori Omwando | Software Engineer | Frontend & Full-Stack Developer",
  description: "Software Engineer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL. View my portfolio of web applications, business systems, and digital platforms.",
  keywords: ["Software Engineer", "Frontend Developer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Fredrick Makori Omwando | Software Engineer",
    description: "Software Engineer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    url: "https://fredrickmakori.dev",
    siteName: "Fredrick Makori Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fredrick Makori Omwando | Software Engineer",
    description: "Software Engineer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
