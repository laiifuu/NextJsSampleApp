import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Jane. I'm a software engineer and a translator (English/French). 
        You can contact me on <a href="twitter.com" target="_blank">Twitter</a>.</p>
        <p>
          (This is a sample website - you’ll be building a site like this following{' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}