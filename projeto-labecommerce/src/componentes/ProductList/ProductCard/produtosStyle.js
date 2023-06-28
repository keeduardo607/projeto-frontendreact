import styled from "styled-components";

export const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ProductImg = styled.img`
  height: 20vh;
  width: 13vw;
  margin: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
`;

export const ProductsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.2);
  overflow: auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ProductName = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin: 0.5em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 20px;
  font-weight: bold;
  color: #ff9900;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const ProductButtom = styled.button`
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
