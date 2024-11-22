## Technical Automation Test

Este repositório contém a implementação dos testes automatizados de API e UI, propostos no desafio técnico da empresa Brilliant Machine, utilizando Cypress. 

---

### **Requisitos dos Testes**

#### **API Test**

Os testes de API cobrem os seguintes cenários:
1. Fazer uma chamada para a API `https://fakestoreapi.com/products`.
2. Ler a resposta e encontrar todos os objetos com a categoria `electronics`.
3. Comparar se os objetos encontrados possuem a propriedade selecionada.
4. Contar quantas vezes a propriedade aparece.
5. Verificar o número de objetos com a propriedade acima e com classificação maior que 4.
6. Exibir os objetos encontrados no console.

OBS1:. O código em si, imprime os objetos tanto no console do navegador quanto no Test Runner do Cypress

#### **UI Test**

Os testes de UI incluem os cenários:

1. Acessar o site `https://www.saucedemo.com/`.
2. Fazer login.
3. Verificar se os itens estão ordenados por **Nome (A -> Z)**.
4. Alterar a ordenação para **Nome (Z -> A)**.
5. Verificar se os itens foram ordenados corretamente.

OBS2:. No Chrome estava ocorrendo uma falha na comunicação com o Backtrace e, talvez, seja necessário rodar no navegador Electron.

---

### **Ferramentas Utilizadas**

- VS Code
- Cypress
- Git Bash
- Github
- Node.js
- npm

### **Como executar os testes?**

- Localmente

1. Eles estão na pasta "e2e" com o final spec.js.
2. Baixe os testes no VS Code e tenha certeza de que já deu os comandos de inicialização e instalação das ferramentas listadas acima (configurou o ambiente).
3. No terminal, coloque o comando "npx cypress open".
4. Escolha o navegador (optei pelo Electron).
5. Clique no teste que deseja executar.
6. Também pode digitar no terminal o comando "npm cypress run"

- Pelo Github Action

1. Tem que existir ou criar um arquivo workflow (yaml), onde ele vai instalar e configurar as dependências.
2. Garanta que o arquivo package.json tenha as dependências necessárias.
3. Quando houver pull ou push da IDE para o github, o Github Actions acionará o arquivo workflow automaticamente e executar os testes que estiverem escritos nele.
4. Ao dar o comando push
