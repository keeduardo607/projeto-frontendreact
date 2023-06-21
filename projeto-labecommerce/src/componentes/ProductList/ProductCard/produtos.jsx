import React from "react";
import { ContainerProdutos } from "./produtosStyle";

   
  export default function Produtos ({products, searchFilter, minFilter, setMinFilter, maxFilter, setMaxFilter, ordination, setOrdination}) {

  return (
    <ContainerProdutos>
    {products
      .filter((item) => { 
        if(item.value >= minFilter && item.value <= maxFilter){
        return item
        } else if (!minFilter && !maxFilter){
        return products
        }
      })
      .sort(() => {
        if (ordination === 'asc') {
        return 0
        } else {
        return -1
        }
      })
      .filter((item) => {
        if(item.name.toUpperCase().includes(searchFilter.toUpperCase())){
        return item
        } else if (!searchFilter){
        return products
        }
      })
      .map((item) => (
        <div key={item.id}>
         <img src={item.imageUrl} alt={item.name} />
          <p>{item.id}</p>
          <p id="name"> {item.name}</p>
          <p id="value">  R$ {item.value}</p>
         <button>Adicionar ao Carrinho</button>
       </div>
     ))}
  </ContainerProdutos>
  );
}