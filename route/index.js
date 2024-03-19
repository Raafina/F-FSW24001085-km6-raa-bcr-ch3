const express = require("express");
const router = express.Router();
const indexRoute = require("./home");
const carRoute = require("./car");
const carRentalRoute = require("./rent-car");

router.use("/", indexRoute);
router.use("/cars", carRoute);
router.use("/rent-car", carRentalRoute);

module.exports = router;
