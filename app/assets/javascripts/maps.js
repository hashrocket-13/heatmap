
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(40.744, -73.968),
    zoom: 13,
    panControl: true,
    zoomControl: true,
    scaleControl: true
  };
  
  var map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
