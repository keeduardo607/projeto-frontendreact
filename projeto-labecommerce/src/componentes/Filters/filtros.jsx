import React from "react";
import { DivContainer, H2Filters, LabelFilters } from "./filtrosStyle";

export default function Filtros ({searchFilter, setSearchFilter, minFilter, setMinFilter, maxFilter, setMaxFilter}) {

  return (
<DivContainer>
  <H2Filters>
    Filters
  </H2Filters>
  <LabelFilters htmlFor="">
    Valor Minímo:
    <input type="number" placeholder="Digite o valor mínimo" value={minFilter} onChange={(e) => setMinFilter(e.target.value)} />
  </LabelFilters>
  <LabelFilters htmlFor="">
    Valor Maximo:
    <input type="Number" placeholder="Digite o valor máximo" value={maxFilter} onChange={(e) => setMaxFilter(e.target.value)} />
  </LabelFilters>
  <LabelFilters htmlFor="">
    Busca por nome:
    <input type="text" placeholder="Digite o nome do produto" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value) } />
  </LabelFilters>
</DivContainer>
  );
}