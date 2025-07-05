import Header from '../components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <Head>
        <title>My Personal Site</title>
        <meta name="description" content="Personal website" />
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-lg mb-8">Welcome to my personal website built with Next.js and Tailwind CSS.</p>
        <a
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          href="https://github.com/"
        >
          Visit my GitHub
        </a>
      </main>
    </div>
  );
}
