//? Stok adetleri tanımlama
let cpuStok = [10, 20, 15, 12, 16, 22, 30];
let mainBoardStok = [12, 15, 20, 22, 24, 30, 32];

//? Yerel dosyadan veri çek
fetch("data.json")
  .then((res) => res.json())
  .then((data) => getData(data));

//? Çekilen veriyi ayıkla
const getData = (data) => {
  //? CPU verisini ayıkla
  const cpuData = data.cpu;

  //? CPU isimlerini map() ile Select-Box'a bastır
  cpuData.map((item) => {
    document.getElementById("cpu-select").innerHTML += `
    <option value="${item.name}">${item.name}</option>
    `;
  });

  //? Main-Board verisini ayıkla
  const mainBoardData = data.mainBoard;
  mainBoardData.map((main) => {
    document.getElementById("main-board-select").innerHTML += `
  <option value="${main.name}">${main.name}</option>
  `;
  });

  //? Form öğesindeki select box dseçimlerini yakalama
  const form = document.querySelector("form");
  form.addEventListener("change", (e) => {
    //? Eğer CPU seçilirse
    if (e.target.className === "form-select cpu-select") {
      const cpuDiv = document.querySelector(".cpu-div");
      switch (e.target.value) {
        case "Intel Core i9 12900KS":
          cpuDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${cpuData[0].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col text-start">
            <div class="card-body">
              <h5 class="card-title">${cpuData[0].name}</h5>
              <p class="card-text">Özellikleri: ${cpuData[0].description}</p>
              <p>Fiyatı: ${cpuData[0].price} TL</p>
              <p>Stok Adedi: ${cpuStok[0]} </p>
            </div>
          </div>
        </div>
        </div>
        `;
          break;
        case "AMD Ryzen™ 9 7900X":
          cpuDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${cpuData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                  <h5 class="card-title">${cpuData[1].name}</h5>
                  <p class="card-text">Özellikleri: ${cpuData[1].description}</p>
                  <p>Fiyatı: ${cpuData[1].price} TL</p>
                  <p>Stok Adedi: ${cpuStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "Intel Core i7 12700K":
          cpuDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0 justify-content-center align-content-center">
                  <div class="col-md-4">
                    <img
                      src=${cpuData[2].img}
                      class="img-fluid"
                      alt=" "
                    />
                  </div>
                  <div class="col-md-8 text-start">
                    <div class="card-body">
                      <h5 class="card-title">${cpuData[2].name}</h5>
                      <p class="card-text">Özellikleri: ${cpuData[2].description}</p>
                      <p>Fiyatı: ${cpuData[2].price} TL</p>
                      <p>Stok Adedi: ${cpuStok[2]} </p>
                    </div>
                  </div>
                </div>
                </div>
                `;
          break;
        case "AMD Ryzen™5 7600X":
          cpuDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${cpuData[3].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${cpuData[3].name}</h5>
                          <p class="card-text">Özellikleri: ${cpuData[3].description}</p>
                          <p>Fiyatı: ${cpuData[3].price} TL</p>
                          <p>Stok Adedi: ${cpuStok[3]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "Intel Core i5 13600KF":
          cpuDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${cpuData[4].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${cpuData[4].name}</h5>
                              <p class="card-text">Özellikleri: ${cpuData[4].description}</p>
                              <p>Fiyatı: ${cpuData[4].price} TL</p>
                              <p>Stok Adedi: ${cpuStok[4]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "AMD Ryzen™3 4100":
          cpuDiv.innerHTML = `
                            <div class="card mb-3" style="max-width: 540px">
                            <div class="row g-0 justify-content-center align-content-center">
                              <div class="col-md-4">
                                <img
                                  src=${cpuData[5].img}
                                  class="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div class="col-md-8 text-start">
                                <div class="card-body">
                                  <h5 class="card-title">${cpuData[5].name}</h5>
                                  <p class="card-text">Özellikleri: ${cpuData[5].description}</p>
                                  <p>Fiyatı: ${cpuData[5].price} TL</p>
                                  <p>Stok Adedi: ${cpuStok[5]} </p>
                                </div>
                              </div>
                            </div>
                            </div>
                            `;
          break;
        case "Intel Core i3 10320":
          cpuDiv.innerHTML = `
                                <div class="card mb-3" style="max-width: 540px">
                                <div class="row g-0 justify-content-center align-content-center">
                                  <div class="col-md-4">
                                    <img
                                      src=${cpuData[6].img}
                                      class="img-fluid"
                                      alt=" "
                                    />
                                  </div>
                                  <div class="col-md-8 text-start">
                                    <div class="card-body">
                                      <h5 class="card-title">${cpuData[6].name}</h5>
                                      <p class="card-text">Özellikleri: ${cpuData[6].description}</p>
                                      <p>Fiyatı: ${cpuData[6].price} TL</p>
                                      <p>Stok Adedi: ${cpuStok[6]} </p>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                `;
          break;
        default:
          break;
      }
    }

    //? Eğer Ana Kart seçilirse
    if (e.target.className === "form-select main-board-select") {
      const mainBoardDiv = document.querySelector(".main-board-div");
      switch (e.target.value) {
        case "MSI MPG Z790 EDGE WIFI":
          mainBoardDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${mainBoardData[0].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title">${mainBoardData[0].name}</h5>
              <p class="card-text">Özellikleri: ${mainBoardData[0].description}</p>
              <p>Fiyatı: ${mainBoardData[0].price} TL</p>
              <p>Stok Adedi: ${mainBoardStok[0]} </p>
            </div>
          </div>
        </div>
        </div>
          `;
          break;

        case "ASUS TUF GAMING H670-PRO WIFI D4":
          mainBoardDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${mainBoardData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                  <h5 class="card-title">${mainBoardData[1].name}</h5>
                  <p class="card-text">Özellikleri: ${mainBoardData[1].description}</p>
                  <p>Fiyatı: ${mainBoardData[1].price} TL</p>
                  <p>Stok Adedi: ${mainBoardStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "MSI MAG B660M BAZOOKA":
          mainBoardDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0 justify-content-center align-content-center">
                  <div class="col-md-4">
                    <img
                      src=${mainBoardData[2].img}
                      class="img-fluid"
                      alt=" "
                    />
                  </div>
                  <div class="col-md-8 text-start">
                    <div class="card-body">
                      <h5 class="card-title">${mainBoardData[2].name}</h5>
                      <p class="card-text">Özellikleri: ${mainBoardData[2].description}</p>
                      <p>Fiyatı: ${mainBoardData[2].price} TL</p>
                      <p>Stok Adedi: ${mainBoardStok[2]} </p>
                    </div>
                  </div>
                </div>
                </div>
                `;
          break;
        case "MSI PRO B760-P WIFI":
          mainBoardDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${mainBoardData[3].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${mainBoardData[3].name}</h5>
                          <p class="card-text">Özellikleri: ${mainBoardData[3].description}</p>
                          <p>Fiyatı: ${mainBoardData[3].price} TL</p>
                          <p>Stok Adedi: ${mainBoardStok[3]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "MSI PRO B660M-P DDR4":
          mainBoardDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${mainBoardData[4].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${mainBoardData[4].name}</h5>
                              <p class="card-text">Özellikleri: ${cpuData[4].description}</p>
                              <p>Fiyatı: ${mainBoardData[4].price} TL</p>
                              <p>Stok Adedi: ${mainBoardStok[4]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "GIGABYTE B660M DS3H":
          mainBoardDiv.innerHTML = `
                            <div class="card mb-3" style="max-width: 540px">
                            <div class="row g-0 justify-content-center align-content-center">
                              <div class="col-md-4">
                                <img
                                  src=${mainBoardData[5].img}
                                  class="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div class="col-md-8 text-start">
                                <div class="card-body">
                                  <h5 class="card-title">${mainBoardData[5].name}</h5>
                                  <p class="card-text">Özellikleri: ${cpuData[5].description}</p>
                                  <p>Fiyatı: ${mainBoardData[5].price} TL</p>
                                  <p>Stok Adedi: ${mainBoardStok[5]} </p>
                                </div>
                              </div>
                            </div>
                            </div>
                            `;
          break;
        case "MSI PRO H610M-G":
          mainBoardDiv.innerHTML = `
                                <div class="card mb-3" style="max-width: 540px">
                                <div class="row g-0 justify-content-center align-content-center">
                                  <div class="col-md-4">
                                    <img
                                      src=${mainBoardData[6].img}
                                      class="img-fluid"
                                      alt=" "
                                    />
                                  </div>
                                  <div class="col-md-8 text-start">
                                    <div class="card-body">
                                      <h5 class="card-title">${mainBoardData[6].name}</h5>
                                      <p class="card-text">Özellikleri: ${mainBoardData[6].description}</p>
                                      <p>Fiyatı: ${mainBoardData[6].price} TL</p>
                                      <p>Stok Adedi:${mainBoardStok[6]} </p>
                                    </div>
                                  </div>
                                </div>
                                </div>
                                `;
          break;

        default:
          break;
      }
    }
  });
};
