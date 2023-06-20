import React from "react";
import { ContainerProdutos, SectionProdutos } from "./produtosStyle";

export default function Produtos () {
    
  return (
  <ContainerProdutos>
   <SectionProdutos>
    <img src="https://fastly.picsum.photos/id/17/200/200.jpg?hmac=9QDzoqdXorZialFww894D6BqJGalCXFLX2zNQtYENEA" alt="" />
    <h2>
      <p>Produto 1</p>
      <p>R$200,00</p>
      <button>Adicionar ao Carrinho</button>
    </h2>
   </SectionProdutos>
   <SectionProdutos>
    <img src="https://fastly.picsum.photos/id/197/200/200.jpg?hmac=QpHQ9OiY_-qagHPzHZgTw7I_nE3LevYjH_1k3-xLpPk" alt="" />
    <h2>
      <p>Produto 2</p>
      <p>R$129,90,00</p>
      <button>Adicionar ao Carrinho</button>
    </h2>
   </SectionProdutos>
   <SectionProdutos>
    <img src="https://fastly.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc" alt="" />
    <h2>
      <p>Produto 3</p>
      <p>R$69,90,00</p>
      <button>Adicionar ao Carrinho</button>
    </h2>
   </SectionProdutos>
  </ContainerProdutos>
  );
}