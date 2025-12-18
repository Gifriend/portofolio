import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gifriend Talumingan - Web Developer & Frontend Engineer Portfolio",
  description: "Portfolio profesional Gifriend Yedija Talumingan - Experienced Web Developer specializing in React, Next.js, TypeScript, and modern frontend technologies. Explore my projects, skills, and creative web solutions with stunning animations and responsive design.",
  keywords: ["Web Developer", "Frontend Developer","Mobile Developer", "Backend Developer", "React Developer", "Next.js", "TypeScript", "Flutter", "Dart","Portfolio", "Gifriend Talumingan"],
  authors: [{ name: "Gifriend Yedija Talumingan" }],
  creator: "Gifriend Yedija Talumingan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gifriend Talumingan - Web Developer Portfolio",
    description: "Experienced Web Developer specializing in React, Next.js, and modern frontend technologies. View my projects and creative solutions.",
    siteName: "Gifriend Talumingan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gifriend Talumingan - Web Developer Portfolio",
    description: "Experienced Web Developer specializing in React, Next.js, and modern frontend technologies.",
  },
  icons:{
    icon:'/logo-gif.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
