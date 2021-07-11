const handler = async (req, res) => {
  if (req.name == "rock") {
    return res.json({ message: "playlists" })
  } else if (req.name == "pop") {
    return res.json({ message: "playlists" })
  } else if (req.name == "vmz") {
    return res.json({ message: "playlists" })    
  } else {
    return res.json({ message: "playlists" })    
  }
}

export default handler
