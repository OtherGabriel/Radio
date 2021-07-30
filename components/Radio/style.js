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
  flex-flow: row wrap;

  padding: 10px;

  background-color: none;
  
  width: 75%;
  height: 85vh;

  border-radius: 5px;

  @media only screen and (min-width: 626px) {
    position: absolute;

    left: 0;
    bottom: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  flex: 0 1 calc(30% - 30px);

  margin: 5px auto;
  border-radius: 10px;

  padding: 10px;

  background-color: rgba(0, 0, 0, 0.7);
  color: #ff63da;

  cursor: pointer;
`;

export const VideoPlaylist = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

  padding-top: 2.5%;

  background-color: rgba(0, 0, 0, 0.7);

  @media only screen and (max-width: 626px) {
    width: 100%;

    height: 40vh;
  }

  @media only screen and (min-width: 626px) {
    position: fixed;

    right: 0;
    bottom: 0;

    width: 25%;
    height: 100vh;
  }
`;

export const Loading = styled.h3`
  color: #ff63da;
`;

export const TitleCard = styled.h3`
  color: #ff63da;
  margin: 0;
`;

export const VideoIframe = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Iframe = styled.iframe`
  margin: 0 auto;
  width: 90%;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;

  margin: 10px 0;

  background-color: #ff63da;
`;

export const BottomVideo = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  right: 0;
  left: 0;
`;

export const TitleVideo = styled.h4`
  color: #ff63da;
  margin: 0;
`;
