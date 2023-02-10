//? Stok adetleri tanımlama
let cpuStok = [10, 20, 15, 12, 16, 22, 30];
let mainBoardStok = [12, 15, 20, 22, 24, 36, 32];
let ramStok = [12, 15, 20, 22, 24, 36, 32];
let gpuStok = [30, 20, 22, 24, 26, 32, 40];
let monitorStok = [22, 18, 20, 36, 18, 16, 20];
let kasaStok = [20, 18, 22, 26, 28, 36, 30];
let ssdStok = [22, 20, 18, 36, 18, 26, 40];
let hddStok = [20, 22, 24, 26, 20, 32, 34];
let coldStok = [28, 16, 14, 24, 26, 46, 40];
let powerStok = [30, 20, 36, 28, 26, 40, 42];

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
  //?  Main-Board isimlerini map() ile Select-Box'a bastır
  mainBoardData.map((main) => {
    document.getElementById("main-board-select").innerHTML += `
  <option value="${main.name}">${main.name}</option>
  `;
  });

  //? RAM verisini ayıkla
  const ramData = data.ram;
  //?  RAM isimlerini map() ile Select-Box'a bastır
  ramData.map((ram) => {
    document.getElementById("ram-select").innerHTML += `
  <option value="${ram.name}">${ram.name}</option>
  `;
  });

  //? GPU verisini ayıkla
  const gpuData = data.gpu;
  //?  GPU isimlerini map() ile Select-Box'a bastır
  gpuData.map((gpu) => {
    document.getElementById("gpu-select").innerHTML += `
  <option value="${gpu.name}">${gpu.name}</option>
  `;
  });

  //? Monitör verisini ayıkla
  const monitorData = data.monitor;
  //?  MOnitor isimlerini map() ile Select-Box'a bastır
  monitorData.map((monitor) => {
    document.getElementById("monitor-select").innerHTML += `
  <option value="${monitor.name}">${monitor.name}</option>
  `;
  });

  //? Kasa verisini ayıkla
  const kasaData = data.kasa;
  //?  GPU isimlerini map() ile Select-Box'a bastır
  kasaData.map((kasa) => {
    document.getElementById("kasa-select").innerHTML += `
  <option value="${kasa.name}">${kasa.name}</option>
  `;
  });

  //? SSD verisini ayıkla
  const ssdData = data.ssd;
  //?  SSD isimlerini map() ile Select-Box'a bastır
  ssdData.map((ssd) => {
    document.getElementById("ssd-select").innerHTML += `
  <option value="${ssd.name}">${ssd.name}</option>
  `;
  });

  //? HDD verisini ayıkla
  const hddData = data.hdd;
  //?  HDD isimlerini map() ile Select-Box'a bastır
  hddData.map((hdd) => {
    document.getElementById("hdd-select").innerHTML += `
  <option value="${hdd.name}">${hdd.name}</option>
  `;
  });

  //? Güç Kaynağı verisini ayıkla
  const powerData = data.power;
  //?  Güç Kaynağı isimlerini map() ile Select-Box'a bastır
  powerData.map((power) => {
    document.getElementById("power-select").innerHTML += `
  <option value="${power.name}">${power.name}</option>
  `;
  });

  //? Soğutma Sistemleri verisini ayıkla
  const coldData = data.cold;
  //?  Soğutma sistemleri  isimlerini map() ile Select-Box'a bastır
  coldData.map((cold) => {
    document.getElementById("cold-select").innerHTML += `
  <option value="${cold.name}">${cold.name}</option>
  `;
  });

  //? Form öğesindeki select box dseçimlerini yakalama
  const form = document.querySelector("form");
  form.addEventListener("change", (e) => {
    //? Eğer CPU Select Box'tan Seçim Yapılırsa
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

    //? Eğer Ana Kart Select Box'tan Seçim Yapılırsa
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

    //? Eğer Bellek (RAM) Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select ram-select") {
      const ramDiv = document.querySelector(".ram-div");
      switch (e.target.value) {
        case "GSKILL 16GB (2x8GB)":
          ramDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${ramData[0].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title">${ramData[0].name}</h5>
              <p class="card-text">Özellikleri: ${ramData[0].description}</p>
              <p>Fiyatı: ${ramData[0].price} TL</p>
              <p>Stok Adedi: ${ramStok[0]} </p>
            </div>
          </div>
        </div>
        </div>
          `;
          break;
        case "XPG 16GB (2x8GB)":
          ramDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${ramData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                <h5 class="card-title">${ramData[1].name}</h5>
                <p class="card-text">Özellikleri: ${ramData[0].description}
                  <p>Fiyatı: ${ramData[1].price} TL</p>
                  <p>Stok Adedi: ${ramStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "Crucial 8GB (1x8GB)":
          ramDiv.innerHTML = `
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
        case "Kingston 8GB (1x8GB)":
          ramDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${ramData[3].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${ramData[3].name}</h5>
                          <p class="card-text">Özellikleri: ${ramData[3].price} TL</p>
                          <p>Stok Adedi: ${ramStok[3]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "Kıngston 8GB (1x8GB) Fury Beast":
          ramDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${ramData[4].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${ramData[4].name}</h5>
                              <p class="card-text">Özellikleri: ${cpuData[4].description}</p>
                              <p>Fiyatı: ${ramData[4].price} TL</p>
                              <p>Stok Adedi: ${ramStok[4]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "Kıngston 8GB (1x8GB) Fury Beast":
          ramDiv.innerHTML = `
                            <div class="card mb-3" style="max-width: 540px">
                            <div class="row g-0 justify-content-center align-content-center">
                              <div class="col-md-4">
                                <img
                                  src=${ramData[5].img}
                                  class="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div class="col-md-8 text-start">
                                <div class="card-body">
                                  <h5 class="card-title">${ramData[5].name}</h5>
                                  <p class="card-text">Özellikleri: ${cpuData[5].description}</p>
                                  <p>Fiyatı: ${ramData[5].price} TL</p>
                                  <p>Stok Adedi: ${ramStok[5]} </p>
                                </div>
                              </div>
                            </div>
                            </div>
                            `;
          break;
        case "GSKILL 8GB (1x8GB) RipjawsV":
          ramDiv.innerHTML = `
                                <div class="card mb-3" style="max-width: 540px">
                                <div class="row g-0 justify-content-center align-content-center">
                                  <div class="col-md-4">
                                    <img
                                      src=${ramData[6].img}
                                      class="img-fluid"
                                      alt=" "
                                    />
                                  </div>
                                  <div class="col-md-8 text-start">
                                    <div class="card-body">
                                      <h5 class="card-title">${ramData[6].name}</h5>
                                      <p class="card-text">Özellikleri: ${ramData[6].description}</p>
                                      <p>Fiyatı: ${ramData[6].price} TL</p>
                                      <p>Stok Adedi:${ramStok[6]} </p>
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

    //? Eğer Kasa Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select kasa-select") {
      const kasaDiv = document.querySelector(".kasa-div");
      switch (e.target.value) {
        case "COUGAR BLAZER":
          kasaDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0 justify-content-center align-content-center">
        <div class="col-md-4">
          <img
            src=${kasaData[0].img}
            class="img-fluid"
            alt=" "
          />
        </div>
        <div class="col-md-8 text-start">
          <div class="card-body">
            <h5 class="card-title">${kasaData[0].name}</h5>
            <p class="card-text">Özellikleri: ${kasaData[0].description}</p>
            <p>Fiyatı: ${kasaData[0].price} TL</p>
            <p>Stok Adedi: ${kasaStok[0]} </p>
          </div>
        </div>
      </div>
      </div>
        `;
          break;
        case "XIGMATEK X7":
          kasaDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0 justify-content-center align-content-center">
            <div class="col-md-4">
              <img
                src=${kasaData[1].img}
                class="img-fluid"
                alt=" "
              />
            </div>
            <div class="col-md-8 text-start">
              <div class="card-body">
              <h5 class="card-title">${kasaData[1].name}</h5>
              <p class="card-text">Özellikleri: ${kasaData[0].description}
                <p>Stok Adedi: ${kasaStok[1]} </p>
              </div>
            </div>
          </div>
          </div>
          `;
          break;
        case "THERMALTAKE DIVIDER":
          kasaDiv.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0 justify-content-center align-content-center">
                <div class="col-md-4">
                  <img
                    src=${kasaData[2].img}
                    class="img-fluid"
                    alt=" "
                  />
                </div>
                <div class="col-md-8 text-start">
                  <div class="card-body">
                    <h5 class="card-title">${kasaData[2].name}</h5>
                    <p class="card-text">Özellikleri: ${kasaData[2].description}</p>
                    <p>Fiyatı: ${kasaData[2].price} TL</p>
                    <p>Stok Adedi: ${kasaStok[2]} </p>
                  </div>
                </div>
              </div>
              </div>
              `;
          break;
        case "MSI MAG VAMPIRIC":
          console.log(e.target.value);
          kasaDiv.innerHTML = `
                  <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0 justify-content-center align-content-center">
                    <div class="col-md-4">
                      <img
                        src=${kasaData[3].img}
                        class="img-fluid"
                        alt=" "
                      />
                    </div>
                    <div class="col-md-8 text-start">
                      <div class="card-body">
                        <h5 class="card-title">${kasaData[3].name}</h5>
                        <p class="card-text">Özellikleri: ${kasaData[3].price} TL</p>
                        <p>Stok Adedi: ${kasaStok[3]} </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  `;
          break;
        case "COUGAR MX440 MESH RGB":
          kasaDiv.innerHTML = `
                      <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0 justify-content-center align-content-center">
                        <div class="col-md-4">
                          <img
                            src=${kasaData[4].img}
                            class="img-fluid"
                            alt=" "
                          />
                        </div>
                        <div class="col-md-8 text-start">
                          <div class="card-body">
                            <h5 class="card-title">${kasaData[4].name}</h5>
                            <p class="card-text">Özellikleri: ${kasaData[4].description}</p>
                            <p>Fiyatı: ${kasaData[4].price} TL</p>
                            <p>Stok Adedi: ${kasaStok[4]} </p>
                          </div>
                        </div>
                      </div>
                      </div>
                      `;
          break;
        case "POWERBOOST VK-M202B":
          kasaDiv.innerHTML = `
                          <div class="card mb-3" style="max-width: 540px">
                          <div class="row g-0 justify-content-center align-content-center">
                            <div class="col-md-4">
                              <img
                                src=${kasaData[5].img}
                                class="img-fluid"
                                alt=" "
                              />
                            </div>
                            <div class="col-md-8 text-start">
                              <div class="card-body">
                                <h5 class="card-title">${kasaData[5].name}</h5>
                                <p class="card-text">Özellikleri: ${kasaData[5].description}</p>
                                <p>Fiyatı: ${kasaData[5].price} TL</p>
                                <p>Stok Adedi: ${kasaStok[5]} </p>
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

    //? Eğer GPU Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select gpu-select") {
      const gpuDiv = document.querySelector(".gpu-div");
      switch (e.target.value) {
        case "GIGABYTE GeForce RTX 3090":
          gpuDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0 justify-content-center align-content-center">
        <div class="col-md-4">
          <img
            src=${gpuData[0].img}
            class="img-fluid"
            alt=" "
          />
        </div>
        <div class="col-md-8 text-start">
          <div class="card-body">
            <h5 class="card-title">${gpuData[0].name}</h5>
            <p class="card-text">Özellikleri: ${gpuData[0].description}</p>
            <p>Fiyatı: ${gpuData[0].price} TL</p>
            <p>Stok Adedi: ${gpuStok[0]} </p>
          </div>
        </div>
      </div>
      </div>
        `;
          break;
        case "MSI GEFORCE RTX 3080":
          gpuDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0 justify-content-center align-content-center">
            <div class="col-md-4">
              <img
                src=${gpuData[1].img}
                class="img-fluid"
                alt=" "
              />
            </div>
            <div class="col-md-8 text-start">
              <div class="card-body">
              <h5 class="card-title">${gpuData[1].name}</h5>
              <p class="card-text">Özellikleri: ${gpuData[0].description}
                <p>Stok Adedi: ${gpuStok[1]} </p>
              </div>
            </div>
          </div>
          </div>
          `;
          break;
        case "ASUS GeForce TUF RTX3070 TI":
          gpuDiv.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0 justify-content-center align-content-center">
                <div class="col-md-4">
                  <img
                    src=${gpuData[2].img}
                    class="img-fluid"
                    alt=" "
                  />
                </div>
                <div class="col-md-8 text-start">
                  <div class="card-body">
                    <h5 class="card-title">${gpuData[2].name}</h5>
                    <p class="card-text">Özellikleri: ${gpuData[2].description}</p>
                    <p>Fiyatı: ${gpuData[2].price} TL</p>
                    <p>Stok Adedi: ${gpuStok[2]} </p>
                  </div>
                </div>
              </div>
              </div>
              `;
          break;
        case "MSI GEFORCE RTX 3060 TI":
          console.log(e.target.value);
          gpuDiv.innerHTML = `
                  <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0 justify-content-center align-content-center">
                    <div class="col-md-4">
                      <img
                        src=${gpuData[3].img}
                        class="img-fluid"
                        alt=" "
                      />
                    </div>
                    <div class="col-md-8 text-start">
                      <div class="card-body">
                        <h5 class="card-title">${gpuData[3].name}</h5>
                        <p class="card-text">Özellikleri: ${gpuData[3].price} TL</p>
                        <p>Stok Adedi: ${gpuStok[3]} </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  `;
          break;
        case "MSI GEFORCE RTX 3070 VENTUS":
          gpuDiv.innerHTML = `
                      <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0 justify-content-center align-content-center">
                        <div class="col-md-4">
                          <img
                            src=${gpuData[4].img}
                            class="img-fluid"
                            alt=" "
                          />
                        </div>
                        <div class="col-md-8 text-start">
                          <div class="card-body">
                            <h5 class="card-title">${gpuData[4].name}</h5>
                            <p class="card-text">Özellikleri: ${gpuData[4].description}</p>
                            <p>Fiyatı: ${gpuData[4].price} TL</p>
                            <p>Stok Adedi: ${gpuStok[4]} </p>
                          </div>
                        </div>
                      </div>
                      </div>
                      `;
          break;
        case "MSI GEFORCE GTX 1660 SUPER":
          gpuDiv.innerHTML = `
                          <div class="card mb-3" style="max-width: 540px">
                          <div class="row g-0 justify-content-center align-content-center">
                            <div class="col-md-4">
                              <img
                                src=${gpuData[5].img}
                                class="img-fluid"
                                alt=" "
                              />
                            </div>
                            <div class="col-md-8 text-start">
                              <div class="card-body">
                                <h5 class="card-title">${gpuData[5].name}</h5>
                                <p class="card-text">Özellikleri: ${gpuData[5].description}</p>
                                <p>Fiyatı: ${gpuData[5].price} TL</p>
                                <p>Stok Adedi: ${gpuStok[5]} </p>
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

    //? Eğer Monitör Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select monitor-select") {
      const monitorDiv = document.querySelector(".monitor-div");
      switch (e.target.value) {
        case "ASUS 27' PA279CV":
          monitorDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px">
      <div class="row g-0 justify-content-center align-content-center">
        <div class="col-md-4">
          <img
            src=${monitorData[0].img}
            class="img-fluid"
            alt=" "
          />
        </div>
        <div class="col-md-8 text-start">
          <div class="card-body">
            <h5 class="card-title">${monitorData[0].name}</h5>
            <p class="card-text">Özellikleri: ${monitorData[0].description}</p>
            <p>Fiyatı: ${monitorData[0].price} TL</p>
            <p>Stok Adedi: ${monitorStok[0]} </p>
          </div>
        </div>
      </div>
      </div>
        `;
          break;
        case "ASUS 27' VG279QM":
          monitorDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0 justify-content-center align-content-center">
            <div class="col-md-4">
              <img
                src=${monitorData[1].img}
                class="img-fluid"
                alt=" "
              />
            </div>
            <div class="col-md-8 text-start">
              <div class="card-body">
              <h5 class="card-title">${monitorData[1].name}</h5>
              <p class="card-text">Özellikleri: ${monitorData[1].description}>
             `;
        case "ASUS 27' PA279CV":
          monitorDiv.innerHTML = `
              <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0 justify-content-center align-content-center">
                <div class="col-md-4">
                  <img
                    src=${monitorData[1].img}
                    class="img-fluid"
                    alt=" "
                  />
                </div>
                <div class="col-md-8 text-start">
                  <div class="card-body">
                    <h5 class="card-title">${monitorData[1].name}</h5>
                    <p class="card-text">Özellikleri: ${monitorData[1].description}</p>
                    <p>Fiyatı: ${monitorData[1].price} TL</p>
                    <p>Stok Adedi: ${monitorStok[1]} </p>
                  </div>
                </div>
              </div>
              </div>
              `;
          break;
        case "VIEWSONIC 32' VX3218-PC-MHDJ":
          monitorDiv.innerHTML = `
                  <div class="card mb-3" style="max-width: 540px">
                  <div class="row g-0 justify-content-center align-content-center">
                    <div class="col-md-4">
                      <img
                        src=${monitorData[3].img}
                        class="img-fluid"
                        alt=" "
                      />
                    </div>
                    <div class="col-md-8 text-start">
                      <div class="card-body">
                      <h5 class="card-title">${monitorData[3].name}</h5>
                      <p class="card-text">Özellikleri: ${monitorData[3].description}</p>
                        <p class="card-text">Özellikleri: ${monitorData[3].price} TL</p>
                        <p>Stok Adedi: ${monitorStok[3]} </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  `;
          break;
        case "ASUS 23,8' ROG STRIX":
          monitorDiv.innerHTML = `
                      <div class="card mb-3" style="max-width: 540px">
                      <div class="row g-0 justify-content-center align-content-center">
                        <div class="col-md-4">
                          <img
                            src=${monitorData[4].img}
                            class="img-fluid"
                            alt=" "
                          />
                        </div>
                        <div class="col-md-8 text-start">
                          <div class="card-body">
                            <h5 class="card-title">${monitorData[4].name}</h5>
                            <p class="card-text">Özellikleri: ${monitorData[4].description}</p>
                            <p>Fiyatı: ${monitorData[4].price} TL</p>
                            <p>Stok Adedi: ${monitorStok[4]} </p>
                          </div>
                        </div>
                      </div>
                      </div>
                      `;
          break;
        case "ASUS 21,5' VP228QG Full HD":
          monitorDiv.innerHTML = `
                          <div class="card mb-3" style="max-width: 540px">
                          <div class="row g-0 justify-content-center align-content-center">
                            <div class="col-md-4">
                              <img
                                src=${monitorData[5].img}
                                class="img-fluid"
                                alt=" "
                              />
                            </div>
                            <div class="col-md-8 text-start">
                              <div class="card-body">
                                <h5 class="card-title">${monitorData[5].name}</h5>
                                <p class="card-text">Özellikleri: ${monitorData[5].description}</p>
                                <p>Fiyatı: ${monitorData[5].price} TL</p>
                                <p>Stok Adedi: ${monitorStok[5]} </p>
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

    //? Eğer SSD Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select ssd-select") {
      const ssdDiv = document.querySelector(".ssd-div");
      switch (e.target.value) {
        case "Samsung 2TB 980 PRO":
          ssdDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${ssdData[0].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title">${ssdData[0].name}</h5>
              <p class="card-text">Özellikleri: ${kasaData[0].description}</p>
              <p>Fiyatı: ${ssdData[0].price} TL</p>
              <p>Stok Adedi: ${ssdStok[0]} </p>
            </div>
          </div>
        </div>
        </div>
          `;
          break;
        case "Crucial 2TB P5 Plus Serisi":
          ssdDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${ssdData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                <h5 class="card-title">${ssdData[1].name}</h5>
                <p class="card-text">Özellikleri: ${ssdData[0].description}
                  <p>Stok Adedi: ${ssdStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "Samsung 2TB T7 Shield":
          ssdDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0 justify-content-center align-content-center">
                  <div class="col-md-4">
                    <img
                      src=${ssdData[2].img}
                      class="img-fluid"
                      alt=" "
                    />
                  </div>
                  <div class="col-md-8 text-start">
                    <div class="card-body">
                      <h5 class="card-title">${ssdData[2].name}</h5>
                      <p class="card-text">Özellikleri: ${ssdData[2].description}</p>
                      <p>Fiyatı: ${ssdData[2].price} TL</p>
                      <p>Stok Adedi: ${ssdStok[2]} </p>
                    </div>
                  </div>
                </div>
                </div>
                `;
          break;
        case "ROG Strix SQ7":
          console.log(e.target.value);
          ssdDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${ssdData[3].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${ssdData[3].name}</h5>
                          <p class="card-text">Özellikleri: ${ssdData[3].price} TL</p>
                          <p>Stok Adedi: ${ssdStok[3]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "Kioxia 2TB Exceria PRO Serisi":
          ssdDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${ssdData[4].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${ssdData[4].name}</h5>
                              <p class="card-text">Özellikleri: ${ssdData[4].description}</p>
                              <p>Fiyatı: ${ssdData[4].price} TL</p>
                              <p>Stok Adedi: ${ssdStok[4]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "Samsung 2TB 870 EVO":
          ssdDiv.innerHTML = `
                            <div class="card mb-3" style="max-width: 540px">
                            <div class="row g-0 justify-content-center align-content-center">
                              <div class="col-md-4">
                                <img
                                  src=${ssdData[5].img}
                                  class="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div class="col-md-8 text-start">
                                <div class="card-body">
                                  <h5 class="card-title">${ssdData[5].name}</h5>
                                  <p class="card-text">Özellikleri: ${ssdData[5].description}</p>
                                  <p>Fiyatı: ${ssdData[5].price} TL</p>
                                  <p>Stok Adedi: ${ssdStok[5]} </p>
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
    //? Eğer HDD Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select hdd-select") {
      const hddDiv = document.querySelector(".hdd-div");
      switch (e.target.value) {
        case "Toshiba 3.5' 8TB":
          hddDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${hddData[0].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title">${hddData[0].name}</h5>
              <p class="card-text">Özellikleri: ${hddData[0].description}</p>
              <p>Fiyatı: ${hddData[0].price} TL</p>
              <p>Stok Adedi: ${hddStok[0]} </p>
            </div>
          </div>
        </div>
        </div>
          `;
          break;
        case "Seagate 2.5' 1TB Barracuda":
          hddDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${hddData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                <h5 class="card-title">${hddData[1].name}</h5>
                <p class="card-text">Özellikleri: ${hddData[0].description}
                  <p>Stok Adedi: ${hddStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "Samsung 2TB T7 Shield":
          hddDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0 justify-content-center align-content-center">
                  <div class="col-md-4">
                    <img
                      src=${hddData[2].img}
                      class="img-fluid"
                      alt=" "
                    />
                  </div>
                  <div class="col-md-8 text-start">
                    <div class="card-body">
                      <h5 class="card-title">${hddData[2].name}</h5>
                      <p class="card-text">Özellikleri: ${hddData[2].description}</p>
                      <p>Fiyatı: ${hddData[2].price} TL</p>
                      <p>Stok Adedi: ${hddStok[2]} </p>
                    </div>
                  </div>
                </div>
                </div>
                `;
          break;
        case "Toshiba 2,5' 1TB L200":
          console.log(e.target.value);
          hddDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${hddData[3].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${hddData[3].name}</h5>
                          <p class="card-text">Özellikleri: ${hddData[3].price} TL</p>
                          <p>Stok Adedi: ${hddStok[3]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "Toshiba 3.5'":
          hddDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${hddData[4].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${hddData[4].name}</h5>
                              <p class="card-text">Özellikleri: ${hddData[4].description}</p>
                              <p>Fiyatı: ${hddData[4].price} TL</p>
                              <p>Stok Adedi: ${hddStok[4]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "WD 1TB Purple Intellipower":
          hddDiv.innerHTML = `
                            <div class="card mb-3" style="max-width: 540px">
                            <div class="row g-0 justify-content-center align-content-center">
                              <div class="col-md-4">
                                <img
                                  src=${hddData[5].img}
                                  class="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div class="col-md-8 text-start">
                                <div class="card-body">
                                  <h5 class="card-title">${hddData[5].name}</h5>
                                  <p class="card-text">Özellikleri: ${hddData[5].description}</p>
                                  <p>Fiyatı: ${hddData[5].price} TL</p>
                                  <p>Stok Adedi: ${hddStok[5]} </p>
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
    //? Eğer Güç Kaynağı Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select power-select") {
      const powerDiv = document.querySelector(".power-div");
      switch (e.target.value) {
        case "THERMALTAKE TOUGHPOWER GF3 1650W":
          powerDiv.innerHTML = `
          <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${powerData[0].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
              <h5 class="card-title">${powerData[0].name}</h5>
              <p class="card-text">Özellikleri: ${powerData[0].description}</p>
              <p>Fiyatı: ${powerData[0].price} TL</p>
              <p>Stok Adedi: ${powerStok[0]} </p>
            </div>
          </div>
        </div>
        </div>
          `;
          break;
        case "THERMALTAKE TOUGHPOWER GF3 1350W":
          powerDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${powerData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                <h5 class="card-title">${powerData[1].name}</h5>
                <p class="card-text">Özellikleri: ${powerData[0].description}
                  <p>Stok Adedi: ${powerStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "COOLER MASTER MWE V2 80 PLUS":
          powerDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0 justify-content-center align-content-center">
                  <div class="col-md-4">
                    <img
                      src=${powerData[2].img}
                      class="img-fluid"
                      alt=" "
                    />
                  </div>
                  <div class="col-md-8 text-start">
                    <div class="card-body">
                      <h5 class="card-title">${powerData[2].name}</h5>
                      <p class="card-text">Özellikleri: ${powerData[2].description}</p>
                      <p>Fiyatı: ${powerData[2].price} TL</p>
                      <p>Stok Adedi: ${powerStok[2]} </p>
                    </div>
                  </div>
                </div>
                </div>
                `;
          break;
        case "ASUS ROG STRIX 850W":
          powerDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${powerData[3].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${powerData[3].name}</h5>
                          <p class="card-text">Özellikleri: ${powerData[3].price} TL</p>
                          <p>Stok Adedi: ${powerStok[3]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "THERMALTAKE TOUGHPOWER GF1 850W":
          powerDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${powerData[4].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${powerData[4].name}</h5>
                              <p class="card-text">Özellikleri: ${hddData[4].description}</p>
                              <p>Fiyatı: ${powerData[4].price} TL</p>
                              <p>Stok Adedi: ${powerStok[4]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "COOLER MASTER MWE 80 PLUS":
          powerDiv.innerHTML = `
                            <div class="card mb-3" style="max-width: 540px">
                            <div class="row g-0 justify-content-center align-content-center">
                              <div class="col-md-4">
                                <img
                                  src=${powerData[5].img}
                                  class="img-fluid"
                                  alt=" "
                                />
                              </div>
                              <div class="col-md-8 text-start">
                                <div class="card-body">
                                  <h5 class="card-title">${powerData[5].name}</h5>
                                  <p class="card-text">Özellikleri: ${hddData[5].description}</p>
                                  <p>Fiyatı: ${powerData[5].price} TL</p>
                                  <p>Stok Adedi: ${powerStok[5]} </p>
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

    //? Eğer Soğutma Sistemi Select Box'tan Seçim Yapılırsa
    if (e.target.className === "form-select cold-select") {
      const coldDiv = document.querySelector(".cold-div");
      switch (e.target.value) {
        case "MSI MPG CORELIQUID K240":
          coldDiv.innerHTML = `
      <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0 justify-content-center align-content-center">
      <div class="col-md-4">
        <img
          src=${coldData[0].img}
          class="img-fluid"
          alt=" "
        />
      </div>
      <div class="col-md-8 text-start">
        <div class="card-body">
          <h5 class="card-title">${coldData[0].name}</h5>
          <p class="card-text">Özellikleri: ${coldData[0].description}</p>
          <p>Fiyatı: ${coldData[0].price} TL</p>
          <p>Stok Adedi: ${coldStok[0]} </p>
        </div>
      </div>
    </div>
    </div>
      `;
          break;
        case "THERMALTAKE FLOE RİİNG RGB":
          coldDiv.innerHTML = `
        <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0 justify-content-center align-content-center">
          <div class="col-md-4">
            <img
              src=${coldData[1].img}
              class="img-fluid"
              alt=" "
            />
          </div>
          <div class="col-md-8 text-start">
            <div class="card-body">
            <h5 class="card-title">${coldData[1].name}</h5>
            <p class="card-text">Özellikleri: ${coldData[1].description}>
           `;
        case "ASUS ROG RYUO 120 RGB":
          coldDiv.innerHTML = `
            <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0 justify-content-center align-content-center">
              <div class="col-md-4">
                <img
                  src=${coldData[1].img}
                  class="img-fluid"
                  alt=" "
                />
              </div>
              <div class="col-md-8 text-start">
                <div class="card-body">
                  <h5 class="card-title">${coldData[1].name}</h5>
                  <p class="card-text">Özellikleri: ${coldData[1].description}</p>
                  <p>Fiyatı: ${coldData[1].price} TL</p>
                  <p>Stok Adedi: ${coldStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "COUGAR HELOR 240":
          coldDiv.innerHTML = `
                <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0 justify-content-center align-content-center">
                  <div class="col-md-4">
                    <img
                      src=${coldData[3].img}
                      class="img-fluid"
                      alt=" "
                    />
                  </div>
                  <div class="col-md-8 text-start">
                    <div class="card-body">
                    <h5 class="card-title">${coldData[3].name}</h5>
                    <p class="card-text">Özellikleri: ${coldData[3].description}</p>
                      <p class="card-text">Özellikleri: ${coldData[3].price} TL</p>
                      <p>Stok Adedi: ${coldStok[3]} </p>
                    </div>
                  </div>
                </div>
                </div>
                `;
          break;
        case "RAMPAGE EXTREME X240":
          coldDiv.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px">
                    <div class="row g-0 justify-content-center align-content-center">
                      <div class="col-md-4">
                        <img
                          src=${coldData[4].img}
                          class="img-fluid"
                          alt=" "
                        />
                      </div>
                      <div class="col-md-8 text-start">
                        <div class="card-body">
                          <h5 class="card-title">${coldData[4].name}</h5>
                          <p class="card-text">Özellikleri: ${coldData[4].description}</p>
                          <p>Fiyatı: ${coldData[4].price} TL</p>
                          <p>Stok Adedi: ${coldStok[4]} </p>
                        </div>
                      </div>
                    </div>
                    </div>
                    `;
          break;
        case "COUGAR AQUA 120":
          coldDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${coldData[5].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${coldData[5].name}</h5>
                              <p class="card-text">Özellikleri: ${coldData[5].description}</p>
                              <p>Fiyatı: ${coldData[5].price} TL</p>
                              <p>Stok Adedi: ${coldStok[5]} </p>
                            </div>
                          </div>
                        </div>
                        </div>
                        `;
          break;
        case "WD 1TB Purple Intellipower":
          coldDiv.innerHTML = `
                        <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0 justify-content-center align-content-center">
                          <div class="col-md-4">
                            <img
                              src=${coldData[5].img}
                              class="img-fluid"
                              alt=" "
                            />
                          </div>
                          <div class="col-md-8 text-start">
                            <div class="card-body">
                              <h5 class="card-title">${coldData[5].name}</h5>
                              <p class="card-text">Özellikleri: ${coldData[5].description}</p>
                              <p>Fiyatı: ${coldData[5].price} TL</p>
                              <p>Stok Adedi: ${coldStok[5]} </p>
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
