const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

var partsList = document.getElementById("detailsList");

for (var i = 0; i < parts.length; i++){
    var orderDetails = parts[i];


    var list = document.createElement('li');
    list.textContent = `${orderDetails.partDescr}, PN: ${orderDetails.partNbr}`;

    var qty = document.createElement('p');
    qty.textContent = "Qty: " + orderDetails.qty;

    partsList.appendChild(list);
    partsList.appendChild(qty);



    var packaging = document.getElementById("specialPackaging");


    var specialPackaging = document.createElement("li");
    var partAisle = parts[i].aisle;
    var partDescription = parts[i].partDescr;

    if (partAisle === 'B3'){
        specialPackaging.textContent = partDescription;
        packaging.appendChild(specialPackaging);
    }

    var hazardous = document.getElementById("hazardousMaterials");

    var hazardousParts = document.createElement("li");
    var getGloves = document.createElement("p");

    if (partAisle === 'J4'){
        hazardousParts.textContent = partDescription;
        hazardous.appendChild(hazardousParts);
        }


    var small = document.getElementById("smallItemsOnly");

    var smallParts = document.createElement("li")
    var basket = document.createElement("p");

    if (partAisle === "H1"){
        smallParts.textContent = partDescription;
        small.appendChild(smallParts);
    }
    var forkLift = document.getElementById('forkiftNeeded');

    var largePart = document.createElement("li");
    var forkLiftNeeded = document.createElement("p");

    if (partAisle === "S" || partAisle === "T" || partAisle === "U"){
        largePart.textContent = partDescription;
        forkLift.appendChild(largePart);
    }
}

    const totalParts = parts.reduce(function(currentTotal, part) {
        return part.qty + currentTotal
    }, 0)

    document.querySelector("#totalItems").textContent = "Total Items: " + totalParts;

    getGloves.textContent = "Reminder: Use Gloves"
    hazardous.appendChild(getGloves);


    basket.textContent = "Grab a basket and go directly to aisle H1 for parts";
    small.appendChild(basket);

    forkLiftNeeded.textContent = "Reserve a forklift to grab parts";
    forkLift.appendChild(forkLiftNeeded);
    

// list of each part number and qty for check-off in the "detailsList" element

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

// sum up the total number of parts and append that number to the text already in "totalItems" element
