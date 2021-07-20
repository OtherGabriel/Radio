const handler = async (req, res) => {
  return res.json({
    0: {
      "name": "vmz",
      "title": "VMZ",
      "path": "../../public/vmz.png"
    },
    1: {}
  })
}

export default handler
