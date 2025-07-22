# 🛒 Shopee Cart - Simulador de Carrinho de Compras

Este projeto é um pequeno simulador de carrinho de compras feito com JavaScript.  
Ele permite criar itens, adicioná-los ao carrinho ou à lista de desejos, calcular o valor total da compra, exibir os itens e remover itens conforme necessário.

---


## 🚀 Funcionalidades

- Criar itens com nome, preço e quantidade
- Adicionar itens ao carrinho ou lista de desejos
- Visualizar os itens do carrinho
- Calcular o valor total do carrinho
- Remover um item específico por nome
- Reduzir a quantidade de um item (ou removê-lo por completo se for o último)

---

## 📝 Considerações Finais

Este projeto reforça conceitos importantes como:

- **Modularização de código**: separar responsabilidades entre arquivos (`item.js` e `cart.js`) deixa o código mais limpo, reutilizável e fácil de manter.

- **Reutilização de funções**: funções como `addItem`, `removeItem` e `calculateTotal` foram criadas para serem genéricas e aplicáveis a diferentes listas (como carrinho ou lista de desejos).

