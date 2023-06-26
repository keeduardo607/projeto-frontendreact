import React, { useEffect } from "react";
import Itens from "../Items/itens";
import { ContainerCarrinho } from "./carrinhoStyle";

export default function Carrinho({ cart, setCart }) {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, setCart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  return (
    <ContainerCarrinho>
      <Itens cart={cart} setCart={setCart} />
    </ContainerCarrinho>
  );
}
