import React from "react";
import { ContainerProdutos } from "./produtosStyle";

  export default function Produtos ({products, searchFilter, minFilter, maxFilter, ordination, cart, setCart, handleAdicionarAoCarrinho}) {


  return (
    <ContainerProdutos>
      {products
        .filter((item) => { 
          if((minFilter && maxFilter) && (item.value >= minFilter && item.value <= maxFilter) ){
            return item
          } else if (minFilter && !maxFilter && item.value >= minFilter){
            return item
          } else if (!minFilter && maxFilter && item.value <= maxFilter) {
            return item
          } else if (!minFilter && !maxFilter){
            return products
          } else {
            return false
          }})
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
          } return false
         })
        .map((item, index) => (
         <div key={index}>
          <img src={item.imageUrl} alt={item.name} />
           <p id="name"> {item.name}</p>
           <p id="value">  R$ {item.value}</p>
          <button onClick={() => handleAdicionarAoCarrinho(item)}>Adicionar ao Carrinho</button>
         </div>
        ))}
   </ContainerProdutos>
   
  export default function Produtos ({products, searchFilter, minFilter, maxFilter, ordination}) {

    //console.log('products', products);
    //console.log('searchFilter', searchFilter);
    //console.log('minFilter', minFilter);
    //console.log('maxFilter', maxFilter);
    //console.log('ordination', ordination);

  return (
    <ContainerProdutos>
    {products
      .filter((item) => { 
        if (item.value >= minFilter && !maxFilter){ 
          return item
        } else if (item.value >= minFilter && item.value <= maxFilter){
          return item
        }else if (!minFilter && !maxFilter){
          return products
        } return false
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
        } return false
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