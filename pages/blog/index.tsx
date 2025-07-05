import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface BlogIndexProps {
  allPostsData: { slug: string; title: string; date: string }[];
}

export default function BlogIndex({ allPostsData }: BlogIndexProps) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Blog</title>
      </Head>
      <main className="w-full max-w-3xl flex-grow p-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          {allPostsData.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`} className="text-blue-700 underline">
                {title}
              </Link>
              <span className="ml-2 text-gray-500">{date}</span>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
