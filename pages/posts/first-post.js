import Head from 'next/head';
import Link from 'next/link';

import Image from '../../components/Image';
import Layout from '../../components/Layout';

const FirstPost = () => (
  <Layout>
    <Head>
      <title>Sierra's First Post</title>
    </Head>
    <h1>First Post</h1>
    <code>blah blah blah</code>
  </Layout>
);

export default FirstPost;
