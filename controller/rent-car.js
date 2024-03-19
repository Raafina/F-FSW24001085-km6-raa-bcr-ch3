const rentCarUseCase = require("../usecase/rent-car");

exports.carsSearch = (req, res) => {
  const { date, totalPassanger } = req.body;
  const data = rentCarUseCase.carsSearch(date, totalPassanger);
  res.render("rent-car", {
    layout: "layouts/main-layout",
    title: "Rent Car",
    data,
  });
};
