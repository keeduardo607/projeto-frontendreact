import React from "react";
import Itens from "../Items/itens";
import { ContainerCarrinho } from "./carrinhoStyle";

export default function Carrinho({ cart, setCart }) {
  return (
    <ContainerCarrinho>
      <Itens cart={cart} setCart={setCart} />
    </ContainerCarrinho>
  );
}

import React from "react";
import {
  ContainerItens,
  ItemContainer,
  ItemInfo,
  ItemName,
  ItemActions,
  RemoveButton,
  TotalContainer
} from "../Items/ItemsStyled";

export default function Itens({ cart, setCart }) {
  const handleRemoverDoCarrinho = (produto) => {
    const novoCarrinho = cart.filter((item) => item.id !== produto.id);
    setCart(novoCarrinho);
  };

  const calcularValorTotal = () => {
    const valorTotal = cart.reduce((total, item) => {
      return total + item.value * item.quantidade;
    }, 0);

    return valorTotal.toFixed(2);
  };

  return (
    <ContainerItens>
      <h3>Carrinho: </h3>
      {cart.map((item) => (
        <ItemContainer key={item.id}>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: R$ {item.value.toFixed(2)}</p>
          </ItemInfo>
          <ItemActions>
            <RemoveButton onClick={() => handleRemoverDoCarrinho(item)}>
              Remover
            </RemoveButton>
          </ItemActions>
        </ItemContainer>
      ))}
      <TotalContainer>
        <p>Valor Total: R$ {calcularValorTotal()}</p>
      </TotalContainer>
    </ContainerItens>
  );
}
