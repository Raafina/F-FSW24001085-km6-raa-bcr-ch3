const carRepo = require("../../repository/car");

exports.getAllCars = () => {
  const data = carRepo.getAllCars();
  return data;
};

exports.postCar = (req) => {
  const data = carRepo.postCar(req);
  return data;
};
