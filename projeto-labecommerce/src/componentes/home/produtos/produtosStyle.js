import styled from "styled-components";

export const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export const SectionProdutos = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  h2 {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  h2 p {
    margin: 4px 0px;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h2 button {
    align-self: center;
    margin-top: 4px;
  }
`

