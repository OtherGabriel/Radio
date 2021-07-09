import styled from "styled-components";

export const Room = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 15vh;

  padding-left: 10px;
  margin-bottom: 10px;

  background-color: black;
`;

export const Title = styled.h1`
  color: white;
`;

export const CollectionLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  border-radius: 5px 0 0 5px;

  width: 40%;

  background-color: white;
`;

export const CollectionLink = styled.h3`
  color: black;
`;
