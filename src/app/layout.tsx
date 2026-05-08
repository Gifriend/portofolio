import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gifriendt.my.id'),
  title: {
    default: "Gifriend Talumingan - Full Stack Developer & Software Engineer",
    template: "%s | Gifriend Talumingan Portfolio"
  },
  description: "Professional portfolio of Gifriend Yedija Talumingan - Full Stack Developer specializing in React, Next.js, TypeScript, Flutter, NestJS, and modern web/mobile development. Explore innovative projects with cutting-edge technologies, clean code architecture, and responsive design. Based in Manado, Indonesia.",
  keywords: [
    "Gifriend Talumingan",
    "Gifriend Yedija Talumingan",
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Mobile Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Flutter Developer",
    "NestJS Developer",
    "Software Engineer",
    "Portfolio Website",
    "Manado Developer",
    "Indonesia Developer",
    "Sam Ratulangi University",
    "Informatics Engineering",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS"
  ],
  authors: [{ name: "Gifriend Yedija Talumingan", url: "https://gifriendt.my.id" }],
  creator: "Gifriend Yedija Talumingan",
  publisher: "Gifriend Yedija Talumingan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gifriendt.my.id",
    siteName: "Gifriend Talumingan Portfolio",
    title: "Gifriend Talumingan - Full Stack Developer & Software Engineer",
    description: "Professional portfolio showcasing full stack development projects using React, Next.js, TypeScript, Flutter, NestJS and modern technologies. Explore my work in web and mobile development.",
    images: [
      {
        url: "/imageProfile.jpg",
        width: 1200,
        height: 630,
        alt: "Gifriend Talumingan - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gifriend Talumingan - Full Stack Developer & Software Engineer",
    description: "Professional portfolio showcasing full stack development projects using React, Next.js, TypeScript, Flutter, NestJS and modern technologies.",
    creator: "@gifriendt_",
    images: ["/imageProfile.jpg"],
  },
  icons: {
    icon: '/logo-gif.png',
    shortcut: '/logo-gif.png',
    apple: '/logo-gif.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: "https://gifriendt.my.id",
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
        style={{ fontFamily: "'Space Grotesk', Arial, Helvetica, sans-serif" }}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
