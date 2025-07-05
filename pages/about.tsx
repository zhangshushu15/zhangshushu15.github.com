import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>About - John Doe</title>
        <meta name="description" content="About John Doe" />
      </Head>
      <Header />
      <main className="w-full max-w-3xl flex-grow mt-8">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="mb-4">
          I'm a software developer who enjoys building web applications and learning new technologies.
        </p>
        <p>
          <a href="/" className="text-blue-700 underline">Back to home</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
