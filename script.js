//initialize Google Maps
function initMap() {
  var location = {lat:  43.641655, lng: -79.389332};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
