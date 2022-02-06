// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city


// import getDaylight from './getDaylight.js'
// import converTemp from '/convertTemp.js'

const weather = () => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=86156c9a86ff37f9af32d6f59b53d6bb')
    .then(res => console.log(res.data.list))
    .catch(error => console.log(error))
}

weather()
// const cors = require('cors');
// const express = require('express');
// const app = express();
// app.use(cors());
// app.options('*', cors());

console.log("Hello Universe")