const cars = require("../../data/cars.json");
const uuid = require("uuid");

exports.getAllCars = () => {
  let data = cars.map((car) => car);
  return data;
};

exports.getCar = (req) => {
  const id = req?.params?.id;

  const car = cars.find((car) => car.id === id);
  return car;
};

exports.postCar = (req) => {
  const car = {
    id: uuid.v4(),
    ...req.body,
  };

  cars.push(car);
  return car;
};
