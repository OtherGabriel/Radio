import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import {
  Room, CardLibrary, Card, VideoPlaylist, Loading, TitleCard, VideoIframe, Divisor, Iframe, TitleVideo
} from "./style";

export function Radio () {
  const [ cards, setCards ] = useState([])
  const [ informations, setInformations ] = useState({})
  const [ playlist, setPlaylist ] = useState("")

  const [ isLoading, setIsLoading ] = useState(true)

  async function buildCards () {
    let response

    try {
      response = await axios.get("http://localhost:3000/api/playlists")

      setCards(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function buildPlaylist (author) {
    let response

    try {
      response = await axios.get(`http://localhost:3000/api/ids/${ author }`)

      setInformations(response.data.struct.informations)
      setPlaylist(`http://www.youtube.com/embed?listType=playlist&list=${ response.data.struct.id }&autoplay=0&controls=0&disablekb=1`)    

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    buildPlaylist("vmz")
    buildCards()
  }, [])

  return (
    <Room>
      <VideoPlaylist>
        {
          isLoading ?
          <Loading>L o a d i n g . . .</Loading> :
          <VideoIframe>
            <Iframe
              src={ playlist }
              title="YouTube video player"
              frameBorder="0"
            />

            <Divisor></Divisor>

            <TitleVideo>{ informations.name }</TitleVideo>
            <TitleVideo><Link href={informations.youtube}>ver mais</Link></TitleVideo>
          </VideoIframe>
        }
      </VideoPlaylist>

      <CardLibrary>
        {
          cards.map((info, index) => (
            <Card onClick={ () => { buildPlaylist(info.name) } } key={ index }>
              <TitleCard>{ info.title }</TitleCard>

              <img width="200" height="200" src={ info.path } />
            </Card>
          ))
        }
      </CardLibrary>
    </Room>
  )
}
