export function Video ({ link }) {
  const URI = `https://www.youtube.com/embed/${ link }`

  return (
    <iframe
      width="546"
      height="286"
      src={ URI }
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  )
}
