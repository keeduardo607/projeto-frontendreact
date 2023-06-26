import React, { useState } from 'react';
import ContainerApp from './appStyle';
import Filtros from "./componentes/Filters/filtros";
import Home from "./componentes/ProductList/Home/home";
import Carrinho from "./componentes/ShoppingCart/Cart/carrinho";
import products from './componentes/assents/productsList';

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState([]);

  return (
    <ContainerApp>
      <Filtros 
        searchFilter={searchFilter} 
        setSearchFilter={setSearchFilter} 
        minFilter={minFilter} 
        setMinFilter={setMinFilter} 
        maxFilter={maxFilter} 
        setMaxFilter={setMaxFilter} 
      />
      <Home 
        products={products}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        minFilter={minFilter} 
        setMinFilter={setMinFilter} 
        maxFilter={maxFilter} 
        setMaxFilter={setMaxFilter}
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
      />
      <Carrinho 
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
      />
    </ContainerApp>
  );
}

export default App;
