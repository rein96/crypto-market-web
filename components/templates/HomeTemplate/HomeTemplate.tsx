import React from 'react';
import {
  CurrencyCategoryList,
  DesktopCurrencyList,
  MobileCurrencyList,
} from 'components/organisms';

const HomeTemplate = () => {
  return (
    <div id='homepage' className='m-auto p-0 px-0 lg:p-4 lg:px-10'>
      <CurrencyCategoryList />
      <MobileCurrencyList />
      <DesktopCurrencyList />
    </div>
  );
};

export default HomeTemplate;
