const centZoom = 6, zoomStep = 1, tileSize_578 = 700;
const debugMode = true;
let imageBounds = [
    [0, 0],
    [115, 105]
];

let map = L.map("map",{
    // minZoom: centZoom - zoomStep,
    // maxZoom: centZoom + 2*zoomStep,
    wheelPxPerZoomLevel: 60*zoomStep,
    crs: L.CRS.Simple,
    zoomControl: false,
    // maxBounds: imageBounds,
    maxBoundsViscosity:0.5
});

let zoomControl = L.control.zoom({
    zoomInText:'<img src="images/magnifybutton.png" alt="" srcset="">',
    zoomOutText:'<img src="images/reducebutton.png" alt="" srcset="">',
}).addTo(map);
let zoomText = L.DomUtil.create('div', 'zoom-text');
zoomText.id = 'zoomText';
zoomText.style.color = 'white';
zoomControl.getContainer().firstChild.after(zoomText);

map.attributionControl.setPrefix('Historical Atlas of Nashville by William Gregg (wrgregg@gmail.com). &copy; 2022')
map.setView([45, 53], centZoom);

// map.setView([0, 0], centZoom-zoomStep);
// .setView([36.1665, -86.79199], centZoom-1);

// add svg layers
// let imageBounds = [
//         [35.96967, -87.05589],
//         [36.41016, -86.51555]
//     ];

let nashville1864Tile1444 = L.tileLayer('data/1864Tiles1444/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    // tileSize: 714,
    tileSize:1428,
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1864Tile1444.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1864-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}
let nashville1864Tile1444_578 = L.tileLayer('data/1864Tiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1864Tile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1864-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville1871Tile1444 = L.tileLayer('data/1871Tiles1444/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: 714,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1871Tile1444.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1871-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}
let nashville1871Tile1444_578 = L.tileLayer('data/1871Tiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1871Tile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1871-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville1903Tile1444 = L.tileLayer('data/1903Tiles1444/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: 714,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1903Tile1444.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1903-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}
let nashville1903Tile1444_578 = L.tileLayer('data/1903Tiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1903Tile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1903-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville1929Tile1444 = L.tileLayer('data/1929Tiles1444/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: 714,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1929Tile1444.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1929-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}
let nashville1929Tile1444_578 = L.tileLayer('data/1929Tiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1929Tile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1929-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville1952Tile1444 = L.tileLayer('data/1952Tiles1444/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: 714,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1952Tile1444.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1952-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville1952Tile1444_578 = L.tileLayer('data/1952Tiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville1952Tile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/1952-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville2016Tile1444 = L.tileLayer('data/2016Tiles1444/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: 714,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville2016Tile1444.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/2016-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}
let nashville2016Tile1444_578 = L.tileLayer('data/2016Tiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville2016Tile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/2016m-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

let nashville2016OverlayTile1444_578 = L.tileLayer('data/2016OverlayTiles1444-5.78/',{
    minZoom: centZoom - zoomStep,
    maxZoom: centZoom + 2*zoomStep,
    tms:    true,
    tileSize: tileSize_578,// 725-750
    maxNativeZoom: 8,
    minNativeZoom: 8,
    zoomReverse: true
})
nashville2016OverlayTile1444_578.getTileUrl = function(coords){
    // console.log(coords);
    // debugger;
    return this._url+'/2016o-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
}

// map.fitBounds([[36.15,-86.7985],[36.17885,-86.76469]]);

L.GridLayer.DebugCoords = L.GridLayer.extend({
    createTile: function (coords) {
        var tile = document.createElement('div');
        tile.innerHTML = [ coords.z, coords.x, coords.y, (1444 -(38 - coords.x +1) + (coords.y -1 )*38)].join(', ');
        tile.style.outline = '1px solid red';
        return tile;
    }
});

L.gridLayer.debugCoords = function(opts) {
    return new L.GridLayer.DebugCoords(opts);
};
let grid = L.gridLayer.debugCoords({tileSize:1024});
if(debugMode){
    map.addLayer(grid);
}
// add the OpenStreetMap tiles
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
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
let landmarksLayer = L.geoJSON(landmarks_data,{
    pointToLayer: function (feature, latlng) {
        // return L.circleMarker(latlng, geojsonMarkerOptions);
        var m = L.marker(latlng, {
            icon: L.icon({
                'iconUrl': 'images/landmarks_streets/unselectedlandmark.png'
            })
        });
        m.bindTooltip(feature.properties.Landmark,{permanent:true,offset:[10,0]}).openTooltip();
        return m;
    },
    onEachFeature: function (feature, layer) {
        // previousselectedlandmark = null;
        layer.on('click', function (e) {
            if(previousselectedlandmark != null){
                previousselectedlandmark.setIcon(L.icon({
                    'iconUrl': 'images/landmarks_streets/unselectedlandmark.png'
                }));
            }

            layer.setIcon(L.icon({
                'iconUrl':'images/landmarks_streets/selectedlandmark.png'
            }));
            previousselectedlandmark = layer;
        });
    }
});
// landmarksLayer.addTo(map);

let csv = omnivore.csv('Landmarks (stub).csv',{
    latfield: 'Y',
    lonfield: 'X Location',
    delimiter: ','
}).on('ready', function(layer) {
    // An example of customizing marker styles based on an attribute.
    // In this case, the data, a CSV file, has a column called 'state'
    // with values referring to states. Your data might have different
    // values, so adjust to fit.
    this.eachLayer(function(marker) {
        if (marker.toGeoJSON().properties.state === 'CA') {
            // The argument to L.mapbox.marker.icon is based on the
            // simplestyle-spec: see that specification for a full
            // description of options.
            marker.setIcon(L.icon({
                'iconUrl':'images/landmarks_streets/selectedlandmark.png'
            }));
        } else {
            marker.setIcon(L.icon({
                'iconUrl':'images/landmarks_streets/selectedlandmark.png'
            }));
        }
        // Bind a popup to each icon based on the same properties
        marker.bindPopup(marker.toGeoJSON().properties.Landmark + ', ' +
            marker.toGeoJSON().properties.state);
            
            marker.bindTooltip(marker.toGeoJSON().properties.Landmark,{permanent:true,offset:[10,0]}).openTooltip();
    });
});
// csv.addTo(map);

let csvAdjust = omnivore.csv('transform_test.csv',{
    latfield: 'y',
    lonfield: 'x',
    delimiter: ','
}).on('ready', function(layer) {
    // An example of customizing marker styles based on an attribute.
    // In this case, the data, a CSV file, has a column called 'state'
    // with values referring to states. Your data might have different
    // values, so adjust to fit.
    this.eachLayer(function(marker) {
        if (marker.toGeoJSON().properties.state === 'CA') {
            // The argument to L.mapbox.marker.icon is based on the
            // simplestyle-spec: see that specification for a full
            // description of options.
            marker.setIcon(L.icon({
                'iconUrl':'images/landmarks_streets/selectedlandmark.png'
            }));
        } else {
            marker.setIcon(L.icon({
                'iconUrl':'images/landmarks_streets/selectedlandmark.png'
            }));
        }
        // Bind a popup to each icon based on the same properties
        marker.bindPopup(marker.toGeoJSON().properties.Landmark + ', ' +
            marker.toGeoJSON().properties.state);
            
            marker.bindTooltip(marker.toGeoJSON().properties.Landmark,{permanent:true,offset:[10,0]}).openTooltip();
    });
}).addTo(map);

let previousselectedstreet = null;
let streetsLayer = L.geoJSON(streets_data,{
    pointToLayer: function (feature, latlng) {
        // return L.circleMarker(latlng, geojsonMarkerOptions);
        return L.marker(latlng, {
            icon: L.icon({
                'iconUrl': 'images/landmarks_streets/unselectedstreet.png'
            })
        });
    },
    onEachFeature: function (feature, layer) {
        // previousselectedlandmark = null;
        layer.on('click', function (e) {
            if(previousselectedstreet != null){
                previousselectedlandmark.setIcon(L.icon({
                    'iconUrl': 'images/landmarks_streets/unselectedstreet.png'
                }));
            }

            layer.setIcon(L.icon({
                'iconUrl':'images/landmarks_streets/selectedstreet.png'
            }));
            previousselectedstreet = layer;
        });
    }
    // onEachFeature: function (feature, layer) {
    //     // layer.bindPopup("Test Popup");
    //     // layer.bindTooltip((layer.feature.properties['name'] !== null?String('<div style="color: #000000; font-size: 10pt; font-family: \'MS Shell Dlg 2\', sans-serif;">' + layer.feature.properties['name']) + '</div>':''), {permanent: true, offset: [0,0], className: 'css_SO_coverage_wgs_0_0'});
    //     layer.setText(feature.properties['name']!== null?feature.properties['name']:'',{
    //         attributes :{
    //             style:"font-size: 1.5em;",
    //             class:'labelText'
    //         },
    //     });
            
    // }
});
// streetsLayer.addTo(map);

let baselayers = {
    "1952":nashville1952Tile1444_578,
    "1864":nashville1864Tile1444_578,
    "1871":nashville1871Tile1444_578,
    "1903":nashville1903Tile1444_578,
    "1929":nashville1929Tile1444_578,
    "2016":nashville2016Tile1444_578,
    "none":L.layerGroup()
};

let overlays = {
    // "Landmarks":L.layerGroup(),
    "Just Maps": L.layerGroup(),
    "Landmarks": landmarksLayer,
    "Streets":streetsLayer,
    "2016 Overlay":nashville2016OverlayTile1444_578,
    "CSV": csv
};
for( i in baselayers){$('#year').append('<option>'+i)}
for( i in overlays){$('#mode').append('<option>'+i)}

nashville1952Tile1444_578.addTo(map);
$('#year').children()[4].selected = true;
let layerSwitcher = L.control.activeLayers(baselayers, overlays).addTo(map);
layerSwitcher.getContainer().style.display='none';

if(debugMode){
    layerSwitcher.getContainer().style.display='block';
    L.control.coordinates({
        position:"bottomleft", //optional default "bootomright"
        decimals:2, //optional default 4
        decimalSeperator:".", //optional default "."
        labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
        labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
        enableUserInput:true, //optional default true
        useDMS:false, //optional default false
        useLatLngOrder: true, //ordering of labels, default false-> lng-lat
        markerType: L.marker, //optional default L.marker
        markerProps: {}, //optional default {},
        labelFormatterLng : function(lng){return lng+" lng"}, //optional default none,
        labelFormatterLat : function(lat){return lat+" lat"}, //optional default none
        customLabelFcn: function(latLonObj, opts) { "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng)} //optional default none
    }).addTo(map);
}
function selectMode(elem){
    const mode = elem.innerText;
    for(let i in overlays){
        map.removeLayer(overlays[i]);
    }
    map.addLayer(overlays[mode]);
    switch(mode){
        case 'Just Maps':
            try{
                map.previousYear = layerSwitcher._findActiveBaseLayer().name;
            } catch(e){
                map.previousYear = map.previousYear;
            }
            if(map.previousYear){
                map.addLayer(baselayers[map.previousYear]);
                console.log(map.previousYear);
            }
            if($('#yearDiv').hasClass('disabled')){
                $('#yearDiv').removeClass('disabled');
            }
            break;
        case 'Landmarks':
            try{
                map.previousYear = layerSwitcher._findActiveBaseLayer().name;
            } catch(e){
                map.previousYear = map.previousYear;
            }
            console.log(map.previousYear);
            if(map.previousYear){
                map.addLayer(baselayers[map.previousYear]);
                console.log(map.previousYear);
            }
            if($('#yearDiv').hasClass('disabled')){
                $('#yearDiv').removeClass('disabled');
            }
            break;
        case 'Streets':
            try{
                map.previousYear = layerSwitcher._findActiveBaseLayer().name;
            } catch(e){
                map.previousYear = map.previousYear;
            }
            console.log(map.previousYear);
            for( let i in baselayers){
                map.removeLayer(baselayers[i]);
            }
            map.addLayer(nashville2016Tile1444_578);
            if(!$('#yearDiv').hasClass('disabled')){
                $('#yearDiv').addClass('disabled');
            }
            break;
        case '2016 Overlay':
            if(map.previousYear){
                map.addLayer(baselayers[map.previousYear]);
                console.log(map.previousYear);
            }
            map.addLayer(nashville2016Tile1444_578);
            if($('#yearDiv').hasClass('disabled')){
                $('#yearDiv').removeClass('disabled');
            }
            break;
    }
}

function selectYear(elem){
    const year = elem.innerText;
    for( let i in baselayers){
        map.removeLayer(baselayers[i]);
    }
    map.addLayer(baselayers[year]);
}

function zoomInMap(){
    // map.zoomIn(zoomStep);
    $zoomText = parseFloat($('#zoomText').html());
    // debugger;
    switch($zoomText){
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

function zoomOutMap(){
    // map.zoomOut(zoomStep);
    $zoomText = parseFloat($('#zoomText').html());
    switch($zoomText){
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

map.on('zoomend',updateZoomText);
function updateZoomText(){
    if(map.getZoom() == centZoom){
        $('#zoomText').html('1x')
    }
    else if (map.getZoom() < centZoom) {
        $('#zoomText').html('0.5x')
    } else if (map.getZoom() <= centZoom + zoomStep){
        $('#zoomText').html('2x')
    } else{
        $('#zoomText').html('4x')
    }
    console.log('zoom change to'+map.getZoom());
}
updateZoomText();