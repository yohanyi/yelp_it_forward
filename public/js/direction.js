
var calculateRoute = function(from, to){
  var directionsService = new google.maps.DirectionsService();
  var directionsRequest = {
    origin: from,
    destination: to,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  };

  directionsService.route(
    directionsRequest,
    function(response, status){
      if (status == google.maps.DirectionsStatus.OK)
      {
        new google.maps.DirectionsRenderer({
          map: map,
          directions: response
        });
      }
      else
        $("#error").append("Unable to retrieve your route<br />");
    }
  );
};

var FindLoc = function(event) {
  event.preventDefault();
  var addressId = this.id.substring(0, this.id.indexOf("-"));

  navigator.geolocation.getCurrentPosition(function(position) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
      "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    },
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
        $("#" + addressId).val(results[0].formatted_address);
      else
        $("#error").append("Unable to retrieve your address<br />");
    });
  },
  function(positionError){
    $("#error").append("Error: " + positionError.message + "<br />");
  },
  {
    enableHighAccuracy: true,
    timeout: 10 * 1000 // 10 seconds
  });
};


var CalcRoute = function(){
  calculateRoute($("#from").val(), $("#to").val());
}

function initEvents = function(){
  $("#calculate-route").on("click", CalcRoute);
  $("#from-link, #to-link").on("click", FindLoc) {
}

google.maps.event.addDomListener(window, 'load', initialize)  
initEvents();
      
