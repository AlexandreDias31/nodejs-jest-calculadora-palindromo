const calculadora = require('./calculadora');

describe('Função Calculadora', () => {
  test('Soma de 2 + 3 deve retornar 5', () => {
    expect(calculadora(2, 3, 'soma')).toBe(5);
  });

  test('Subtração de 5 - 3 deve retornar 2', () => {
    expect(calculadora(5, 3, 'subtracao')).toBe(2);
  });

  test('Multiplicação de 3 * 4 deve retornar 12', () => {
    expect(calculadora(3, 4, 'multiplicacao')).toBe(12);
  });

  test('Divisão de 10 / 2 deve retornar 5', () => {
    expect(calculadora(10, 2, 'divisao')).toBe(5);
  });

  test('Divisão por zero deve lançar erro', () => {
    expect(() => calculadora(10, 0, 'divisao')).toThrow('Divisão por zero não permitida');
  });
});
