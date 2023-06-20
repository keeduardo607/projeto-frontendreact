import ContainerApp from './appStyle'
import Filtros from "./componentes/Filtros/filtros"
import Home from "./componentes/Home/home"
import Carrinho from "./componentes/Carrinho/carrinho"

function App() {
  return (
  <ContainerApp>
  
  <Filtros />

  <Home />

  <Carrinho />

  </ContainerApp>
  );
}

export default App;
