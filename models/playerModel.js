const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, require: true },
  lowLevel: { type: String, default: 0 },
  mediumLevel: { type: String, default: 0 },
  highLevel: { type: String, default: 0 },
});

const PlayerModel = mongoose.model("player", playerSchema);

module.exports = { PlayerModel };
