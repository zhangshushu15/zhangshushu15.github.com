import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Head>
        <title>My Personal Site</title>
        <meta name="description" content="Personal website" />
      </Head>
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
          <p className="text-lg mb-8">Welcome to my personal website built with Next.js and Tailwind CSS.</p>
          <a
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            href="https://github.com/"
          >
            Visit my GitHub
          </a>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I'm a software developer who loves building web applications and learning new
            technologies. This site showcases some of my work and interests.
          </p>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>
            Feel free to reach out via{' '}
            <a className="text-blue-600 underline" href="mailto:john.doe@example.com">
              john.doe@example.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
