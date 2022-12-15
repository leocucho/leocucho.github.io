let geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#000",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

let geojson_estilo = {
  radius: 8,
  color: "#198754",
  fillColor: "#198754",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

let map = L.map('map').setView([-7.469349226618606, -75.9108656520952],6)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){      
      let victimas = JSON.parse(xhr.responseText)
        var datalayer = L.geoJson(victimas, {
            pointToLayer: function (feature, latlng) {                             
              if(feature.properties.tipo_denuncia == 'Fauna Silvestre') {                
                return L.circleMarker(latlng, geojsonMarkerOptions)
                .bindPopup(`${feature.properties.departamento}`)              
                .openPopup()
              }
              else {
                return L.circleMarker(latlng, geojson_estilo)
                .bindPopup(`${feature.properties.departamento}`)              
                .openPopup()
              }
            },
            onEachFeature: function (feature, layer) {
              console.log(feature)
              console.log(layer)
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

let carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});



minimap = new L.Control.MiniMap(carto_light,
  {
      toggleDisplay: true,
      minimized: false,
      position: "bottomleft"
  }).addTo(map);

new L.Control.scale({imperial: false}).addTo(map);
