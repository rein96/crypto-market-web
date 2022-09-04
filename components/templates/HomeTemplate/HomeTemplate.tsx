import React from 'react';
import {
  CurrencyCategoryList,
  DesktopCurrencyList,
  MobileCurrencyList,
  HomeHeader,
} from 'components/organisms';
import { CryptocurrencyInterface } from 'types';

const HomeTemplate: React.FC<{
  currencyList: CryptocurrencyInterface[];
}> = ({ currencyList }) => {
  return (
    <div id='homepage' className='m-auto p-0 px-0 lg:p-4 lg:px-10'>
      <HomeHeader />
      <CurrencyCategoryList />
      <MobileCurrencyList />
      <DesktopCurrencyList currencyList={currencyList} />
    </div>
  );
};

export default HomeTemplate;
