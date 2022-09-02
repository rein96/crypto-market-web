import { useQuery } from '@tanstack/react-query';
import { UPDATE_CURRENCY_INTERVAL } from 'constants/constants';
import endpoints from 'networks/endpoints';
import { ResponseInterface, CryptocurrencyInterface } from 'types';

const fetchWalletSupportedCurrencies = async () => {
  const URL = endpoints.walletSupportedCurrencies;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error('Fetching Error');
  }
  return await response.json();
};

/** Get list of currency list from wallet/supportedCurrencies */
const useCurrencyList = () => {
  return useQuery<ResponseInterface<CryptocurrencyInterface[]>>(
    [endpoints.walletSupportedCurrencies],
    () => fetchWalletSupportedCurrencies(),
    {
      staleTime: UPDATE_CURRENCY_INTERVAL,
    }
  );
};

export { useCurrencyList, fetchWalletSupportedCurrencies };
