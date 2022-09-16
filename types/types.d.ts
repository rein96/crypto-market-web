export interface PriceDataInterface {
  pair: string;
  latestPrice: string;
  day: null | string;
  week: null | string;
  month: null | string;
  year: null | string;
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

export interface SortedPricePairInterface {
  [key: string]: PriceDataInterface;
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

/**
 * T is required generic
 * U is optional generic
 * */
export interface ResponseInterface<T> {
  code: string;
  message: string;
  payload: T;
}
export interface TableHeaderInterface {
  id: string;
  content: string;
}

export interface ArrowInterface {
  color?: string;
}

export interface CategoryListInterface {
  name: string;
}
