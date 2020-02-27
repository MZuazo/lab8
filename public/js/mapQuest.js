function initMap() {
	// add your code here
	L.mapquest.key = '16Di4AtTUKURrtW7muNCIpbv5zEpxGAF';

// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.879074, -117.235944],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12
	});

	L.marker([32.88, -117.236]).addTo(map);
}