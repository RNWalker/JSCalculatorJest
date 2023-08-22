const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000;
    actual = sum(400, 600)
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -1000;
    actual = sum(-400, -600)
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 0;
    actual = sum(0, 0)
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(8, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 1000;
    actual = subtract(1600, 600)
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -1000;
    actual = subtract(-1400, -400)
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 0;
    actual = subtract(0, 0)
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 5;
    actual = multiply(1, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 250000;
    actual = multiply(500, 500)
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 1000;
    actual = multiply(-10, -100)
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(0, 0)
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 5;
    actual = divide(5, 1);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 2000;
    actual = divide(1000000, 500)
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 1000;
    actual = divide(-1000, -1)
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = NaN;
    actual = divide(0, 0)
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expected = 1;
    actual = modulus(3, 2);
    expect(actual).toBe(expected);
  });

  test('can modulus two large positive numbers', () => { 
    expected = 4;
    actual = modulus(1000000, 501)
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => {
    expected = -1;
    actual = modulus(-3, -2)
    expect(actual).toBe(expected);
  });

  test('can modulus zero', () => {
    expected = NaN;
    actual = modulus(0, 0)
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can even a small positive integer', () => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  });

  test('can even large positive number', () => { 
    expected = true;
    actual = even(1000000)
    expect(actual).toBe(expected);
  });

  test('can even negative numbers', () => {
    expected = true;
    actual = even(-2)
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can odd a small positive integer', () => {
    expected = true;
    actual = odd(3);
    expect(actual).toBe(expected);
  });

  test('can odd large positive number', () => { 
    expected = true;
    actual = odd(1000001)
    expect(actual).toBe(expected);
  });

  test('can odd negative numbers', () => {
    expected = true;
    actual = odd(-3)
    expect(actual).toBe(expected);
  });


});
