import React, { useState } from 'react';
import { useCurrencyList } from 'hooks';
import { priceHeaderContent } from 'constants/constants';
import { MobileCurrencyList } from 'components/molecules';

/** Render mobile content */
const MobileHomeContent: React.FC = () => {
  /** Ex: '24 JAM' or '1 BLN' */
  const [selectedPriceTime, setSelectedPriceTime] = useState(
    priceHeaderContent[0].content
  );

  const { data: currencyListResponseData } = useCurrencyList();

  const currencyList = currencyListResponseData?.payload;

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceTime(event.target.value);
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
            currencyList?.map((currency) => (
              <MobileCurrencyList
                key={currency.currencySymbol}
                currency={currency}
                selectedPriceTime={selectedPriceTime}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHomeContent;
