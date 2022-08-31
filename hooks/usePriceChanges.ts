import { useQuery } from '@tanstack/react-query';
import endpoints from 'networks/endpoints';
import { ResponseInterface, PriceData } from 'types/types';

const fetchPriceChanges = async () => {
  const URL = endpoints.tradePriceChanges;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Fetching Error');
  }
  return await response.json();
};

/** Get list of price changes from trade/price-changes */
const usePriceChanges = () => {
  return useQuery<ResponseInterface<PriceData[]>>(
    [endpoints.tradePriceChanges],
    () => fetchPriceChanges()
  );
};

export { usePriceChanges, fetchPriceChanges };
