const centZoom = 6,
  zoomStep = 1,
  tileSize_578 = 700;
const debugMode = false;
let imageBounds = [
  [0, 0],
  [115, 105],
];

let map = L.map("map", {
  // minZoom: centZoom - zoomStep,
  // maxZoom: centZoom + 2*zoomStep,
  wheelPxPerZoomLevel: 60 * zoomStep,
  crs: L.CRS.Simple,
  zoomControl: false,
  // maxBounds: imageBounds,
  maxBoundsViscosity: 0.5,
});

let zoomControl = L.control
  .zoom({
    zoomInText: '<img src="images/leftPanalImages/magnifybutton.png" alt="" srcset="">',
    zoomOutText: '<img src="images/leftPanalImages/reducebutton.png" alt="" srcset="">',
  })
  .addTo(map);

// Create additional Control placeholders
function addControlPlaceholders(map) {
  var corners = map._controlCorners,
      l = 'leaflet-',
      container = map._controlContainer;

  function createCorner(vSide, hSide) {
      var className = l + vSide + ' ' + l + hSide;

      corners[vSide + hSide] = L.DomUtil.create('div', className, container);
  }

  createCorner('verticalcenter', 'left');
  createCorner('verticalcenter', 'right');
}
addControlPlaceholders(map);

// Change the position of the Zoom Control to a newly created placeholder.
zoomControl.setPosition('verticalcenterleft');

// You can also put other controls in the same placeholder.
// L.control.scale({position: 'verticalcenterright'}).addTo(map);

let zoomText = L.DomUtil.create("div", "zoom-text");
zoomText.id = "zoomText";
zoomText.style.color = "white";
zoomControl.getContainer().firstChild.after(zoomText);

map.attributionControl.setPrefix(
  "Historical Atlas of Nashville by William Gregg (wrgregg@gmail.com). &copy; 2022"
);
map.setView([45, 53], centZoom);

// map.setView([0, 0], centZoom-zoomStep);
// .setView([36.1665, -86.79199], centZoom-1);

// add svg layers
// let imageBounds = [
//         [35.96967, -87.05589],
//         [36.41016, -86.51555]
//     ];

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
  // console.log(coords);
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
  // console.log(coords);
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
  // console.log(coords);
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
  // console.log(coords);
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
  // console.log(coords);
  // debugger;
  return (
    this._url + "/1952-" + (1444 - (38 - coords.x - 1) + coords.y * 38) + ".png"
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
  // console.log(coords);
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
  // console.log(coords);
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
  map.addLayer(grid);
}
// add the OpenStreetMap tiles
let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
});
// osm.addTo(map);
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#211c1f",
  color: "#fff",
  weight: 3,
  opacity: 1,
  fillOpacity: 0.8,
};

let previousselectedlandmark = null;
let landmarksLayer = L.geoJSON(null, {
  pointToLayer: function (feature, latlng) {
    // return L.circleMarker(latlng, geojsonMarkerOptions);
    var m = L.marker(latlng, {
      icon: L.icon({
        iconUrl: "images/landmarks_streets/unselectedlandmark.png",
        iconSize: [22, 32],
      }),
    });
    m.bindTooltip(feature.properties.Landmark, {
      // permanent: true,
      direction: "top",
      offset: [0, -22],
    }).openTooltip();
    m.layerName = "Landmark";
    feature.properties.Name = feature.properties.Landmark;
    return m;
  },
  onEachFeature: function (feature, layer) {
    // previousselectedlandmark = null;
    layer.on("click", function (e) {
      if (previousselectedlandmark != null) {
        previousselectedlandmark.setIcon(
          L.icon({
            iconUrl: "images/landmarks_streets/unselectedlandmark.png",
            iconSize: [18, 22],
            offset:[9,0]
          })
        );
      }

      layer.setIcon(
        L.icon({
          iconUrl: "images/landmarks_streets/selectedlandmark.png",
          iconSize: [18, 22],
          offset:[9,0]
        })
      );
      previousselectedlandmark = layer;

      // Update Side Panel
      // debugger;
      document.getElementById("SelectionName").innerText =
        layer.feature.properties["Landmark"];
      document.getElementById(
        "selection_subtitle"
      ).innerText = `${layer.feature.properties["Constructi"]}`;
      if (layer.feature.properties["Manner of"]) {
        document.getElementById(
          "selection_subtitle"
        ).innerText += `, ${layer.feature.properties["Manner of"]}`;
      }
      if (layer.feature.properties["Destructio"]) {
        document.getElementById(
          "selection_subtitle"
        ).innerText += ` ${layer.feature.properties["Destructio"]}`;
      }
      document.getElementById(
        "selection_img"
      ).src = `images\\relotsoffiles\\${layer.feature.properties["Test Photo"]}`;
      document.getElementById("img_attribution").innerText = "";
      if (layer.feature.properties["Photo Cred"]) {
        document.getElementById("img_attribution").innerText +=
          layer.feature.properties["Photo Cred"];
        if (layer.feature.properties["Year of Im"]) {
          document.getElementById("img_attribution").innerHTML += ", ";
        }
      }
      if (layer.feature.properties["Year of Im"]) {
        document.getElementById("img_attribution").innerText +=
          layer.feature.properties["Year of Im"];
      }
      if (layer.feature.properties["Descriptio"]) {
        document.getElementById("selection_description").innerText =
          layer.feature.properties["Descriptio"];
      }

      openCity(event, "Search");
    });
  },
});
landmarksLayer.addTo(map);
let csvAdjustData = [];
let csvAdjust = omnivore
  .csv(
    "data/Landmarks 4 (for dev).csv",
    {
      latfield: "y",
      lonfield: "X",
      delimiter: ",",
    },
    landmarksLayer
  )
  .on("ready", function (layer) {
    csvAdjustData = csvAdjust.getLayers();
  });
// csvAdjust.addTo(map);


let previousselectedstreet = null;
let streetsLayer = L.geoJSON(streets_data, {
  pointToLayer: function (feature, latlng) {
    // return L.circleMarker(latlng, geojsonMarkerOptions);
    let m = L.marker(latlng, {
      icon: L.icon({
        iconUrl: "images/landmarks_streets/unselectedstreet.png",
        iconSize: [20, 20],
        offset: [10,10]
      }),
    });
    m.bindTooltip(feature.properties.Street, {
      // permanent: true,
      direction: "top",
      offset: [0, -20],
    }).openTooltip();
    m.layerName = "Street";
    feature.properties.Name = feature.properties.Street;
    return m;
  },
  onEachFeature: function (feature, layer) {
    // previousselectedstreet = null;
    layer.on("click", function (e) {
      if (previousselectedstreet != null) {
        previousselectedstreet.setIcon(
          L.icon({
            iconUrl: "images/landmarks_streets/unselectedstreet.png",
            iconSize: [20, 20],
            offset: [10,10]
          })
        );
      }

      layer.setIcon(
        L.icon({
          iconUrl: "images/landmarks_streets/selectedstreet.png",
          iconSize: [20, 20],
          offset: [10,10]
        })
      );
      previousselectedstreet = layer;
    });
  },
});
// streetsLayer.addTo(map);

let searchControl = new L.Control.Search({
  layer: L.layerGroup([landmarksLayer,streetsLayer]),
  // layer: landmarksLayer,
  position:'topright',
  propertyName:'Name',
  container:"Search",
  collapsed:false,
  textPlaceholder: 'Search for Landmark or Streets',
  buildTip: function(text, val) {
    // debugger;
    let type;
    if(val.layer.feature.properties.Landmark){
      type = 'Landmark';
    } else if(val.layer.feature.properties.Street){
      type = 'Street';
    }
    return '<a href="#" class="'+type+'">'+text+'   <b>'+type+'</b></a>';
  }
});
searchControl.addTo(map);
// $("#Search").append(searchControl.getContainer());

// streetsLayer.addTo(map);

let baselayers = {
  1952: nashville1952Tile1444_578,
  1864: nashville1864Tile1444_578,
  1871: nashville1871Tile1444_578,
  1903: nashville1903Tile1444_578,
  1929: nashville1929Tile1444_578,
  2016: nashville2016Tile1444_578,
  // "none":L.layerGroup()
};

let overlays = {
  // "Landmarks":L.layerGroup(),
  "Just Maps": L.layerGroup(),
  Landmarks: landmarksLayer,
  Streets: streetsLayer,
  // "2016 Overlay": nashville2016OverlayTile1444_578,
};
for (let i in baselayers) {
  $("#year").append("<option>" + i);
}
for (let i in overlays) {
  $("#mode").append("<option>" + i);
}

nashville1952Tile1444_578.addTo(map);
$("#year").children()[4].selected = true;
let layerSwitcher = L.control.activeLayers(baselayers, overlays).addTo(map);
layerSwitcher.getContainer().style.display = "none";

if (debugMode) {
  layerSwitcher.getContainer().style.display = "block";
  L.control
    .coordinates({
      position: "bottomleft", //optional default "bootomright"
      decimals: 2, //optional default 4
      decimalSeperator: ".", //optional default "."
      labelTemplateLat: "Latitude: {y}", //optional default "Lat: {y}"
      labelTemplateLng: "Longitude: {x}", //optional default "Lng: {x}"
      enableUserInput: true, //optional default true
      useDMS: false, //optional default false
      useLatLngOrder: true, //ordering of labels, default false-> lng-lat
      markerType: L.marker, //optional default L.marker
      markerProps: {}, //optional default {},
      labelFormatterLng: function (lng) {
        return lng + " lng";
      }, //optional default none,
      labelFormatterLat: function (lat) {
        return lat + " lat";
      }, //optional default none
      customLabelFcn: function (latLonObj, opts) {
        "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng);
      }, //optional default none
    })
    .addTo(map);
}


function selectMode(elem) {
  const mode = elem.innerText;
  for (let i in overlays) {
    map.removeLayer(overlays[i]);
  }
  map.addLayer(overlays[mode]);
  switch (mode) {
    case "Just Maps":
      // find previous map
      try {
        map.previousYear = layerSwitcher._findActiveBaseLayer().name;
      } catch (e) {
        map.previousYear = map.previousYear;
      }
      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
        console.log(map.previousYear);
      }

      // 
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      if($("#overlayRadio").hasClass("disabled")){
        $("#overlayRadio").removeClass("disabled");
      }
      if($("#informationPanal").is(":visible")){
        $("#informationPanal").hide();
        $('.instructions')[0].style.height = 'auto';
      }
      break;
    case "Landmarks":
      try {
        map.previousYear = layerSwitcher._findActiveBaseLayer().name;
      } catch (e) {
        map.previousYear = map.previousYear;
      }
      console.log(map.previousYear);
      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
        console.log("map.previousYear = " + map.previousYear);
      }

      //
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      if(!$("#overlayRadio").hasClass("disabled")){
        $("#overlayRadio").addClass("disabled");
      }
      if(!$("#informationPanal").is(":visible")){
        if ($("#informationPanal").hasClass("hidden")) {
          $("#informationPanal").removeClass("hidden");
        }
        $("#informationPanal").show();
      }
      break;
    case "Streets":
      try {
        map.previousYear = layerSwitcher._findActiveBaseLayer().name;
      } catch (e) {
        map.previousYear = map.previousYear;
      }
      console.log(map.previousYear);
      for (let i in baselayers) {
        map.removeLayer(baselayers[i]);
      }
      map.addLayer(nashville2016Tile1444_578);
      if (!$("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").addClass("disabled");
      }
      if(!$("#overlayRadio").hasClass("disabled")){
        $("#overlayRadio").addClass("disabled");
      }
      if(!$("#informationPanal").is(":visible")){
        $("#informationPanal").show();
      }
      break;
    case "2016 Overlay":
      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
        console.log(map.previousYear);
      }
      map.addLayer(nashville2016Tile1444_578);
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      break;
  }
}

function selectYear(elem) {
  const year = elem.innerText;
  for (let i in baselayers) {
    map.removeLayer(baselayers[i]);
  }
  map.addLayer(baselayers[year]);
  let l = csvAdjustData.filter((k) =>
    k.feature.properties["Maps Landm"].includes(year)
  );
  csvAdjust.clearLayers();
  l.forEach((m) => m.addTo(csvAdjust));
}

function select2016Overlay ($elem){
  // alert();
  // debugger;
  switch($elem.value){
    case 'on':
      if(!map.hasLayer(nashville2016OverlayTile1444_578)){
        layerSwitcher.addOverlay(nashville2016OverlayTile1444_578);
        map.addLayer(nashville2016OverlayTile1444_578);
      }
      break;
    case 'off':
      if(map.hasLayer(nashville2016OverlayTile1444_578)){
        layerSwitcher.removeLayer(nashville2016OverlayTile1444_578);
        map.removeLayer(nashville2016OverlayTile1444_578);
      }
      break;
  }
}
function zoomInMap() {
  // map.zoomIn(zoomStep);
  $zoomText = parseFloat($("#zoomText").html());
  // debugger;
  switch ($zoomText) {
    case 0.5:
      map.setZoom(centZoom);
      break;
    case 1:
      map.setZoom(centZoom + 1);
      break;
    case 2:
      map.setZoom(centZoom + 2);
      break;
    case 4:
      map.setZoom(centZoom + 2);
      break;
  }
}

function zoomOutMap() {
  // map.zoomOut(zoomStep);
  $zoomText = parseFloat($("#zoomText").html());
  switch ($zoomText) {
    case 0.5:
      map.setZoom(centZoom - 1);
      break;
    case 1:
      map.setZoom(centZoom - 1);
      break;
    case 2:
      map.setZoom(centZoom);
      break;
    case 4:
      map.setZoom(centZoom + 1);
      break;
  }
}

map.on("zoomend", updateZoomText);
function updateZoomText() {
  if (map.getZoom() == centZoom) {
    $("#zoomText").html("1x");
  } else if (map.getZoom() < centZoom) {
    $("#zoomText").html("0.5x");
  } else if (map.getZoom() <= centZoom + zoomStep) {
    $("#zoomText").html("2x");
  } else {
    $("#zoomText").html("4x");
  }
  console.log("zoom change to" + map.getZoom());
}
updateZoomText();
