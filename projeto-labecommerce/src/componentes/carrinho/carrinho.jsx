import React from "react";
import Itens from "./Itens/itens";
import { ContainerCarrinho, H2Carrinho } from "./carrinhoStyle";


export default function Carrinho () {
    
  return (
  <ContainerCarrinho>
    <H2Carrinho>
      <p>Carrinho:</p>
    </H2Carrinho>
   
   <Itens />

  </ContainerCarrinho>
  );
}

