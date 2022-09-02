import { TableHeaderInterface } from 'types';

const priceHeaderContent: TableHeaderInterface[] = [
  {
    id: 'day',
    content: '24 JAM',
  },
  {
    id: 'week',
    content: '1 MGG',
  },
  {
    id: 'month',
    content: '1 BLN',
  },
  {
    id: 'year',
    content: '1 THN',
  },
];

const tableHeaderContent: TableHeaderInterface[] = [
  {
    id: 'name',
    content: 'CRYPTO',
  },
  {
    id: 'latestPrice',
    content: 'HARGA',
  },
  ...priceHeaderContent,
];

const UPDATE_PRICE_INTERVAL = 5_000; // 5 second

const UPDATE_CURRENCY_INTERVAL = 20_000; // 20 second

/** To eliminate CORS issue */
const PROXY_URL = 'https://thingproxy.freeboard.io/fetch/';

export {
  tableHeaderContent,
  priceHeaderContent,
  UPDATE_CURRENCY_INTERVAL,
  UPDATE_PRICE_INTERVAL,
  PROXY_URL,
};
