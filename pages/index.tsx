import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeTemplate } from 'components/templates';
import endpoints from 'networks/endpoints';
import { CryptocurrencyInterface } from 'types';

const HomePage: NextPage<{ currencyList: CryptocurrencyInterface[] }> = ({
  currencyList,
}) => {
  return (
    <div id='homepage'>
      <Head>
        <title>Crypto Market</title>
        <meta name='description' content='Crypto Market' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeTemplate currencyList={currencyList} />
    </div>
  );
};

/**
 * Fetching Data in Server Side
 */
export const getStaticProps = async () => {
  const endpoint = endpoints.walletSupportedCurrencies;

  try {
    const res = await fetch(`${endpoint}`);
    const data = await res.json();
    const payload: CryptocurrencyInterface[] = data.payload;

    /**
     * Pass data to the page via props
     */
    return {
      props: { currencyList: payload },
      revalidate: 60 * 60 * 1, // 1 hours
    };
  } catch (error) {
    return {
      props: {
        currencyList: [],
      },
      revalidate: 20, // 20 second
    };
  }
};

export default HomePage;
