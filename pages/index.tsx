import Head from 'next/head';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>John Doe</title>
        <meta name="description" content="Personal website" />
      </Head>

      <header className="w-full max-w-3xl mt-8 mb-6">
        <h1 className="text-5xl font-serif mb-2">John Doe</h1>
        <p className="text-lg">Software Developer</p>
      </header>

      <main className="w-full max-w-3xl flex-grow">
        <ul className="list-disc pl-5 space-y-1 mb-8">
          <li>
            <a href="#about" className="text-blue-700 underline">About</a>
          </li>
          <li>
            <a href="#projects" className="text-blue-700 underline">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-blue-700 underline">Contact</a>
          </li>
        </ul>

        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>
            I'm a software developer who enjoys building web applications and learning
            new technologies.
          </p>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p>
            Check out my work on{' '}
            <a className="underline" href="https://github.com/">GitHub</a>.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Feel free to reach out at{' '}
            <a className="underline" href="mailto:john.doe@example.com">john.doe@example.com</a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
