const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "dist/mf-footer")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-footer" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));