const multiply = require('./math.js');

// SPECIAL TEST TO MAKE SURE JEST WORKS
test('base test', () => {
  expect(1 + 1).toBe(2);
});

// TESTS TO MAKE SURE OUR FUNCTION WORKS AS EXPECTED
test('multiply 1 * 1 to equal 1', () => {
  expect(multiply(1, 1)).toBe(1);
});

test('should be able to multiply positive integers', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('should be able to multiply decimals', () => {
  expect(multiply(.5, 10)).toBe(5);
});

test('should be able to multiply fractions', () => {
  expect(multiply(1/2, 20)).toBe(10);
});

test('should be able to multiply when one number is negative and one is positive', () => {
  expect(multiply(-5, 3)).toBe(-15);
});

test('if a parameter is not a valid number, return "invalid entry"', () => {
  expect(multiply('a', 2)).toBe('invalid entry');
});

test('if the first number is a string, convert it to a number', () => {
  expect(multiply("2", 6)).toBe(12);
});

test('if the second paramter is not passed in, return 0', () => {
  expect(multiply(6)).toBe(0);
});

test('should output 0 if no parameters are passed in', () => {
  expect(multiply()).toBe(0);
});

test('should output "invalid entry" if there is not a valid entry', () => {
  expect(multiply('a')).toBe('invalid entry')
});

test(`should work, I'm a bad dev`, () => {
  expect(multiply(5, 4)).toBe(200);
});