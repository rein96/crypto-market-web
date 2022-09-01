import React from 'react';
import { SvgInline } from 'components/SvgInline';
import { tableHeaderContent } from 'constants/constants';
import { useCurrencyList, usePriceChanges, useRenderPercentage } from 'hooks';
import { PriceDataInterface } from 'types';
import MobileHomeContent from './MobileHomeContent';
import { rupiahFormatter } from 'utils';

const Home = () => {
  const { data: priceChangesResponseData } = usePriceChanges();
  const { data: currencyListResponseData } = useCurrencyList();
  const { renderPercentage } = useRenderPercentage();

  const currencyList = currencyListResponseData?.payload;

  const sortedPricePairData = priceChangesResponseData?.sortedPricePairData;

  return (
    <>
      <MobileHomeContent />
      <div
        id='desktop-home-content'
        className='container m-auto p-4 dark:bg-white px-10'
      >
        <table className='w-full leading-normal '>
          <thead className='text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 hover:cursor-pointer uppercase border-b-2 border-gray-200'>
            <tr className='border-b border-gray rounded-md'>
              {tableHeaderContent.map((text) => {
                return (
                  <th
                    key={text.id}
                    scope='col'
                    className='text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 text-left text-xs font-semibold text-custom-grey uppercase tracking-wider'
                  >
                    {text.content}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {currencyList &&
              sortedPricePairData &&
              currencyList?.map((currency) => {
                // remove IDR token (first index)
                if (currency?.currencySymbol === 'Rp') return;

                /** symbol in lowercase | ex: 'btc' */
                const symbol = currency.currencySymbol.toLowerCase();

                const priceDetail: PriceDataInterface =
                  sortedPricePairData?.[symbol];

                return (
                  <tr
                    key={currency.currencySymbol}
                    className='hover:bg-gray-100 hover:cursor-pointer'
                  >
                    <td className='py-4 px-6 border-b border-gray-200 text-custom-grey text-sm '>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10'></div>
                        <div className='ml-3'>
                          <div className='text-custom-grey whitespace-no-wrap'>
                            <SvgInline
                              url={currency.logo}
                              color={currency.color}
                              size={32}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Name */}
                    <td className='py-4 px-6 border-b border-gray-200 text-custom-black text-sm '>
                      <p>{currency.name}</p>
                    </td>
                    {/* Symbol */}
                    <td className='py-4 px-6 border-b border-gray-200 text-custom-grey text-sm '>
                      <p>{currency.currencySymbol}</p>
                    </td>
                    {/* Price column */}
                    {/* Harga */}
                    <td className='py-4 px-6 border-b border-gray-20 text-sm '>
                      <p className='text-custom-black'>
                        {rupiahFormatter(Number(priceDetail.latestPrice))}
                      </p>
                    </td>
                    {/* 24 JAM */}
                    <td className='py-4 px-6 border-b border-gray-20 text-sm '>
                      {renderPercentage(priceDetail?.day)}
                    </td>
                    {/* 1 MGG */}
                    <td className='py-4 px-6 border-b border-gray-20 text-sm '>
                      {renderPercentage(priceDetail?.week)}
                    </td>
                    {/* 1 BLN */}
                    <td className='py-4 px-6 border-b border-gray-20 text-sm '>
                      {renderPercentage(priceDetail?.month)}
                    </td>
                    {/* 1 THN */}
                    <td className='py-4 px-6 border-b border-gray-20 text-sm '>
                      {renderPercentage(priceDetail?.year)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
