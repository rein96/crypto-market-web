import React, { useState } from 'react';
import { priceHeaderContent } from 'constants/constants';
import { MobileCurrencyItem } from 'components/molecules';
import { CryptocurrencyInterface } from 'types';

/** Render mobile content */
const MobileCurrencyList: React.FC<{
  currencyList: CryptocurrencyInterface[];
}> = ({ currencyList }) => {
  /** Ex: '24 JAM' or '1 BLN' */
  const [selectedPriceTime, setSelectedPriceTime] = useState(
    priceHeaderContent[0].content
  );

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceTime(event.target.value);
  };

  return (
    <div id='mobile-market-content'>
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
              <MobileCurrencyItem
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

export default MobileCurrencyList;
