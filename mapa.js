let geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#000",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

let map = L.map('map').setView([4.639386,-74.082412],6)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
      console.log(xhr.responseText)
      let victimas = JSON.parse(xhr.responseText)
        var datalayer = L.geoJson(victimas, {
            pointToLayer: function (feature, latlng) {
              console.log(feature)
              console.log(latlng)
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        }).addTo(map);
    }
};
xhr.open('GET', 'coordenadas.json');
xhr.send();



document.getElementById('select-location').addEventListener('change', function(e){
  let cordenada = e.target.value.split(",");
  map.flyTo(cordenada,13);
  
})