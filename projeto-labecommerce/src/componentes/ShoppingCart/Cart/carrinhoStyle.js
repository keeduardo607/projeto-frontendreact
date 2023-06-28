import styled from "styled-components";

export const ContainerCarrinho = styled.div`
  height: 90vh;
  border-radius: 10px;
  padding: 8px;
  background-color: lightblue;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.2);
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
    border-radius: 4px; 
  }

  @media (max-width: 768px) {
    height: auto;
    max-height: 80vh;
    overflow-y: scroll;
    width: 100%;
  }
`