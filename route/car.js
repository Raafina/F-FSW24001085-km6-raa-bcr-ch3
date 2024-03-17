const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

// Routes
router.get("/", carController.getAllCars);
router.post("/", carController.postCar);

module.exports = router;
