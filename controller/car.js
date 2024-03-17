const carUseCase = require("../usecase/car");

exports.getAllCars = (req, res) => {
  const data = carUseCase.getAllCars();

  const response = {
    data,
    message: null,
  };

  res.status(200).json(response);
};

exports.postCar = (req, res) => {
  // const {
  //   id,
  //   plate,
  //   tranmission,
  //   manufacture,
  //   model,
  //   available,
  //   type,
  //   year,
  //   options,
  //   specs,
  // } = req.body;

  carUseCase.postCar(req);

  res.status(201).json({
    data: req.body,
    message: null,
  });
};
