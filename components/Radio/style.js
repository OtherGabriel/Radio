import styled from "styled-components";

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  margin: auto;
  border-radius: 5px;

  position: relative;
`;

export const CardLibrary = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 10%;

  position: absolute;
  left: 0;
  bottom: 0;

  padding: 10px;

  background-color: none;
  
  width: 75%;
  height: 85vh;

  border-radius: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background-color: black;

  width: 20%;

  cursor: pointer;
`;

export const VideoPlaylist = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  padding-top: 2.5%;
  position: absolute;

  width: 25%;
  height: 100vh;

  right: 0;
  bottom: 0;

  background-color: #08247d;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Loading = styled.h3`
  color: white;
`;
