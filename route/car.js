const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

// Routes
router.get("/", carController.getAllCars);
router.get("/:id", carController.getCar);
router.post("/", carController.postCar);
// router.put("/", carController.putCar);

module.exports = router;
