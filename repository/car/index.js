const cars = require("../../data/cars.json");

exports.getAllCars = () => {
  let data = cars.map((car) => car);
  return data;
};

exports.postCar = (req) => {
   cars.push(req.body);
};
