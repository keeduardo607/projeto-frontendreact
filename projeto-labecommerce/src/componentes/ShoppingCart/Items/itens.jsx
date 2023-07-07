import { useEffect } from "react";
import React from "react";
import {ContainerItens, ItemContainer, ItemInfo, ItemName, ItemActions, RemoveButton, TotalContainer, ItemQuantity, ItemPrice, TotalValue, CartH3
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

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    const cartSave = localStorage.getItem('cart')
    if (cartSave) {
      setCart(JSON.parse(cartSave))
    }
  }, [setCart])

  return (
    <ContainerItens>
      <CartH3>Carrinho: </CartH3>
      {cart && cart.map((item) => (
        <ItemContainer key={item.id}>
          <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemQuantity>Quantidade: {item.quantidade}</ItemQuantity>
            <ItemPrice>Preço: R$ {item.value.toFixed(2)}</ItemPrice>
          </ItemInfo>
          <ItemActions>
            <RemoveButton onClick={() => handleRemoverDoCarrinho(item)}>
              Remover
            </RemoveButton>
          </ItemActions>
        </ItemContainer>
      ))}
      <TotalContainer>
        <TotalValue>Valor Total: R$ {calcularValorTotal()}</TotalValue>
      </TotalContainer>
    </ContainerItens>
  );
}
