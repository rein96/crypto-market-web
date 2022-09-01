import { useQuery } from '@tanstack/react-query';
import endpoints from 'networks/endpoints';
import { PriceChangesResponseInterface } from 'types';

const fetchPriceChanges = async () => {
  const URL = endpoints.tradePriceChanges;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Fetching Error');
  }
  const responseJson = await response.json();
  const pricePairList = responseJson?.payload;

  /**
   * Grouping into symbol object
   * pattern: { "BTC": { pair, latestPrice, ... } }
   *  */
  const groupingObject = {};
  pricePairList?.forEach(function (priceData) {
    /** Ex: from 'btc/idr' to 'btc' */
    const symbol = priceData.pair.split('/')?.[0];
    return (groupingObject[symbol] = priceData);
  });

  // returning the responseJson + sortedPricePairData
  return { ...responseJson, sortedPricePairData: groupingObject };
};

/** Get list of price changes from trade/price-changes */
const usePriceChanges = () => {
  return useQuery<PriceChangesResponseInterface>(
    [endpoints.tradePriceChanges],
    () => fetchPriceChanges()
  );
};

export { usePriceChanges, fetchPriceChanges };
