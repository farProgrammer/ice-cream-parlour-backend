const express = require("express");
const router = express.Router();
const Flavour = require("../models/iceModel");

router.get("/getallflavours", async (req, res) => {
  try {
    const flavours = await Flavour.find({});
    res.send(flavours);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});
module.exports = router;
