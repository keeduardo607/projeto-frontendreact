import React from "react";
import { DivContainer, H2Filters, LabelFilters } from "./filtrosStyle";

export default function Filtros ({searchFilter, setSearchFilter, minFilter, setMinFilter, maxFilter, setMaxFilter}) {

  //console.log('searchFilter', searchFilter);
  //console.log('setSearcjFilter', setSearchFilter);
  //console.log('minFilter', minFilter);
  //console.log('setMinFilter', setMinFilter);
  //console.log('maxFilter', maxFilter);
  //console.log('setMaxFilter', setMaxFilter);

  const handleMinFilter = (event) => {
    const inputValor = parseFloat(event.target.value)
      if (!isNaN(inputValor) && inputValor >= 0) {
        setMinFilter(inputValor)
      } else if (isNaN(inputValor) || inputValor < 0) {
        setMinFilter('')
      }
  }

  const handleMaxFilter = (event) => {
    const inputValor = parseFloat(event.target.value)
      if (!isNaN(inputValor) && inputValor >= 0) {
        setMaxFilter(inputValor)
      } else if (isNaN(inputValor) || inputValor < 0) {
        setMaxFilter('')
      }
  }

  return (
<DivContainer>
  <H2Filters>
    Filters
  </H2Filters>
  <LabelFilters htmlFor="">
    Valor Minímo:
    <input type="number" placeholder="Digite o valor mínimo" value={minFilter} onChange={handleMinFilter} />
  </LabelFilters>
  <LabelFilters htmlFor="">
    Valor Maximo:
    <input type="Number" placeholder="Digite o valor máximo" value={maxFilter} onChange={handleMaxFilter} />
  </LabelFilters>
  <LabelFilters htmlFor="">
    Busca por nome:
    <input type="text" placeholder="Digite o nome do produto" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value) } />
  </LabelFilters>
</DivContainer>
  );
}