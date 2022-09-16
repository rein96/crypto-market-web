import { SvgInline } from 'components/atoms';
import { priceHeaderContent } from 'constants/constants';
import { usePriceChanges, useRenderPercentage } from 'hooks';
import React from 'react';
import { CryptocurrencyInterface, PriceDataInterface } from 'types';
import { getSvgUrl, rupiahFormatter } from 'utils';

interface MobileCurrencyItemPropsInterface {
  currency: CryptocurrencyInterface;
  selectedPriceTime: string;
}

const MobileCurrencyItem: React.FC<MobileCurrencyItemPropsInterface> = ({
  currency,
  selectedPriceTime,
}) => {
  const { data: sortedPricePairData } = usePriceChanges();
  const { renderPercentage } = useRenderPercentage();

  /** Remove IDR Token (first index) or sortedPricePairData is not available yet*/
  const preventRendering =
    currency?.currencySymbol === 'Rp' || !sortedPricePairData;

  if (preventRendering) return;

  /** symbol in lowercase | ex: 'btc' */
  const symbol = currency.currencySymbol.toLowerCase();

  const priceDetail: PriceDataInterface = sortedPricePairData?.[symbol];

  const renderPercentageOnMobile = (priceDetail: PriceDataInterface) => {
    const selectedTimeFrameObject = priceHeaderContent.find((price) => {
      return price.content === selectedPriceTime;
    });

    return renderPercentage(priceDetail[selectedTimeFrameObject.id]);
  };

  return (
    <div
      key={currency.currencySymbol}
      className='mobile-body-list p-4 flex items-center border-t dark:border-t-0'
    >
      <SvgInline
        url={getSvgUrl(currency.logo)}
        color={currency.color}
        size={32}
      />

      {/* Content container */}
      <div className='mobile-body-list-content pl-6 flex-1 flex flex-row'>
        {/* Left text content */}
        <div className='mobile-body-list-content-left flex-1'>
          <p className='text-base font-semibold'>{currency.name}</p>
          <p className='text-custom-grey text-sm'>{currency.currencySymbol}</p>
        </div>

        {/* Right text content */}
        <div className=''>
          <p className='text-custom-black font-semibold'>
            {rupiahFormatter(Number(priceDetail.latestPrice))}
          </p>
          {renderPercentageOnMobile(priceDetail)}
        </div>
      </div>
    </div>
  );
};

export default MobileCurrencyItem;
