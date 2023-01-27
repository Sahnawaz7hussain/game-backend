const express = require("express");
var randomWords = require("random-words");

const wordRoute = express.Router();

wordRoute.get("/", (req, res) => {
  let word = randomWords();
  console.log(word, "sahnawaz");
  res.send({ newword: word });
});

module.exports = { wordRoute };
