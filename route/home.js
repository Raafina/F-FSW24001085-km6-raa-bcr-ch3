const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { layout: "layouts/main-layout", title: "Home" });
});

module.exports = router;
