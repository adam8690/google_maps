var initialise = function(){
  center = {lat:57.370258, lng:-2.052019}
  var container = document.querySelector('#main-map');
  mainMap = new MapWrapper(container, center, 15);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  var button = document.querySelector('.btn');
  button.addEventListener('click', recenter); 
}

var recenter = function(){
  newCenter = {lat:getRandomInRange(0, 90, 3), lng:getRandomInRange(0, 180, 3)}
  mainMap.googleMap.setCenter(newCenter);
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' to convert to number
}

window.onload = initialise;




