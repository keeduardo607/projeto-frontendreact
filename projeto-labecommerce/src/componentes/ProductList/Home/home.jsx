import React from "react";
import Produtos from "../ProductCard/produtos";
import { ContainerHome, H2Home } from "./homeStyle"

export default function Home (props) {
 
  const {products} = props

  return (
  <ContainerHome>

  <H2Home>
    <p>Quantidade de Produtos: {products.length}  </p>

    <label htmlFor="">
    Ordenação:
    <select name="" id="">
      <option value="crescente">Crescente</option>
      <option value="decrescente">Decrescente</option>
    </select>
   </label>
  </H2Home>
  
  <Produtos products={products} />

  </ContainerHome>
  );
}