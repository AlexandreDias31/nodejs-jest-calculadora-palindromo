function calculadora(a, b, operacao) {
    if (operacao === 'soma') return a + b;
    if (operacao === 'subtracao') return a - b;
    if (operacao === 'multiplicacao') return a * b;
    if (operacao === 'divisao') {
      if (b === 0) throw new Error('Divisão por zero não permitida');
      return a / b;
    }
    throw new Error('Operação inválida');
  }
  
  module.exports = calculadora;
  