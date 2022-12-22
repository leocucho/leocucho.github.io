let lima = L.map('map').setView([-7.469349226618606, -75.9108656520952],6)    
    amazonas = L.marker([-5.446303278028154, -78.220041535829]).bindPopup('This is Aurora, CO.'),
    ancash = L.marker([-9.459657949063244, -77.75340069362532]).bindPopup('This is Golden, CO.');
    apurimac = L.marker([-13.980159148878904, -73.08205649455567]).bindPopup('This is Golden, CO.');
    arequipa = L.marker([-16.40866026041078, -71.54072887260499]).bindPopup('This is Golden, CO.');
    ayacucho = L.marker([-7.16199715443436, -78.5122712216146]).bindPopup('This is Golden, CO.');

let cities = L.layerGroup([lima, amazonas, apurimac, arequipa, ayacucho]);

let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

let streets = L.tileLayer(mapboxUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

let map = L.map('map', {
    center: [-5.446303278028154, -78.220041535829],
    zoom: 10,
    layers: [osm, cities]
});

let baseMaps = {
  "OpenStreetMap": osm,
  "Mapbox Streets": streets
};

let overlayMaps = {
  "Cities": cities
};

let layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


let crownHill = L.marker([-5.446303278028154, -78.220041535829]).bindPopup('This is Crown Hill Park.'),
    rubyHill = L.marker([-5.446303278028154, -78.220041535829]).bindPopup('This is Ruby Hill Park.');
    
let parks = L.layerGroup([crownHill, rubyHill]);
let satellite = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

layerControl.addBaseLayer(satellite, "Satellite");
layerControl.addOverlay(parks, "Parks");

