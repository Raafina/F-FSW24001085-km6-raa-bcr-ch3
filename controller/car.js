const carUseCase = require("../usecase/car");

exports.getAllCars = (req, res) => {
  const data = carUseCase.getAllCars();
  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.getCar = (req, res) => {
  const data = carUseCase.getCar(req);
  const response = {
    data,
    message: null,
  };
  res.status(200).json(response);
};

exports.addCar = (req, res) => {
  const data = carUseCase.addCar(req);

  const response = {
    data,
    message: "Data berhasil ditambahkan",
  };
  res.status(201).json(response);
};

exports.updateCar = (req, res) => {
  const data = carUseCase.updateCar(req);

  const response = {
    data,
    message: "Data berhasil diupdate",
  };
  res.status(201).json(response);
};

exports.deleteCar = (req, res) => {
  const data = carUseCase.deleteCar(req);

  const response = {
    data,
    message: "Data berhasil dihapus",
  };
  res.status(201).json(response);
};
