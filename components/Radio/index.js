import { useEffect, useRef, useState } from "react";
import axios from "axios";

import Image from "next/image";

import { Room, CardLibrary, Card, VideoPlaylist, Loading } from "./style";

export function Radio () {
  const [ playlists, setPlaylists ] = useState(null)

  const [ informations, setInformations ] = useState({})
  const [ playlist, setPlaylist ] = useState("")

  async function buildPlaylists () {
    let response

    try {
      response = await axios.get("http://localhost:3000/api/playlists")

      setPlaylists(response.data)

      console.log(typeof(playlists))
    } catch (error) {
      console.log(error)
    }
  }

  async function buildPlaylist (author) {
    let response

    try {
      response = await axios.get(`http://localhost:3000/api/ids/${ author }`)

      setInformations(response.data)
      setPlaylist(`http://www.youtube.com/embed?listType=playlist&list=${ response.data.struct.id }&autoplay=0&controls=0&disablekb=1`)    
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buildPlaylist("vmz")
    buildPlaylists()
  }, [])

  return (
    <Room>
      <CardLibrary>
        {
          !playlists == null ?
          playlists.forEach((new_playlist, i) => {
            <Card>
              { new_playlist.name }
            </Card>
          }) :
          <></>
        }
      </CardLibrary>

      <VideoPlaylist>
        {
          !playlist ?
          <Loading>L o a d i n g . . .</Loading> :
          <iframe
            width="250"
            height="250"
            src={ playlist }
            title="YouTube video player"
            frameBorder="0"
          />
        }
      </VideoPlaylist>
    </Room>
  )
}
