import { useEffect, useState } from "react";
import { MyIframe } from "../../../styles/components";

export function Video ({ playlist = false, id, index = 1, autoplay = 0 }) {
  const [ url, setUrl ] = useState("")

  useEffect(() => {
    playlist
    ? 
    setUrl(`https://youtube.com/embed/watch?v=3CQTwoVut-8&list=${id}&index=${index}&autoplay=${autoplay}`)
    :
    setUrl(`https://www.youtube.com/embed/${id}?autoplay=${autoplay}`)  
  })

  return (
    <MyIframe
      id="ytplayer"
      type="text/html"
      width="500"
      height="500"
      src={ url }
      frameborder="0"
    />
  )
}
