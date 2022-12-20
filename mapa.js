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
                .bindPopup(`
                <div class="row">
          <div class="col-12 col-md-8">
          <div class="">
          <span><strong>DENUNCIA REGISTRADA</strong></span>
        </div>
          </div>
          <div class="col-12 col-md-12">
            <div class="resumen">
            <label>Departamento: <span>${feature.properties.departamento}</span></label><br>
            <label>Provincia: <span>${feature.properties.provincia}</span></label><br>
            <label>Distrito: <span>${feature.properties.distrito}</span></label><br>
            <label>Ubicación: <span>${feature.properties.referencia}</span></label>          
            <label>Tipo de denuncia: <span>${feature.properties.tipo_denuncia}</span></label>
            <label>Descripcion: <span>${feature.properties.descripcion_suceso}</span></label>
            <div>
          <div class="text-center">
            <input type="button" value="Cambiar" onclick="document.getElementById('resultado').innerHTML='<div><h3>Detalle de la denuncia:</h3><label>Fecha:<span>${feature.properties.fecha}</span></label><br><label>Tipo de denuncia:<span>${feature.properties.tipo_denuncia}</span></label><br><label>Descripción:<span>${feature.properties.descripcion_suceso}</span></label><br><label>imagen:<span>${feature.properties.foto_denuncia}</span></label></div><div><h4>Referencias</h4></div><div><label>Departamento:<span>${feature.properties.departamento}</span></label><br><label>Provincia:<span>${feature.properties.provincia}</span></label><br><label>Distrito:<span>${feature.properties.distrito}</span></label><br><label>Referencia:<span>${feature.properties.referencia}</span></label><br><label>Coordenadas:<span>${feature.properties.coordenadas}</span></label></div>'">
          </div>
        </div>
            </div>            
          </div>          
        </div>
                `)              
                .openPopup()
              }
              else {
                return L.circleMarker(latlng, geojson_estilo)
                .bindPopup(`<div class="row">
                <div class="col-12 col-md-8">
                <div class="">
                <span><strong>DENUNCIA REGISTRADA</strong></span>
              </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="resumen">
                  <label>Departamento: <span>${feature.properties.departamento}</span></label><br>
                  <label>Provincia: <span>${feature.properties.provincia}</span></label><br>
                  <label>Distrito: <span>${feature.properties.distrito}</span></label><br>
                  <label>Ubicación: <span>${feature.properties.referencia}</span></label>          
                  <label>Tipo de denuncia: <span>${feature.properties.tipo_denuncia}</span></label>
                  <label>Descripcion: <span>${feature.properties.descripcion_suceso}</span></label>
                  <div>
                  <div class="text-center">
                  <input type="button" value="Cambiar" onclick="document.getElementById('resultado').innerHTML='<div><h3>Detalle de la denuncia:</h3><label>Fecha:<span>${feature.properties.fecha}</span></label><br><label>Tipo de denuncia:<span>${feature.properties.tipo_denuncia}</span></label><br><label>Descripción:<span>${feature.properties.descripcion_suceso}</span></label><br><label>imagen:<span>${feature.properties.foto_denuncia}</span></label></div><div><h4>Referencias</h4></div><div><label>Departamento:<span>${feature.properties.departamento}</span></label><br><label>Provincia:<span>${feature.properties.provincia}</span></label><br><label>Distrito:<span>${feature.properties.distrito}</span></label><br><label>Referencia:<span>${feature.properties.referencia}</span></label><br><label>Coordenadas:<span>${feature.properties.coordenadas}</span></label></div>'">
                  </div>
                </div>
                  </div>            
                </div>          
              </div>`)              
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

document.getElementById('select-reporte').addEventListener('change', function(e){
  let reporte = e.target.value.split(",");
  map.flyTo(reporte,13);
  
})



let carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});



minimap = new L.Control.MiniMap(carto_light,
  {
      toggleDisplay: true,
      minimized: false,
      position: "bottomleft"
  }).addTo(map);

new L.Control.scale({imperial: false}).addTo(map);