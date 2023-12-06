const xshift = 4227,
  yshift = 6408;

let nashville1864Tile1444_578 = L.tileLayer("data/1864Tiles1444-5.78", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});
nashville1864Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url + "/1864-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
  );
};

let nashville1871Tile1444_578 = L.tileLayer("data/1871Tiles1444-5.78", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});
nashville1871Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url + "/1871-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
  );
};

let nashville1903Tile1444_578 = L.tileLayer("data/1903Tiles1444-5.78", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});
nashville1903Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url + "/1903-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
  );
};

let nashville1929Tile1444_578 = L.tileLayer("data/1929Tiles1444-5.78", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});
nashville1929Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url + "/1929-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
  );
};

let nashville1952Tile1444_578 = L.tileLayer("data/1952Tiles1444-5.78", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  // tileSize: 2048,
  // tileSize: 1024,
  // tileSize: 1555, // 73340/38
  // tileSize: 512,
  // tileSize: 0.001953125, //1/152
  // tileSize:256,
  // tileSize: 128,
  // tileSize: 19456, // only 2 tiles
  // tileSize: 9728,
  // maxNativeZoom: 14,
  // minNativeZoom: 14,
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});

coorxt = [];
cooryt = [];
coort = [];
nashville1952Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  // console.log(coords);
  coorxt.push(coords.x);
  cooryt.push(coords.y);

  let tileNumber = (1444 - (38 - coords.x - 1) + (coords.y - 0) * 38);
  coort.push(tileNumber);
  // console.log('tileNumber: ', tileNumber);

  return (
    // this._url + "1952-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
    this._url + "/1952-" + tileNumber + ".png"
  );
};

let nashville2016Tile1444_578 = L.tileLayer("data/2016Tiles1444-5.78", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});
nashville2016Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url +
    "/2016m-" +
    (1444 - (38 - coords.x - 1) + coords.y * 38) +
    ".png"
  );
};

let nashville2016OverlayTile1444_578 = L.tileLayer(
  "data/2016OverlayTiles1444-5.78",
  {
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2 * zoomStep,
    tms: true,
    tileSize: tileSize_578, // 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true,
  }
);
nashville2016OverlayTile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url +
    "/2016o-" +
    (1444 - (38 - coords.x - 1) + coords.y * 38) +
    ".png"
  );
};

// map.fitBounds([[36.15,-86.7985],[36.17885,-86.76469]]);


// add the OpenStreetMap tiles
let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
});
// osm.addTo(map);

// gdal tiles
let gdalTiles = L.tileLayer('data/gdalTiles/{z}/{x}/{y}.png', {
  tms: 1, opacity: 0.7, attribution: "", minZoom: 14, maxZoom: 18
});

// 2016 1x gdal tiles
let gdalTilesFrom_2016_2x = L.tileLayer('data/2016GdalTilesFrom2x/{z}/{x}/{y}.png', {
  tms: 1, opacity: 0.7, attribution: "", minZoom: 14, maxZoom:18
});