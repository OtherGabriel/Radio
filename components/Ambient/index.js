import { useEffect, useRef, useState } from "react";

import { Body, Room } from "./style";

import Image from "next/image";
import gif from "../../public/chuva.gif";

export function Ambient () {
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
      <Body color="#2d4b5e" />

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
        src = "/ambient-song.mp3"
        autoPlay = { true } 
        ref = { audioRef }
        onPlay = { () => setPlayingState(true) }
        onPause = { () => setPlayingState(false) }
      />
    </Room>
  )
}
