let map = L.map("map", {
  // minZoom: centZoom - zoomStep,
  // maxZoom: centZoom + 2*zoomStep,
  wheelPxPerZoomLevel: 60 * zoomStep,
  // crs: L.CRS.EPSG3857,
  crs: L.CRS.Simple,
  zoomControl: false,
  maxBounds: imageBounds,
  // maxBounds: [
  //   L.CRS.EPSG3857.project(L.point([35.924257403088696,-87.110828523895506])),
  //   L.CRS.EPSG3857.project(L.point([36.455984334237499,-86.455106676699103]))
  // ],
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
  "Nashville Historical Atlas by William Gregg (wrgregg@gmail.com). &copy; 2023"
);

// map.setView([36.16663, -86.7644], 14);
map.setView([45,53],centZoom);
// var bounds = [
//   [0, 0],
//   [imageSize, imageSize],
// ];

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
    if (feature.properties) {
      // debugger;
      var m = L.marker(latlng, {
        icon: L.icon({
          iconUrl: "images/landmarks_streets/unselectedlandmark.png",
          iconSize: [24, 28],
          iconAnchor: [12, 28],
        }),
      });
      m.bindTooltip(feature.properties.Landmark, {
        // permanent: true,
        direction: "top",
        offset: [0, -42],
      });
      // .openTooltip();
      m.layerName = "Landmark";
      feature.properties.Name = feature.properties.Landmark;
      return m;
    }
  },
  onEachFeature: function (feature, layer) {
    // previousselectedlandmark = null;
    layer.on("click", function (e) {
      debugger;
      if (previousselectedlandmark != null) {
        previousselectedlandmark.setIcon(
          L.icon({
            iconUrl: "images/landmarks_streets/unselectedlandmark.png",
            iconSize: [24, 28],
            iconAnchor: [12, 28],
          })
        );
      }

      layer.setIcon(
        L.icon({
          iconUrl: "images/landmarks_streets/selectedlandmark.png",
          iconSize: [24, 28],
          iconAnchor: [12, 28],
        })
      );
      previousselectedlandmark = layer;
      previousselectedlandmark.closeTooltip(); // firefox khe search:locationfound khe tooltip waa choniu issue 72 solved
      // Update Side Panel
      // debugger;

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

        $("#select_div").html("");
        var contentSelection =
          '<h4 id="SelectionName">' + prop["Landmark"] + "</h4>";
        contentSelection += prop["Alternate Names"]
          ? '<p id="selectionAltName">Also known as ' +
            prop["Alternate Names"] +
            ".</p>"
          : "";
        var mannerofdestruction = prop["Manner of Destruction"]
          ? ", " + prop["Manner of Destruction"]
          : "";
        var destruction = "";
        if (prop["Destruction"] && prop["Destruction"] != "extant") {
          destruction = " " + prop["Destruction"];
        }
        contentSelection += prop["Construction"]
          ? '<p id="selection_subtitle">Built ' +
            prop["Construction"] +
            "" +
            mannerofdestruction +
            destruction +
            ".</p>"
          : "";
        // code for first image
        contentSelection += '<div class="image-container">';
        var slideImage = '<div class="slide">';
        if (prop["Use Image?"] == "yes") {
          if (prop["Image File Name"]){
            slideImage +=
              '<img class="myImg" src="images/pictures/' +
              prop["Image File Name"] +
              '" onClick=imgPopupModal(this)>';
          }
          
          if(prop["Image Caption"]){
            slideImage += '<div id="img_attribution" class="captionText">' + prop["Image Caption"] + '</div>';
          }else if (prop["Year of Image"]) {
            slideImage +=
              '<div id="img_attribution" class="captionText">' +
              prop["Year of Image"];
            if (prop["Image Type"]) {
              slideImage += " " + prop["Image Type"] + ".";
            }
            if (prop["Image Download Location"]) {
              slideImage +=
                " Courtesy " + prop["Image Download Location"] + ".</div>";
            }
          }
          
        } else {
          if (prop["Test Photo File Name"])
            slideImage +=
              '<img class="myImg" src="images/testimages/' +
              prop["Test Photo File Name"] +
              '" onClick=imgPopupModal(this)>';
        }

        slideImage += "</div>";
        // debugger;
        // code for 2nd image
        if (
          prop["Use Alternate Image 1?"] == "yes" &&
          prop["Alternate Image 1 Download Location"]
        ) {
          slideImage +=
            '<div class="slide"><img class="myImg" src="images/pictures/' +
            prop["Alternate Image 1 File Name"] +
            '"><div id="img_attribution" class="captionText">' +
            prop["Alternate Image 1 Download Location"] +
            ".</div></div>";
          if (
            prop["Use Alternate Image 2?"] != "yes" &&
            !prop["Alternate Image 2 Download Location"]
          ) {
            slideImage +=
              '<a class="previous" onclick="moveSlides(-1)"><img src="images/leftPanalImages/previous-enabled.png" /></a>';
            slideImage +=
              '<a class="next" onclick="moveSlides(1)"><img src="images/leftPanalImages/next-enabled.png" /></a>';
          }
        }

        // code for 3rd image
        if (
          prop["Use Alternate Image 2?"] == "yes" &&
          prop["Alternate Image 2 Download Location"]
        ) {
          slideImage +=
            '<div class="slide"><img class="myImg" src="images/pictures/' +
            prop["Alternate Image 2 File Name"] +
            '"><div id="img_attribution" class="captionText">' +
            prop["Alternate Image 2 Download Location"] +
            ".</div></div>";
          slideImage +=
            '<a class="previous" onclick="moveSlides(-1)"><img src="images/leftPanalImages/previous-enabled.png" /></a>';
          slideImage +=
            '<a class="next" onclick="moveSlides(1)"><img src="images/leftPanalImages/next-enabled.png" /></a>';
        }
        contentSelection += slideImage + "</div>";
        //
        if (prop["Description"]) {
          contentSelection +=
            '<p id="selection_description">' + prop["Description"] + "</p>";
        }
        $("#select_div").append(contentSelection);

        displaySlide(1);
      } else {
        $("#select_div").html(
          '<p id="no_selection_description">Select a landmark marker on the map and information for that landmark will appear here.</p>'
        );
      }
      openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
      // $('#selection_btn').addClass('active');
    });
  },
  filter: function (geoJsonFeature) {
    if (
      geoJsonFeature.geometry.coordinates[0] &&
      geoJsonFeature.geometry.coordinates[1]
    ) {
      // check for 0 or missing value in lat/lng column
      // console.log('geoJsonFeature: ', geoJsonFeature);
    }
    return (
      geoJsonFeature.geometry.coordinates[0] &&
      geoJsonFeature.geometry.coordinates[1]
    );
  },
});
// landmarksLayer.addTo(map);
let csvAdjustData = [];
let landmarksLayer_clone;
// let csvAdjust = omnivore
//   .csv(
//     "data/Landmarks 6 (for dev 2) real coord downloaded.csv",
$.get("https://nashhistatlas.org/wp-json/custom/v1/table-landmarks/", (data) => {
  // console.log(data);
  // geoJsonData = GeoJSON.parse(data, { Point: ["lat", "lng"] });
  geoJsonData = GeoJSON.parse(data, { Point: ["qgisY", "qgisX"] });
  // console.log(geoJsonData);
  landmarksLayer.addData(geoJsonData);
  landmarksLayer_clone = cloneLayer(landmarksLayer);
  csvAdjustData = landmarksLayer.getLayers();
  // landmarksLayer_clone.addTo(map);
  if (searchControl) {
    // setLayer use ya mate. source code thik maju.
    searchControl.options.layer = L.layerGroup([
      landmarksLayer_clone,
      // streetsLayer_clone,
    ]);
    searchControl._layer = L.layerGroup([
      landmarksLayer_clone,
      // streetsLayer_clone,
    ]);
  } else {
    $("#Search").html("Search Control not working");
  }
});
// let csvAdjust = omnivore
//   .geojson(
//     "data/Landmarks 6 (for dev 2) lat lng.geojson",
//     {
//       // latfield: "y",
//       // lonfield: "x",
//       // delimiter: ",",
//     },
//     landmarksLayer
//   )
//   .on("ready", function (layer) {
//     csvAdjustData = csvAdjust.getLayers();

//     landmarksLayer_clone = cloneLayer(landmarksLayer);
//     // landmarksLayer_clone.addTo(map);
//     if (searchControl) {
//       // setLayer use ya mate. source code thik maju.
//       searchControl.options.layer = L.layerGroup([
//         landmarksLayer_clone,
//         // streetsLayer_clone,
//       ]);
//       searchControl._layer = L.layerGroup([
//         landmarksLayer_clone,
//         // streetsLayer_clone,
//       ]);
//     } else {
//       $("#Search").html("Search Control not working");
//     }
//   });
// csvAdjust.addTo(map);

let previousselectedstreet = null;
let streetsLayer = L.geoJSON(null,{
  pointToLayer: function (feature, latlng) {
    // return L.circleMarker(latlng, geojsonMarkerOptions);
    let m = L.marker(latlng, {
      icon: L.icon({
        iconUrl: "images/landmarks_streets/unselectedstreet.png",
        iconSize: [24, 28],
        iconAnchor: [12, 28],
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
            iconSize: [24, 28],
            iconAnchor: [12, 28],
          })
        );
      }

      layer.setIcon(
        L.icon({
          iconUrl: "images/landmarks_streets/selectedstreet.png",
          iconSize: [24, 28],
          iconAnchor: [12, 28],
        })
      );
      previousselectedstreet = layer;

      // Update Side Panel
      // debugger;

      var prop = layer.feature.properties;
      $("#select_div").html("");
      var contentSelection =
        '<h4 id="SelectionName">' +
        prop["Street"] +
        " " +
        prop["Type"] +
        "</h4>";

      contentSelection += prop["Construction"]
        ? '<p id="selection_subtitle">Built ' + prop["Construction"] + ".</p>"
        : "";
      contentSelection += '<div class="image-container">';
      var slideImage = '<div class="slide">';

      if (prop["Test Photo File Name"])
        slideImage +=
          '<img src="images/testimages/' + prop["Test Photo File Name"] + '">';

      if (prop["img_attribution"]) {
        slideImage +=
          '<div id="img_attribution" class="captionText">' +
          prop["img_attribution"];
      }
      slideImage += "</div>";

      contentSelection += slideImage + "</div>";
      if (prop["History"]) {
        contentSelection +=
          '<p id="selection_description">' + prop["History"] + "</p>";
      }
      $("#select_div").append(contentSelection);
      openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
    });
  },
});

$.get("https://nashhistatlas.org/wp-json/custom/v1/table-streets/", (data) => {
  
streets_data = GeoJSON.parse(data, { Point: ["qgisY", "qgisX"] });
streetsLayer.addData(streets_data);

let streetsLayer_clone = cloneLayer(streetsLayer);
});
let searchControl = new L.Control.Search({
  position: "topright",
  propertyName: "Name",
  container: "search_div",
  collapsed: false,
  textPlaceholder: "",
  initial: false,
  autoType: false,
  autoCollapseTime: 60000,
  textErr: "No results found.",
  marker: false,
  // textPlaceholder: 'Search for Landmark or Streets..........',
  buildTip: function (text, val) {
    // debugger;
    let type;
    if (val.layer.feature.properties.Landmark) {
      type = "Landmark";
    } else if (val.layer.feature.properties.Street) {
      type = "Street";
    }
    return (
      '<a href="#" class="' +
      type +
      '">' +
      text +
      "<!-- <b>" +
      type +
      '</b> --> <span class="result-arrow">></span></a>'
    );
  },
  moveToLocation: function (latlng, title, val) {},
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
  //
  // 		}
  // 	};
  // }
});
searchControl.addTo(map);
searchControl.on("search:locationfound", (e) => {
  // check street or landmark
  if (e.layer.feature.properties.hasOwnProperty("Street")) {
    selectMode({ innerText: "Streets" });
    $("#mode.select-selected")[0].innerText = "Streets";
  } else if (e.layer.feature.properties.hasOwnProperty("Landmark")) {
    // debugger;
    let years =
      e.layer.feature.properties["Maps Photo Should Appear on"].split(",");
    years = years.map((y) => {
      return y.trim();
    });
    let feature = e.layer.feature;

    if (years.indexOf($("#year.select-selected")[0].innerText.trim()) >= 0) {
      // marker year khe da

      // pass;
      searchControl.showLocation(e.latlng, e.text);
      let feature = landmarksLayer
        .getLayers()
        .find(
          (f) =>
            f.feature.properties.Name ==
            landmarksLayer_clone.getLayer(e.layer._leaflet_id).feature
              .properties.Name
        );
      feature.fire("click");
      map.panTo(feature.getLatLng());
      map.panBy([-200, 0]);
    } else {
      // marker year khe maru
      let content;
      if (years.length == 1) {
        content = `<p> ${feature.properties.Name} appears only on the ${years[0]} map, which will now be displayed. </p>`;
        content += `<select id="popupYear" class="custom-select hidden">
        <option class="popup-mapchange-button">Select</option>`;

        for (var i = 0; i < years.length; i++) {
          content += `<option class="popup-mapchange-button" value='${years[i]}' selected>${years[i]}</option>`;
        }
        content += "</select>";
        content +=
          '<div id="popup_btn_div" style="text-align:right"><button onClick = \'map.closePopup()\'> Cancel </button>  <button onClick =\'popupYearSelect(' +
          e.layer._leaflet_id +
          ")'>OK</button></div>";
      } else {
        content = `<p>${feature.properties.Name} does not appear on the current map. Which map do you want to switch to? </p>`;

        content += `Year <select id="popupYear" class="custom-select">
        <option class="popup-mapchange-button">Select</option>`;

        for (var i = 0; i < years.length; i++) {
          content += `<option class="popup-mapchange-button" value='${years[i]}'>${years[i]}</option>`;
        }
        content += "</select>";
        content +=
          '<div id="popup_btn_div" style="text-align:right"><button onClick = \'map.closePopup()\'> Cancel </button>  <button onClick =\'popupYearSelect(' +
          e.layer._leaflet_id +
          ")'>OK</button></div>";
      }

      var popup = L.popup({
        direction: "bottom",
        // keepInView: true,
        autoPan: false,
        autoClose: false,
        closeOnEscapeKey: false,
        closeOnClick: false,
        closeButton: false,
      });
      popup.setContent(content);
      popup.setLatLng(L.latLng(40.5, 55.5));
      let c = map.getBounds().getCenter();
      c = map.latLngToLayerPoint(c);
      c.x += 400 / 2;
      popup.setLatLng(map.layerPointToLatLng(c));

      // popup.setLatLng(e.latlng);
      popup.openOn(map);
      if (searchControl._markerSearch) {
        searchControl._markerSearch.removeFrom(map);
      }
    }
  }
});

map.on("popupopen", (e) => {
  // debugger;

  // alert('popup opened');
  $(".instructions").addClass("noClick");
  $("#map").addClass("noClick");
  $(".leaflet-marker-pane img").removeClass("leaflet-interactive");
  $(".leaflet-popup").addClass("yesClick");
  $(".leaflet-popup").on("keypress", (e) => {
    if (e.keyCode == 13) {
      // pressing enter
      // alert();
      $("#popup_btn_div").children(1).click();
    }
  });
});
map.on("popupclose", (e) => {
  // alert('popup closed');
  $(".instructions").removeClass("noClick");
  $("#map").removeClass("noClick");
  $(".leaflet-marker-pane img").addClass("leaflet-interactive");
  // $('.leaflet-popup').addClass('yesClick');
});

let baselayers = {
  1952: nashville1952Tile1444_578,
  1864: nashville1864Tile1444_578,
  1871: nashville1871Tile1444_578,
  1903: nashville1903Tile1444_578,
  1929: nashville1929Tile1444_578,
  2016: nashville2016Tile1444_578,

  // 1952: gdalTilesFrom_2016_2x,
  // streets: gdalTiles,
  // osm: osm,
};

let overlays = {
  // "Landmarks":L.layerGroup(),
  "Just Maps": L.layerGroup(),
  Landmarks: landmarksLayer,
  Streets: streetsLayer,
  "Battle of Nashville": L.layerGroup(),
  // "2016 Overlay": gdalTilesFrom_2016_1x,
};
for (let i in baselayers) {
  if (["1864"].indexOf(i) < 0) {
    // 1864 is battle of nashville overlay, 2016 is 2016 overlay
    $("#year").append(`<option value=${i}>${i}`);
  } else {
  }
}
for (let i in overlays) {
  $("#mode").append(`<option value=${i}>${i}`);
}

// nashville1952Tile1444_578.addTo(map);
// gdalTilesFrom_2016_1x.addTo(map);
const defaultBaselayerElem = $("#year").children()[3];
defaultBaselayerElem.selected = true;
baselayers[defaultBaselayerElem.innerText].addTo(map);
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
function adjustHeight() {
  let adjheight = $("#map").height() - $("#control-head").height() - 120;
  $("#select_div").height(adjheight);
  $("#legend_img").height(adjheight);
  $("#search_div").height(adjheight + 10);
  $(".search-tooltip").height(adjheight - $(".search-input").height() - 100);
}
$(document).ready(function () {
  $(window).resize(function () {
    adjustHeight();
  });
});
function selectMode(elem) {
  let mode = elem.innerText;
  let nmode = "";
  for (let i in overlays) {
    map.removeLayer(overlays[i]);
  }
  $("#offRedioOverlay").prop("checked", true).trigger("click");
  // console.log("mode",mode.trim());
  if (mode.trim() == "Streets") {
    nmode = "Streets";
  }
  if (mode.trim() == "Battle of Nashville") {
    nmode = "Battle of Nashville";
  }

  if (mode.trim() == "Landmarks") {
    nmode = "Landmarks";
  }
  if (mode.trim() == "Just Maps") {
    nmode = "Just Maps";
  }
  // console.log(overlays);
  // console.log('testing mode');
  // console.log(nmode);
  // console.log(overlays[nmode]);
  map.addLayer(overlays[nmode]);
  switch (nmode) {
    case "Just Maps":
      // find previous map
      try {
        map.previousYear = layerSwitcher._findActiveBaseLayer().name;
      } catch (e) {
        map.previousYear = map.previousYear;
      }
      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
      }
      // debugger;
      //
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      if (!$("#yearDiv").is(":visible")) {
        let y = $("#yearDiv");
        y.show();
        y.next().hide();
      }

      if ($("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").removeClass("disabled");
      }
      if (!$("#overlayRadio").is(":visible")) {
        let r = $("#overlayRadio");
        r.show();
        r.next().hide();
      }

      // if ($("#informationPanal").is(":visible")) {
      //   $("#informationPanal").hide();
      //   // $('.instructions')[0].style.height = 'auto';
      // }

      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
        // $("#overlayRadio > input")[1].checked = true; // check the off button
        $("#offRedioOverlay").prop("checked", true).trigger("click");
      }
      // if (!$("#selection_btn.active")[0]) {
      //   openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
      // }
      break;
    case "Landmarks":
      try {
        map.previousYear = layerSwitcher._findActiveBaseLayer().name;
      } catch (e) {
        map.previousYear = map.previousYear;
      }

      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
      }
      if (previousselectedlandmark) {
        previousselectedlandmark.setIcon(
          L.icon({
            iconUrl: "images/landmarks_streets/unselectedlandmark.png",
            iconSize: [24, 28],
            iconAnchor: [12, 28],
          })
        );
        previousselectedlandmark = null;
      }
      if ($("#mode.select-selected")[0]) {
        if (
          ["Streets", "Battle of Nashville"].includes(
            $("#mode.select-selected")[0].getAttribute("previousMode")
          )
        ) {
          selectYear("1952");
        } else {
          selectYear($("#year.select-selected")[0].innerText);
        }
      }

      //
      if ($("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").removeClass("disabled");
      }
      if (!$("#yearDiv").is(":visible")) {
        let y = $("#yearDiv");
        y.show();
        y.next().hide();
      }

      if (!$("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").addClass("disabled");
      }
      if ($("#overlayRadio").is(":visible")) {
        $("#overlayRadio").hide();
      }
      $("#overlayRadio").next().html("Off").show();

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
      $("#select_div").html(
        '<p id="no_selection_description">Select a landmark marker on the map and information for that landmark will appear here.</p>'
      );

      adjustHeight();
      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
        // $("#overlayRadio input")[1].checked = true; // check the off button
        $("#offRedioOverlay").prop("checked", true).trigger("click");
      }
      if (!$("#selection_btn.active")[0]) {
        openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
      }
      break;
    case "Streets":
      try {
        map.previousYear = layerSwitcher._findActiveBaseLayer().name;
      } catch (e) {
        map.previousYear = map.previousYear;
      }

      for (let i in baselayers) {
        map.removeLayer(baselayers[i]);
      }
      map.addLayer(nashville2016Tile1444_578);

      $("#year.select-selected")[0].innerText = "2016";
      if (!$("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").addClass("disabled");
      }
      if ($("#yearDiv").is(":visible")) {
        let y = $("#yearDiv");
        y.hide();
      }
      $("#yearDiv").next().html("2016").show();
      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
      }

      $("#overlayRadio input")[1].checked = true; // check the off button
      if (!$("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").addClass("disabled");
      }
      if ($("#overlayRadio").is(":visible")) {
        $("#overlayRadio").hide();
      }
      $("#overlayRadio").next().html("Off").show();

      if (!$("#informationPanal").is(":visible")) {
        $("#informationPanal").show();
      }

      adjustHeight();
      // debugger;
      $("#select_div").html(
        '<p id="no_selection_description">Select a street marker on the map and information for that street will appear here.</p>'
      );
      if (!$("#selection_btn.active")[0]) {
        openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
      }
      break;
    case "Battle of Nashville":
      if (map.previousYear) {
        map.addLayer(baselayers[map.previousYear]);
      }
      if (!map.hasLayer(nashville2016Tile1444_578)) {
        map.addLayer(nashville2016Tile1444_578);
      }
      if (!$("#yearDiv").hasClass("disabled")) {
        $("#yearDiv").addClass("disabled");
      }
      if ($("#yearDiv").is(":visible")) {
        let y = $("#yearDiv");
        y.hide();
        // y.next().html('1864').show();
      }
      $("#yearDiv").next().html("1864").show();
      selectYear("1864");

      if ($("#overlayRadio").hasClass("disabled")) {
        $("#overlayRadio").removeClass("disabled");
      }

      if (!$("#overlayRadio").is(":visible")) {
        $("#overlayRadio").show();
        $("#overlayRadio").next().hide();
      }
      // $("#overlayRadio > input")[0].checked = false;
      // $("#overlayRadio > input")[1].checked = true;

      // $("#overlayRadio").next().html("Off").show();

      if (!$("#informationPanal").is(":visible")) {
        $("#informationPanal").show();
      }

      if (map.hasLayer(nashville2016OverlayTile1444_578)) {
        map.removeLayer(nashville2016OverlayTile1444_578);
        $("#offRedioOverlay").prop("checked", true).trigger("click");
      }
      adjustHeight();
      $("#select_div").html(
        '<p id="no_selection_description">For now the map of the Battle of Nashville is not interactive and shows only the positions of the armies on the first day of fighting, December 15th, 1864. Check back later for an enhanced map of the battle.</p>'
      );
      // if(!$("#selection_btn.active")[0]){
      //   openCity({ currentTarget: $("#selection_btn")[0] }, "Selection");
      // }
      break;
  }
}

function selectYear(elem) {
  const year = elem.innerText || elem;
  // console.log(year,'shubham');
  for (let i in baselayers) {
    map.removeLayer(baselayers[i]);
  }

  map.addLayer(baselayers[year.trim()]);
  // debugger;
  if (["osm", "gdalTiles"].includes(year)) {
    return;
  }

  // debugger;
  let l = csvAdjustData.filter((k) => {
    if (k.feature.properties["Maps Photo Should Appear on"]) {
      return k.feature.properties["Maps Photo Should Appear on"].includes(
        year.trim()
      );
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

function popupYearSelect(leaflet_id) {
  let popupYear = $("#popupYear").val();
  debugger;
  if (popupYear != "Select") {
    selectMode({ innerText: "Landmarks" });
    $("#mode.select-selected")[0].innerText = "Landmarks";
    selectYear(popupYear);
    let feature = landmarksLayer
      .getLayers()
      .find(
        (e) =>
          e.feature.properties.Name ==
          landmarksLayer_clone.getLayer(leaflet_id).feature.properties.Name
      );
    feature.fire("click");
    map.panTo(feature.getLatLng());
    map.closePopup();
    map.panBy([200, 0]);
  } else {
    alert("Please select year...");
  }
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
}
updateZoomText();

window.onload = function () {
  if (!debugMode) {
    selectMode({ innerText: "Just Maps" });
    $("#mode.select-selected")[0].innerText = "Just Maps";
  } else {
    selectMode({ innerText: "Landmarks" });
    $("#mode.select-selected")[0].innerText = "Landmarks";
  }

  $("#informationPanal").show();
  openCity(event, "About");

  map.panBy([-300, 0]);
};

// setTimeout(1000, map.fitBounds(landmarksLayer.getBounds()));

if (debugMode) {
  // map.addLayer(grid);
  $(".instructions").hide();
  // map.fitBounds(landmarksLayer.getBounds());
  // map.setZoom(16);
}

if (debugMode) {
  L.GridLayer.DebugCoords = L.GridLayer.extend({
    createTile: function (coords) {
      var tile = document.createElement("div");
      tile.innerHTML = [
        coords.z,
        coords.x,
        coords.y,
        1444 - (38 - coords.x - xshift) + (coords.y - yshift) * 38,
      ].join(", ");
      tile.style.outline = "1px solid red";
      return tile;
    },
  });

  L.gridLayer.debugCoords = function (opts) {
    return new L.GridLayer.DebugCoords(opts);
  };
  let grid = L.gridLayer.debugCoords({ tileSize: 512 });
}
