import React from "react";
import Itens from "../Items/itens";
import { ContainerCarrinho } from "./carrinhoStyle";

export default function Carrinho({ cart, setCart }) {

  const handleRemoverDoCarrinho = (produto) => {
    const novoCarrinho = cart.filter((item) => item.id !== produto.id);
    setCart(novoCarrinho);
  };

  return (
    <ContainerCarrinho>
      <Itens cart={cart} setCart={setCart} handleRemoverDoCarrinho={handleRemoverDoCarrinho} />
    </ContainerCarrinho>
  );
}
