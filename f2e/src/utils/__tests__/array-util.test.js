
import { uniq } from '../array-util';

describe('arrayUtil.js', () => {
  test('uniq', () => {
    expect(uniq([0, 1, 2])).toEqual([0, 1, 2]);
    expect(uniq([0, 1, 2, 2])).toEqual([0, 1, 2]);
    expect(uniq([0, 1, 2, 1])).toEqual([0, 1, 2]);
    expect(uniq([0, 1, 2, 1, 0])).toEqual([0, 1, 2]);
  });
});
