import React from 'react';
import { DesktopCurrencyList, MobileCurrencyList } from 'components/organisms';

const HomeTemplate = () => {
  return (
    <div id='homepage'>
      <MobileCurrencyList />
      <DesktopCurrencyList />
    </div>
  );
};

export default HomeTemplate;
