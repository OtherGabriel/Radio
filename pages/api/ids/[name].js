const handler = async (req, res) => {
  const { name } = req.query

  if (name == "vmz") {
    return res.json({
      "struct": {
        "id": "PLGxmYc4R8LDcVyiODgz7jMapC1QKVb_Qd",
        "informations": { "name": "VMZ", "youtube": "https://youtube/vmz" },
      }
    })
  } else {
    return res.json({
      "status": 404,
      "error": "not found"
    })
  }
}

export default handler
