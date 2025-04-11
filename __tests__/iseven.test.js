const isEven = require('../src/iseven.js');

test('returns true for even numbers', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(-4)).toBe(true);
});

test('returns false for odd numbers', () => {
  expect(isEven(1)).toBe(false);
  expect(isEven(-3)).toBe(false);
  expect(isEven(7)).toBe(false);
});

test('handles non-integer input gracefully (optional)', () => {
  expect(isEven(2.5)).toBe(false);
});
