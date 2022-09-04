import { SvgInline } from 'components/atoms';
import { PROXY_URL } from 'constants/constants';
import { usePriceChanges, useRenderPercentage } from 'hooks';
import React from 'react';
import { CryptocurrencyInterface, PriceDataInterface } from 'types';
import { rupiahFormatter } from 'utils';

interface DesktopCurrencyItemProps {
  currency: CryptocurrencyInterface;
}

const DesktopCurrencyItem: React.FC<DesktopCurrencyItemProps> = ({
  currency,
}) => {
  const { data: priceChangesResponseData } = usePriceChanges();
  const { renderPercentage } = useRenderPercentage();
  const sortedPricePairData = priceChangesResponseData?.sortedPricePairData;

  /** Remove IDR Token (first index) or sortedPricePairData is not available yet*/
  const preventRendering =
    currency?.currencySymbol === 'Rp' || !sortedPricePairData;

  if (preventRendering) return;

  /** symbol in lowercase | ex: 'btc' */
  const symbol = currency.currencySymbol.toLowerCase();

  const priceDetail: PriceDataInterface = sortedPricePairData?.[symbol];

  return (
    <tr
      key={currency.currencySymbol}
      className='hover:bg-gray-100 dark:hover:bg-gray-600 hover:cursor-pointer'
    >
      <td className='lg:py-4 lg:px-6 border-b border-gray-200 text-custom-grey text-sm border-l'>
        <div className='text-custom-grey whitespace-no-wrap p-5'>
          <div className='flex'>
            <SvgInline url={currency.logo} color={currency.color} size={32} />
            <div
              className='flex flex-1 items-center'
              style={{ flexFlow: 'row wrap' }}
            >
              <p className='flex-1 font-semibold text-custom-black ml-4'>
                {currency.name}
              </p>
              <p className='text-custom-grey mx-4' style={{ width: 56 }}>
                {currency.currencySymbol}
              </p>
            </div>
          </div>
        </div>
      </td>
      {/* Price column */}
      {/* Harga */}
      <td className='lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
        <p className='text-custom-black'>
          {rupiahFormatter(Number(priceDetail.latestPrice))}
        </p>
      </td>
      {/* 24 JAM */}
      <td className='lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
        {renderPercentage(priceDetail?.day)}
      </td>
      {/* 1 MGG */}
      <td className='lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
        {renderPercentage(priceDetail?.week)}
      </td>
      {/* 1 BLN */}
      <td className='lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold'>
        {renderPercentage(priceDetail?.month)}
      </td>
      {/* 1 THN */}
      <td className='lg:px-6 py-2 px-4 border-b border-gray-20 text-sm font-semibold border-r'>
        {renderPercentage(priceDetail?.year)}
      </td>
    </tr>
  );
};

export default DesktopCurrencyItem;
