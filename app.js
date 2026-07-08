// Create the map centred on Singapore
const map = L.map('map').setView([1.3521, 103.8198], 11);

// OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Read swing locations from swings.json
fetch('swings.json')
    .then(response => response.json())
    .then(swings => {

        swings.forEach(swing => {

            L.marker([swing.lat, swing.lng])
                .addTo(map)
                .bindPopup(`<b>${swing.name}</b>`);

        });

    });