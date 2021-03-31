import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <h1 className="title">Hey, I'm Sierra. I do some stuff and want to learn Next.js because it seems like magic.</h1>
      <p>
        (This is a playground website - built from the{' '}
        <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
      </p>
      <p>
        Read <Link href="/posts/first-post">my first article!</Link>
      </p>
    </section>
    <section className={utilStyles.grid}>
      <a href="https://nextjs.org/docs" className={utilStyles.card}>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
      <a href="https://nextjs.org/learn" className={utilStyles.card}>
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
      <a href="https://github.com/vercel/next.js/tree/master/examples" className={utilStyles.card}>
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>
      <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={utilStyles.card}>
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </section>
  </Layout>
);

export default Home;
