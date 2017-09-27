// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

$.ajax({
  method: 'GET',
  url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
  dataType: 'json',
  success: onSuccess,
  error: onError,
})
});

function onSuccess(data){
  console.log("request successful!");
  getData(data);
  displayMap(data);
}

function onError(){
  console.log("OOPS!! dis no workie");
}

function getData(data){
  console.log("function start");
  var count = data.metadata.count;
  for(var i=0; i<count; i++){
    var mag = data.features[i].properties.mag;
    var place = data.features[i].properties.place;
    var test = "<p>M "+mag+" - "+place+"</p>"
    $("div#info").append(test);
  }
}

function displayMap(data){
  var myLatLng = {lat: 30.2682, lng: -97.74295};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng

  });

  var markerCount = data.metadata.count;

  console.log(markerCount);

  for (var j=0; j<markerCount;j++){
    var longNum = parseFloat(data.features[j].geometry.coordinates[0]);
    var latNum = parseFloat(data.features[j].geometry.coordinates[1]);
    var marker = new google.maps.Marker({
      position: {lat: latNum, lng: longNum},
      map: map,
      title: 'Hello World!'
    });
  }
}


  // var mag = data.features[0].properties.mag;
  // var place = data.features[i].properties.place;
  // console.log(mag);
  // console.log(place);

  // var magArray = [];
  // var placeArray = [];
  // var count = parseInt(data.metadata.count);
  // console.log(count);
  // for(var i=0; i<count; i++){
  //   var mag = data.features[i].properties.mag;
  //   var place = data.features[i].properties.place;
  //   magArray.push(mag);
  //   placeArray.push(place);

  // generateHtml();

