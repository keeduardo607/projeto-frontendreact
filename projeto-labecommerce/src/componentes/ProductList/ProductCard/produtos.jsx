import React from "react";
import { ContainerProdutos, ProductName, ProductPrice, ProductButtom, ProductsStyle, ProductImg } from "./produtosStyle";

export default function Produtos({ products, searchFilter, minFilter, maxFilter, ordination, cart, setCart, handleAdicionarAoCarrinho }) {
  return (
    <ContainerProdutos>
      {products
        .filter((item) => {
          if ((minFilter && maxFilter) && (item.value >= minFilter && item.value <= maxFilter)) {
            return item;
          } else if (minFilter && !maxFilter && item.value >= minFilter) {
            return item;
          } else if (!minFilter && maxFilter && item.value <= maxFilter) {
            return item;
          } else if (!minFilter && !maxFilter) {
            return products;
          } else {
            return false;
          }
        })
        .sort((a, b) => {
          if (ordination === 'asc') {
            return a.value - b.value;
          } else {
            return b.value - a.value;
          }
        })
        .filter((item) => {
          if (item.name.toUpperCase().includes(searchFilter.toUpperCase())) {
            return item;
          } else if (!searchFilter) {
            return products;
          }
          return false;
        })
        .map((item, index) => (
          <ProductsStyle key={index}>
            <ProductImg src={item.imageUrl} alt={item.name} />
            <ProductName> {item.name}</ProductName>
            <ProductPrice> R$ {item.value.toFixed(2)}</ProductPrice>
            <ProductButtom onClick={() => handleAdicionarAoCarrinho(item)}>Adicionar ao Carrinho</ProductButtom>
          </ProductsStyle>
        ))}
    </ContainerProdutos>
  );
}
