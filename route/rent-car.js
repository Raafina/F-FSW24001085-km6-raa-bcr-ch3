const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("rent-car", { layout: "layouts/main-layout", title: "Rent Car" });
});

module.exports = router;
