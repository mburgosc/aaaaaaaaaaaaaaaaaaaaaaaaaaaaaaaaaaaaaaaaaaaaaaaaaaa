// Initialize and add the map
function initMap() {
    // The location of Uluru
    const center = { lat: 39.5720815, lng:2.6501342}
    const uluru1 = { lat: 39.57299841216613, lng: 2.652032757067533 };
    const uluru2 = { lat: 39.57292752707834, lng: 2.6477880036025336 };
    const uluru3 = { lat: 39.57139156776398, lng: 2.648384087333103 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: center,
    });
    // The marker, positioned at Uluru
    const marker1 = new google.maps.Marker({
      position: uluru1,
      map: map,
    });
    const marker2 = new google.maps.Marker({
      position: uluru2,
      map: map,
    });
    const marker3 = new google.maps.Marker({
      position: uluru3,
      map: map,
    });
  }
  