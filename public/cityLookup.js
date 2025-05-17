function shanghaiLoad(){
    const shanghaiData = document.getElementById('shanghaiAir');
    // const sourceSelect = document.getElementById('sourceInspire');
    fetch('https://api.waqi.info/feed/shanghai/?token=3a6d5642997301fc8d98f111be8d8471a6dc49b2')
    .then((result) => result.json())
    .then((resultJson)=>{
    
        console.log(resultJson);
         


        console.log(resultJson.data.aqi);

        shanghaiData.insertAdjacentText('beforeend', JSON.stringify(resultJson.data.aqi))
     
        // quoteSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].q));
        // sourceSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].a));

       
    });
}
function saoPauloLoad(){
    const saoPauloData = document.getElementById('saopauloAir');
    // const sourceSelect = document.getElementById('sourceInspire');
    fetch('https://api.waqi.info/feed/sao-paulo/?token=3a6d5642997301fc8d98f111be8d8471a6dc49b2')
    .then((result) => result.json())
    .then((resultJson)=>{
    
        console.log(resultJson);
         


        console.log(resultJson.data.aqi);

        saoPauloData.insertAdjacentText('beforeend', JSON.stringify(resultJson.data.aqi))
     
        // quoteSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].q));
        // sourceSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].a));

       
    });
}

function monterreyLoad(){
    const monterreyData = document.getElementById('monterreyAir');
    // const sourceSelect = document.getElementById('sourceInspire');
    fetch('https://api.waqi.info/feed/monterrey/?token=3a6d5642997301fc8d98f111be8d8471a6dc49b2')
    .then((result) => result.json())
    .then((resultJson)=>{
    
        console.log(resultJson);
         


        console.log(resultJson.data.aqi);

        monterreyData.insertAdjacentText('beforeend', JSON.stringify(resultJson.data.aqi))
     
        // quoteSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].q));
        // sourceSelect.insertAdjacentText('beforeend', JSON.stringify(resultJson[0].a));

       
    });
}
async function createCity(){
     await fetch('http://127.0.0.1:3000/geoData/', {
        method: 'POST', 
        body: JSON.stringify({
             firstName:`${document.getElementById('cityLocation').value}`,
             lastName: `${document.getElementById('nation').value}`,
       })
    }).then((result) => result.json());
}
     


async function loadCityData(){
    await fetch(`http://127.0.0.1:3000/geoData/`)
    .then((result) => (result.json()))
    .then((resultJson)=>{
        const table = document.createElement('table');
        table.setAttribute('id', 'cityInfo');

        const rowTable = document.createElement('tr');

        const tableHeadingCity = document.createElement('th');
        tableHeadingCity.innerHTML = 'City';
        rowTable.appendChild(tableHeadingCity);

        const tableHeadingCountry = document.createElement('th');
        tableHeadingCountry.innerHTML = 'Country';
        rowTable.appendChild(tableHeadingCountry);

        table.appendChild(rowTable);
        resultJson.forEach((cityList) =>{
            const cityTableRow = document.createElement('tr');
            const cityTableLocation = document.createElement('td');
            const cityTableNation = document.createElement('td');

            cityTableLocation.innerHTML = cityList.City;
            cityTableNation.innerHTML = cityList.Country;

            cityTableRow.appendChild(cityTableLocation);
            cityTableRow.appendChild(cityTableNation);

            table.appendChild(cityTableRow);


        })
        document.body.appendChild(table)


    });
}
window.addEventListener('load',shanghaiLoad);
window.addEventListener('load',saoPauloLoad);
window.addEventListener('load',monterreyLoad);
window.addEventListener('load',loadCityData);