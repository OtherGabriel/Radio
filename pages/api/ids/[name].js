const handler = async (req, res) => {
  const { name } = req.query

  if (name == "vmz") {
    return res.json({
      "struct": {
        "id": "PLGxmYc4R8LDcVyiODgz7jMapC1QKVb_Qd",
        "informations": { "name": "VMZ", "youtube": "https://youtube/vmz" },
      }
    })
  } else if (name == "lofi") {
    return res.json({
      "struct": {
        "id": "PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo",
        "informations": { "name": "Lofi", "youtube": "not for now" },
      }
    })
  } else if (name == "brlofi") {
    return res.json({
      "struct": {
        "id": "PL3W8cX0m9jiVjLIAVLmEGKP8FpbBCQSo7",
        "informations": { "name": "Lofi Brasil", "youtube": "not for now" },
      }
    })
  } else if (name == "anime") {
    return res.json({
      "struct": {
        "id": "PL8lZieNFgOdmrNGTqwjqYJpJ_2nw_O_M2",
        "informations": { "name": "Anime", "youtube": "not for now" },
      }
    })
  } else if (name == "darksouls") {
      return res.json({
        "struct": {
          "id": "PLA69C1EEA3355844F",
          "informations": { "name": "Dark Souls", "youtube": "not for now" },
        }
      })
  } else if (name == "ambient") {
    return res.json({
      "struct": {
        "id": "s4ISiIFFLao&list=PL290F940EDA519EB6",
        "informations": { "name": "Ambient", "youtube": "not for now" },
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
