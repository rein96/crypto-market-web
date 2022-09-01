/** Ex: 14940 -> output: Rp 14.940 */
const rupiahFormatter = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 10,
  }).format(number);
};

export { rupiahFormatter };
