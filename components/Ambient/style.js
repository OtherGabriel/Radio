import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
  html,
  body {
    background-color: ${ props => props.color };
  }
`;

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95%;
  height: 80vh;

  margin: auto;
  border-radius: 5px;

  background-color: white;

  position: relative;
`;
