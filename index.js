const express = require("express");
const { connection } = require("./config/db");
const { playerRoute } = require("./routes/playerRoute");
const PORT = process.env.PORT || 8080;
var cors = require("cors");
require("dotenv").config();
const { wordRoute } = require("./routes/wordRoute");

const app = express();

app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server running");
});
app.use("/word", wordRoute);
app.use("/player", playerRoute);

app.listen(PORT, async () => {
  try {
    console.log("connecting");
    await connection;
    console.log("connected");
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log("connection err: ", err.message);
  }
});
