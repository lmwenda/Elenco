import { AppProps } from 'next/app';
import "../styles/globals.css";
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Elenco</title>
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
