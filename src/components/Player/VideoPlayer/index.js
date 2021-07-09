import { useState } from "react";

import { Room, Grid, Message, VideoInput } from "./style";
import { Video } from "../video";
import { replacer } from "../../../utils/helpers/stringHelper";

export function VideoPlayer () {
  const [ video, setVideo ] = useState("");
  const [ urlVideo, setUrlVideo ] = useState("");

  function handleChange (event) {
    setVideo(event.target.value);
    setUrlVideo(replacer(event.target.value));
  }

  return (
    <Room>
      <Grid>
        {
          video == ""
          ?
            <Message>Adicione o link de um vídeo</Message>
          :
          <>
            <Message>Vídeo para assistir ou fazer o download</Message>

            <Video link={ urlVideo } />
          </>
        }
      </Grid>

      <VideoInput
        type="text"
        placeholder="Link do seu vídeo no YouTube"
        value={ video }
        onChange={ handleChange }
      />
    </Room>
  )
}
