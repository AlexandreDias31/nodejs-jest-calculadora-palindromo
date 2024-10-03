function ePalindromo(str) {
    const limpo = str.replace(/[\W_]/g, '').toLowerCase();
    return limpo === limpo.split('').reverse().join('');
  }
  
  module.exports = ePalindromo;
  