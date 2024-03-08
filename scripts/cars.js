import carsData from "./data/cars.json" assert { type: "json" };

class Cars {
  getAllCars() {
    return carsData;
  }

  filterCarAvailable() {
    const carsAvailable = [];
    carsData.map((car) => {
      if (car.available == true) {
        carsAvailable.push(car);
      }
    });
    return carsAvailable;
  }

  carsSearch(date, totalPassanger) {
    const carAvailable = this.filterCarAvailable();
    const carsSearched = carAvailable.filter(
      (car) =>
        new Date(car.availableAt.substring(0, 10)) <= new Date(date) &&
        totalPassanger <= car.capacity
    );
    return carsSearched;
  }

  carsSortByYearAscending(cars) {
    cars.sort((car1, car2) => car1.year - car2.year);
    return cars;
  }

  carsSortByYearDescending(cars) {
    cars.sort((car1, car2) => car2.year - car1.year);
    return cars;
  }
}

export default new Cars();
