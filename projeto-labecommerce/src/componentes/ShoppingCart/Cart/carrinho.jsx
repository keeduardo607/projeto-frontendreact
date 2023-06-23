import React from "react";
import Itens from "../Items/itens";
import { ContainerCarrinho, H2Carrinho } from "./carrinhoStyle";


export default function Carrinho ({amount, setAmount, cart, setCart}) {

  //console.log('amount', amount);
  //console.log('setAmount', setAmount);
  //console.log('cart', cart);
  //console.log('setCart', setCart);
   
  return (
  <ContainerCarrinho>
    <H2Carrinho>
      <p>Carrinho:</p>
    </H2Carrinho>
   
   <Itens />

  </ContainerCarrinho>
  );
}

