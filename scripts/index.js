import cars from "./cars.js";

const cardCar = document.getElementById("card-car");
const dateRent = document.getElementById("date");
const totalPassanger = document.getElementById("total-passanger");
const buttonSearchCar = document.getElementById("search-submit");
const sortSelect = document.getElementById("sort");

buttonSearchCar.addEventListener("submit", (event) => {
  event.preventDefault();

  let printSearchCarCard = "";
  cars.carsSearch(dateRent.value, totalPassanger.value).map((car) => {
    printSearchCarCard += `<div class="col-md-4 p-1 d-flex">
                <div class="card flex-fill">
                  <img
                    src="${car.image}"
                    class="card-img-top p-4"
                    alt="car sample"
                  />
                  <div class="card-body d-flex flex-column">
                    <p style="font-weight: 500">${car.model}</p>
                    <h5 class="card-title">${car.rentPerDay}</h5>
                    <p class="card-text">
                      ${car.description}
                    </p>
                    <p>
                      <span
                        ><img
                          src="Public/Icons/icon_jumlahOrang.png"
                          alt="icon jumlah orang"
                      /></span>
                       ${car.capacity} Orang
                    </p>
                    <p>
                      <span
                        ><img
                          src="Public/Icons/icon_Spesifikasi.png"
                          alt="icon spesifikasi"
                      /></span>
                      ${car.transmission}
                    </p>
                    <p>
                      <span
                        ><img src="Public/Icons/icon_date.png" alt="icon date"
                      /></span>
                      Tahun ${car.year}
                    </p>
                    <div class="mt-auto">
                    <a
                      href="#"
                      class="btn btn-success d-flex flex-fill justify-content-center"
                      style="
                        background-color: #5cb85f;
                        font-weight: 500;
                        color: white;
                      "
                      >Pilih Mobil</a
                    >
                    </div>
                  </div>
                </div>
              </div>`;
  });
  cardCar.innerHTML = printSearchCarCard;
});

function printSortByYear(carsData) {
  let printSearchCarCard = "";
  carsData.map((car) => {
    printSearchCarCard += `<div class="col-md-4 p-1 d-flex">
                <div class="card flex-fill">
                  <img
                    src="${car.image}"
                    class="card-img-top p-4"
                    alt="car sample"
                  />
                  <div class="card-body d-flex flex-column">
                    <p style="font-weight: 500">${car.model}</p>
                    <h5 class="card-title">${car.rentPerDay}</h5>
                    <p class="card-text">
                      ${car.description}
                    </p>
                    <p>
                      <span
                        ><img
                          src="Public/Icons/icon_jumlahOrang.png"
                          alt="icon jumlah orang"
                      /></span>
                       ${car.capacity} Orang
                    </p>
                    <p>
                      <span
                        ><img
                          src="Public/Icons/icon_Spesifikasi.png"
                          alt="icon spesifikasi"
                      /></span>
                      ${car.transmission}
                    </p>
                    <p>
                      <span
                        ><img src="Public/Icons/icon_date.png" alt="icon date"
                      /></span>
                      Tahun ${car.year}
                    </p>
                    <div class="mt-auto">
                    <a
                      href="#"
                      class="btn btn-success d-flex flex-fill justify-content-center"
                      style="
                        background-color: #5cb85f;
                        font-weight: 500;
                        color: white;
                      "
                      >Pilih Mobil</a
                    >
                    </div>
                  </div>
                </div>
              </div>`;
  });
  cardCar.innerHTML = printSearchCarCard;
}

sortSelect.addEventListener("change", (event) => {
  event.preventDefault();
  let carsData = [...cars.carsSearch(dateRent.value, totalPassanger.value)];
  if (sortSelect.value === "Tahun-terbaru") {
    carsData = cars.carsSortByYearDescending(carsData);
  } else if (sortSelect.value === "Tahun-terlama") {
    carsData = cars.carsSortByYearAscending(carsData);
  }
  printSortByYear(carsData);
});
