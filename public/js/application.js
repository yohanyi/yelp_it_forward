////////////GEOLOCATION////////////////
navigator.geolocation.getCurrentPosition( function(position) {
  initialize(position.coords.latitude,position.coords.longitude)
});
var address = [];
var geocoder;
var map;
var result = [];

////////////GOOGLE MAPS////////////////
function initialize(lat,long){
  var userLocation = new google.maps.LatLng(lat, long);
  // var findBtn = $("#find-me")[0];
  // var zoomBtn = $("#zoom-in")[0];

  var mapOptions = {
    center: userLocation,
    zoom: 12,
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  geocoder = new google.maps.Geocoder

};
/////// end of initialize
var infowindow = new google.maps.InfoWindow({
      maxWidth: 160
    });

/// PLACE MARKER
// function codeAddress(adrs) {
//   geocoder.geocode( { 'address': adrs}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       map.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//       });
//     } else {
//       alert("Geocode was not successful for the following reason: " + status);
//     }
//   });
// }




