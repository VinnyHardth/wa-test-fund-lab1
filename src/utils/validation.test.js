const { firstName, verifyStockAvailability, calculateTotalPrice } = require('./validations');

describe('firstName', () => {
  it('returns the first name when a full name is provided', () => {
    expect(firstName('John Doe')).toBe('John');
  });

  it('returns the full name when only one name is provided', () => {
    expect(firstName('John')).toBe('John');
  });

  it('returns the full name when an empty string is provided', () => {
    expect(firstName('')).toBe('');
  });
});


describe('verifyStockAvailability', () => {
  it('returns true if the product type is available in stock', () => {
    expect(verifyStockAvailability('laptop', 1)).toBe(true);
  });

  it('returns false if the product type exceeds the available stock', () => {
    expect(verifyStockAvailability('smartphone', 21)).toBe(false);
  });

  it('returns false if the product type is not available in stock', () => {
    expect(verifyStockAvailability('book', 1)).toBe(false);
  });

});


describe('calculateTotalPrice', () => {
  it('returns the total price of an array of products', () => {
    const products = [
      { name: 'Product 1', price: 10, quantity: 2 },
      { name: 'Product 2', price: 15, quantity: 2 },
      { name: 'Product 3', price: 20, quantity: 1 }
    ];
    expect(calculateTotalPrice(products)).toBe(10*2 + 15*2 + 20*1); // 70
  });

  it('returns 0 if the products array is empty', () => {
    expect(calculateTotalPrice([])).toBe(0);
  });
});