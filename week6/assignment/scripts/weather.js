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


import getDaylight from './getDaylight.js'
import * as convertTemp from './convertTemp.js'
import cTimeAmPm from './getDaylight.js'

var geoCode, weatherData, cityName, url, lat, lon, cityTemp, humidity, conditions, sunrise, sunset, sunriseTime, sunsetTime
var background = document.querySelector('.weatherWrapper')
let cDate = new Date();
let cDay = cDate.getDate();
let cMonth = cDate.getMonth()+1;
let cYear = cDate.getFullYear();
let cHours = cDate.getHours();
let cHoursStandard = ((cHours+11) % 12 + 1)
let cMin = cDate.getMinutes();
let cTime = `${cHoursStandard}:${cMin}`;
let currentDate = `${cMonth}/${cDay}/${cYear}`
let currentDateTime = `${currentDate}, ${cTime}` + ' ' + cTimeAmPm()

async function searchCity(){
    cityName = document.querySelector('#city').value.toLowerCase()
    try{
    url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=77b7879a0d17c8e649568640e60f40ab`
    geoCode = await apiRequest(url)
        lat = geoCode[0].lat
        lon = geoCode[0].lon
    weatherData = await apiRequest(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=77b7879a0d17c8e649568640e60f40ab`)
    cityTemp = document.querySelector('#tempData')
    cityTemp.textContent = `${convertTemp.convertTemp(weatherData.main.temp)} F`
    humidity = document.querySelector('#humidData')
    humidity.textContent = `${weatherData.main.humidity}%`
    conditions = document.querySelector('#conditionsData')
    conditions.textContent = `Gusts up to: ${weatherData.wind.gust} knots`
    sunrise = weatherData.sys.sunrise
    sunset = weatherData.sys.sunset
        sunriseTime = new Date(sunrise*1000).toLocaleString();
        sunsetTime = new Date(sunset*1000).toLocaleString();
        
        getDaylight(sunriseTime, currentDateTime)

    }
    catch(error){
        console.log(error)
    }
}

//Axios Request
async function apiRequest(url) {
    return new Promise( (resolve, reject) => {
        axios.get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}


let goBtn = document.getElementById('goBttn')
goBtn.addEventListener('click', searchCity)

