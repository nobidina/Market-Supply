function initMap() {
  var coords = {lat: 34.865966, lng: -111.763806};

  var map = new google.maps.Map(document.querySelector('.map'), {
    center: coords,
    zoom: 7,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 11,
      fillColor: '#81B3D3',
      fillOpacity: 1,
      strokeColor: 'white',
      strokeWeight: 4
    },
    title: 'Sedona'
  });

  window.addEventListener('resize', function() {
    map.setCenter(coords);
  });
}
