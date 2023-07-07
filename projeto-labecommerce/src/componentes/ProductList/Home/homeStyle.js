import styled from "styled-components";

export const ContainerHome = styled.div`
  display: block;
  height: 90vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 16px;
    width: 100%;
    overflow: hidden;
  }
`

export const QuantityProducts = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`

export const H2Home = styled.h2`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-around;
  margin-right: 20px ;
  margin-left: 20px;
  background-color: lightblue;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    width: 100%;
    margin: 0;
  }
`

export const SelectHome = styled.select`
  font-size: 14px;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-width: 0.5px;
  border-radius: 4px;
  width: 180px;
  background-color: #f7f7f7;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ddd;
  }

  @media (max-width: 768px) {

    width: 140px;
  }
`

export const OptionSelect = styled.option`
  background-color: #fff;
  color: #333;
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 1em;
`

export const LabelHome = styled.label`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const OrdinationHome = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`





