// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthSelect = document.getElementById("monthDrop");
// let monthIndex = monthArray.map((monthSelect, index)=> `<option value = ${index + 1}> ${monthSelect}</option>`);
let monthIndex = document.querySelector('#monthDrop').index;

        for (var i = 0; i < monthArray.length; i++){
            var monthTitle = monthArray[i];

            var monthOption = document.createElement("option");
            monthOption.innerHTML = monthTitle;
            monthOption.value = monthTitle;

            monthSelect.appendChild(monthOption);
        }


    function printCalendar() {
                


        document.getElementById('calendarDays').innerHTML = ''


        const today = new Date(`${monthIndex}/1/2022`)  
        console.log(today, monthIndex);         
        const month = document.querySelector('#monthDrop').value
        console.log(month);
        let days
        switch (month) {
            case 1:
                days = 28
                break
            case 3:
            case 5:
            case 8: 
            case 10:
                days = 30
                break
            default:
                days = 31
        }
            
        let x
        const weekday = today.getDay()
        for (x = 0; x < weekday; x++){
            document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
        }

        let dt = 0
        do {
            dt++
            document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
        } while ( dt < days)

        const monthName = today.toLocaleDateString('default', {month:'long'})
        const year = today.getFullYear()
        document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

        const remainder = (7 - ((x + dt) % 7))
        let y = 0
        while ( y < remainder) {
            document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
            y++
        }




        

    }

printCalendar();