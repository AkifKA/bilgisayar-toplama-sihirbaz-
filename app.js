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

//? Stokları Local Storage'de Saklama
localStorage.setItem("cpuStok", JSON.stringify(cpuStok));
localStorage.setItem("mainBoardStok", JSON.stringify(mainBoardStok));
localStorage.setItem("ramStok", JSON.stringify(ramStok));
localStorage.setItem("gpuStok", JSON.stringify(gpuStok));
localStorage.setItem("monitorStok", JSON.stringify(monitorStok));
localStorage.setItem("hddStok", JSON.stringify(hddStok));
localStorage.setItem("coldStok", JSON.stringify(coldStok));
localStorage.setItem("powerStok", JSON.stringify(powerStok));

//? DOM Tanımları
const form = document.querySelector("form");
const cpuSelect = document.getElementById("cpu-select");
const cpuAdetSpan = document.querySelector(".cpu-adet");
const mainBoardSelect = document.getElementById("main-board-select");
const mainBoardAdetSpan = document.querySelector(".main-board-adet");
const ramSelect = document.querySelector(".ram-select");
const ramAdetSpan = document.querySelector(".ram-adet");
const kasaSelect = document.querySelector(".kasa-select");
const kasaAdetSpan = document.querySelector(".kasa-adet");
const gpuSelect = document.querySelector(".gpu-select");
const gpuAdetSpan = document.querySelector(".gpu-adet");
const monitorSelect = document.querySelector(".monitor-select");
const monitorAdetSpan = document.querySelector(".monitor-adet");
const ssdSelect = document.querySelector(".ram-select");
const ssdAdetSpan = document.querySelector(".ram-adet");
const hddSelect = document.querySelector(".hdd-select");
const hddAdetSpan = document.querySelector(".hdd-adet");
const coldAdetSelect = document.querySelector(".cold-select");
const coldAdetSpan = document.querySelector(".cold-adet");
const powerAdetSelect = document.querySelector(".power-select");
const powerAdetSpan = document.querySelector(".power-adet");

//? Özet Alanı Div'ini tanımla
const ozet = document.querySelector(".ozet");

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
  //?  Monitor isimlerini map() ile Select-Box'a bastır
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
                <p class="card-text">Özellikleri: ${hddData[1].description}
                  <p>Stok Adedi: ${hddStok[1]} </p>
                </div>
              </div>
            </div>
            </div>
            `;
          break;
        case "Seagate Barracuda 3.5'":
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

  form.addEventListener("click", (e) => {
    //? Eğer + butonuna tıklanılırsa
    if (e.target.className === "fa-solid fa-circle-plus") {
      e.target.closest(".row").nextElementSibling.firstChild.nextElementSibling
        .firstChild.innerText++;
    }
    //? Eğer - butonuna tıklanırsa
    if (e.target.className === "fa-solid fa-circle-minus") {
      if (
        e.target.closest(".row").previousSibling.previousSibling.firstChild
          .nextElementSibling.firstChild.innerText > 0
      )
        e.target.closest(".row").previousSibling.previousSibling.firstChild
          .nextElementSibling.firstChild.innerText--;
    }

    let cpuStok = JSON.parse(localStorage.getItem("cpuStok")); //? local storage'daki işlemci stok adedini çağır
    let mainBoardStok = JSON.parse(localStorage.getItem("mainBoardStok")); //? local storage'daki anakart stok adedini çağır
    let ramStok = JSON.parse(localStorage.getItem("ramStok")); //? local storage'daki ram stok adedini çağır
    let gpuStok = JSON.parse(localStorage.getItem("gpuStok")); //? local storage'daki ekran kartı stok adedini çağır
    let monitorStok = JSON.parse(localStorage.getItem("monitorStok")); //? local storage'daki monitor stok adedini çağır
    let kasaStok = JSON.parse(localStorage.getItem("kasaStok")); //? local storage'daki kasa stok adedini çağır
    let ssdStok = JSON.parse(localStorage.getItem("ssdStok")); //? local storage'daki ssd stok adedini çağır
    let hddStok = JSON.parse(localStorage.getItem("hddStok")); //? local storage'daki hdd stok adedini çağır
    let coldStok = JSON.parse(localStorage.getItem("coldStok")); //? local storage'daki soğıtma sistemi stok adedini çağır
    let powerStok = JSON.parse(localStorage.getItem("coldStok")); //? local storage'daki soğıtma sistemi stok adedini çağır

    let count = 1; //? Sıra sayısı için sayaç
    let toplam = 0; //? Toplam fiyat
    let cpuAdet = cpuAdetSpan.innerText; //? İşlemci adedi
    let cpuPrice = 0; //? İşlemci Fiyatı
    let mainBoardAdet = mainBoardAdetSpan.innerText; //? Anakart adedi
    let mainBoardPrice = 0; //? Anakart fiyatı
    let ramAdet = ramAdetSpan.innerText; //? Ram adedi
    let ramPrice = 0; //? Ram fiyatı
    let gpuAdet = gpuAdetSpan.innerText; //? Ram adedi
    let gpuPrice = 0; //? Ram fiyatı
    let monitorAdet = monitorAdetSpan.innerText; //? Monitör adedi
    let monitorPrice = 0; //? Monitör fiyatı
    let ssdAdet = ssdAdetSpan.innerText; //? SSD adedi
    let ssdPrice = 0; //? SSD fiyatı
    let hddBoardAdet = hddAdetSpan.innerText; //? HDD adedi
    let hddPrice = 0; //? HDD fiyatı
    let coldBoardAdet = coldAdetSpan.innerText; //? Soğutucu Sistemi adedi
    let coldPrice = 0; //? Soğutucu Sistemi fiyatı
    let power = coldAdetSpan.innerText; //? Güç Kaynağı adedi
    let powerPrice = 0; //? Güç Kaynağı fiyatı

    //? Eğer CPU Seç Butonununa Tıklanırsa
    if (e.target.classList.contains("btn-cpu")) {
      //? CPU Seç Butonunu tanımla
      const secBtn = document.querySelector(".btn-cpu");
      //? Seçilen index'i tanımla
      let selectedIndex = cpuSelect[cpuSelect.selectedIndex].textContent;
      localStorage.setItem("selectedIndexFromCpuSelect", selectedIndex);
      switch (
        selectedIndex //? seçilen index'i kontrol et
      ) {
        case "Intel Core i9 12900KS":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[0]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet  ${cpuData[0].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[0].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
              <thead>
              <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Ürün</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyatı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">${count}</th>
                <td>${cpuData[0].name}</td>
                <td>${cpuAdet}</td>
                <td>${cpuPrice} TL</td>
              </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${toplam} TL<td>
            </tbody>
              `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }

          break;
        case "AMD Ryzen™ 9 7900X":
          if (secBtn.textContent === "Seç") {
            //? seç butonu toogle
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[1]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet ${cpuData[1].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[1].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
              <thead>
              <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Ürün</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyatı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">${count}</th>
                <td>${cpuData[1].name}</td>
                <td>${cpuAdet}</td>
                <td>${cpuPrice} TL</td>
              </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${toplam} TL<td>
            </tbody>
              `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Intel Core i7 12700K":
          if (secBtn.textContent === "Seç") {
            //? seç butonu toogle
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[2]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet ${cpuData[2].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[2].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
              <thead>
              <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Ürün</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyatı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">${count}</th>
                <td>${cpuData[2].name}</td>
                <td>${cpuAdet}</td>
                <td>${cpuPrice} TL</td>
              </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${toplam} TL<td>
            </tbody>
              `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "AMD Ryzen™5 7600X":
          if (secBtn.textContent === "Seç") {
            //? seç butonu toogle
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[3]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet  ${cpuData[3].name}  bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[3].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
                <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col">Ürün</th>
                  <th scope="col">Adet</th>
                  <th scope="col">Fiyatı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">${count}</th>
                  <td>${cpuData[3].name}</td>
                  <td>${cpuAdet}</td>
                  <td>${cpuPrice} TL</td>
                </tr>
                <th>TOPLAM</th>
                <td><td>
                <td style="font-weight: 700">${toplam} TL<td>
              </tbody>
                `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Intel Core i5 13600KF":
          if (secBtn.textContent === "Seç") {
            //? seç butonu toogle
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[4]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet ${cpuData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[4].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
                  <thead>
                  <tr>
                    <th scope="col">Sıra</th>
                    <th scope="col">Ürün</th>
                    <th scope="col">Adet</th>
                    <th scope="col">Fiyatı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">${count}</th>
                    <td>${cpuData[4].name}</td>
                    <td>${cpuAdet}</td>
                    <td>${cpuPrice} TL</td>
                  </tr>
                  <th>TOPLAM</th>
                  <td><td>
                  <td style="font-weight: 700">${toplam} TL<td>
                </tbody>
                  `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "AMD Ryzen™3 4100":
          if (secBtn.textContent === "Seç") {
            //? seç butonu toogle
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[5]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet ${cpuData[5].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[5].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
                    <thead>
                    <tr>
                      <th scope="col">Sıra</th>
                      <th scope="col">Ürün</th>
                      <th scope="col">Adet</th>
                      <th scope="col">Fiyatı</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">${count}</th>
                      <td>${cpuData[5].name}</td>
                      <td>${cpuAdet}</td>
                      <td>${cpuPrice} TL</td>
                    </tr>
                    <th>TOPLAM</th>
                    <td><td>
                    <td style="font-weight: 700">${toplam} TL<td>
                  </tbody>
                    `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Intel Core i3 10320":
          if (secBtn.textContent === "Seç") {
            //? seç butonu toogle
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (cpuAdet > cpuStok[6]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${cpuAdet} adet ${cpuData[6].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              cpuPrice = cpuData[6].price * cpuAdet;
              localStorage.setItem("cpuPrice", cpuPrice);
              toplam += cpuPrice;
              localStorage.setItem("toplam", toplam);
              ozet.innerHTML += `
                      <thead>
                      <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyatı</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">${count}</th>
                        <td>${cpuData[6].name}</td>
                        <td>${cpuAdet}</td>
                        <td>${cpuPrice} TL</td>
                      </tr>
                      <th>TOPLAM</th>
                      <td><td>
                      <td style="font-weight: 700">${toplam} TL<td>
                    </tbody>
                      `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
      }
    }

    //? Eğer Anakart Seç Butonununa Tıklanırsa
    if (e.target.classList.contains("btn-main-board")) {
      //? Ana Kart Seç Butonunu tanımla
      const secBtn = document.querySelector(".btn-main-board");
      //? Seçilen index'i tanımla
      let selectedIndex =
        mainBoardSelect[mainBoardSelect.selectedIndex].textContent;
      localStorage.setItem("selectedIndexFromMainBoardSelect", selectedIndex);

      switch (
        selectedIndex //? seçilen index'i kontrol et
      ) {
        case "MSI MPG Z790 EDGE WIFI":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[0]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[0].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[0].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
              <thead>
                      <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyatı</th>
                      </tr>
                    </thead>
              <tbody>
                <tr>
                </tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                <td>${cpuAdet}</td>
                <td>${localStorage.getItem("cpuPrice")} TL</td>
                <tr>
                <th scope="row">${count++}</th>
                <td>${mainBoardData[0].name}</td>
                <td>${mainBoardAdet}</td>
                <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
              </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${Number(
                localStorage.getItem("toplam")
              )} TL<td>
              </tbody>
          `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "ASUS TUF GAMING H670-PRO WIFI D4":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[1]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[2].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[1].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
                  <thead>
                          <tr>
                            <th scope="col">Sıra</th>
                            <th scope="col">Ürün</th>
                            <th scope="col">Adet</th>
                            <th scope="col">Fiyatı</th>
                          </tr>
                        </thead>
                  <tbody>
                    <tr>
                    </tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromCpuSelect"
                    )}</td>
                    <td>${cpuAdet}</td>
                    <td>${localStorage.getItem("cpuPrice")} TL</td>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${mainBoardData[1].name}</td>
                    <td>${mainBoardAdet}</td>
                    <td>${Number(
                      localStorage.getItem("mainBoardPrice")
                    )} TL</td>
                  </tr>
                  <th>TOPLAM</th>
                  <td><td>
                  <td style="font-weight: 700">${Number(
                    localStorage.getItem("toplam")
                  )} TL<td>
                  </tbody>
              `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI MAG B660M BAZOOKA":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[2]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[3].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[2].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
                    <thead>
                            <tr>
                              <th scope="col">Sıra</th>
                              <th scope="col">Ürün</th>
                              <th scope="col">Adet</th>
                              <th scope="col">Fiyatı</th>
                            </tr>
                          </thead>
                    <tbody>
                      <tr>
                      </tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromCpuSelect"
                      )}</td>
                      <td>${cpuAdet}</td>
                      <td>${localStorage.getItem("cpuPrice")} TL</td>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${mainBoardData[2].name}</td>
                      <td>${mainBoardAdet}</td>
                      <td>${Number(
                        localStorage.getItem("mainBoardPrice")
                      )} TL</td>
                    </tr>
                    <th>TOPLAM</th>
                    <td><td>
                    <td style="font-weight: 700">${Number(
                      localStorage.getItem("toplam")
                    )} TL<td>
                    </tbody>
                `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI PRO B760-P WIFI":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[3]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[3].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
                      <thead>
                              <tr>
                                <th scope="col">Sıra</th>
                                <th scope="col">Ürün</th>
                                <th scope="col">Adet</th>
                                <th scope="col">Fiyatı</th>
                              </tr>
                            </thead>
                      <tbody>
                        <tr>
                        </tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromCpuSelect"
                        )}</td>
                        <td>${cpuAdet}</td>
                        <td>${localStorage.getItem("cpuPrice")} TL</td>
                        <tr>
                        <th scope="row">${count++}</th>
                        <td>${mainBoardData[3].name}</td>
                        <td>${mainBoardAdet}</td>
                        <td>${Number(
                          localStorage.getItem("mainBoardPrice")
                        )} TL</td>
                      </tr>
                      <th>TOPLAM</th>
                      <td><td>
                      <td style="font-weight: 700">${Number(
                        localStorage.getItem("toplam")
                      )} TL<td>
                      </tbody>
                  `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI PRO B660M-P DDR4":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[4]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[4].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
                        <thead>
                                <tr>
                                  <th scope="col">Sıra</th>
                                  <th scope="col">Ürün</th>
                                  <th scope="col">Adet</th>
                                  <th scope="col">Fiyatı</th>
                                </tr>
                              </thead>
                        <tbody>
                          <tr>
                          </tr>
                          <th scope="row">${count++}</th>
                          <td>${localStorage.getItem(
                            "selectedIndexFromCpuSelect"
                          )}</td>
                          <td>${cpuAdet}</td>
                          <td>${localStorage.getItem("cpuPrice")} TL</td>
                          <tr>
                          <th scope="row">${count++}</th>
                          <td>${mainBoardData[4].name}</td>
                          <td>${mainBoardAdet}</td>
                          <td>${Number(
                            localStorage.getItem("mainBoardPrice")
                          )} TL</td>
                        </tr>
                        <th>TOPLAM</th>
                        <td><td>
                        <td style="font-weight: 700">${Number(
                          localStorage.getItem("toplam")
                        )} TL<td>
                        </tbody>
                    `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "GIGABYTE B660M DS3H":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[5]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[5].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
                          <thead>
                                  <tr>
                                    <th scope="col">Sıra</th>
                                    <th scope="col">Ürün</th>
                                    <th scope="col">Adet</th>
                                    <th scope="col">Fiyatı</th>
                                  </tr>
                                </thead>
                          <tbody>
                            <tr>
                            </tr>
                            <th scope="row">${count++}</th>
                            <td>${localStorage.getItem(
                              "selectedIndexFromCpuSelect"
                            )}</td>
                            <td>${cpuAdet}</td>
                            <td>${localStorage.getItem("cpuPrice")} TL</td>
                            <tr>
                            <th scope="row">${count++}</th>
                            <td>${mainBoardData[5].name}</td>
                            <td>${mainBoardAdet}</td>
                            <td>${Number(
                              localStorage.getItem("mainBoardPrice")
                            )} TL</td>
                          </tr>
                          <th>TOPLAM</th>
                          <td><td>
                          <td style="font-weight: 700">${Number(
                            localStorage.getItem("toplam")
                          )} TL<td>
                          </tbody>
                      `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI PRO H610M-G":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (mainBoardAdet > mainBoardStok[6]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${mainBoardAdet} adet  ${mainBoardData[6].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              mainBoardPrice = mainBoardData[6].price * mainBoardAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += mainBoardPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("mainBoardPrice", mainBoardPrice);
              ozet.innerHTML = `
                            <thead>
                                    <tr>
                                      <th scope="col">Sıra</th>
                                      <th scope="col">Ürün</th>
                                      <th scope="col">Adet</th>
                                      <th scope="col">Fiyatı</th>
                                    </tr>
                                  </thead>
                            <tbody>
                              <tr>
                              </tr>
                              <th scope="row">${count++}</th>
                              <td>${localStorage.getItem(
                                "selectedIndexFromCpuSelect"
                              )}</td>
                              <td>${cpuAdet}</td>
                              <td>${localStorage.getItem("cpuPrice")} TL</td>
                              <tr>
                              <th scope="row">${count++}</th>
                              <td>${mainBoardData[6].name}</td>
                              <td>${mainBoardAdet}</td>
                              <td>${Number(
                                localStorage.getItem("mainBoardPrice")
                              )} TL</td>
                            </tr>
                            <th>TOPLAM</th>
                            <td><td>
                            <td style="font-weight: 700">${Number(
                              localStorage.getItem("toplam")
                            )} TL<td>
                            </tbody>
                        `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
      }
    }
    //? Eğer Ram Seç Butonununa Tıklanırsa
    if (e.target.classList.contains("ram-btn")) {
      //? Ram Seç Butonunu tanımla
      const secBtn = document.querySelector(".ram-btn");
      //? Seçilen index'i tanımla
      let selectedIndex = ramSelect[ramSelect.selectedIndex].textContent;
      localStorage.setItem("selectedIndexFromRamSelect", selectedIndex);

      switch (
        selectedIndex //? seçilen index'i kontrol et
      ) {
        case "GSKILL 16GB (2x8GB)":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[0]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[0].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[0].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
              <thead>
                      <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyatı</th>
                      </tr>
                    </thead>
              <tbody>
                <tr>
                </tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                <td>${cpuAdet}</td>
                <td>${localStorage.getItem("cpuPrice")} TL</td>
                <tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem(
                  "selectedIndexFromMainBoardSelect"
                )}</td>
                <td>${mainBoardAdet}</td>
                <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
              </tr>
              <tr>
              <th scope="row">${count++}</th>
              <td>${ramData[0].name}</td>
              <td>${ramAdet}</td>
              <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
            </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${Number(
                localStorage.getItem("toplam")
              )} TL<td>
              </tbody>
            `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "XPG 16GB (2x8GB)":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[1]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[0].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[1].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
              <thead>
                      <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyatı</th>
                      </tr>
                    </thead>
              <tbody>
                <tr>
                </tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                <td>${cpuAdet}</td>
                <td>${localStorage.getItem("cpuPrice")} TL</td>
                <tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem(
                  "selectedIndexFromMainBoardSelect"
                )}}</td>
                <td>${mainBoardAdet}</td>
                <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
              </tr>
              <tr>
              <th scope="row">${count++}</th>
              <td>${ramData[1].name}</td>
              <td>${ramAdet}</td>
              <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
            </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${Number(
                localStorage.getItem("toplam")
              )} TL<td>
              </tbody>
            `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Crucial 8GB (1x8GB)":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[2]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[2].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[2].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
              <thead>
                      <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyatı</th>
                      </tr>
                    </thead>
              <tbody>
                <tr>
                </tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                <td>${cpuAdet}</td>
                <td>${localStorage.getItem("cpuPrice")} TL</td>
                <tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem(
                  "selectedIndexFromMainBoardSelect"
                )}}</td>
                <td>${mainBoardAdet}</td>
                <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
              </tr>
              <tr>
              <th scope="row">${count++}</th>
              <td>${ramData[2].name}</td>
              <td>${ramAdet}</td>
              <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
            </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${Number(
                localStorage.getItem("toplam")
              )} TL<td>
              </tbody>
            `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Kingston 8GB (1x8GB)":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[3]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[3].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[3].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
                <thead>
                        <tr>
                          <th scope="col">Sıra</th>
                          <th scope="col">Ürün</th>
                          <th scope="col">Adet</th>
                          <th scope="col">Fiyatı</th>
                        </tr>
                      </thead>
                <tbody>
                  <tr>
                  </tr>
                  <th scope="row">${count++}</th>
                  <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                  <td>${cpuAdet}</td>
                  <td>${localStorage.getItem("cpuPrice")} TL</td>
                  <tr>
                  <th scope="row">${count++}</th>
                  <td>${localStorage.getItem(
                    "selectedIndexFromMainBoardSelect"
                  )}}</td>
                  <td>${mainBoardAdet}</td>
                  <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
                </tr>
                <tr>
                <th scope="row">${count++}</th>
                <td>${ramData[3].name}</td>
                <td>${ramAdet}</td>
                <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
              </tr>
                <th>TOPLAM</th>
                <td><td>
                <td style="font-weight: 700">${Number(
                  localStorage.getItem("toplam")
                )} TL<td>
                </tbody>
              `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Kıngston 8GB (1x8GB) Fury Beast":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[4]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[4].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
                  <thead>
                          <tr>
                            <th scope="col">Sıra</th>
                            <th scope="col">Ürün</th>
                            <th scope="col">Adet</th>
                            <th scope="col">Fiyatı</th>
                          </tr>
                        </thead>
                  <tbody>
                    <tr>
                    </tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromCpuSelect"
                    )}</td>
                    <td>${cpuAdet}</td>
                    <td>${localStorage.getItem("cpuPrice")} TL</td>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromMainBoardSelect"
                    )}}</td>
                    <td>${mainBoardAdet}</td>
                    <td>${Number(
                      localStorage.getItem("mainBoardPrice")
                    )} TL</td>
                  </tr>
                  <tr>
                  <th scope="row">${count++}</th>
                  <td>${ramData[4].name}</td>
                  <td>${ramAdet}</td>
                  <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                </tr>
                  <th>TOPLAM</th>
                  <td><td>
                  <td style="font-weight: 700">${Number(
                    localStorage.getItem("toplam")
                  )} TL<td>
                  </tbody>
                `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "Kıngston 8GB (1x8GB) Fury Beast":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[5]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[5].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[5].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
                    <thead>
                            <tr>
                              <th scope="col">Sıra</th>
                              <th scope="col">Ürün</th>
                              <th scope="col">Adet</th>
                              <th scope="col">Fiyatı</th>
                            </tr>
                          </thead>
                    <tbody>
                      <tr>
                      </tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromCpuSelect"
                      )}</td>
                      <td>${cpuAdet}</td>
                      <td>${localStorage.getItem("cpuPrice")} TL</td>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromMainBoardSelect"
                      )}}</td>
                      <td>${mainBoardAdet}</td>
                      <td>${Number(
                        localStorage.getItem("mainBoardPrice")
                      )} TL</td>
                    </tr>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${ramData[5].name}</td>
                    <td>${ramAdet}</td>
                    <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                  </tr>
                    <th>TOPLAM</th>
                    <td><td>
                    <td style="font-weight: 700">${Number(
                      localStorage.getItem("toplam")
                    )} TL<td>
                    </tbody>
                  `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "GSKILL 8GB (1x8GB) RipjawsV":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (ramAdet > ramStok[6]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${ramAdet} adet  ${ramData[6].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              ramPrice = ramData[6].price * ramAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += ramPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("ramPrice", ramPrice);
              ozet.innerHTML = `
                      <thead>
                              <tr>
                                <th scope="col">Sıra</th>
                                <th scope="col">Ürün</th>
                                <th scope="col">Adet</th>
                                <th scope="col">Fiyatı</th>
                              </tr>
                            </thead>
                      <tbody>
                        <tr>
                        </tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromCpuSelect"
                        )}</td>
                        <td>${cpuAdet}</td>
                        <td>${localStorage.getItem("cpuPrice")} TL</td>
                        <tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromMainBoardSelect"
                        )}}</td>
                        <td>${mainBoardAdet}</td>
                        <td>${Number(
                          localStorage.getItem("mainBoardPrice")
                        )} TL</td>
                      </tr>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${ramData[6].name}</td>
                      <td>${ramAdet}</td>
                      <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                    </tr>
                      <th>TOPLAM</th>
                      <td><td>
                      <td style="font-weight: 700">${Number(
                        localStorage.getItem("toplam")
                      )} TL<td>
                      </tbody>
                    `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
      }
    }
    //? Eğer Ekran kartı Seç Butonununa Tıklanırsa
    if (e.target.classList.contains("gpu-btn")) {
      //? Ekran Kartı Seç Butonunu tanımla
      const secBtn = document.querySelector(".gpu-btn");
      //? Seçilen index'i tanımla
      let selectedIndex = gpuSelect[gpuSelect.selectedIndex].textContent;
      localStorage.setItem("selectedIndexFromGPUSelect", selectedIndex);
      switch (selectedIndex) {
        case "GIGABYTE GeForce RTX 3090":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (gpuAdet > gpuStok[0]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${gpuAdet} adet  ${gpuData[0].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              gpuPrice = gpuData[0].price * gpuAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += gpuPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("gpuPrice", gpuPrice);
              ozet.innerHTML = `
        <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col">Ürün</th>
                  <th scope="col">Adet</th>
                  <th scope="col">Fiyatı</th>
                </tr>
              </thead>
        <tbody>
          <tr>
          </tr>
          <th scope="row">${count++}</th>
          <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
          <td>${cpuAdet}</td>
          <td>${localStorage.getItem("cpuPrice")} TL</td>
          <tr>
          <th scope="row">${count++}</th>
          <td>${localStorage.getItem("selectedIndexFromMainBoardSelect")}</td>
          <td>${mainBoardAdet}</td>
          <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
        </tr>
        <tr>
        <th scope="row">${count++}</th>
        <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
        <td>${ramAdet}</td>
        <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
      </tr>
      <tr>
        <th scope="row">${count++}</th>
        <td>${gpuData[0].name}</td>
        <td>${gpuAdet}</td>
        <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
      </tr>
        <th>TOPLAM</th>
        <td><td>
        <td style="font-weight: 700">${Number(
          localStorage.getItem("toplam")
        )} TL<td>
        </tbody>
      `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI GEFORCE RTX 3080":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (gpuAdet > gpuStok[1]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${gpuAdet} adet  ${gpuData[1].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              gpuPrice = gpuData[1].price * gpuAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += gpuPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("gpuPrice", gpuPrice);
              ozet.innerHTML = `
        <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col">Ürün</th>
                  <th scope="col">Adet</th>
                  <th scope="col">Fiyatı</th>
                </tr>
              </thead>
        <tbody>
          <tr>
          </tr>
          <th scope="row">${count++}</th>
          <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
          <td>${cpuAdet}</td>
          <td>${localStorage.getItem("cpuPrice")} TL</td>
          <tr>
          <th scope="row">${count++}</th>
          <td>${localStorage.getItem("selectedIndexFromMainBoardSelect")}</td>
          <td>${mainBoardAdet}</td>
          <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
        </tr>
        <tr>
        <th scope="row">${count++}</th>
        <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
        <td>${ramAdet}</td>
        <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
      </tr>
      <tr>
        <th scope="row">${count++}</th>
        <td>${gpuData[1].name}</td>
        <td>${gpuAdet}</td>
        <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
      </tr>
        <th>TOPLAM</th>
        <td><td>
        <td style="font-weight: 700">${Number(
          localStorage.getItem("toplam")
        )} TL<td>
        </tbody>
      `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "ASUS GeForce TUF RTX3070 TI":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (gpuAdet > gpuStok[2]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${gpuAdet} adet  ${gpuData[2].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              gpuPrice = gpuData[2].price * gpuAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += gpuPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("gpuPrice", gpuPrice);
              ozet.innerHTML = `
          <thead>
                  <tr>
                    <th scope="col">Sıra</th>
                    <th scope="col">Ürün</th>
                    <th scope="col">Adet</th>
                    <th scope="col">Fiyatı</th>
                  </tr>
                </thead>
          <tbody>
            <tr>
            </tr>
            <th scope="row">${count++}</th>
            <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
            <td>${cpuAdet}</td>
            <td>${localStorage.getItem("cpuPrice")} TL</td>
            <tr>
            <th scope="row">${count++}</th>
            <td>${localStorage.getItem("selectedIndexFromMainBoardSelect")}</td>
            <td>${mainBoardAdet}</td>
            <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
          </tr>
          <tr>
          <th scope="row">${count++}</th>
          <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
          <td>${ramAdet}</td>
          <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
        </tr>
        <tr>
          <th scope="row">${count++}</th>
          <td>${gpuData[2].name}</td>
          <td>${gpuAdet}</td>
          <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
        </tr>
          <th>TOPLAM</th>
          <td><td>
          <td style="font-weight: 700">${Number(
            localStorage.getItem("toplam")
          )} TL<td>
          </tbody>
        `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI GEFORCE RTX 3060 TI":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (gpuAdet > gpuStok[3]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${gpuAdet} adet  ${gpuData[3].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              gpuPrice = gpuData[3].price * gpuAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += gpuPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("gpuPrice", gpuPrice);
              ozet.innerHTML = `
          <thead>
                  <tr>
                    <th scope="col">Sıra</th>
                    <th scope="col">Ürün</th>
                    <th scope="col">Adet</th>
                    <th scope="col">Fiyatı</th>
                  </tr>
                </thead>
          <tbody>
            <tr>
            </tr>
            <th scope="row">${count++}</th>
            <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
            <td>${cpuAdet}</td>
            <td>${localStorage.getItem("cpuPrice")} TL</td>
            <tr>
            <th scope="row">${count++}</th>
            <td>${localStorage.getItem("selectedIndexFromMainBoardSelect")}</td>
            <td>${mainBoardAdet}</td>
            <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
          </tr>
          <tr>
          <th scope="row">${count++}</th>
          <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
          <td>${ramAdet}</td>
          <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
        </tr>
        <tr>
          <th scope="row">${count++}</th>
          <td>${gpuData[3].name}</td>
          <td>${gpuAdet}</td>
          <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
        </tr>
          <th>TOPLAM</th>
          <td><td>
          <td style="font-weight: 700">${Number(
            localStorage.getItem("toplam")
          )} TL<td>
          </tbody>
        `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI GEFORCE RTX 3070 VENTUS":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (gpuAdet > gpuStok[4]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${gpuAdet} adet  ${gpuData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              gpuPrice = gpuData[4].price * gpuAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += gpuPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("gpuPrice", gpuPrice);
              ozet.innerHTML = `
            <thead>
                    <tr>
                      <th scope="col">Sıra</th>
                      <th scope="col">Ürün</th>
                      <th scope="col">Adet</th>
                      <th scope="col">Fiyatı</th>
                    </tr>
                  </thead>
            <tbody>
              <tr>
              </tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
              <td>${cpuAdet}</td>
              <td>${localStorage.getItem("cpuPrice")} TL</td>
              <tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem(
                "selectedIndexFromMainBoardSelect"
              )}</td>
              <td>${mainBoardAdet}</td>
              <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
            </tr>
            <tr>
            <th scope="row">${count++}</th>
            <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
            <td>${ramAdet}</td>
            <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
          </tr>
          <tr>
            <th scope="row">${count++}</th>
            <td>${gpuData[4].name}</td>
            <td>${gpuAdet}</td>
            <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
          </tr>
            <th>TOPLAM</th>
            <td><td>
            <td style="font-weight: 700">${Number(
              localStorage.getItem("toplam")
            )} TL<td>
            </tbody>
          `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "MSI GEFORCE GTX 1660 SUPER":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (gpuAdet > gpuStok[5]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${gpuAdet} adet  ${gpuData[5].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              gpuPrice = gpuData[5].price * gpuAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += gpuPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("gpuPrice", gpuPrice);
              ozet.innerHTML = `
            <thead>
                    <tr>
                      <th scope="col">Sıra</th>
                      <th scope="col">Ürün</th>
                      <th scope="col">Adet</th>
                      <th scope="col">Fiyatı</th>
                    </tr>
                  </thead>
            <tbody>
              <tr>
              </tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
              <td>${cpuAdet}</td>
              <td>${localStorage.getItem("cpuPrice")} TL</td>
              <tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem(
                "selectedIndexFromMainBoardSelect"
              )}</td>
              <td>${mainBoardAdet}</td>
              <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
            </tr>
            <tr>
            <th scope="row">${count++}</th>
            <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
            <td>${ramAdet}</td>
            <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
          </tr>
          <tr>
            <th scope="row">${count++}</th>
            <td>${gpuData[5].name}</td>
            <td>${gpuAdet}</td>
            <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
          </tr>
            <th>TOPLAM</th>
            <td><td>
            <td style="font-weight: 700">${Number(
              localStorage.getItem("toplam")
            )} TL<td>
            </tbody>
          `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
      }
    }
    //? Eğer Monitör Seç Butonununa Tıklanırsa
    if (e.target.classList.contains("monitor-btn")) {
      //? Ekran Kartı Seç Butonunu tanımla
      const secBtn = document.querySelector(".monitor-btn");
      //? Seçilen index'i tanımla
      let selectedIndex =
        monitorSelect[monitorSelect.selectedIndex].textContent;
      localStorage.setItem("selectedIndexFromMonitorSelect", selectedIndex);
      switch (selectedIndex) {
        case "ASUS 27' PA279CV":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (monitorAdet > monitorStok[0]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${monitorAdet} adet  ${monitorData[0].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              monitorPrice = monitorData[0].price * monitorAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += monitorPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("monitorPrice", monitorPrice);
              ozet.innerHTML = `
              <thead>
              <tr>
                <th scope="col">Sıra</th>
                <th scope="col">Ürün</th>
                <th scope="col">Adet</th>
                <th scope="col">Fiyatı</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              </tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
              <td>${cpuAdet}</td>
              <td>${localStorage.getItem("cpuPrice")} TL</td>
              <tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem(
                "selectedIndexFromMainBoardSelect"
              )}</td>
              <td>${mainBoardAdet}</td>
              <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
              </tr>
              <tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
              <td>${ramAdet}</td>
              <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
              </tr>
              <tr>
              <th scope="row">${count++}</th>
              <td>${localStorage.getItem("selectedIndexFromGPUSelect")}</td>
              <td>${gpuAdet}</td>
              <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
              </tr>
              <tr>
              <th scope="row">${count++}</th>
              <td>${monitorData[0].name}</td>
              <td>${monitorAdet}</td>
              <td>${Number(localStorage.getItem("monitorPrice"))} TL</td>
              </tr>
              <th>TOPLAM</th>
              <td><td>
              <td style="font-weight: 700">${Number(
                localStorage.getItem("toplam")
              )} TL<td>
              </tbody>
      `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "ASUS 27' VG279QM":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (monitorAdet > monitorStok[1]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${monitorAdet} adet  ${monitorData[1].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              monitorPrice = monitorData[1].price * monitorAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += monitorPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("monitorPrice", monitorPrice);
              ozet.innerHTML = `
                <thead>
                <tr>
                  <th scope="col">Sıra</th>
                  <th scope="col">Ürün</th>
                  <th scope="col">Adet</th>
                  <th scope="col">Fiyatı</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                </tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                <td>${cpuAdet}</td>
                <td>${localStorage.getItem("cpuPrice")} TL</td>
                <tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem(
                  "selectedIndexFromMainBoardSelect"
                )}</td>
                <td>${mainBoardAdet}</td>
                <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
                </tr>
                <tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
                <td>${ramAdet}</td>
                <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                </tr>
                <tr>
                <th scope="row">${count++}</th>
                <td>${localStorage.getItem("selectedIndexFromGPUSelect")}</td>
                <td>${gpuAdet}</td>
                <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
                </tr>
                <tr>
                <th scope="row">${count++}</th>
                <td>${monitorData[1].name}</td>
                <td>${monitorAdet}</td>
                <td>${Number(localStorage.getItem("monitorPrice"))} TL</td>
                </tr>
                <th>TOPLAM</th>
                <td><td>
                <td style="font-weight: 700">${Number(
                  localStorage.getItem("toplam")
                )} TL<td>
                </tbody>
        `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "ASUS 27' PA279CV":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (monitorAdet > monitorStok[2]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${monitorAdet} adet  ${monitorData[2].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              monitorPrice = monitorData[2].price * monitorAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += monitorPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("monitorPrice", monitorPrice);
              ozet.innerHTML = `
                  <thead>
                  <tr>
                    <th scope="col">Sıra</th>
                    <th scope="col">Ürün</th>
                    <th scope="col">Adet</th>
                    <th scope="col">Fiyatı</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  </tr>
                  <th scope="row">${count++}</th>
                  <td>${localStorage.getItem("selectedIndexFromCpuSelect")}</td>
                  <td>${cpuAdet}</td>
                  <td>${localStorage.getItem("cpuPrice")} TL</td>
                  <tr>
                  <th scope="row">${count++}</th>
                  <td>${localStorage.getItem(
                    "selectedIndexFromMainBoardSelect"
                  )}</td>
                  <td>${mainBoardAdet}</td>
                  <td>${Number(localStorage.getItem("mainBoardPrice"))} TL</td>
                  </tr>
                  <tr>
                  <th scope="row">${count++}</th>
                  <td>${localStorage.getItem("selectedIndexFromRamSelect")}</td>
                  <td>${ramAdet}</td>
                  <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                  </tr>
                  <tr>
                  <th scope="row">${count++}</th>
                  <td>${localStorage.getItem("selectedIndexFromGPUSelect")}</td>
                  <td>${gpuAdet}</td>
                  <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
                  </tr>
                  <tr>
                  <th scope="row">${count++}</th>
                  <td>${monitorData[2].name}</td>
                  <td>${monitorAdet}</td>
                  <td>${Number(localStorage.getItem("monitorPrice"))} TL</td>
                  </tr>
                  <th>TOPLAM</th>
                  <td><td>
                  <td style="font-weight: 700">${Number(
                    localStorage.getItem("toplam")
                  )} TL<td>
                  </tbody>
          `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "VIEWSONIC 32' VX3218-PC-MHDJ":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (monitorAdet > monitorStok[3]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${monitorAdet} adet  ${monitorData[3].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              monitorPrice = monitorData[3].price * monitorAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += monitorPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("monitorPrice", monitorPrice);
              ozet.innerHTML = `
                    <thead>
                    <tr>
                      <th scope="col">Sıra</th>
                      <th scope="col">Ürün</th>
                      <th scope="col">Adet</th>
                      <th scope="col">Fiyatı</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    </tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromCpuSelect"
                    )}</td>
                    <td>${cpuAdet}</td>
                    <td>${localStorage.getItem("cpuPrice")} TL</td>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromMainBoardSelect"
                    )}</td>
                    <td>${mainBoardAdet}</td>
                    <td>${Number(
                      localStorage.getItem("mainBoardPrice")
                    )} TL</td>
                    </tr>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromRamSelect"
                    )}</td>
                    <td>${ramAdet}</td>
                    <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                    </tr>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${localStorage.getItem(
                      "selectedIndexFromGPUSelect"
                    )}</td>
                    <td>${gpuAdet}</td>
                    <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
                    </tr>
                    <tr>
                    <th scope="row">${count++}</th>
                    <td>${monitorData[3].name}</td>
                    <td>${monitorAdet}</td>
                    <td>${Number(localStorage.getItem("monitorPrice"))} TL</td>
                    </tr>
                    <th>TOPLAM</th>
                    <td><td>
                    <td style="font-weight: 700">${Number(
                      localStorage.getItem("toplam")
                    )} TL<td>
                    </tbody>
            `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "ASUS 23,8' ROG STRIX":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (monitorAdet > monitorStok[4]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${monitorAdet} adet  ${monitorData[4].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              monitorPrice = monitorData[4].price * monitorAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += monitorPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("monitorPrice", monitorPrice);
              ozet.innerHTML = `
                      <thead>
                      <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Adet</th>
                        <th scope="col">Fiyatı</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                      </tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromCpuSelect"
                      )}</td>
                      <td>${cpuAdet}</td>
                      <td>${localStorage.getItem("cpuPrice")} TL</td>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromMainBoardSelect"
                      )}</td>
                      <td>${mainBoardAdet}</td>
                      <td>${Number(
                        localStorage.getItem("mainBoardPrice")
                      )} TL</td>
                      </tr>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromRamSelect"
                      )}</td>
                      <td>${ramAdet}</td>
                      <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                      </tr>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${localStorage.getItem(
                        "selectedIndexFromGPUSelect"
                      )}</td>
                      <td>${gpuAdet}</td>
                      <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
                      </tr>
                      <tr>
                      <th scope="row">${count++}</th>
                      <td>${monitorData[4].name}</td>
                      <td>${monitorAdet}</td>
                      <td>${Number(
                        localStorage.getItem("monitorPrice")
                      )} TL</td>
                      </tr>
                      <th>TOPLAM</th>
                      <td><td>
                      <td style="font-weight: 700">${Number(
                        localStorage.getItem("toplam")
                      )} TL<td>
                      </tbody>
              `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
        case "ASUS 21,5' VP228QG Full HD":
          if (secBtn.textContent === "Seç") {
            secBtn.textContent = "Seçildi✓";
            secBtn.style = "background:blue";
            if (monitorAdet > monitorStok[5]) {
              //? seçilen aded stok sayısından büyük olursa
              alert(
                `Stoklarda ${monitorAdet} adet  ${monitorData[5].name} bulunmamaktadır.`
              );
              secBtn.style = "background:#198754";
              secBtn.textContent = "Seç";
            } else {
              //? hesap işleri ve doma basma
              monitorPrice = monitorData[5].price * monitorAdet;
              toplam = Number(localStorage.getItem("toplam"));
              toplam += monitorPrice;
              localStorage.setItem("toplam", toplam);
              localStorage.setItem("monitorPrice", monitorPrice);
              ozet.innerHTML = `
                        <thead>
                        <tr>
                          <th scope="col">Sıra</th>
                          <th scope="col">Ürün</th>
                          <th scope="col">Adet</th>
                          <th scope="col">Fiyatı</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        </tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromCpuSelect"
                        )}</td>
                        <td>${cpuAdet}</td>
                        <td>${localStorage.getItem("cpuPrice")} TL</td>
                        <tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromMainBoardSelect"
                        )}</td>
                        <td>${mainBoardAdet}</td>
                        <td>${Number(
                          localStorage.getItem("mainBoardPrice")
                        )} TL</td>
                        </tr>
                        <tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromRamSelect"
                        )}</td>
                        <td>${ramAdet}</td>
                        <td>${Number(localStorage.getItem("ramPrice"))} TL</td>
                        </tr>
                        <tr>
                        <th scope="row">${count++}</th>
                        <td>${localStorage.getItem(
                          "selectedIndexFromGPUSelect"
                        )}</td>
                        <td>${gpuAdet}</td>
                        <td>${Number(localStorage.getItem("gpuPrice"))} TL</td>
                        </tr>
                        <tr>
                        <th scope="row">${count++}</th>
                        <td>${monitorData[5].name}</td>
                        <td>${monitorAdet}</td>
                        <td>${Number(
                          localStorage.getItem("monitorPrice")
                        )} TL</td>
                        </tr>
                        <th>TOPLAM</th>
                        <td><td>
                        <td style="font-weight: 700">${Number(
                          localStorage.getItem("toplam")
                        )} TL<td>
                        </tbody>
                `;
            }
          } else if (secBtn.textContent === "Seçildi✓") {
            secBtn.textContent = "Seç";
            secBtn.style = "background:#198754";
            ozet.innerHTML = "";
          }
          break;
      }
    }
  });
};
