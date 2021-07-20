import styled from "styled-components";

export const Button = styled.button`
  background-color: ${ props => props.background };
  color: ${ props => props.color };

  border: 5px;
  border-radius: 5px;

  padding: 5px;

  font-size: 20px;

  cursor: pointer;
`;
