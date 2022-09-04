import { PROXY_URL } from 'constants/constants';

/** Ex: 14940 -> output: Rp 14.940 */
const rupiahFormatter = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 10,
  }).format(number);
};

/**
 * Production = without PROXY_URL
 * Development = with PROXY_URL
 */
const getSvgUrl = (logoURL: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `${PROXY_URL}${logoURL}`;
  }

  return logoURL;
};

export { rupiahFormatter, getSvgUrl };
