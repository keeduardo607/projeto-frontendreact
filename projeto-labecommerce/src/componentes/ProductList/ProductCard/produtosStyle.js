import styled from "styled-components";

export const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;

  div img {
    height: 20vh;
    width: 12vw;
  }

  div p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-style: bold
  }

  button {
    align-self: center;
    margin-top: 4px;
  }
`
