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
    id: 'logo',
    content: '',
  },
  {
    id: 'name',
    content: 'CRYPTO',
  },
  {
    id: 'currencySymbol',
    content: '',
  },
  {
    id: 'latestPrice',
    content: 'HARGA',
  },
  ...priceHeaderContent,
];

export { tableHeaderContent, priceHeaderContent };
