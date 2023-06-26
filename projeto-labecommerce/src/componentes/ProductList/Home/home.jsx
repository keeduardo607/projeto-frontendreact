import React, { useState } from "react";
import Produtos from "../ProductCard/produtos";
import { ContainerHome, H2Home, LabelHome } from "./homeStyle";

export default function Home({
  products,
  searchFilter,
  minFilter,
  maxFilter,
  cart,
  setCart
}) {
  
  const [ordination, setOrdination] = useState("asc");

  const handleAdicionarAoCarrinho = (produto) => {
    const produtoNoCarrinho = cart.find((item) => item.id === produto.id);
  
    if (produtoNoCarrinho) {
      const cartAtualizado = cart.map((item) => {
        if (item.id === produto.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1,
          };
        }
        return item;
      });
  
      setCart(cartAtualizado);
    } else {
      const novoProduto = {
        ...produto,
        quantidade: 1,
        value: parseFloat(produto.value), 
      };
  
      setCart([...cart, novoProduto]);
    }
  };

  return (
    <ContainerHome>
      <H2Home>
        <p>Quantidade de Produtos: {products.length}</p>

        <LabelHome>
          Ordenação:
          <select
            value={ordination}
            onChange={(e) => setOrdination(e.target.value)}
          >
            <option value="asc"> Crescente</option>
            <option value="desc"> Decrescente</option>
          </select>
        </LabelHome>
      </H2Home>

      <Produtos
        products={products}
        searchFilter={searchFilter}
        minFilter={minFilter}
        maxFilter={maxFilter}
        ordination={ordination} 
        cart={cart}
        setCart={setCart}
        handleAdicionarAoCarrinho={handleAdicionarAoCarrinho}
      />
    </ContainerHome>
  );
}