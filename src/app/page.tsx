import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Project';
import Contact from '@/components/contact/Contact';

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
