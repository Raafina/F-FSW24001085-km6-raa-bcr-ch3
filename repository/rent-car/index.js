const cars = require("../../data/cars.json");

filterCarAvailable = () => {
  const carsAvailable = [];
  cars.map((car) => {
    if (car.available == true) {
      carsAvailable.push(car);
    }
  });
  return carsAvailable;
};

exports.carsSearch = (date, totalPassanger) => {
  const carsAvailable = filterCarAvailable();
  const carsSearched = carsAvailable.filter(
    (car) =>
      new Date(car.availableAt.substring(0, 10)) <= new Date(date) &&
      totalPassanger <= car.capacity
  );
  return carsSearched;
};
