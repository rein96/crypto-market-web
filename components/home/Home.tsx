import React from 'react';
import DesktopCryptoMarket from 'components/DesktopCryptoMarket';
import { MobileCurrencyList } from 'components/organisms';

const Home = () => {
  return (
    <div id='homepage'>
      <MobileCurrencyList />
      <DesktopCryptoMarket />
    </div>
  );
};

export default Home;
