let map;

function initMap() {
   map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.4483215, lng: 30.5192705 },
      zoom: 8,
   });
}

