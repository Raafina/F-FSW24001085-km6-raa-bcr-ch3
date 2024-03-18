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

exports.addCar = (req) => {
  const car = {
    id: uuid.v4(),
    ...req.body,
  };

  cars.push(car);
  return car;
};

exports.updateCar = (req) => {
  const id = req?.params?.id;
  const updatedCar = {
    id,
    ...req.body,
  };

  // Update the data by id
  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = updatedCar;
    }
  });
  return updatedCar;
};

exports.deleteCar = (req) => {
  const id = req?.params?.id;
  index = cars.findIndex((car) => car.id === id);
  cars.splice(index, 1);
  return cars;
};
