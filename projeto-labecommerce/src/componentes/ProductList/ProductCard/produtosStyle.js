import styled from "styled-components";

export const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;

  div {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    background-color: lightgrey;
  }

  div img {
    height: 20vh;
    width: 13vw;
    margin: 10px;
    border: black solid 1px;
  }

  strong {
    margin: 10px;
  }

  div button {
    align-self: center;
    margin: 10px;
    cursor: pointer;
  }

  #value {
    font-weight: bold;
    font-style: italic;
  }

  #name {
    font-weight: bold;
    font-size: 80%;
    margin: 10px;
    text-transform: capitalize;
  }


`


