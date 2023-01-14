const centZoom = 6,
  zoomStep = 1,
  tileSize_578 = 700;
// const debugMode = true;
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
  maxBounds: imageBounds,
  maxBoundsViscosity: 0.5,
});

let zoomControl = L.control
  .zoom({
    zoomInText:
      '<img src="images/leftPanalImages/magnifybutton.png" alt="" srcset="">',
    zoomOutText:
      '<img src="images/leftPanalImages/reducebutton.png" alt="" srcset="">',
  })
  .addTo(map);

// Create additional Control placeholders
function addControlPlaceholders(map) {
  var corners = map._controlCorners,
    l = "leaflet-",
    container = map._controlContainer;

  function createCorner(vSide, hSide) {
    var className = l + vSide + " " + l + hSide;

    corners[vSide + hSide] = L.DomUtil.create("div", className, container);
  }

  createCorner("verticalcenter", "left");
  createCorner("verticalcenter", "right");
}
addControlPlaceholders(map);

// Change the position of the Zoom Control to a newly created placeholder.
zoomControl.setPosition("verticalcenterleft");

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
        iconSize: [18, 22],
        iconAnchor: [9, 22],
      }),
    });
    m.bindTooltip(feature.properties.Landmark, {
      // permanent: true,
      direction: "top",
      offset: [0, -42],
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
            iconAnchor: [9, 22],
          })
        );
      }

      layer.setIcon(
        L.icon({
          iconUrl: "images/landmarks_streets/selectedlandmark.png",
          iconSize: [18, 22],
          iconAnchor: [9, 22],
        })
      );
      previousselectedlandmark = layer;

      // Update Side Panel
      // debugger;
      console.log(layer.feature.properties);
      let yearslandmark =
        layer.feature.properties["Maps Photo Should Appear on"].split(",");
      yearslandmark = yearslandmark.map((y) => {
        return y.trim();
      });

      if (
        yearslandmark.indexOf($("#year.select-selected")[0].innerText.trim()) >=
        0
      ) {
        // landmark selected year khe lai laki malai check yaau
        var prop = layer.feature.properties;
        console.log(prop);
        console.log($('#select_div'));
        $('#select_div').html('');
        var contentSelection = '<h4 id="SelectionName">'+prop["Landmark"]+'</h4>';
        contentSelection += (prop["Alternate Names"])?'<p id="selectionAltName">Also known as '+prop["Alternate Names"]+'</p>':'';
        var mannerofdestruction = (prop["Manner of Destruction"])?', '+prop["Manner of Destruction"]:'';
        var destruction = '';
        if (prop["Destruction"] && prop["Destruction"] != "extant") {
          destruction = ' '+prop["Destruction"];
        }
        contentSelection += (prop["Construction"])?'<p id="selection_subtitle">Built '+prop["Construction"]+mannerofdestruction+destruction+'.</p>':'';
        contentSelection += '<div class="image-container">';
        var slideImage = '<div class="slide">';
        if(prop["Use Image?"] == "yes"){
          if(prop["Image File Name"])
          slideImage += '<img src="images/pictures/'+prop["Image File Name"]+'">';

          if(prop["Year of Image"]){
            slideImage += '<div id="img_attribution" class="captionText">'+prop["Year of Image"];
            if(prop["Image Type"]){
              slideImage += ' '+prop["Image Type"]+".";
            }
            if(prop["Image Download Location"]){
              slideImage += ' Courtesy '+prop["Image Download Location"]+'</div>';
            }
          }          
        }else{
          if(prop["Test Photo File Name"])
          slideImage += '<img src="images/testimages/'+prop["Test Photo File Name"]+'">';
        }
        
        slideImage += '</div>';
        if(prop["Use Image?"] == "yes" && prop["Alternate Image 2"]){
          slideImage += '<div class="slide"><img src="images/pictures/'+prop["Alternate Image 2"]+'"></div><div id="img_attribution" class="captionText">'+prop["Alternate Image 2 Download Location"]+'</div>';
          slideImage += '<a class="previous" onclick="moveSlides(-1)"><img src="images/leftPanalImages/previous-enabled.png" /></a>';
          slideImage += '<a class="next" onclick="moveSlides(1)"><img src="images/leftPanalImages/next-enabled.png" /></a>';
        }
        contentSelection += slideImage+'</div>';
        if (prop["Description"]) {
        contentSelection +='<p id="selection_description">'+prop["Description"]+'</p>';
        }
        $('#select_div').append(contentSelection);
        displaySlide(1);
      }else{
        $('#select_div').html('<p id="no_selection_description">Select a landmark marker on the map and information for that landmark will appear here</p>');
      }
      openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
      // $('#selection_btn').addClass('active');
    });
  },
});
// landmarksLayer.addTo(map);
let csvAdjustData = [];
let landmarksLayer_clone;
// let csvAdjust = omnivore
//   .csv(
//     "data/Landmarks 6 transformed xyfill.csv",
let csvAdjust = omnivore
  .geojson(
    'data/Landmarks 6 transformed xyfill.geojson',
    {
      // latfield: "y",
      // lonfield: "x",
      // delimiter: ",",
    },
    landmarksLayer
  )
  .on("ready", function (layer) {
    csvAdjustData = csvAdjust.getLayers();
    console.log(csvAdjustData);
    landmarksLayer_clone = cloneLayer(landmarksLayer);
    // landmarksLayer_clone.addTo(map);
    if(searchControl){
      // setLayer use ya mate. source code thik maju.
      searchControl.options.layer = L.layerGroup([landmarksLayer_clone,streetsLayer_clone]);
      searchControl._layer = L.layerGroup([landmarksLayer_clone,streetsLayer_clone]);
    }else{
      $('#Search').html('Search Control not working');
    }
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
        iconAnchor: [10, 10],
      }),
    });
    m.bindTooltip(`${feature.properties.Street} ${feature.properties.Type}`, {
      // permanent: true,
      direction: "top",
      offset: [0, -20],
    }).openTooltip();
    m.layerName = "Street";
    feature.properties.Name = `${feature.properties.Street} ${feature.properties.Type}`;
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
            iconAnchor: [10, 10],
          })
        );
      }

      layer.setIcon(
        L.icon({
          iconUrl: "images/landmarks_streets/selectedstreet.png",
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        })
      );
      previousselectedstreet = layer;

      // Update Side Panel
      // debugger;

      var prop = layer.feature.properties;
        console.log(prop);
        console.log($('#select_div'));
        $('#select_div').html('');
        var contentSelection = '<h4 id="SelectionName">'+prop["Street"]+' '+prop["Type"]+'</h4>';
        
        contentSelection += (prop["Construction"])?'<p id="selection_subtitle">Built '+prop["Construction"]+'.</p>':'';
        contentSelection += '<div class="image-container">';
        var slideImage = '<div class="slide">';
        
          if(prop["Test Photo File Name"])
          slideImage += '<img src="images/testimages/'+prop["Test Photo File Name"]+'">';
        
        if(prop["img_attribution"]){
          slideImage += '<div id="img_attribution" class="captionText">'+prop["img_attribution"];
          
        }
        slideImage += '</div>';

        contentSelection += slideImage+'</div>';
        if (prop["History"]) {
        contentSelection +='<p id="selection_description">'+prop["History"]+'</p>';
        }
        $('#select_div').append(contentSelection);
        openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
    });
  },
});

let streetsLayer_clone = cloneLayer(streetsLayer);

let searchControl = new L.Control.Search({
  position: "topright",
  propertyName: "Name",
  container: "Search",
  collapsed: false,
  textPlaceholder: "",
  // textPlaceholder: 'Search for Landmark or Streets..........',
  // buildTip: function (text, val) {
  //   // debugger;
  //   let type;
  //   if (val.layer.feature.properties.Landmark) {
  //     type = "Landmark";
  //   } else if (val.layer.feature.properties.Street) {
  //     type = "Street";
  //   }
  //   return (
  //     '<a href="#" class="' +
  //     type +
  //     '">' +
  //     text +
  //     "  <!-- <b>" +
  //     type +
  //     '</b> --> <span class="result-arrow">></span></a>'
  //   );
  // },
  // sourceData: function(text, callResponse){
  //   let data = [];
  //   landmarksLayer_clone.getLayers().forEach(function(l){
  //     if(l.feature.properties.Landmark) {
  //       data.push({
  //         'loc':[l.getLatLng().lat,l.getLatLng().lng],
  //         'Name':l.feature.properties.Name,
  //         'type':"Landmark",
  //         'layer':landmarksLayer
  //       });
  //     }
  //   });

  //   streetsLayer_clone.getLayers().forEach(function(l){
  //     if(l.feature.properties.Street) {
  //       data.push({
  //         'loc':[l.getLatLng().lat,l.getLatLng().lng],
  //         'Name':l.feature.properties.Name,
  //         'type':"Street",
  //         'layer':streetsLayer
  //       });
  //     }
  //   });

  //   callResponse(data);

  //   return {	//called to stop previous requests on map move
	// 		abort: function() {
	// 			console.log('aborted request:'+ text);
	// 		}
	// 	};
  // }
});
searchControl.addTo(map);
searchControl.on("search:locationfound", (e) => {
  console.log(e);
  // check street or landmark
  if(e.layer.feature.properties.hasOwnProperty('Street')){
    
  }
  if(e.layer.feature.properties.hasOwnProperty('Landmark')){
    // debugger;
    let years =
      e.layer.feature.properties["Maps Photo Should Appear on"].split(",");
    years = years.map((y) => {
      return y.trim();
    });
    let feature = e.layer.feature;

    if (years.indexOf($("#year.select-selected")[0].innerText.trim()) >= 0) {
      // pass;
    } else {
      let content =
        `<p>${feature.properties.Name} does not appear on the current map. Which map do you want to switch to? <p>`;

      content += 	`Year <select id="popupYear" >`;

      for (var i = 0; i < years.length; i++) {
        content +=
          `<option class="popup-mapchange-button" value='${years[i]}'>${years[i]}</option>`;
      }
      content += "</select>";
      content += "<button> Cancel </button><button onClick ='popupSelectYear()'>OK</button>";

      var popup = L.popup({
        direction: "bottom",
        // className: 'instructions'
      })
        .setLatLng(e.latlng)
        .setContent(content)
        .openOn(map);
    }
  }

});

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
  "Battle of Nashville": L.layerGroup(),
  // "2016 Overlay": nashville2016OverlayTile1444_578,
};
for (let i in baselayers) {
  $("#year").append(`<option value=${i}>${i}`);
}
for (let i in overlays) {
  $("#mode").append(`<option value=${i}>${i}`);
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
      // debugger;
      //
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      if ($("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").removeClass("disabled");
      }
      if ($("#informationPanal").is(":visible")) {
        $("#informationPanal").hide();
        // $('.instructions')[0].style.height = 'auto';
      }

      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
        $("#overlayRadio > input")[1].checked = true; // check the off button
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
      if($("#mode.select-selected")[0]){
        if (
          ["Streets", "Battle of Nashville"].includes(
            $("#mode.select-selected")[0].getAttribute("previousMode")
          )
        ) {
          selectYear("1952");
        }else{
          selectYear($("#year.select-selected")[0].innerText);
        }
      }
    
      //
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      if (!$("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").addClass("disabled");
      }
      if (!$("#informationPanal").is(":visible")) {
        if ($("#informationPanal").hasClass("hidden")) {
          $("#informationPanal").removeClass("hidden");
        }
        $("#informationPanal").show();
      }
      
      // let list = document.querySelectorAll('#Selection [id]');
      // list.forEach(
      //   node => {
      //     node.innerText = "";
      //   }
      // );
      $('#select_div').html('<p id="no_selection_description">Select a landmark marker on the map and information for that landmark will appear here</p>');

      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
        $("#overlayRadio input")[1].checked = true; // check the off button
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
      $("#year.select-selected")[0].innerText = "2016";
      if (!$("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").addClass("disabled");
      }
      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
      }
      $("#overlayRadio input")[1].checked = true; // check the off button
      if (!$("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").addClass("disabled");
      }
      
      if (!$("#informationPanal").is(":visible")) {
        $("#informationPanal").show();
      }
// debugger;
      $('#select_div').html('<p id="no_selection_description">Select a street marker on the map and information for that street will appear here</p>');
      break;
    case "Battle of Nashville":
      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
        console.log(map.previousYear);
      }
      if (!map.hasLayer(nashville2016Tile1444_578)) {
        map.addLayer(nashville2016Tile1444_578);
      }
      if (!$("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").addClass("disabled");
      }
      selectYear("1864");

      if ($("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").removeClass("disabled");
      }
      $("#overlayRadio > input")[0].checked = false;
      $("#overlayRadio > input")[1].checked = true;

      if (!$("#informationPanal").is(":visible")) {
        $("#informationPanal").show();
      }

      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
      }
      $('#select_div').html('<p id="no_selection_description">Select a landmark/street marker on the map and information for that landmark will appear here</p>');
      break;
  }
}

function selectYear(elem) {
  const year = elem.innerText || elem;
  for (let i in baselayers) {
    map.removeLayer(baselayers[i]);
  }
  map.addLayer(baselayers[year]);
  // debugger;
  let l = csvAdjustData.filter((k) => {
    if(k.feature.properties["Maps Photo Should Appear on"]){
      return k.feature.properties["Maps Photo Should Appear on"].includes(year);
    }
  });
  landmarksLayer.clearLayers();
  l.forEach((m) => {
    m.addTo(landmarksLayer);
  });
  $("#year.select-selected")[0].innerText = year;
  if ($("#selection_btn").hasClass("active")) {
    if (previousselectedlandmark) previousselectedlandmark.fireEvent("click");
    if (previousselectedstreet) previousselectedstreet.fireEvent("click");
  }
}

function popupSelectYear(){
  let popupYear = $('#popupYear').val();
  selectYear(popupYear);
}

function select2016Overlay($elem) {
  // alert();
  // debugger;
  switch ($elem.value) {
    case "on":
      if (!map.hasLayer(nashville2016OverlayTile1444_578)) {
        layerSwitcher.addOverlay(nashville2016OverlayTile1444_578);
        map.addLayer(nashville2016OverlayTile1444_578);
      }
      break;
    case "off":
      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
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

if(!debugMode){
  selectMode({innerText:'Just Maps'});
}else{
  selectMode({ innerText: "Landmarks" });
}
