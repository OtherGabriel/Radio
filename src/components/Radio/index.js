import { useState } from "react";

import { Room, Player } from "./style";
import { Video } from "../../utils/partials/video";

import Image from "next/image";
import gif from "../../../public/ambient.gif";

export function Radio () {
  const [ play, setPlay ] = useState(1);

  return (
    <Room>
      <Image width = "450" height = "250" src = { gif } />

      <Video id = "bmVKaAV_7-A" autoplay = { play } />
    </Room>
  )
}
