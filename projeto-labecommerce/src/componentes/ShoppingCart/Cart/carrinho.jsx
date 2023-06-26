import React from "react";
import Itens from "../Items/itens";
import { ContainerCarrinho } from "./carrinhoStyle";

export default function Carrinho({ cart, setCart }) {

export default function Carrinho ({amount, setAmount, cart, setCart}) {

  //console.log('amount', amount);
  //console.log('setAmount', setAmount);
  //console.log('cart', cart);
  //console.log('setCart', setCart);
   

  return (
    <ContainerCarrinho>
      <Itens cart={cart} setCart={setCart} />
    </ContainerCarrinho>
  );
}



