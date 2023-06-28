import styled from "styled-components";

export const ContainerItens = styled.div`

`;

export const CartH3 = styled.h3`
  font-size: 1.9em;
  font-weight: bold;
  color: #333;
  text-align: center;
`

export const TotalValue = styled.p`
  font-weight: bold;
  text-align: center
`

export const TotalContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
`;

export const ItemName = styled.p`
  color: #333;
  flex: 1;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ItemQuantity = styled.p`
  margin-right: 10px;
`

export const ItemPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #ff9900;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px ;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ItemInfo = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ItemActions = styled.div`
@media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const RemoveButton = styled.button`
  background-color: #ff6666;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

