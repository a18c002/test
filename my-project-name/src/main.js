import Vue from 'vue'
import App from './App.vue'
import L from 'leaflet'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// console.dir(L);