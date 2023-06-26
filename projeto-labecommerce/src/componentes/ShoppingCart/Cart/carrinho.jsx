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



