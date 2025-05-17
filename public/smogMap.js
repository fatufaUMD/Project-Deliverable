
var map = L.map('map').setView([38.505, -75], 4);
 var  WAQI_URL  =  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=3a6d5642997301fc8d98f111be8d8471a6dc49b2";  
      var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
      var  waqiLayer  =  L.tileLayer(WAQI_URL,  {  attribution:  WAQI_ATTR  });  
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 225,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.addLayer(waqiLayer);  



// function getRandomInRange(from, to, fixed) {
//     return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
//     // .toFixed() returns string, so ' * 1' is a trick to convert to number
//     }
// var marker1 = L.marker([lat1 = getRandomInRange(30, 35, 3), long1 = getRandomInRange(-90, -100, 3)]).addTo(map);
// var marker2 = L.marker([lat2 = getRandomInRange(30, 35, 3), long2 = getRandomInRange(-90, -100, 3)]).addTo(map);
// var marker3 = L.marker([lat3 = getRandomInRange(30, 35, 3), long3 = getRandomInRange(-90, -100, 3)]).addTo(map);

// document.getElementById("marker1text").innerHTML = "Marker 1: Latitude "+ lat1 +", Longitude:"+ long1;
// document.getElementById("marker2text").innerHTML = "Marker 2: Latitude "+ lat2 +", Longitude:"+ long2;
// document.getElementById("marker3text").innerHTML = "Marker 3: Latitude "+ lat3 +", Longitude:"+ long3;

// async function localityMapper(){
//     const localData = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en").then(
//         (result) => 
//          result.json()
//     );
//     console.log('Retrieved Data:', localData);
//     return localData;
// }
// async function localityList(){

//     const localData = await localityMapper();
//     localData.latitude = lat1;
//     localData.longitude = long1;
//     localData.localityLanguageRequested = "en";
 
//      localData.localityInfo = {lat1, long1};
    
// }
//  localityList();

