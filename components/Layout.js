
import Head from 'next/head';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';
import styles from './Layout.module.css';
import Image from './Image';

const name = 'Sierra Battan'
export const siteTitle = `Sierra's Next Playground`;

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/s.ico" />
      <meta
        name="description"
        content="Sierra learns how to use Next.js"
      />
      <meta
        property="og:image"
        content="/s.png"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header className={styles.header}>
      {home
      ? (
        <>
          <Image
            isPriority
            className={utilStyles.borderCircle}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      )
      : (
        <>
          <Link href="/">
            <a>
              <Image
                isPriority
                className={utilStyles.borderCircle}
                height={108}
                width={108}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
    <main>{children}</main>
    <footer>
      <a
        href="https://sierraismy.name"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/s.png" alt="Sierra Logo" className="logo" />
      </a>
    </footer>
  </div>
);

export default Layout;
