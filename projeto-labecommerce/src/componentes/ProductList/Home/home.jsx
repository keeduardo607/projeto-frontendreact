import Produtos from "../ProductCard/produtos";
import { ContainerHome, H2Home, LabelHome } from "./homeStyle"
import { useState } from "react";

export default function Home ({products, searchFilter, setSearchFilter, minFilter, setMinFilter, maxFilter, setMaxFilter}) {

  const [ordination, setOrdination] = useState('asc')

  const handleOrdination = (e) => {
    setOrdination(e.target.value)
  }

  return (
  <ContainerHome>

  <H2Home>
    <p>Quantidade de Produtos: {products.length}  </p>
  
    <LabelHome>
    Ordenação:
    <select value={ordination} onChange={handleOrdination}>
      <option value="asc"> Crescente</option>
      <option value="desc"> Decrescente</option>
    </select>
   </LabelHome>
  </H2Home>
  
  <Produtos
    products={products} 
    searchFilter={searchFilter} 
    setSearchFilter={setSearchFilter}
    minFilter={minFilter} 
    setMinFilter={setMinFilter} 
    maxFilter={maxFilter} 
    setMaxFilter={setMaxFilter}
    ordination={ordination}
    setOrdination={setOrdination}
  />
  </ContainerHome>
  );
}