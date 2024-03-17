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

exports.postCar = (req, res) => {
  const data = carUseCase.postCar(req);

  const response = {
    data,
    message: "Data berhasil ditambahkan",
  };
  res.status(201).json(response);
};
