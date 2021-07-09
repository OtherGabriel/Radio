import styled from "styled-components";

export const Room = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 95%;
  height: 80vh;

  margin: auto;
  border-radius: 5px;

  background-color: white;

  position: relative;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5%;
`;

export const Message = styled.h2`
`;

export const VideoInput = styled.input`
  position: absolute;
  bottom: 0;

  width: 95%;
  height: 7vh;

  margin-bottom: 10px;

  font-size: 100%;
`;
