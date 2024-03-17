const express = require("express");
const router = express.Router();
const carRoute = require("./car");

router.use("/rent-cars", carRoute);

module.exports = router;
