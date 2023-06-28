import React, { useState } from "react";
import Produtos from "../ProductCard/produtos";
import { ContainerHome, H2Home, LabelHome, SelectHome, OrdinationHome, QuantityProducts, OptionSelect } from "./homeStyle";

export default function Home({ products, searchFilter, minFilter, maxFilter, cart, setCart }) {
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
        value: parseFloat(produto.value.toFixed(2)),
      };

      setCart([...cart, novoProduto]);
    }
  };

  return (
    <ContainerHome>
      <H2Home>
        <QuantityProducts>Quantidade de Produtos: {products.length}</QuantityProducts>

        <LabelHome>
          <OrdinationHome>Ordenação:</OrdinationHome>
          <SelectHome
            value={ordination}
            onChange={(e) => setOrdination(e.target.value)}>
            <OptionSelect value="asc"> Crescente</OptionSelect>
            <OptionSelect value="desc"> Decrescente</OptionSelect>
          </SelectHome>
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