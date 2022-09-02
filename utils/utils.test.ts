import { rupiahFormatter } from './utils';

test.only('format price in string to Rupiah format', () => {
  /** Refernce: @see https://stackoverflow.com/questions/66409161/how-to-tell-jest-that-spaces-are-in-fact-spaces */
  expect(rupiahFormatter(15000)).toBe('Rp\xa015.000');
});

export {};
