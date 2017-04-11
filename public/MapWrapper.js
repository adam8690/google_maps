var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

var infowindow = new google.maps.InfoWindow({
    content: 'BrewDog HQ'
  });

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords, 
      map: this.googleMap,
    })
    marker.addListener('click', function() {
    infowindow.open(this.map, marker);
  });

  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log(event);
      var lat = event.latLng.lat()
      var lng = event.latLng.lng()
      var newCoords = {lat:lat, lng:lng}
      this.addMarker(newCoords);
    }.bind(this))
  },
}