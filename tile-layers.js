let nashville1864Tile1444_578 = L.tileLayer("data/1864Tiles1444-5.78/", {
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

let nashville1871Tile1444_578 = L.tileLayer("data/1871Tiles1444-5.78/", {
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

let nashville1903Tile1444_578 = L.tileLayer("data/1903Tiles1444-5.78/", {
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

let nashville1929Tile1444_578 = L.tileLayer("data/1929Tiles1444-5.78/", {
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

let nashville1952Tile1444_578 = L.tileLayer("data/1952Tiles1444-5.78/", {
  minZoom: centZoom - zoomStep,
  maxZoom: centZoom + 2 * zoomStep,
  tms: true,
  tileSize: tileSize_578, // 725-750
  maxNativeZoom: 8,
  minNativeZoom: 8,
  zoomReverse: true,
});
nashville1952Tile1444_578.getTileUrl = function (coords) {
  
  // debugger;
  return (
    this._url + "1952-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
  );
};

let nashville2016Tile1444_578 = L.tileLayer("data/2016Tiles1444-5.78/", {
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
  "data/2016OverlayTiles1444-5.78/",
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

L.GridLayer.DebugCoords = L.GridLayer.extend({
  createTile: function (coords) {
    var tile = document.createElement("div");
    tile.innerHTML = [
      coords.z,
      coords.x,
      coords.y,
      1444 - (38 - coords.x + 1) + (coords.y - 1) * 38,
    ].join(", ");
    tile.style.outline = "1px solid red";
    return tile;
  },
});

L.gridLayer.debugCoords = function (opts) {
  return new L.GridLayer.DebugCoords(opts);
};
let grid = L.gridLayer.debugCoords({ tileSize: 1024 });
if (debugMode) {
  // map.addLayer(grid);
}
// add the OpenStreetMap tiles
let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
});
// osm.addTo(map);