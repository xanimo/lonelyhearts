import { calcAge } from './Age';

test('converts birthday to age', () => {
  expect(calcAge("1964-12-10 09:01:35")).toBe(53);
});