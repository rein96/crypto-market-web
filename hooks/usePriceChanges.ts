import { useQuery } from '@tanstack/react-query';
import { UPDATE_PRICE_INTERVAL } from 'constants/constants';
import endpoints from 'networks/endpoints';
import { useCallback } from 'react';
import {
  PriceDataInterface,
  SortedPricePairInterface,
  ResponseInterface,
} from 'types';

const fetchPriceChanges = async () => {
  const URL = endpoints.tradePriceChanges;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Fetching Error');
  }
  const responseJson: ResponseInterface<PriceDataInterface[]> =
    await response.json();

  return responseJson;
};

/** Get list of price changes from trade/price-changes */
const usePriceChanges = () => {
  return useQuery([endpoints.tradePriceChanges], () => fetchPriceChanges(), {
    staleTime: UPDATE_PRICE_INTERVAL, // ms
    refetchInterval: UPDATE_PRICE_INTERVAL,
    /**
     * Memoize the transformed data
     * @see https://tkdodo.eu/blog/react-query-data-transformations
     */
    select: useCallback(({ payload }) => {
      const pricePairList: PriceDataInterface[] = payload;

      /**
       * Grouping into symbol object
       * pattern: { "BTC": { pair, latestPrice, ... } }
       *  */
      const groupingObject: SortedPricePairInterface = {};
      pricePairList?.forEach(function (priceData) {
        /** Ex: from 'btc/idr' to 'btc' */
        const symbol = priceData.pair.split('/')?.[0];
        return (groupingObject[symbol] = priceData);
      });

      return groupingObject;
    }, []),
  });
};

export { usePriceChanges, fetchPriceChanges };
