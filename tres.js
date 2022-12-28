function initMap() {
  var map = L.map('map').setView([-7.469349226618606, -75.9108656520952], 6);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  }).addTo(map)

  L.Control.boxzoom({
      position:'topleft',
  }).addTo(map);
}