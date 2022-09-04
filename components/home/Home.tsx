import React from 'react';
import { DesktopCurrencyList, MobileCurrencyList } from 'components/organisms';

const Home = () => {
  return (
    <div id='homepage'>
      <MobileCurrencyList />
      <DesktopCurrencyList />
    </div>
  );
};

export default Home;
