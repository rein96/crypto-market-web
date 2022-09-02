import React, { useState } from 'react';
import { SvgInline } from 'components/SvgInline';
import { useCurrencyList, usePriceChanges, useRenderPercentage } from 'hooks';
import { PriceDataInterface } from 'types';
import { rupiahFormatter } from 'utils';
import { priceHeaderContent, PROXY_URL } from 'constants/constants';

/** Render mobile content */
const MobileHomeContent: React.FC = () => {
  /** Ex: '24 JAM' or '1 BLN' */
  const [selectedPriceTime, setSelectedPriceTime] = useState(
    priceHeaderContent[0].content
  );

  const { data: currencyListResponseData } = useCurrencyList();
  const { data: priceChangesResponseData } = usePriceChanges();
  const { renderPercentage } = useRenderPercentage();

  const sortedPricePairData = priceChangesResponseData?.sortedPricePairData;

  const currencyList = currencyListResponseData?.payload;

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceTime(event.target.value);
  };

  const renderPercentageOnMobile = (priceDetail: PriceDataInterface) => {
    const selectedTimeFrameObject = priceHeaderContent.find((price) => {
      return price.content === selectedPriceTime;
    });

    return renderPercentage(priceDetail[selectedTimeFrameObject.id]);
  };

  return (
    <div id='mobile-home-content'>
      {/* Crypto 'Table' */}
      <div className='mobile-home-container'>
        {/* Header */}
        <div className='mobile-header flex p-4 items-center'>
          <div className='mobile-header-left-side font-bold text-sm text-custom-grey flex-1'>
            CRYPTO
          </div>
          <div className='mobile-header-right-side pl-4'>
            <select
              className='border rounded-md'
              value={selectedPriceTime}
              onChange={handleChangeSelect}
            >
              {priceHeaderContent.map((price) => {
                return (
                  <option key={price.id} value={price.content}>
                    {price.content}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* Body */}
        <div className='mobile-body-content'>
          {/* Crypto list */}
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
                <div
                  key={currency.currencySymbol}
                  className='mobile-body-list p-4 flex items-center border-t'
                >
                  <SvgInline
                    url={`${PROXY_URL}${currency.logo}`}
                    color={currency.color}
                    size={32}
                  />

                  {/* Content container */}
                  <div className='mobile-body-list-content pl-6 flex-1 flex flex-row'>
                    {/* Left text content */}
                    <div className='mobile-body-list-content-left flex-1'>
                      <p className='text-base font-semibold'>{currency.name}</p>
                      <p className='text-custom-grey text-sm'>
                        {currency.currencySymbol}
                      </p>
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
            })}
        </div>
      </div>
    </div>
  );
};

export default MobileHomeContent;
