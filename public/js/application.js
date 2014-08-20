////////////GEOLOCATION////////////////
navigator.geolocation.getCurrentPosition( function(position) {
  initialize(position.coords.latitude,position.coords.longitude)
});

////////////GOOGLE MAPS////////////////
function initialize(lat,long){
  var userLocation = new google.maps.LatLng(lat, long);
  var findBtn = $("#find-me")[0];
  var zoomBtn = $("#zoom-in")[0];

  var mapOptions = {
    center: userLocation,
    zoom: 12,

  };
  map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

  google.maps.event.addDomListener(findBtn, 'click', function() {
    placeMarker(userLocation,map)
    })

  google.maps.event.addDomListener(zoomBtn, 'click', function() {
      map.setZoom(18);
    });
};
/////// end of initialize


/// PLACE MARKER
function placeMarker(location,map,markers) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "Your Current Position"
  });
};


