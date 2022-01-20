// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'


var type, id

function getFromSWAPI(queryType, itemID) {
    type = queryType
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function fetchData(){
    var queryType = document.getElementById("queryType").value;
    // var queryNames = ["people", "planets", "starships"];
    // var queryIndex = queryNames.indexOf(queryType) + 1;
    // console.log(queryIndex);

    var itemID = document.getElementById("itemID").value;
    console.log(itemID);
    getFromSWAPI(queryType, itemID);
}

function updateInfo(data){
    console.log(data)
    if(type === "people")
{    document.getElementById("dataLabel1").innerText = "Person Name: "
    document.getElementById("dataValue1").innerText = data.name
    document.getElementById("dataLabel2").innerText = "Hair Color: "
    document.getElementById("dataValue2").innerText = data.hair_color
}
    else if(type === "planets")
{    document.getElementById("dataLabel1").innerText = "Planet Name: "
    document.getElementById("dataValue1").innerText = data.name
    document.getElementById("dataLabel2").innerText = "Population: "
    document.getElementById("dataValue2").innerText = data.population
}
    else if(type === "starships")
{    document.getElementById("dataLabel1").innerText = "Starship: "
    document.getElementById("dataValue1").innerText = data.name
    document.getElementById("dataLabel2").innerText = "cargo capacity: "
    document.getElementById("dataValue2").innerText = data.cargo_capacity
}

}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.