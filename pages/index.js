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
        <p>Hi I'm Chase! I am a Fullstack Engineer with a passion for TypeScript, Web Design, and Problem Solving. I am looking forward to the next step in my transition from the service industry into tech. Most recently I have been working as an intern for a Software company developing an app for High School students. Workign on complex features like a Rich Text Editor, Data Visualization, and custon React components has been an increduble and irreplaceable opportunity. I am certain that my experience as a cook and server, which are enviornments that only function correctly when working together, will make me a valuable asset to my future team as an engineer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}