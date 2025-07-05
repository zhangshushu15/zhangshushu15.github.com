import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Contact - John Doe</title>
        <meta name="description" content="Contact John Doe" />
      </Head>
      <Header />
      <main className="w-full max-w-3xl flex-grow mt-8">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <p className="mb-4">
          You can reach me at{' '}
          <a className="underline text-blue-700" href="mailto:john.doe@example.com">john.doe@example.com</a>.
        </p>
        <p>
          <a href="/" className="text-blue-700 underline">Back to home</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
