// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
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
var background = document.querySelector('.weatherWrapper')

function cTimeAmPm(){
    if (cHours >= 12 && cHours <= 23){
        return 'PM'
    } else{
        return 'AM'
    }
}

export default function getDaylight(a, b){
        if(a >= b){
            return background.style.backgroundColor = "blue"
        } else{
            return background.style.backgroundColor = "black"
        }
        return currentDateTime
    }    


