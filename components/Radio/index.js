import { useEffect, useState } from "react";
import axios from "axios";

import { Room, CardLibrary, Card, VideoPlaylist, Loading, TitleCard, VideoIframe, Divisor, BottomVideo, TitleVideo } from "./style";

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

      setInformations(response.data)
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
      <CardLibrary>
        {
          cards.map((info, index) => (
            <Card key={ index }>
              <TitleCard>{ info.name }</TitleCard>

              <img width="200" height="200" src="https://yt3.ggpht.com/u-HfFe694vJkwLG41UDfZOe_tlI0OHw1AGuBzUfgOroFFs1iB_zvzghJL9g5_zTGjaGt3wIjRK3udlI=s640-nd" />
            </Card>
          ))
        }
      </CardLibrary>

      <VideoPlaylist>
        {
          isLoading ?
          <Loading>L o a d i n g . . .</Loading> :
          <VideoIframe>
            <iframe
              width="250"
              height="250"
              src={ playlist }
              title="YouTube video player"
              frameBorder="0"
            />

            <Divisor></Divisor>

            <TitleVideo>Name - { informations.name }</TitleVideo>
            <TitleVideo>YouTube - { informations.youtube }</TitleVideo>

            <BottomVideo>
              <TitleVideo>OiOiOiOi</TitleVideo>
            </BottomVideo>
          </VideoIframe>
        }
      </VideoPlaylist>
    </Room>
  )
}
