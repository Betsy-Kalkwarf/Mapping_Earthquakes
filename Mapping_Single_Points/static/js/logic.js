// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level (4 on scale 0-18)
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

L.circle([34.0522, -118.2437], {
    radius: 3000,
    color: "black",
    fillOpacity: 0.25,
    fillColor: "yellow"
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);