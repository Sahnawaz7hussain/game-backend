const express = require("express");
const { PlayerModel } = require("../models/playerModel");

const playerRoute = express.Router();

playerRoute.post("/", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    let newPlayer = PlayerModel(data);
    await newPlayer.save();
    res
      .status(200)
      .json({ message: "Player added successfully", player: newPlayer });
  } catch (err) {
    console.log("post err: ", err.message);
    res.send({ message: "server error", err: err.message });
  }
});

module.exports = { playerRoute };
