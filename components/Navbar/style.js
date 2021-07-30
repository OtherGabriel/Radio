import styled from "styled-components";

export const Room = styled.div`
  padding: 10px;

  @media only screen and (max-width: 626px) {
    height: 20vh;
    margin-bottom: 10px;

    width: 100%;
  }

  @media only screen and (min-width: 626px) {
    width: 75%;
  
    position: fixed;
  }
`;

export const Title = styled.h1`
  color: #ff63da;

  font-size: 3rem;

  margin: 0;
`;
