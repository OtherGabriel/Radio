import { useEffect, useRef, useState } from "react";

import { Room } from "./style";

import Image from "next/image";
import gif from "../../public/ambient.gif";

export function Radio () {
  const audioRef = useRef(null)
  const [ isPlaying, setIsPlaying ] = useState(false)
  
  function setPlayingState(state) {
    setIsPlaying(state)
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying)
  }
  
  useEffect(()=> {
    if (!audioRef.current) {
      return;
    }
  
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [ isPlaying ])

  return (
    <Room>
      <Image width = "550" height = "290" src = { gif } />
      
      <>
        {
          isPlaying ? (
            <h2 onClick={ toggleIsPlaying }>stop</h2>
          ) : (
            <h2 onClick={ toggleIsPlaying }>start</h2>
          )
        }
      </>
      
      <audio
        src = "/1-song.mp3"
        autoPlay = { true } 
        ref = { audioRef }
        onPlay = { () => setPlayingState(true) }
        onPause = { () => setPlayingState(false) }
      />
    </Room>
  )
};
