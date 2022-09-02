import React from 'react';
import DesktopCryptoMarket from 'components/DesktopCryptoMarket';
import MobileCryptoMarket from 'components/MobileCryptoMarket';

const Home = () => {
  return (
    <div id='homepage'>
      <MobileCryptoMarket />
      <DesktopCryptoMarket />
    </div>
  );
};

export default Home;
