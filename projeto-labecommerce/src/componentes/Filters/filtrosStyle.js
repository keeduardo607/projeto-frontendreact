import styled from "styled-components";

export const DivContainer = styled.div`
  height: 90vh;
  border-radius: 10px;
  padding: 8px;
  background-color: lightblue;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 48vh;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const TextInput = styled.p`
  font-size: 0.9em;
  color: black;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`

export const InputFilter = styled.input`
  width: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid #ccc;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`

export const H2Filters = styled.h2`
  font-size: 1.9em;
  font-weight: bold;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`

export const LabelFilters = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-bottom: 4px;
    text-align: center;
  }
`



