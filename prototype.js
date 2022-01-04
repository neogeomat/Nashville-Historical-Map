const centZoom = 6, zoomStep = 1, tileSize_578 = 700;
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
    maxBounds: imageBounds,
    maxBoundsViscosity:0.5
});
map.attributionControl.setPrefix('Historical Atlas of Nashville by William Gregg(wrgregg@gmail.com). &copy; 2020')
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
    return this._url+'/2016-'+(1444 -(38 - coords.x -1) + (coords.y )*38)+'.png'
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
// map.addLayer(  );

// add the OpenStreetMap tiles
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});
// osm.addTo(map);

let baselayers = {
    "1952":nashville1952Tile1444_578,
    "1864":nashville1864Tile1444_578,
    "1871":nashville1871Tile1444_578,
    "1903":nashville1903Tile1444_578,
    "1929":nashville1929Tile1444_578,
    // "1952":nashville1952Tile1444,

    // "2016png":nashville2016png
    // "osm":osm
};

let overlays = {
    "Just Maps": L.layerGroup(),
    // "Landmarks":L.layerGroup(),
    // "Streets":L.layerGroup(),
    "2016 Overlay":nashville2016Tile1444_578,
};
for( i in baselayers){$('#year').append('<option>'+i)}
for( i in overlays){$('#mode').append('<option>'+i)}


nashville1952Tile1444_578.addTo(map);
$('#year').children()[4].selected = true;
let layerSwitcher = L.control.layers(baselayers, overlays).addTo(map);
layerSwitcher.getContainer().style.display='none';

// L.control.coordinates({
// 	position:"bottomleft", //optional default "bootomright"
// 	decimals:2, //optional default 4
// 	decimalSeperator:".", //optional default "."
// 	labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
// 	labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
// 	enableUserInput:true, //optional default true
// 	useDMS:false, //optional default false
// 	useLatLngOrder: true, //ordering of labels, default false-> lng-lat
// 	markerType: L.marker, //optional default L.marker
// 	markerProps: {}, //optional default {},
// 	labelFormatterLng : function(lng){return lng+" lng"}, //optional default none,
// 	labelFormatterLat : function(lat){return lat+" lat"}, //optional default none
// 	customLabelFcn: function(latLonObj, opts) { "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng)} //optional default none
// }).addTo(map);

function selectMode(elem){
    const mode = elem.innerText;
    for(let i in overlays){
        map.removeLayer(overlays[i]);
    }
    map.addLayer(overlays[mode]);
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