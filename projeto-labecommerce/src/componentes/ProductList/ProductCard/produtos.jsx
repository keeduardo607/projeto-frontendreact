import React from "react";
import { ContainerProdutos } from "./produtosStyle";

export default function Produtos ({products}) {

  return (
  <ContainerProdutos>
    {products.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <p>ID: {item.id}</p>
          <p>Nome: {item.name}</p>
          <p>Valor: {item.value}</p>
          <button>Adicionar ao Carrinho</button>
        </div>
      ))}
  </ContainerProdutos>
  );
}