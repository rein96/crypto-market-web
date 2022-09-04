import React from 'react';
import { tableHeaderContent } from 'constants/constants';
import { useCurrencyList } from 'hooks';
import classNames from 'classnames';
import { DesktopCurrencyItem } from 'components/molecules';

const DesktopCryptoMarket = () => {
  const { data: currencyListResponseData } = useCurrencyList();

  const currencyList = currencyListResponseData?.payload;

  const lastIndexOfTableHeaderContent: number = tableHeaderContent.length - 1;
  return (
    <div id='desktop-home-content' className='container m-auto p-4 px-10'>
      <table className='w-full leading-normal table-auto'>
        <thead className='text-gray-600 text-xs font-semibold border-gray tracking-wider px-5 py-3 hover:cursor-pointer uppercase border-b-2 border-gray-200'>
          <tr className='border-b border-gray rounded-md'>
            {tableHeaderContent.map((text, index) => {
              return (
                <th
                  key={text.id}
                  scope='col'
                  className={classNames(
                    'text-gray-dark border-gray border-t-2 border-gray-200 py-3 px-3 text-xs font-semibold text-custom-grey uppercase tracking-wider rounded-t-lg',
                    {
                      'border-l first-td text-left': index === 0,
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
            currencyList?.map((currency) => (
              <DesktopCurrencyItem
                key={currency.currencySymbol}
                currency={currency}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesktopCryptoMarket;
