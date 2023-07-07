import styled from "styled-components";

const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 8px;
  padding: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export default ContainerApp;