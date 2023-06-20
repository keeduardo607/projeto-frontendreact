import ContainerApp from './appStyle'
import Filtros from "./componentes/Filters/filtros"
import Home from "./componentes/ProductList/Home/home"
import Carrinho from "./componentes/ShoppingCart/Cart/carrinho"
import products from './componentes/assents/productsList'

function App() {
  return (
  <ContainerApp>
  
  <Filtros />
  <Home products={products}/>
  <Carrinho />

  </ContainerApp>
  );
}

export default App;
