import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeTemplate } from 'components/templates';

const HomePage: NextPage = () => {
  return (
    <div id='homepage'>
      <Head>
        <title>Crypto Market</title>
        <meta name='description' content='Crypto Market' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeTemplate />
    </div>
  );
};

export default HomePage;
