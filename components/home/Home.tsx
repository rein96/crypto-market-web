import React from 'react';

import MobileCryptoMarket from './MobileCryptoMarket';
import DesktopCryptoMarket from './DesktopCryptoMarket';

const Home = () => {
  return (
    <div id='homepage'>
      <MobileCryptoMarket />
      <DesktopCryptoMarket />
    </div>
  );
};

export default Home;
