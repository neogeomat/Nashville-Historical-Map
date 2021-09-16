const centZoom = 15;
let map = L.map("map",{
    minZoom: centZoom - 1,
    maxZoom: centZoom + 1,
    
}).setView([36.1665, -86.79199], centZoom-1);

// add svg layers
let imageBounds = [
        [35.96967, -87.05589],
        [36.41016, -86.51555]
    ];

let nashville1864 = L.imageOverlay('data/1864.svg', imageBounds,{
    opacity:1,
    // interactive:true
})
.addTo(map);
// nashville1864.on('click',(e) => console.log(e));
let nashville1871 = L.imageOverlay('data/1871.svg', imageBounds,{
    opacity:1
});
let nashville1903 = L.imageOverlay('data/1903.svg', imageBounds,{
    opacity:1
});
let nashville1929 = L.imageOverlay('data/1929.svg', imageBounds,{
    opacity:1
});
let nashville1952 = L.imageOverlay('data/1952.svg', imageBounds,{
    opacity:1
});
let nashville2016 = L.imageOverlay('data/2016.svg', imageBounds,{
    opacity:1
});
// map.fitBounds([[36.15,-86.7985],[36.17885,-86.76469]]);
// add the OpenStreetMap tiles
let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
});
// osm.addTo(map);

let baselayers = {
    "1864":nashville1864,
    "1871":nashville1871,
    "1903":nashville1903,
    "1929":nashville1929,
    "1952":nashville1952,
    // "osm":osm
};

let overlays = {
    "Just Maps": L.layerGroup(),
    "Landmarks":L.layerGroup(),
    "Streets":L.layerGroup(),
    "2016 Overlay":nashville2016
};
for( i in baselayers){$('#year').append('<option>'+i)}
for( i in overlays){$('#mode').append('<option>'+i)}

let layerSwitcher = L.control.layers(baselayers, overlays).addTo(map);

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

// $('div#year').click(e=>console.log(e));


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
    map.zoomIn();
}

function zoomOutMap(){
    map.zoomOut();
}

map.on('zoomend',updateZoomText);
function updateZoomText(){
    if(map.getZoom() == centZoom){
        $('#zoomText').html('1x')
    }
    else if (map.getZoom() < centZoom) {
        $('#zoomText').html('0.5x')
    } else {
        $('#zoomText').html('2x')
    }
    console.log('zoom change')
}