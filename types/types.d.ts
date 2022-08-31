export interface PriceData {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export interface CryptocurrencyInterface {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: Date;
  wallets: WalletInterface[];
}

interface WalletInterface {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: Date;
  blockchainName: string;
  logo: string;
}

export interface ResponseInterface<T> {
  code: string;
  message: string;
  payload: T;
}
