import React, { useState } from 'react';
import ContainerApp from './appStyle';
import Filtros from "./componentes/Filters/filtros";
import Home from "./componentes/ProductList/Home/home";
import Carrinho from "./componentes/ShoppingCart/Cart/carrinho";
import products from './componentes/assents/productsList';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, #003333, #006666);
  }
`

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');
  const [cart, setCart] = useState([]);
  
  return (
    <>
    <GlobalStyled />
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
        />
        <Carrinho 
          cart={cart}
          setCart={setCart}
        />
      </ContainerApp>
   </>
  );
}

export default App;
