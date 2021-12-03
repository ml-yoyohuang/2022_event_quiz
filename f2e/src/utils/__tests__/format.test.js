
import { numberWithCommas } from '../format';

describe('format.js', () => {
  test('numberWithCommas', () => {
    expect(numberWithCommas(123)).toBe('123');
    expect(numberWithCommas()).toBe('');
    expect(numberWithCommas(1234)).toBe('1,234');
    expect(numberWithCommas(123456789)).toBe('123,456,789');
    expect(numberWithCommas(1234.123)).toBe('1,234.123');
  });
});
