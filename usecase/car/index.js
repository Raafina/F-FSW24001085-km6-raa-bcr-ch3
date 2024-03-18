const carRepo = require("../../repository/car");

exports.getAllCars = () => {
  const data = carRepo.getAllCars();
  return data;
};

exports.getCar = (req) => {
  const data = carRepo.getCar(req);
  return data;
};

exports.addCar = (req) => {
  const data = carRepo.addCar(req);
  return data;
};

exports.updateCar = (req) => {
  const data = carRepo.updateCar(req);
  return data;
};

exports.deleteCar = (req) => {
  const data = carRepo.deleteCar(req);
  return data;
};
