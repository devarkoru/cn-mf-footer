const express = require("express");
const path = require("path");
const cors = require('cors');
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, "dist/mf-footer")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-footer" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));