const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

// Get - Redirect to url

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No url found");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json("Server error");
  }
});

module.exports = router;
