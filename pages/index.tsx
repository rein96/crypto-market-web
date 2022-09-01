import { Home } from 'components/home';
import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <div className='dark:bg-white'>
      <Head>
        <title>Crypto Market</title>
        <meta name='description' content='Crypto Market' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
