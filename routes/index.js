const express = require("express");
const router = express.Router();

module.exports = 
  router.get("/", (req, res) => {
  res.send({ response: "I promise I will be async" }).status(200);
});
