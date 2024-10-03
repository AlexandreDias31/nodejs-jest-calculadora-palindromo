Node.js Calculadora e Palíndromo com Jest
Descrição
Este projeto implementa duas funcionalidades principais:

Calculadora: Realiza operações básicas como soma, subtração, multiplicação e divisão.
Verificação de Palíndromo: Verifica se uma string é um palíndromo, ignorando espaços, letras maiúsculas e caracteres especiais.
O projeto utiliza Jest para realizar testes automatizados com relatório de cobertura de código.

Instalação
Siga os passos abaixo para instalar e rodar o projeto:

Clone o repositório:

bash
Copiar código
git clone https://github.com/AlexandreDias31/nodejs-jest-calculadora-palindromo.git
cd nodejs-jest-calculadora-palindromo
Instale as dependências:

bash
Copiar código
npm install
Como Executar os Testes
Para rodar os testes e gerar o relatório de cobertura:

bash
Copiar código
npm test
O relatório de cobertura será gerado na pasta coverage/. Abra o arquivo index.html dentro da subpasta coverage/lcov-report no seu navegador para visualizar o relatório.

Estrutura do Projeto
calculadora.js: Contém a função de calculadora com as operações matemáticas.
palindromo.js: Verifica se uma string é um palíndromo.
calculadora.test.js: Testes automatizados para a função calculadora.
palindromo.test.js: Testes automatizados para a função de verificação de palíndromo.
coverage/: Pasta que contém o relatório de cobertura de código gerado pelo Jest.
