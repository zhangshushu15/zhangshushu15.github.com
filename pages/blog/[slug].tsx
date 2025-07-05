import Head from 'next/head';
import Footer from '../../components/Footer';
import { getPostData, getSortedPostsData } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postData = await getPostData(slug);
  return {
    props: {
      postData,
    },
  };
};

interface BlogPostProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

export default function BlogPost({ postData }: BlogPostProps) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main className="w-full max-w-3xl flex-grow p-4">
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <p className="text-gray-500 mb-6">{postData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
      <Footer />
    </div>
  );
}
