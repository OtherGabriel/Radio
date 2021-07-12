import { useEffect, useRef, useState } from "react";

import { Room, Player } from "./style";

import Image from "next/image";

import playerButton from "../../public/player.png";
import pauseButton from "../../public/pause.png";
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
      <Image width = "450" height = "250" src = { gif } />
      
      <Player>
        {
          isPlaying ? (
            <Image
              onClick={ toggleIsPlaying }
              src={ pauseButton }
            />
          ) : (
            <Image
              width = "100"
              heigth = "10"
              onClick={ toggleIsPlaying }
              src={ playerButton }
            />
          )
        }
      </Player>
      
      <audio
        src = "/song.mp3"
        autoPlay = { true } 
        ref = { audioRef }
        onPlay = { () => setPlayingState(true) }
        onPause = { () => setPlayingState(false) }
      />
    </Room>
  )
};
