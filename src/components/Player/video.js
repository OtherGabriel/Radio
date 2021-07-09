export function Video ({ link }) {
  const URI = `https://www.youtube.com/embed//${ link }`
  const VMZ_URI = `watch?v=3CQTwoVut-8&list=PL9rxbdGySjPDv5THfyAicehoOpqMWM-uS&index=`

  return (
    <iframe
      width="100"
      height="100"
      src={ URI }
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  )
}
