import React from 'react';
import { PROXY_URL, tableHeaderContent } from 'constants/constants';
import { useCurrencyList, usePriceChanges, useRenderPercentage } from 'hooks';
import { SvgInline } from 'components/SvgInline';
import { PriceDataInterface } from 'types';
import { rupiahFormatter } from 'utils';
import classNames from 'classnames';

const DesktopCryptoMarket = () => {
  const { data: priceChangesResponseData } = usePriceChanges();
  const { data: currencyListResponseData } = useCurrencyList();
  const { renderPercentage } = useRenderPercentage();

  const currencyList = currencyListResponseData?.payload;

  const sortedPricePairData = priceChangesResponseData?.sortedPricePairData;

  const lastIndexOfTableHeaderContent: number = tableHeaderContent.length - 1;
  return (
    <div
      id='desktop-home-content'
      className='container m-auto p-4 dark:bg-white px-10'
    >
      <table className='w-full leading-normal table-auto'>
        <thead className='text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 hover:cursor-pointer uppercase border-b-2 border-gray-200'>
          <tr className='border-b border-gray rounded-md'>
            {tableHeaderContent.map((text, index) => {
              return (
                <th
                  key={text.id}
                  scope='col'
                  className={classNames(
                    'text-gray-dark border-gray border-t-2 border-gray-200 py-3 px-3 text-left text-xs font-semibold text-custom-grey uppercase tracking-wider rounded-t-lg',
                    {
                      'border-l first-td': index === 0,
                      'border-r': index === lastIndexOfTableHeaderContent,
                    }
                  )}
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
                  <td className='lg:py-4 lg:px-6 border-b border-gray-200 text-custom-grey text-sm border-l'>
                    <div className='text-custom-grey whitespace-no-wrap p-5'>
                      <div className='flex'>
                        <SvgInline
                          url={`${PROXY_URL}${currency.logo}`}
                          color={currency.color}
                          size={32}
                        />
                        <div
                          className='flex flex-1 items-center'
                          style={{ flexFlow: 'row wrap' }}
                        >
                          <p className='flex-1 font-semibold text-custom-black ml-4'>
                            {currency.name}
                          </p>
                          <p
                            className='text-custom-grey mx-4'
                            style={{ width: 56 }}
                          >
                            {currency.currencySymbol}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* Price column */}
                  {/* Harga */}
                  <td className='lg:py-4 lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
                    <p className='text-custom-black'>
                      {rupiahFormatter(Number(priceDetail.latestPrice))}
                    </p>
                  </td>
                  {/* 24 JAM */}
                  <td className='lg:py-4 lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
                    {renderPercentage(priceDetail?.day)}
                  </td>
                  {/* 1 MGG */}
                  <td className='lg:py-4 lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
                    {renderPercentage(priceDetail?.week)}
                  </td>
                  {/* 1 BLN */}
                  <td className='lg:py-4 lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
                    {renderPercentage(priceDetail?.month)}
                  </td>
                  {/* 1 THN */}
                  <td className='lg:py-4 lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold border-r'>
                    {renderPercentage(priceDetail?.year)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DesktopCryptoMarket;
