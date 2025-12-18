import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Project';
import Contact from '@/components/contact/Contact';
import { Metadata } from 'next';

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

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Contact />
    </>
  );
}
