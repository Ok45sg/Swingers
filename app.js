// Create the map centred on Singapore
const map = L.map('map').setView([1.3521, 103.8198], 11);

// OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example marker
const marker = L.marker([1.3521, 103.8198]).addTo(map);

marker.bindPopup("<b>First Swing Location</b><br>Singapore").openPopup();
