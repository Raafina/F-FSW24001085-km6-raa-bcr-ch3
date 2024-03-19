const express = require("express");
const router = express.Router();
const rentCarController = require("../controller/rent-car");

router.get("/", (req, res) => {
  res.render("rent-car", { layout: "layouts/main-layout", title: "Rent Car" });
});

router.post("/", rentCarController.carsSearch);

module.exports = router;
