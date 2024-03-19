const rentCarRepo = require("../../repository/rent-car");

exports.carsSearch = (date, totalPassanger) => {
  const data = rentCarRepo.carsSearch(date, totalPassanger);
  return data;
};
