import { useState } from "react";

import { Room, Grid, Message, VideoInput } from "./style";
import { Video } from "../video";
import { replacer } from "../../../utils/helpers/stringHelper";

export function VideoPlayer () {
  const [ video, setVideo ] = useState("");

  function handleChange (event) {
    setVideo(replacer(event.target.value));
  }

  return (
    <Room>
      <Grid>
        {
          video == ""
          ?
            <Message>Nenhum vídeo disponível</Message>
          :
          <>
            <Message>Vídeo para assistir ou fazer o download</Message>

            <Video link={ video } />
          </>
        }
      </Grid>

      <VideoInput
        type="text"
        placeholder="ID do seu vídeo no YouTube"
        value={ video }
        onChange={ handleChange }
      />
    </Room>
  )
}
