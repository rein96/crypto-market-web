import { SvgInline } from 'components/SvgInline';
import React, { useMemo } from 'react';
import { tableHeaderContent } from 'constants/constants';
import { useCurrencyList, usePriceChanges } from 'hooks';
import { PriceDataInterface } from 'types';

const Home = () => {
  const { data: priceChangesResponseData } = usePriceChanges();
  const { data: currencyListResponseData } = useCurrencyList();

  const pricePairList = priceChangesResponseData?.payload;

  const currencyList = currencyListResponseData?.payload;

  const sortedPricePairData = useMemo(() => {
    const temporaryObject = {};
    pricePairList?.forEach(function (priceData) {
      /** Ex: from 'btc/idr' to 'btc' */
      const symbol = priceData.pair.split('/')?.[0];
      return (temporaryObject[symbol] = priceData);
    });

    return temporaryObject;
  }, [pricePairList]);

  return (
    <div className='container m-auto p-4 dark:bg-white'>
      <table className='w-full leading-normal '>
        <thead className='text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 bg-gray-100 hover:cursor-pointer uppercase border-b-2 border-gray-200'>
          <tr className='border-b border-gray'>
            {tableHeaderContent.map((text) => {
              return (
                <th
                  key={text.id}
                  scope='col'
                  className='text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                >
                  {text.content}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currencyList?.map((currency) => {
            // remove IDR token (first index)
            if (currency?.currencySymbol === 'Rp') return;

            /** symbol in lowercase | ex: 'btc' */
            const symbol = currency.currencySymbol.toLowerCase();

            const priceDetail: PriceDataInterface = sortedPricePairData[symbol];

            return (
              <tr
                key={currency.currencySymbol}
                className='hover:bg-gray-100 hover:cursor-pointer'
              >
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0 h-10 w-10'></div>
                    <div className='ml-3'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        <SvgInline
                          url={currency.logo}
                          color={currency.color}
                          size={32}
                        />
                      </p>
                    </div>
                  </div>
                </td>
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{currency.name}</span>
                </td>
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{currency.currencySymbol}</span>
                </td>
                {/* Price column */}
                {/* Harga */}
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{priceDetail?.latestPrice}</span>
                </td>
                {/* 24 JAM */}
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{priceDetail?.day}</span>
                </td>
                {/* 1 MGG */}
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{priceDetail?.week}</span>
                </td>
                {/* 1 BLN */}
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{priceDetail?.month}</span>
                </td>
                {/* 1 THN */}
                <td className='py-4 px-6 border-b border-gray-200 text-gray-900 text-sm '>
                  <span>{priceDetail?.year}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
