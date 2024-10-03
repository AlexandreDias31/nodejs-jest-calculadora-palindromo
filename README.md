# Node.js Calculadora e Palíndromo com Jest

## Descrição

Este projeto implementa duas funcionalidades principais:

- **Calculadora**: Realiza operações básicas como soma, subtração, multiplicação e divisão.
- **Verificação de Palíndromo**: Verifica se uma string é um palíndromo, ignorando maiúsculas, espaços e caracteres especiais.

O projeto usa Jest para realizar testes automatizados e gerar um relatório de cobertura de código.

## Instalação

Siga os passos abaixo para instalar e executar o projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/AlexandreDias31/nodejs-jest-calculadora-palindromo.git
   cd nodejs-jest-calculadora-palindromo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Como Executar os Testes

1. Para rodar os testes e gerar o relatório de cobertura:
   ```bash
   npm test
   ```

2. O relatório de cobertura será gerado na pasta `coverage/`. Para visualizar, abra o arquivo `index.html` dentro da subpasta `coverage/lcov-report` no seu navegador.

## Estrutura do Projeto

- **`calculadora.js`**: Função para realizar operações matemáticas.
- **`palindromo.js`**: Função que verifica se uma string é um palíndromo.
- **`calculadora.test.js`**: Testes para a função calculadora.
- **`palindromo.test.js`**: Testes para a função de verificação de palíndromo.
- **`coverage/`**: Pasta que contém o relatório de cobertura gerado pelo Jest.
