// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.
let systemsData


async function getSystems() {
    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 

    let getSystems, sysNames, defaultDropDown, option

    try{
        getSystems = await apiRequest('http://127.0.0.1:8080/data.json')
        systemsData = getSystems.systems
        defaultDropDown = document.querySelector('#system')

        for(let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 0){
                sysNames = systemsData[i].sysName
                option = document.createElement('option')
                option.textContent = sysNames
                option.id = sysNames
                defaultDropDown.appendChild(option)
            }
        }
        populateDD()
        
    }
    catch(error){
        console.log(error)
    }
}  
    
async function apiRequest(url) {
    return new Promise( (resolve, reject) => {
        axios.get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
}


window.onload = getSystems()


function populateDD() {
    let defaultDropDown = document.querySelector('#system')
    let subSystemDiv, salesSub, option2, dropDownSelection, subSystemDropDown
    dropDownSelection = defaultDropDown.value
    subSystemDiv = document.querySelector('#subSystem')
    subSystemDropDown = document.getElementById('subSystem')

    while (subSystemDropDown.firstChild){
        subSystemDropDown.firstChild.remove()
    }

    if(dropDownSelection === "Sales"){
        for(let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 1){
                salesSub = systemsData[i].sysName
                option2 = document.createElement('option')
                option2.textContent = salesSub
                subSystemDiv.appendChild(option2)
            }
        }
    }  else if(dropDownSelection === "Operations"){
        for(let i = 0; i < systemsData.length; i++){
            if(systemsData[i].parentID === 2){
                salesSub = systemsData[i].sysName
                option2 = document.createElement('option')
                option2.textContent = salesSub
                subSystemDiv.appendChild(option2)
            }
        }

    }   else if(dropDownSelection === "Customer Support"){
            for(let i = 0; i < systemsData.length; i++){
                if(systemsData[i].parentID === 3){
                    salesSub = systemsData[i].sysName
                    option2 = document.createElement('option')
                    option2.textContent = salesSub
                    subSystemDiv.appendChild(option2)
            }
        }
    }


    // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    // the select element's options using the sysName and sysID from the passed in array (see week five).


}

let systemChange = document.getElementById('system')
systemChange.addEventListener('change', populateDD)
    // This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
    // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
    // appropriate sub-systems from the data.json file.
