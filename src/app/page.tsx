import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import Projects from '@/components/projects/Project';
// import Image from 'next/image';

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
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-zinc-100">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <a
            href=""
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            Say Hello
          </a>
        </div>
      </section>
    </>
  );
}
