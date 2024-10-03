const ePalindromo = require('./palindromo');

describe('Função Palíndromo', () => {
  test('"arara" deve ser identificado como palíndromo', () => {
    expect(ePalindromo('arara')).toBe(true);
  });

  test('"casa" não deve ser identificado como palíndromo', () => {
    expect(ePalindromo('casa')).toBe(false);
  });

  test('String vazia deve ser considerado palíndromo', () => {
    expect(ePalindromo('')).toBe(true);
  });

  test('"A man, a plan, a canal, Panama" deve ser identificado como palíndromo', () => {
    expect(ePalindromo('A man, a plan, a canal, Panama')).toBe(true);
  });
});
