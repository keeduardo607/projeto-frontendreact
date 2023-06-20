import React from "react";
import { DivContainer, H2Filters, LabelFilters } from "./filtrosStyle";

export default function Filtros () {
    
  return (
<DivContainer>
  <H2Filters>
    Filters
  </H2Filters>
  <LabelFilters htmlFor="">
    Valor Minímo:
    <input type="number" name="" id="" />
  </LabelFilters>
  <LabelFilters htmlFor="">
    Valor Maximo:
    <input type="Number" name="" id="" />
  </LabelFilters>
  <LabelFilters htmlFor="">
    Busca por nome:
    <input type="text" name="" id="" />
  </LabelFilters>
</DivContainer>
  );
}