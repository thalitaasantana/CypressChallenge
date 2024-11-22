# Technical Automation Test

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

OBS:. O código em si, imprime os objetos tanto no console do navegador quanto no Test Runner do Cypress

#### **UI Test**

Os testes de UI incluem os cenários:

1. Acessar o site `https://www.saucedemo.com/`.
2. Fazer login.
3. Verificar que os itens estão ordenados por **Nome (A -> Z)**.
4. Alterar a ordenação para **Nome (Z -> A)**.
5. Verificar que os itens foram ordenados corretamente.

---

### **Ferramentas Utilizadas**

- VS Code
- Cypress
- Git
- Node.js e npm.
  
