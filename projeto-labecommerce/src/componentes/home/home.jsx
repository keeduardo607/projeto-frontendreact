import React from "react";
import Produtos from "./Produtos/produtos";
import { ContainerHome, H2Home } from "./homeStyle";

export default function Home () {
    
  return (
  <ContainerHome>

  <H2Home>
    <p>Quantidade de Produtos: 3</p>

    <label htmlFor="">
    Ordenação:
    <select name="" id="">
      <option value="crescente">Crescente</option>
      <option value="decrescente">Decrescente</option>
    </select>
   </label>
  </H2Home>
  
  <Produtos />

  </ContainerHome>
  );
}