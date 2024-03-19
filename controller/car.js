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
  validatorInput(req, res);
  const response = {
    data,
    message: "Data berhasil ditambahkan",
  };
  res.status(201).json(response);
};

exports.updateCar = (req, res) => {
  const data = carUseCase.updateCar(req);
  validatorInput(req, res);
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

validatorInput = (req, res) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return res.status(400).json({
      data: null,
      message: "plate must be filled!",
    });
  }
  if (!manufacture || manufacture == "") {
    return res.status(400).json({
      data: null,
      message: "manufacture must be filled!",
    });
  }
  if (!model || model == "") {
    return res.status(400).json({
      data: null,
      message: "model must be filled!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return res.status(400).json({
      data: null,
      message: "rentPerDay must be filled!",
    });
  }
  if (!capacity || capacity == "") {
    return res.status(400).json({
      data: null,
      message: "capacity must be filled!",
    });
  }
  if (!description || description == "") {
    return res.status(400).json({
      data: null,
      message: "description must be filled!",
    });
  }
  if (!availableAt || availableAt == "") {
    return res.status(400).json({
      data: null,
      message: "availableAt must be filled!",
    });
  }
  if (!transmission || transmission == "") {
    return res.status(400).json({
      data: null,
      message: "transmission must be filled!",
    });
  }
  if (!available || available == "") {
    return res.status(400).json({
      data: null,
      message: "available must be filled!",
    });
  }
  if (!type || type == "") {
    return res.status(400).json({
      data: null,
      message: "type must be filled!",
    });
  }
  if (!year || year == "") {
    return res.status(400).json({
      data: null,
      message: "year must be filled!",
    });
  }
  if (!options || options == "") {
    return res.status(400).json({
      data: null,
      message: "options must be filled!",
    });
  }
  if (!specs || specs == "") {
    return res.status(400).json({
      data: null,
      message: "specs must be filled!",
    });
  }
};
